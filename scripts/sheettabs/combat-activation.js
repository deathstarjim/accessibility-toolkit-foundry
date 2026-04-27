import {
    getActivityTargetCandidates,
    setSingleUserTarget,
    waitForTargetRegistration,
} from "./inventory-helpers.js";
import { getInventoryActionContext } from "./inventory-activation.js";
import {
    focusDialogControl,
    getApplicationIdentity,
    getVisibleApplicationElements,
    showAccessibleTargetPicker,
} from "./interaction-helpers.js";
import {
    getInventoryRowElement,
    getInventoryRowName,
    isLikelyInventoryMenuTrigger,
} from "./panel-navigation.js";
import { AE_SHEET_TABS_STATE } from "./state.js";

const AE_ITEM_ACTIVATION_SELECTOR = [
    ".item-name",
    ".item-image",
    ".item-action",
    ".rollable",
    "[data-action='use']",
    "[data-action='roll']",
].join(", ");

function isPrimaryInventoryActivationTarget(element)
{
    return element.matches(AE_ITEM_ACTIVATION_SELECTOR) || !!element.closest(AE_ITEM_ACTIVATION_SELECTOR);
}

export function createCombatActivationHandlers({
    debug,
    focusActivationResult,
    getApplicationElement,
    getTargetArmorClass,
    isRenderedElement,
    setActiveActorSheet,
})
{
    async function chooseAttackTarget(app, element)
    {
        const context = getInventoryActionContext(element, app);
        const itemName = context?.itemName ?? getInventoryRowName(getInventoryRowElement(element));
        const candidates = getActivityTargetCandidates(app);

        if (!candidates.length)
        {
            debug("attack target picker skipped: no candidates", {
                appId: app?.id,
                itemName,
            });
            return true;
        }

        const selectedToken = await showAccessibleTargetPicker({ app, itemName, candidates, debug });
        if (!selectedToken)
        {
            debug("attack target picker cancelled", {
                appId: app?.id,
                itemName,
            });
            return false;
        }

        setSingleUserTarget(selectedToken);
        await waitForTargetRegistration(selectedToken);
        AE_SHEET_TABS_STATE.pendingAttack = {
            app,
            activity: context?.attackActivity ?? null,
            targetToken: selectedToken,
            itemName,
        };
        debug("attack target selected", {
            appId: app?.id,
            itemName,
            targetId: selectedToken.id,
            targetName: selectedToken.name,
        });
        return true;
    }

    async function chooseConsumableTarget(app, element)
    {
        const context = getInventoryActionContext(element, app);
        const itemName = context?.itemName ?? getInventoryRowName(getInventoryRowElement(element));
        const candidates = getActivityTargetCandidates(app, { preferSelf: true });
        const usableActivity = context?.usableActivity ?? null;

        if (!candidates.length)
        {
            debug("consumable target picker skipped: no candidates", {
                appId: app?.id,
                itemName,
            });
            return true;
        }

        const selectedToken = await showAccessibleTargetPicker({ app, itemName, candidates, debug });
        if (!selectedToken)
        {
            debug("consumable target picker cancelled", {
                appId: app?.id,
                itemName,
            });
            return false;
        }

        setSingleUserTarget(selectedToken);
        await waitForTargetRegistration(selectedToken);
        stageConsumableTargetApplication({
            app,
            activity: usableActivity,
            targetToken: selectedToken,
            itemName,
        });
        debug("consumable target selected", {
            appId: app?.id,
            itemName,
            targetId: selectedToken.id,
            targetName: selectedToken.name,
            activityType: usableActivity?.type,
        });
        return true;
    }

    function triggerRollDialogFromActivity(activity, originatingApp = null, event = null)
    {
        let tries = 12;
        const previousWindowIds = new Set(getVisibleApplicationElements().map(getApplicationIdentity).filter(Boolean));

        const attemptRoll = () =>
        {
            if (typeof activity?.rollDamage === "function")
            {
                promoteConsumableTargetToRollApplication(activity);
                void activity.rollDamage({ event });
                debug("triggered heal roll dialog directly from usage dialog", {
                    activityType: activity.type,
                    itemName: activity.item?.name,
                });
                focusActivationResult(previousWindowIds, {
                    originatingApp,
                    debug,
                    getApplicationElement,
                });
                return;
            }

            if (--tries > 0) setTimeout(attemptRoll, 100);
        };

        setTimeout(attemptRoll, 50);
    }

    function triggerAttackActivityFlow(activity, app, event)
    {
        const previousWindowIds = new Set(getVisibleApplicationElements().map(getApplicationIdentity).filter(Boolean));

        if (typeof activity?.use === "function")
        {
            void activity.use({ event }, { options: { sheet: app } }).then(results =>
            {
                debug("triggered attack activity use flow", {
                    activityType: activity?.type,
                    itemName: activity?.item?.name,
                    messageId: results?.message?.id,
                });

                let tries = 8;
                const attemptAttackRoll = () =>
                {
                    const newWindow = getVisibleApplicationElements().find(element =>
                    {
                        const id = getApplicationIdentity(element);
                        return id && !previousWindowIds.has(id);
                    });

                    if (newWindow)
                    {
                        focusActivationResult(previousWindowIds, {
                            originatingApp: app,
                            debug,
                            getApplicationElement,
                            announceContext: {
                                type: "attack-roll",
                                itemName: activity?.item?.name ?? "",
                                targetName: AE_SHEET_TABS_STATE.pendingAttack?.targetToken?.name ?? "",
                            },
                        });
                        return;
                    }

                    const activeWindow = ui?.activeWindow;
                    const activeWindowId = activeWindow?.id;
                    const activeWindowRoot = activeWindow
                        ? getApplicationElement(activeWindow, activeWindow?.element)
                        : null;
                    const activeWindowVisible = activeWindowRoot instanceof HTMLElement
                        && document.contains(activeWindowRoot)
                        && isRenderedElement(activeWindowRoot);
                    const hasNewActiveWindow = activeWindow
                        && activeWindow !== app
                        && activeWindowId
                        && activeWindowVisible
                        && !previousWindowIds.has(activeWindowId);

                    if ((tries-- > 0) && hasNewActiveWindow)
                    {
                        focusActivationResult(previousWindowIds, {
                            originatingApp: app,
                            debug,
                            getApplicationElement,
                            announceContext: {
                                type: "attack-roll",
                                itemName: activity?.item?.name ?? "",
                                targetName: AE_SHEET_TABS_STATE.pendingAttack?.targetToken?.name ?? "",
                            },
                        });
                        return;
                    }

                    if (tries <= 0 && typeof activity?.rollAttack === "function")
                    {
                        const attackWindowIds = new Set(getVisibleApplicationElements().map(getApplicationIdentity).filter(Boolean));
                        void activity.rollAttack(
                            { event },
                            {},
                            { data: { "flags.dnd5e.originatingMessage": results?.message?.id } }
                        );
                        debug("triggered attack roll after activity use flow", {
                            activityType: activity?.type,
                            itemName: activity?.item?.name,
                            messageId: results?.message?.id,
                        });
                        focusActivationResult(attackWindowIds, {
                            originatingApp: app,
                            debug,
                            getApplicationElement,
                            announceContext: {
                                type: "attack-roll",
                                itemName: activity?.item?.name ?? "",
                                targetName: AE_SHEET_TABS_STATE.pendingAttack?.targetToken?.name ?? "",
                            },
                        });
                        return;
                    }

                    setTimeout(attemptAttackRoll, 75);
                };

                setTimeout(attemptAttackRoll, 75);
            });
            return true;
        }

        if (typeof activity?.rollAttack === "function")
        {
            void activity.rollAttack({ event });
            debug("triggered attack roll fallback flow", {
                activityType: activity?.type,
                itemName: activity?.item?.name,
            });
            focusActivationResult(previousWindowIds, {
                originatingApp: app,
                debug,
                getApplicationElement,
                announceContext: {
                    type: "attack-roll",
                    itemName: activity?.item?.name ?? "",
                    targetName: AE_SHEET_TABS_STATE.pendingAttack?.targetToken?.name ?? "",
                },
            });
            return true;
        }

        return false;
    }

    function stageConsumableTargetApplication({ app, activity, targetToken, itemName })
    {
        AE_SHEET_TABS_STATE.pendingConsumableApplication = {
            app,
            activity,
            targetToken,
            itemName,
        };
    }

    function activitiesReferToSameThing(left, right)
    {
        if (!left || !right) return false;
        if (left === right) return true;
        if (left.uuid && right.uuid && left.uuid === right.uuid) return true;

        return !!(
            left.id
            && right.id
            && left.id === right.id
            && left.type === right.type
            && left.item?.id === right.item?.id
        );
    }

    function setPendingRollApplication({ activity, targetToken, itemName })
    {
        AE_SHEET_TABS_STATE.pendingRollApplication = {
            activity,
            targetToken,
            itemName,
        };
    }

    function promoteConsumableTargetToRollApplication(activity)
    {
        const pendingConsumable = AE_SHEET_TABS_STATE.pendingConsumableApplication;
        const pendingActivity = pendingConsumable?.activity;
        const sameActivity = !pendingActivity || activitiesReferToSameThing(pendingActivity, activity);

        if (pendingConsumable?.targetToken && sameActivity)
        {
            setPendingRollApplication({
                activity,
                targetToken: pendingConsumable.targetToken,
                itemName: pendingConsumable.itemName ?? activity.item?.name ?? "",
            });
            debug("promoted consumable target to pending roll application", {
                itemName: pendingConsumable.itemName ?? activity.item?.name,
                targetName: pendingConsumable.targetToken.name,
                activityType: activity.type,
            });
            return true;
        }

        debug("failed to promote consumable target before healing roll", {
            pendingItemName: pendingConsumable?.itemName,
            pendingTargetName: pendingConsumable?.targetToken?.name,
            pendingActivityId: pendingActivity?.id,
            pendingActivityUuid: pendingActivity?.uuid,
            pendingActivityType: pendingActivity?.type,
            currentActivityId: activity?.id,
            currentActivityUuid: activity?.uuid,
            currentActivityType: activity?.type,
            currentItemId: activity?.item?.id,
        });
        return false;
    }

    function restoreLastAttackControlFocus()
    {
        let tries = 10;

        const resolveTarget = () =>
        {
            const control = AE_SHEET_TABS_STATE.lastAttackControl;
            if (control instanceof HTMLElement && document.contains(control)) return control;

            const descriptor = AE_SHEET_TABS_STATE.lastAttackControlDescriptor;
            const root = AE_SHEET_TABS_STATE.activeRoot;
            if (!(descriptor && root instanceof HTMLElement)) return null;

            const row = descriptor.itemId
                ? root.querySelector(`[data-item-id="${CSS.escape(descriptor.itemId)}"]`)
                : null;
            if (!(row instanceof HTMLElement)) return null;

            return row.querySelector(descriptor.selector ?? "")
                ?? row.querySelector(".item-name, .item-action, .rollable, button, a");
        };

        const attemptRestore = () =>
        {
            const root = AE_SHEET_TABS_STATE.activeRoot;
            const app = AE_SHEET_TABS_STATE.activeApp;
            const target = resolveTarget();
            if (!(target instanceof HTMLElement))
            {
                if (--tries > 0) setTimeout(attemptRestore, 75);
                return;
            }

            if (app && root instanceof HTMLElement) setActiveActorSheet(app, root);
            target.focus({ preventScroll: false });

            if (document.activeElement !== target && --tries > 0)
            {
                setTimeout(attemptRestore, 75);
                return;
            }

            debug("restored focus to last attack control", {
                tag: target.tagName,
                classes: target.className,
                text: target.textContent?.trim()?.slice(0, 80),
            });
        };

        requestAnimationFrame(() =>
        {
            requestAnimationFrame(attemptRestore);
        });
    }

    function getAttackControlDescriptor(element)
    {
        if (!(element instanceof HTMLElement)) return null;

        const row = getInventoryRowElement(element);
        const itemId = row?.dataset?.itemId ?? "";
        const selector = element.matches(".item-name, .item-action, .rollable")
            ? ".item-name.item-action.rollable, .item-name, .item-action, .rollable"
            : element.matches('[data-action="equip"]')
                ? '[data-action="equip"]'
                : element.matches('[data-context-menu]')
                    ? '[data-context-menu]'
                    : element.matches(".item-control")
                        ? ".item-control"
                        : element.matches("button, a")
                            ? element.tagName.toLowerCase()
                            : "";

        return itemId ? { itemId, selector } : null;
    }

    function openAttackResultDialog({ activity, targetToken, hit, rollTotal })
    {
        const targetName = targetToken?.name ?? "Target";
        const ac = getTargetArmorClass(targetToken);
        const dialog = document.createElement("dialog");
        dialog.className = "application ae-attack-result";
        dialog.setAttribute("aria-label", hit ? `Hit ${targetName}` : `Missed ${targetName}`);

        const summary = hit
            ? `Hit ${foundry.utils.escapeHTML(targetName)} with ${rollTotal} against AC ${Number.isFinite(ac) ? ac : "unknown"}.`
            : `Missed ${foundry.utils.escapeHTML(targetName)} with ${rollTotal} against AC ${Number.isFinite(ac) ? ac : "unknown"}.`;

        dialog.innerHTML = `
            <header class="window-header">
                <h1 class="window-title">${hit ? "Attack Hit" : "Attack Missed"}</h1>
                <button type="button" class="header-control icon fa-solid fa-xmark" data-action="close" aria-label="Close Window"></button>
            </header>
            <form class="window-content standard-form" method="dialog">
                <p>${summary}</p>
                <footer class="form-footer">
                    ${hit ? '<button type="button" class="default" data-action="roll-damage" autofocus>Roll Damage</button>' : ""}
                    <button type="button" data-action="close"${hit ? "" : " autofocus"}>${hit ? "Cancel" : "Close"}</button>
                </footer>
            </form>
        `;

        const close = () => dialog.close("close");

        for (const button of dialog.querySelectorAll('[data-action="close"]'))
        {
            button.addEventListener("click", close);
        }
        dialog.addEventListener("cancel", event =>
        {
            event.preventDefault();
            close();
        });

        if (hit)
        {
            dialog.querySelector('[data-action="roll-damage"]')?.addEventListener("click", () =>
            {
                const previousWindowIds = new Set(getVisibleApplicationElements().map(getApplicationIdentity).filter(Boolean));
                dialog.close("roll-damage");
                if (typeof activity?.rollDamage === "function")
                {
                    setPendingRollApplication({
                        activity,
                        targetToken,
                        itemName: activity?.item?.name ?? "",
                    });
                    void activity.rollDamage({});
                    focusActivationResult(previousWindowIds, {
                        originatingApp: AE_SHEET_TABS_STATE.activeApp,
                        debug,
                        getApplicationElement,
                        announceContext: {
                            type: "damage-roll",
                            itemName: activity?.item?.name ?? "",
                            targetName,
                        },
                    });
                    debug("attack result dialog triggered damage roll", {
                        itemName: activity?.item?.name,
                        targetName,
                    });
                }
            });
        }

        dialog.addEventListener("close", () =>
        {
            dialog.remove();
            if (!hit) restoreLastAttackControlFocus();
        });
        document.body.append(dialog);
        dialog.showModal();
        focusDialogControl(
            dialog,
            hit
                ? '.form-footer [data-action="roll-damage"]'
                : '.form-footer [data-action="close"]'
        );
    }

    async function activateInventoryControl(element, app, event)
    {
        if (!(element instanceof HTMLElement)) return;
        const context = getInventoryActionContext(element, app);
        const activationTarget = context?.activationTarget instanceof HTMLElement ? context.activationTarget : element;
        AE_SHEET_TABS_STATE.lastAttackControl = activationTarget;
        AE_SHEET_TABS_STATE.lastAttackControlDescriptor = getAttackControlDescriptor(activationTarget);
        const attackActivity = context?.attackActivity ?? null;
        const usableActivity = context?.usableActivity ?? null;
        const isConsumable = context?.isConsumable ?? false;

        if (activationTarget.matches(".tidy-table-row-use-button"))
        {
            if (attackActivity?.rollAttack)
            {
                const targetChosen = await chooseAttackTarget(app, activationTarget);
                if (!targetChosen) return;
                if (triggerAttackActivityFlow(attackActivity, app, event)) return;
            }
            else if (usableActivity?.use)
            {
                if (isConsumable)
                {
                    const targetChosen = await chooseConsumableTarget(app, activationTarget);
                    if (!targetChosen) return;
                }
                const previousWindowIds = new Set(getVisibleApplicationElements().map(getApplicationIdentity).filter(Boolean));
                void usableActivity.use({ event }, { options: { sheet: app } });
                focusActivationResult(previousWindowIds, {
                    originatingApp: app,
                    debug,
                    getApplicationElement,
                });
            }
            else
            {
                activationTarget.click();
            }
            return;
        }

        if (isLikelyInventoryMenuTrigger(activationTarget))
        {
            activationTarget.click();
            return;
        }

        if (attackActivity?.rollAttack && isPrimaryInventoryActivationTarget(activationTarget))
        {
            const targetChosen = await chooseAttackTarget(app, activationTarget);
            if (!targetChosen) return;
            if (triggerAttackActivityFlow(attackActivity, app, event)) return;
        }
        else if (usableActivity?.use && isPrimaryInventoryActivationTarget(activationTarget))
        {
            if (isConsumable)
            {
                const targetChosen = await chooseConsumableTarget(app, activationTarget);
                if (!targetChosen) return;
            }
            const previousWindowIds = new Set(getVisibleApplicationElements().map(getApplicationIdentity).filter(Boolean));
            void usableActivity.use({ event }, { options: { sheet: app } });
            focusActivationResult(previousWindowIds, {
                originatingApp: app,
                debug,
                getApplicationElement,
            });
        }
        else
        {
            activationTarget.click();
        }
    }

    return {
        activateInventoryControl,
        openAttackResultDialog,
        restoreLastAttackControlFocus,
        triggerRollDialogFromActivity,
    };
}
