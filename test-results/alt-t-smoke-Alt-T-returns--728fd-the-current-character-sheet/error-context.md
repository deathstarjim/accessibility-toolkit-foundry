# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alt-t-smoke.spec.js >> Alt+T returns focus to the active tab well on the current character sheet
- Location: tests\playwright\alt-t-smoke.spec.js:157:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.application.sheet.actor.character[id$="Actor-EKXtdJ94pp1DLGIJ"]').filter({ visible: true }).last().getByRole('tab', { name: /^Inventory$/i })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('.application.sheet.actor.character[id$="Actor-EKXtdJ94pp1DLGIJ"]').filter({ visible: true }).last().getByRole('tab', { name: /^Inventory$/i })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - list
  - generic [ref=e2]:
    - generic:
      - generic:
        - complementary:
          - list:
            - listitem:
              - tab "Token Controls" [ref=e3]: 
            - listitem:
              - tab "Measurement Controls" [ref=e4] [cursor=pointer]: 
            - listitem:
              - tab "Journal Notes" [ref=e5] [cursor=pointer]: 
            - listitem:
              - tab "Sequencer Layer" [ref=e6] [cursor=pointer]: 
          - list:
            - listitem:
              - button "Select Tokens" [pressed] [ref=e7]: 
            - listitem:
              - button "Select Targets" [ref=e8] [cursor=pointer]: 
            - listitem:
              - button "Measure Distance" [ref=e9] [cursor=pointer]: 
            - listitem:
              - button "Toggle Argon Combat HUD" [ref=e10] [cursor=pointer]:  
            - listitem:
              - button "Set elevation for next placed template" [ref=e11] [cursor=pointer]: 
            - listitem:
              - button "Party Inventory" [ref=e12] [cursor=pointer]: 
            - listitem:
              - button "Pixel Perfect Hover" [ref=e13] [cursor=pointer]: 
            - listitem:
              - button "Show Sequencer Database" [ref=e14] [cursor=pointer]: 
            - listitem:
              - button "Show Sequencer Manager" [ref=e15] [cursor=pointer]: 
        - complementary:
          - generic [ref=e16]:
            - list [ref=e17]:
              - listitem [ref=e18]:
                - generic [ref=e19]: Tester the Brave [Tester the Brave]
              - listitem [ref=e20]:
                - generic [ref=e21]: Gamemaster [GM]
            - generic [ref=e22]:
              - generic [ref=e23]: Latency 107ms
              - generic [ref=e24]: FPS 29
              - button "" [ref=e25] [cursor=pointer]
      - generic:
        - navigation:
          - list:
            - listitem [ref=e26]:
              - generic [ref=e27]: Forest Path
              - list [ref=e28]:
                - listitem "Gamemaster" [ref=e29]: G
                - listitem "Tester the Brave" [ref=e30]: T
              - text: 
    - generic:
      - generic:
        - complementary:
          - generic:
            - button "Mute Volume" [ref=e31] [cursor=pointer]: 
            - button "Main Menu" [ref=e32] [cursor=pointer]: 
          - list [ref=e33]:
            - button "Empty Slot" [ref=e34] [cursor=pointer]:
              - generic: "1"
            - button "Empty Slot" [ref=e35] [cursor=pointer]:
              - generic: "2"
            - button "Empty Slot" [ref=e36] [cursor=pointer]:
              - generic: "3"
            - button "Empty Slot" [ref=e37] [cursor=pointer]:
              - generic: "4"
            - button "Empty Slot" [ref=e38] [cursor=pointer]:
              - generic: "5"
            - button "Empty Slot" [ref=e39] [cursor=pointer]:
              - generic: "6"
            - button "Empty Slot" [ref=e40] [cursor=pointer]:
              - generic: "7"
            - button "Empty Slot" [ref=e41] [cursor=pointer]:
              - generic: "8"
            - button "Empty Slot" [ref=e42] [cursor=pointer]:
              - generic: "9"
            - button "Empty Slot" [ref=e43] [cursor=pointer]:
              - generic: "0"
          - generic:
            - navigation:
              - button "Next Page" [ref=e44] [cursor=pointer]: 
              - generic: "1"
              - button "Previous Page" [ref=e45] [cursor=pointer]: 
            - generic:
              - button "Lock Hotbar" [ref=e46] [cursor=pointer]: 
              - button "Clear Hotbar" [ref=e47] [cursor=pointer]: 
    - generic:
      - generic:
        - generic:
          - generic:
            - list
          - textbox "Chat" [ref=e48]:
            - /placeholder: Enter message
          - generic:
            - generic:
              - button "Public Roll" [pressed] [ref=e49]: 
              - button "Private GM Roll" [ref=e50] [cursor=pointer]: 
              - button "Blind GM Roll" [ref=e51] [cursor=pointer]: 
              - button "Self Roll" [ref=e52] [cursor=pointer]: 
            - button "Filter Chat" [ref=e53] [cursor=pointer]: 
      - complementary:
        - tablist:
          - list [ref=e54]:
            - listitem [ref=e55]:
              - tab "Chat Messages" [ref=e56] [cursor=pointer]: 
            - listitem [ref=e57]:
              - tab "Combat Encounters" [ref=e58] [cursor=pointer]: 
            - listitem [ref=e59]:
              - tab "Actors" [ref=e60] [cursor=pointer]: 
            - listitem [ref=e61]:
              - tab "Items" [ref=e62] [cursor=pointer]: 
            - listitem [ref=e63]:
              - tab "Journal" [ref=e64] [cursor=pointer]: 
            - listitem [ref=e65]:
              - tab "Rollable Tables" [ref=e66] [cursor=pointer]: 
            - listitem [ref=e67]:
              - tab "Card Stacks" [ref=e68] [cursor=pointer]: 
            - listitem [ref=e69]:
              - tab "Macros" [ref=e70] [cursor=pointer]: 
            - listitem [ref=e71]:
              - tab "Playlists" [ref=e72] [cursor=pointer]: 
            - listitem [ref=e73]:
              - tab "Compendium Packs" [ref=e74] [cursor=pointer]: 
            - listitem [ref=e75]:
              - tab "Game Settings" [ref=e76] [cursor=pointer]: 
            - listitem [ref=e77]:
              - button "Expand" [ref=e78] [cursor=pointer]: 
        - generic:
          - generic:
            - list [ref=e80]:
              - listitem [ref=e81]:
                - generic [ref=e82]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e83]:
                    - img "Tester the Barbarian" [ref=e85] [cursor=pointer]
                    - generic [ref=e87]: Tester the Barbarian
                  - generic [ref=e88]:
                    - time [ref=e89]: 1d 2h ago
                    - generic "Additional Controls" [ref=e90] [cursor=pointer]:
                      - generic [ref=e91]: 
                - generic [ref=e92]:
                  - generic [ref=e95]:
                    - img "Glaive" [ref=e96]
                    - generic [ref=e97]:
                      - generic [ref=e98]: Glaive
                      - generic [ref=e99]: Damage Roll
                  - generic [ref=e101] [cursor=pointer]:
                    - generic [ref=e102]: 1d10 + 2 + 0
                    - generic [ref=e104]:
                      - list [ref=e105]:
                        - listitem [ref=e106]: "7"
                        - listitem [ref=e107]: "+2"
                      - generic [ref=e108]:
                        - img "Slashing" [ref=e109]
                        - generic [ref=e110]: Slashing
                        - generic [ref=e111]: "9"
                    - heading "9 " [level=4] [ref=e112]
              - listitem [ref=e113]:
                - generic [ref=e114]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e115]:
                    - img "Tester the Barbarian" [ref=e117] [cursor=pointer]
                    - generic [ref=e119]: Tester the Barbarian
                  - generic [ref=e120]:
                    - time [ref=e121]: 1d 2h ago
                    - generic "Additional Controls" [ref=e122] [cursor=pointer]:
                      - generic [ref=e123]: 
                - generic [ref=e126]:
                  - generic [ref=e128] [cursor=pointer]:
                    - img "Longbow" [ref=e129]
                    - generic [ref=e130]:
                      - generic [ref=e131]: Longbow
                      - generic [ref=e132]: Martial Ranged • Slow
                  - generic [ref=e133]:
                    - list [ref=e138]:
                      - listitem [ref=e139] [cursor=pointer]:
                        - img [ref=e140]
                        - generic [ref=e142]: Goblin Warrior
                    - list [ref=e144]:
                      - listitem [ref=e145]:
                        - generic [ref=e146]: Action
                      - listitem [ref=e147]:
                        - generic [ref=e148]: Instantaneous
                      - listitem [ref=e149]:
                        - generic [ref=e150]: 150/600 ft
                      - listitem [ref=e151]:
                        - generic [ref=e152]: Equipped
                      - listitem [ref=e153]:
                        - generic [ref=e154]: Proficient
              - listitem [ref=e155]:
                - generic [ref=e156]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e157]:
                    - img "Tester the Barbarian" [ref=e159] [cursor=pointer]
                    - generic [ref=e161]: Tester the Barbarian
                  - generic [ref=e162]:
                    - time [ref=e163]: 1d 2h ago
                    - generic "Additional Controls" [ref=e164] [cursor=pointer]:
                      - generic [ref=e165]: 
                - generic [ref=e166]:
                  - generic [ref=e169]:
                    - img "Longbow" [ref=e170]
                    - generic [ref=e171]:
                      - generic [ref=e172]: Longbow
                      - generic [ref=e173]: Ranged Attack • Ranged Weapon • Two-Handed
                  - generic [ref=e175] [cursor=pointer]:
                    - generic [ref=e176]: 1d20 + 0 + 2
                    - generic:
                      - generic:
                        - generic [ref=e178]:
                          - list [ref=e179]:
                            - listitem [ref=e180]: "17"
                          - generic [ref=e182]: "17"
                        - generic [ref=e184]:
                          - list
                          - generic [ref=e186]: "+2"
                    - heading "19 " [level=4] [ref=e187]
              - listitem [ref=e188]:
                - generic [ref=e189]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e190]:
                    - img "Tester the Barbarian" [ref=e192] [cursor=pointer]
                    - generic [ref=e194]: Tester the Barbarian
                  - generic [ref=e195]:
                    - time [ref=e196]: 1d 2h ago
                    - generic "Additional Controls" [ref=e197] [cursor=pointer]:
                      - generic [ref=e198]: 
                - generic [ref=e199]:
                  - generic [ref=e202]:
                    - img "Longbow" [ref=e203]
                    - generic [ref=e204]:
                      - generic [ref=e205]: Longbow
                      - generic [ref=e206]: Damage Roll
                  - generic [ref=e208] [cursor=pointer]:
                    - generic [ref=e209]: 1d8 + 0
                    - generic [ref=e211]:
                      - list [ref=e212]:
                        - listitem [ref=e213]: "4"
                      - generic [ref=e214]:
                        - img "Piercing" [ref=e215]
                        - generic [ref=e216]: Piercing
                        - generic [ref=e217]: "4"
                    - heading "4 " [level=4] [ref=e218]
              - listitem [ref=e219]:
                - generic [ref=e220]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e221]:
                    - img "Tester the Barbarian" [ref=e223] [cursor=pointer]
                    - generic [ref=e225]: Tester the Barbarian
                  - generic [ref=e226]:
                    - time [ref=e227]: 1d 2h ago
                    - generic "Additional Controls" [ref=e228] [cursor=pointer]:
                      - generic [ref=e229]: 
                - generic [ref=e232]:
                  - generic [ref=e234] [cursor=pointer]:
                    - img "Potion of Healing" [ref=e235]
                    - generic [ref=e236]:
                      - generic [ref=e237]: Potion of Healing
                      - generic [ref=e238]: Potion
                  - generic [ref=e239]:
                    - generic:
                      - generic:  
                    - list [ref=e244]:
                      - listitem [ref=e245] [cursor=pointer]:
                        - img [ref=e246]
                        - generic [ref=e248]: Tester the Barbarian
                    - list [ref=e250]:
                      - listitem [ref=e251]:
                        - generic [ref=e252]: Bonus Action
                      - listitem [ref=e253]:
                        - generic [ref=e254]: Instantaneous
                      - listitem [ref=e255]:
                        - generic [ref=e256]: Self
                      - listitem [ref=e257]:
                        - generic [ref=e258]: Any creatures
                      - listitem [ref=e259]:
                        - generic [ref=e260]: Not Equipped
              - listitem [ref=e261]:
                - generic [ref=e262]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e263]:
                    - img "Tester the Barbarian" [ref=e265] [cursor=pointer]
                    - generic [ref=e267]: Tester the Barbarian
                  - generic [ref=e268]:
                    - time [ref=e269]: 1d 2h ago
                    - generic "Additional Controls" [ref=e270] [cursor=pointer]:
                      - generic [ref=e271]: 
                - generic [ref=e272]:
                  - generic [ref=e275]:
                    - img "Potion of Healing" [ref=e276]
                    - generic [ref=e277]:
                      - generic [ref=e278]: Potion of Healing
                      - generic [ref=e279]: Potion
                  - generic [ref=e281] [cursor=pointer]:
                    - generic [ref=e282]: 2d4 + 2
                    - generic [ref=e284]:
                      - list [ref=e285]:
                        - listitem [ref=e286]: "4"
                        - listitem [ref=e287]: "1"
                        - listitem [ref=e288]: "+2"
                      - generic [ref=e289]:
                        - img "Hit Points" [ref=e290]
                        - generic [ref=e291]: Healing
                        - generic [ref=e292]: "7"
                    - heading "7 " [level=4] [ref=e293]
              - listitem [ref=e294]:
                - generic [ref=e295]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e296]:
                    - img "Tester the Barbarian" [ref=e298] [cursor=pointer]
                    - generic [ref=e300]: Tester the Barbarian
                  - generic [ref=e301]:
                    - time [ref=e302]: 1d 2h ago
                    - generic "Additional Controls" [ref=e303] [cursor=pointer]:
                      - generic [ref=e304]: 
                - generic [ref=e307]:
                  - generic [ref=e309] [cursor=pointer]:
                    - img "Poison Spray" [ref=e310]
                    - generic [ref=e311]:
                      - generic [ref=e312]: Poison Spray
                      - generic [ref=e313]: Necromancy
                  - generic [ref=e314]:
                    - list [ref=e319]:
                      - listitem [ref=e320] [cursor=pointer]:
                        - img [ref=e321]
                        - generic [ref=e323]: Black Bear
                    - list [ref=e325]:
                      - listitem [ref=e326]:
                        - generic [ref=e327]: V, S
                      - listitem [ref=e328]:
                        - generic [ref=e329]: Action
                      - listitem [ref=e330]:
                        - generic [ref=e331]: Instantaneous
                      - listitem [ref=e332]:
                        - generic [ref=e333]: 30 ft
                      - listitem [ref=e334]:
                        - generic [ref=e335]: 1 creature
              - listitem [ref=e336]:
                - generic [ref=e337]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e338]:
                    - img "Tester the Barbarian" [ref=e340] [cursor=pointer]
                    - generic [ref=e342]: Tester the Barbarian
                  - generic [ref=e343]:
                    - time [ref=e344]: 1d 2h ago
                    - generic "Additional Controls" [ref=e345] [cursor=pointer]:
                      - generic [ref=e346]: 
                - generic [ref=e347]:
                  - generic [ref=e350]:
                    - img "Poison Spray" [ref=e351]
                    - generic [ref=e352]:
                      - generic [ref=e353]: Poison Spray
                      - generic [ref=e354]: Ranged Spell Attack
                  - generic [ref=e356] [cursor=pointer]:
                    - generic [ref=e357]: 1d20 + 0 + 2
                    - generic:
                      - generic:
                        - generic [ref=e359]:
                          - list [ref=e360]:
                            - listitem [ref=e361]: "6"
                          - generic [ref=e363]: "6"
                        - generic [ref=e365]:
                          - list
                          - generic [ref=e367]: "+2"
                    - heading "8 " [level=4] [ref=e368]
              - listitem [ref=e369]:
                - generic [ref=e370]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e371]:
                    - img "Tester the Barbarian" [ref=e373] [cursor=pointer]
                    - generic [ref=e375]: Tester the Barbarian
                  - generic [ref=e376]:
                    - time [ref=e377]: 1d 2h ago
                    - generic "Additional Controls" [ref=e378] [cursor=pointer]:
                      - generic [ref=e379]: 
                - generic [ref=e382]:
                  - generic [ref=e384] [cursor=pointer]:
                    - img "Poison Spray" [ref=e385]
                    - generic [ref=e386]:
                      - generic [ref=e387]: Poison Spray
                      - generic [ref=e388]: Necromancy
                  - generic [ref=e389]:
                    - list [ref=e394]:
                      - listitem [ref=e395] [cursor=pointer]:
                        - img [ref=e396]
                        - generic [ref=e398]: Black Bear
                    - list [ref=e400]:
                      - listitem [ref=e401]:
                        - generic [ref=e402]: V, S
                      - listitem [ref=e403]:
                        - generic [ref=e404]: Action
                      - listitem [ref=e405]:
                        - generic [ref=e406]: Instantaneous
                      - listitem [ref=e407]:
                        - generic [ref=e408]: 30 ft
                      - listitem [ref=e409]:
                        - generic [ref=e410]: 1 creature
              - listitem [ref=e411]:
                - generic [ref=e412]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e413]:
                    - img "Tester the Barbarian" [ref=e415] [cursor=pointer]
                    - generic [ref=e417]: Tester the Barbarian
                  - generic [ref=e418]:
                    - time [ref=e419]: 1d 2h ago
                    - generic "Additional Controls" [ref=e420] [cursor=pointer]:
                      - generic [ref=e421]: 
                - generic [ref=e422]:
                  - generic [ref=e425]:
                    - img "Poison Spray" [ref=e426]
                    - generic [ref=e427]:
                      - generic [ref=e428]: Poison Spray
                      - generic [ref=e429]: Ranged Spell Attack
                  - generic [ref=e431] [cursor=pointer]:
                    - generic [ref=e432]: 1d20 + 0 + 2
                    - generic:
                      - generic:
                        - generic [ref=e434]:
                          - list [ref=e435]:
                            - listitem [ref=e436]: "18"
                          - generic [ref=e438]: "18"
                        - generic [ref=e440]:
                          - list
                          - generic [ref=e442]: "+2"
                    - heading "20 " [level=4] [ref=e443]
              - listitem [ref=e444]:
                - generic [ref=e445]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e446]:
                    - img "Tester the Barbarian" [ref=e448] [cursor=pointer]
                    - generic [ref=e450]: Tester the Barbarian
                  - generic [ref=e451]:
                    - time [ref=e452]: 1d 2h ago
                    - generic "Additional Controls" [ref=e453] [cursor=pointer]:
                      - generic [ref=e454]: 
                - generic [ref=e455]:
                  - generic [ref=e458]:
                    - img "Poison Spray" [ref=e459]
                    - generic [ref=e460]:
                      - generic [ref=e461]: Poison Spray
                      - generic [ref=e462]: Critical Hit
                  - generic [ref=e464] [cursor=pointer]:
                    - generic [ref=e465]: 2d12
                    - generic [ref=e467]:
                      - list [ref=e468]:
                        - listitem [ref=e469]: "11"
                        - listitem [ref=e470]: "11"
                      - generic [ref=e471]:
                        - img "Poison" [ref=e472]
                        - generic [ref=e473]: Poison
                        - generic [ref=e474]: "22"
                    - heading "22 " [level=4] [ref=e475]
              - listitem [ref=e476]:
                - generic [ref=e477]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e478]:
                    - img "Tester the Barbarian" [ref=e480] [cursor=pointer]
                    - generic [ref=e482]: Tester the Barbarian
                  - generic [ref=e483]:
                    - time [ref=e484]: 1d 2h ago
                    - generic "Additional Controls" [ref=e485] [cursor=pointer]:
                      - generic [ref=e486]: 
                - generic [ref=e489]:
                  - generic [ref=e491] [cursor=pointer]:
                    - img "Glaive" [ref=e492]
                    - generic [ref=e493]:
                      - generic [ref=e494]: Glaive
                      - generic [ref=e495]: Martial Melee • Graze
                  - generic [ref=e496]:
                    - list [ref=e501]:
                      - listitem [ref=e502] [cursor=pointer]:
                        - img [ref=e503]
                        - generic [ref=e505]: Goblin Warrior
                    - list [ref=e507]:
                      - listitem [ref=e508]:
                        - generic [ref=e509]: Action
                      - listitem [ref=e510]:
                        - generic [ref=e511]: Instantaneous
                      - listitem [ref=e512]:
                        - generic [ref=e513]: reach 10 ft
                      - listitem [ref=e514]:
                        - generic [ref=e515]: Equipped
                      - listitem [ref=e516]:
                        - generic [ref=e517]: Proficient
              - listitem [ref=e518]:
                - generic [ref=e519]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e520]:
                    - img "Tester the Barbarian" [ref=e522] [cursor=pointer]
                    - generic [ref=e524]: Tester the Barbarian
                  - generic [ref=e525]:
                    - time [ref=e526]: 1d 2h ago
                    - generic "Additional Controls" [ref=e527] [cursor=pointer]:
                      - generic [ref=e528]: 
                - generic [ref=e529]:
                  - generic [ref=e532]:
                    - img "Glaive" [ref=e533]
                    - generic [ref=e534]:
                      - generic [ref=e535]: Glaive
                      - generic [ref=e536]: Melee Attack • Melee Weapon • Two-Handed
                  - generic [ref=e538] [cursor=pointer]:
                    - generic [ref=e539]: 1d20 + 2 + 2
                    - generic:
                      - generic:
                        - generic [ref=e541]:
                          - list [ref=e542]:
                            - listitem [ref=e543]: "20"
                          - generic [ref=e545]: "20"
                        - generic [ref=e547]:
                          - list
                          - generic [ref=e549]: "+4"
                    - heading "24   " [level=4] [ref=e550]:
                      - text: "24"
                      - generic [ref=e551]:
                        - generic [ref=e552]: 
                        - generic [ref=e553]: 
                      - text: 
              - listitem [ref=e554]:
                - generic [ref=e555]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e556]:
                    - img "Tester the Barbarian" [ref=e558] [cursor=pointer]
                    - generic [ref=e560]: Tester the Barbarian
                  - generic [ref=e561]:
                    - time [ref=e562]: 1d 2h ago
                    - generic "Additional Controls" [ref=e563] [cursor=pointer]:
                      - generic [ref=e564]: 
                - generic [ref=e565]:
                  - generic [ref=e568]:
                    - img "Glaive" [ref=e569]
                    - generic [ref=e570]:
                      - generic [ref=e571]: Glaive
                      - generic [ref=e572]: Damage Roll
                  - generic [ref=e574] [cursor=pointer]:
                    - generic [ref=e575]: 1d10 + 2 + 2
                    - generic [ref=e577]:
                      - list [ref=e578]:
                        - listitem [ref=e579]: "5"
                        - listitem [ref=e580]: "+4"
                      - generic [ref=e581]:
                        - img "Slashing" [ref=e582]
                        - generic [ref=e583]: Slashing
                        - generic [ref=e584]: "9"
                    - heading "9 " [level=4] [ref=e585]
              - listitem [ref=e586]:
                - generic [ref=e587]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e588]:
                    - img "Tester the Barbarian" [ref=e590] [cursor=pointer]
                    - generic [ref=e592]: Tester the Barbarian
                  - generic [ref=e593]:
                    - time [ref=e594]: 1d 2h ago
                    - generic "Additional Controls" [ref=e595] [cursor=pointer]:
                      - generic [ref=e596]: 
                - generic [ref=e599]:
                  - generic [ref=e601] [cursor=pointer]:
                    - img "Potion of Healing" [ref=e602]
                    - generic [ref=e603]:
                      - generic [ref=e604]: Potion of Healing
                      - generic [ref=e605]: Potion
                  - generic [ref=e606]:
                    - generic:
                      - generic:  
                    - list [ref=e611]:
                      - listitem [ref=e612] [cursor=pointer]:
                        - img [ref=e613]
                        - generic [ref=e615]: Tester the Barbarian
                    - list [ref=e617]:
                      - listitem [ref=e618]:
                        - generic [ref=e619]: Bonus Action
                      - listitem [ref=e620]:
                        - generic [ref=e621]: Instantaneous
                      - listitem [ref=e622]:
                        - generic [ref=e623]: Self
                      - listitem [ref=e624]:
                        - generic [ref=e625]: Any creatures
                      - listitem [ref=e626]:
                        - generic [ref=e627]: Not Equipped
              - listitem [ref=e628]:
                - generic [ref=e629]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e630]:
                    - img "Tester the Barbarian" [ref=e632] [cursor=pointer]
                    - generic [ref=e634]: Tester the Barbarian
                  - generic [ref=e635]:
                    - time [ref=e636]: 1d 2h ago
                    - generic "Additional Controls" [ref=e637] [cursor=pointer]:
                      - generic [ref=e638]: 
                - generic [ref=e639]:
                  - generic [ref=e642]:
                    - img "Potion of Healing" [ref=e643]
                    - generic [ref=e644]:
                      - generic [ref=e645]: Potion of Healing
                      - generic [ref=e646]: Potion
                  - generic [ref=e648] [cursor=pointer]:
                    - generic [ref=e649]: 2d4 + 2
                    - generic [ref=e651]:
                      - list [ref=e652]:
                        - listitem [ref=e653]: "2"
                        - listitem [ref=e654]: "2"
                        - listitem [ref=e655]: "+2"
                      - generic [ref=e656]:
                        - img "Hit Points" [ref=e657]
                        - generic [ref=e658]: Healing
                        - generic [ref=e659]: "6"
                    - heading "6 " [level=4] [ref=e660]
              - listitem [ref=e661]:
                - generic [ref=e662]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e663]:
                    - img "Tester the Barbarian" [ref=e665] [cursor=pointer]
                    - generic [ref=e667]: Tester the Barbarian
                  - generic [ref=e668]:
                    - time [ref=e669]: 1d 2h ago
                    - generic "Additional Controls" [ref=e670] [cursor=pointer]:
                      - generic [ref=e671]: 
                - generic [ref=e674]:
                  - generic [ref=e676] [cursor=pointer]:
                    - img "Poison Spray" [ref=e677]
                    - generic [ref=e678]:
                      - generic [ref=e679]: Poison Spray
                      - generic [ref=e680]: Necromancy
                  - generic [ref=e681]:
                    - list [ref=e686]:
                      - listitem [ref=e687] [cursor=pointer]:
                        - img [ref=e688]
                        - generic [ref=e690]: Black Bear
                    - list [ref=e692]:
                      - listitem [ref=e693]:
                        - generic [ref=e694]: V, S
                      - listitem [ref=e695]:
                        - generic [ref=e696]: Action
                      - listitem [ref=e697]:
                        - generic [ref=e698]: Instantaneous
                      - listitem [ref=e699]:
                        - generic [ref=e700]: 30 ft
                      - listitem [ref=e701]:
                        - generic [ref=e702]: 1 creature
              - listitem [ref=e703]:
                - generic [ref=e704]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e705]:
                    - img "Tester the Barbarian" [ref=e707] [cursor=pointer]
                    - generic [ref=e709]: Tester the Barbarian
                  - generic [ref=e710]:
                    - time [ref=e711]: 1d 2h ago
                    - generic "Additional Controls" [ref=e712] [cursor=pointer]:
                      - generic [ref=e713]: 
                - generic [ref=e714]:
                  - generic [ref=e717]:
                    - img "Poison Spray" [ref=e718]
                    - generic [ref=e719]:
                      - generic [ref=e720]: Poison Spray
                      - generic [ref=e721]: Ranged Spell Attack
                  - generic [ref=e723] [cursor=pointer]:
                    - generic [ref=e724]: 1d20 + 0 + 2
                    - generic:
                      - generic:
                        - generic [ref=e726]:
                          - list [ref=e727]:
                            - listitem [ref=e728]: "5"
                          - generic [ref=e730]: "5"
                        - generic [ref=e732]:
                          - list
                          - generic [ref=e734]: "+2"
                    - heading "7 " [level=4] [ref=e735]
              - listitem [ref=e736]:
                - generic [ref=e737]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e738]:
                    - img "Tester the Barbarian" [ref=e740] [cursor=pointer]
                    - generic [ref=e742]: Tester the Barbarian
                  - generic [ref=e743]:
                    - time [ref=e744]: 1d 2h ago
                    - generic "Additional Controls" [ref=e745] [cursor=pointer]:
                      - generic [ref=e746]: 
                - generic [ref=e749]:
                  - generic [ref=e751] [cursor=pointer]:
                    - img "Poison Spray" [ref=e752]
                    - generic [ref=e753]:
                      - generic [ref=e754]: Poison Spray
                      - generic [ref=e755]: Necromancy
                  - generic [ref=e756]:
                    - list [ref=e761]:
                      - listitem [ref=e762] [cursor=pointer]:
                        - img [ref=e763]
                        - generic [ref=e765]: Black Bear
                    - list [ref=e767]:
                      - listitem [ref=e768]:
                        - generic [ref=e769]: V, S
                      - listitem [ref=e770]:
                        - generic [ref=e771]: Action
                      - listitem [ref=e772]:
                        - generic [ref=e773]: Instantaneous
                      - listitem [ref=e774]:
                        - generic [ref=e775]: 30 ft
                      - listitem [ref=e776]:
                        - generic [ref=e777]: 1 creature
              - listitem [ref=e778]:
                - generic [ref=e779]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e780]:
                    - img "Tester the Barbarian" [ref=e782] [cursor=pointer]
                    - generic [ref=e784]: Tester the Barbarian
                  - generic [ref=e785]:
                    - time [ref=e786]: 1d 2h ago
                    - generic "Additional Controls" [ref=e787] [cursor=pointer]:
                      - generic [ref=e788]: 
                - generic [ref=e789]:
                  - generic [ref=e792]:
                    - img "Poison Spray" [ref=e793]
                    - generic [ref=e794]:
                      - generic [ref=e795]: Poison Spray
                      - generic [ref=e796]: Ranged Spell Attack
                  - generic [ref=e798] [cursor=pointer]:
                    - generic [ref=e799]: 1d20 + 0 + 2
                    - generic:
                      - generic:
                        - generic [ref=e801]:
                          - list [ref=e802]:
                            - listitem [ref=e803]: "11"
                          - generic [ref=e805]: "11"
                        - generic [ref=e807]:
                          - list
                          - generic [ref=e809]: "+2"
                    - heading "13 " [level=4] [ref=e810]
              - listitem [ref=e811]:
                - generic [ref=e812]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e813]:
                    - img "Tester the Barbarian" [ref=e815] [cursor=pointer]
                    - generic [ref=e817]: Tester the Barbarian
                  - generic [ref=e818]:
                    - time [ref=e819]: 1d 2h ago
                    - generic "Additional Controls" [ref=e820] [cursor=pointer]:
                      - generic [ref=e821]: 
                - generic [ref=e822]:
                  - generic [ref=e825]:
                    - img "Poison Spray" [ref=e826]
                    - generic [ref=e827]:
                      - generic [ref=e828]: Poison Spray
                      - generic [ref=e829]: Damage Roll
                  - generic [ref=e831] [cursor=pointer]:
                    - generic [ref=e832]: 1d12
                    - generic [ref=e834]:
                      - list [ref=e835]:
                        - listitem [ref=e836]: "11"
                      - generic [ref=e837]:
                        - img "Poison" [ref=e838]
                        - generic [ref=e839]: Poison
                        - generic [ref=e840]: "11"
                    - heading "11 " [level=4] [ref=e841]
              - listitem [ref=e842]:
                - generic [ref=e843]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e844]:
                    - img "Tester the Barbarian" [ref=e846] [cursor=pointer]
                    - generic [ref=e848]: Tester the Barbarian
                  - generic [ref=e849]:
                    - time [ref=e850]: 1d 2h ago
                    - generic "Additional Controls" [ref=e851] [cursor=pointer]:
                      - generic [ref=e852]: 
                - generic [ref=e855]:
                  - generic [ref=e857] [cursor=pointer]:
                    - img "Glaive" [ref=e858]
                    - generic [ref=e859]:
                      - generic [ref=e860]: Glaive
                      - generic [ref=e861]: Martial Melee • Graze
                  - generic [ref=e862]:
                    - list [ref=e867]:
                      - listitem [ref=e868] [cursor=pointer]:
                        - img [ref=e869]
                        - generic [ref=e871]: Goblin Warrior
                    - list [ref=e873]:
                      - listitem [ref=e874]:
                        - generic [ref=e875]: Action
                      - listitem [ref=e876]:
                        - generic [ref=e877]: Instantaneous
                      - listitem [ref=e878]:
                        - generic [ref=e879]: reach 10 ft
                      - listitem [ref=e880]:
                        - generic [ref=e881]: Equipped
                      - listitem [ref=e882]:
                        - generic [ref=e883]: Proficient
              - listitem [ref=e884]:
                - generic [ref=e885]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e886]:
                    - img "Tester the Barbarian" [ref=e888] [cursor=pointer]
                    - generic [ref=e890]: Tester the Barbarian
                  - generic [ref=e891]:
                    - time [ref=e892]: 1d 2h ago
                    - generic "Additional Controls" [ref=e893] [cursor=pointer]:
                      - generic [ref=e894]: 
                - generic [ref=e895]:
                  - generic [ref=e898]:
                    - img "Glaive" [ref=e899]
                    - generic [ref=e900]:
                      - generic [ref=e901]: Glaive
                      - generic [ref=e902]: Melee Attack • Melee Weapon • Two-Handed
                  - generic [ref=e904] [cursor=pointer]:
                    - generic [ref=e905]: 1d20 + 2 + 2
                    - generic:
                      - generic:
                        - generic [ref=e907]:
                          - list [ref=e908]:
                            - listitem [ref=e909]: "14"
                          - generic [ref=e911]: "14"
                        - generic [ref=e913]:
                          - list
                          - generic [ref=e915]: "+4"
                    - heading "18 " [level=4] [ref=e916]
              - listitem [ref=e917]:
                - generic [ref=e918]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e919]:
                    - img "Tester the Barbarian" [ref=e921] [cursor=pointer]
                    - generic [ref=e923]: Tester the Barbarian
                  - generic [ref=e924]:
                    - time [ref=e925]: 1d 2h ago
                    - generic "Additional Controls" [ref=e926] [cursor=pointer]:
                      - generic [ref=e927]: 
                - generic [ref=e928]:
                  - generic [ref=e931]:
                    - img "Glaive" [ref=e932]
                    - generic [ref=e933]:
                      - generic [ref=e934]: Glaive
                      - generic [ref=e935]: Damage Roll
                  - generic [ref=e937] [cursor=pointer]:
                    - generic [ref=e938]: 1d10 + 2 + 2
                    - generic [ref=e940]:
                      - list [ref=e941]:
                        - listitem [ref=e942]: "8"
                        - listitem [ref=e943]: "+4"
                      - generic [ref=e944]:
                        - img "Slashing" [ref=e945]
                        - generic [ref=e946]: Slashing
                        - generic [ref=e947]: "12"
                    - heading "12 " [level=4] [ref=e948]
              - listitem [ref=e949]:
                - generic [ref=e950]:
                  - heading "Tester the Barbarian Tester the Barbarian" [level=4] [ref=e951]:
                    - img "Tester the Barbarian" [ref=e953] [cursor=pointer]
                    - generic [ref=e955]: Tester the Barbarian
                  - generic [ref=e956]:
                    - time [ref=e957]: 1d 2h ago
                    - generic "Additional Controls" [ref=e958] [cursor=pointer]:
                      - generic [ref=e959]: 
                - generic [ref=e962]:
                  - generic [ref=e964] [cursor=pointer]:
                    - img "Mage Hand" [ref=e965]
                    - generic [ref=e966]:
                      - generic [ref=e967]: Mage Hand
                      - generic [ref=e968]: Conjuration
                  - generic [ref=e969]:
                    - generic:
                      - generic: 
                    - list [ref=e974]:
                      - listitem [ref=e975] [cursor=pointer]:
                        - img [ref=e976]
                        - generic [ref=e978]: Goblin Warrior
                    - list [ref=e980]:
                      - listitem [ref=e981]:
                        - generic [ref=e982]: V, S
                      - listitem [ref=e983]:
                        - generic [ref=e984]: Action
                      - listitem [ref=e985]:
                        - generic [ref=e986]: 1 minute
                      - listitem [ref=e987]:
                        - generic [ref=e988]: 30 ft
                      - listitem [ref=e989]:
                        - generic [ref=e990]: 1 Space
            - generic: 
          - text:                                                                                                                                                                                                    • • •        
  - figure:
    - generic:
      - img
      - generic: Game Paused
  - text:   
  - generic [ref=e992]:
    - banner [ref=e993]:
      - generic "Edit" [ref=e994] [cursor=pointer]:
        - generic [ref=e996]: 
      - heading [level=2]
      - text: 
      - button "Toggle Controls" [ref=e997] [cursor=pointer]: 
      - button "Copy Document UUID" [ref=e998] [cursor=pointer]: 
      - button "Close Window" [ref=e999] [cursor=pointer]: 
    - generic [ref=e1000]:
      - generic [ref=e1001]:
        - generic [ref=e1002]:
          - generic [ref=e1003]: Tester the Brave
          - generic [ref=e1004]: Rogue 1
        - generic [ref=e1005]:
          - generic "Level 1" [ref=e1006]: "1"
          - button "Inspiration" [ref=e1007] [cursor=pointer]
          - generic [ref=e1008]:
            - generic [ref=e1009]:
              - button "Short Rest" [ref=e1010] [cursor=pointer]:
                - generic: 
              - button "Long Rest" [ref=e1011] [cursor=pointer]:
                - generic: 
            - generic [ref=e1012]:
              - generic [ref=e1013]: "0"
              - generic [ref=e1014]: /
              - generic [ref=e1015]: "300"
            - meter "Progress to next Level" [ref=e1016]
      - generic [ref=e1018]:
        - generic [ref=e1019]:
          - generic [ref=e1020]:
            - button "Collapse Sidebar" [ref=e1021] [cursor=pointer]:
              - generic: 
            - img "Tester the Brave" [ref=e1023] [cursor=pointer]
            - generic [ref=e1024]:
              - generic [ref=e1025]:
                - generic [ref=e1026]:
                  - button "Exhaustion Level 1" [ref=e1027] [cursor=pointer]
                  - button "Exhaustion Level 2" [ref=e1028] [cursor=pointer]
                  - button "Exhaustion Level 3" [ref=e1029] [cursor=pointer]
                - generic "Armor Class" [ref=e1030]:
                  - generic [ref=e1031]: "11"
                - generic [ref=e1032]:
                  - button "Exhaustion Level 4" [ref=e1033] [cursor=pointer]
                  - button "Exhaustion Level 5" [ref=e1034] [cursor=pointer]
                  - button "Exhaustion Level 6" [ref=e1035] [cursor=pointer]
              - generic [ref=e1036]:
                - generic [ref=e1037]:
                  - generic [ref=e1038]: "+1"
                  - generic [ref=e1039]: Initiative
                - generic [ref=e1040]:
                  - generic [ref=e1041]: "30"
                  - generic [ref=e1042]: Speed
                - generic [ref=e1043]:
                  - generic [ref=e1044]: "+2"
                  - generic [ref=e1045]: Proficiency
              - generic [ref=e1046]:
                - generic [ref=e1048]: Hit Points
                - generic [ref=e1049]:
                  - meter [ref=e1050] [cursor=pointer]:
                    - generic [ref=e1051]:
                      - generic [ref=e1052]: "7"
                      - generic [ref=e1053]: /
                      - generic [ref=e1054]: "10"
                  - textbox "TMP" [ref=e1056]
              - generic [ref=e1057]:
                - generic [ref=e1059]: Hit Dice
                - meter [ref=e1060]:
                  - generic [ref=e1061]:
                    - generic [ref=e1062]: "1"
                    - generic [ref=e1063]: /
                    - generic [ref=e1064]: "1"
            - generic [ref=e1065]:
              - generic [ref=e1066]:
                - generic [ref=e1067]:
                  - button "3rd death save success" [ref=e1068] [cursor=pointer]
                  - button "2nd death save success" [ref=e1069] [cursor=pointer]
                  - button "1st death save success" [ref=e1070] [cursor=pointer]
                - button "Roll a Death Saving Throw" [ref=e1071] [cursor=pointer]
                - generic [ref=e1072]:
                  - button "1st death save failure" [ref=e1073] [cursor=pointer]
                  - button "2nd death save failure" [ref=e1074] [cursor=pointer]
                  - button "3rd death save failure" [ref=e1075] [cursor=pointer]
              - button "Hide Death Saves" [ref=e1076] [cursor=pointer]:
                - generic: 
          - generic [ref=e1077]:
            - heading " Favorites" [level=3] [ref=e1078]:
              - generic [ref=e1079]: 
              - generic [ref=e1080]: Favorites
            - list [ref=e1081]:
              - listitem [ref=e1082]: Drop Favorite
        - generic [ref=e1083]:
          - generic [ref=e1084]:
            - generic [ref=e1085]:
              - generic [ref=e1086]:
                - heading " Skills" [level=3] [ref=e1087]:
                  - generic [ref=e1088]: 
                  - generic [ref=e1089]: Skills
                - list [ref=e1090]:
                  - listitem [ref=e1091]:
                    - generic "Not Proficient" [ref=e1092]:
                      - spinbutton [disabled] [ref=e1094]: "0"
                    - generic [ref=e1095]: dex
                    - generic [ref=e1096] [cursor=pointer]: Acrobatics
                    - generic [ref=e1097]: "+1"
                    - generic [ref=e1098]: "11"
                  - listitem [ref=e1099]:
                    - generic "Not Proficient" [ref=e1100]:
                      - spinbutton [disabled] [ref=e1102]: "0"
                    - generic [ref=e1103]: wis
                    - generic [ref=e1104] [cursor=pointer]: Animal Handling
                    - generic [ref=e1105]: "-1"
                    - generic [ref=e1106]: "9"
                  - listitem [ref=e1107]:
                    - generic "Not Proficient" [ref=e1108]:
                      - spinbutton [disabled] [ref=e1110]: "0"
                    - generic [ref=e1111]: int
                    - generic [ref=e1112] [cursor=pointer]: Arcana
                    - generic [ref=e1113]: "+0"
                    - generic [ref=e1114]: "10"
                  - listitem [ref=e1115]:
                    - generic "Proficient" [ref=e1116]:
                      - spinbutton [disabled] [ref=e1118]: "1"
                    - generic [ref=e1119]: str
                    - generic [ref=e1120] [cursor=pointer]: Athletics
                    - generic [ref=e1121]: "+4"
                    - generic [ref=e1122]: "14"
                  - listitem [ref=e1123]:
                    - generic "Not Proficient" [ref=e1124]:
                      - spinbutton [disabled] [ref=e1126]: "0"
                    - generic [ref=e1127]: cha
                    - generic [ref=e1128] [cursor=pointer]: Deception
                    - generic [ref=e1129]: "+1"
                    - generic [ref=e1130]: "11"
                  - listitem [ref=e1131]:
                    - generic "Not Proficient" [ref=e1132]:
                      - spinbutton [disabled] [ref=e1134]: "0"
                    - generic [ref=e1135]: int
                    - generic [ref=e1136] [cursor=pointer]: History
                    - generic [ref=e1137]: "+0"
                    - generic [ref=e1138]: "10"
                  - listitem [ref=e1139]:
                    - generic "Not Proficient" [ref=e1140]:
                      - spinbutton [disabled] [ref=e1142]: "0"
                    - generic [ref=e1143]: wis
                    - generic [ref=e1144] [cursor=pointer]: Insight
                    - generic [ref=e1145]: "-1"
                    - generic [ref=e1146]: "9"
                  - listitem [ref=e1147]:
                    - generic "Not Proficient" [ref=e1148]:
                      - spinbutton [disabled] [ref=e1150]: "0"
                    - generic [ref=e1151]: cha
                    - generic [ref=e1152] [cursor=pointer]: Intimidation
                    - generic [ref=e1153]: "+1"
                    - generic [ref=e1154]: "11"
                  - listitem [ref=e1155]:
                    - generic "Not Proficient" [ref=e1156]:
                      - spinbutton [disabled] [ref=e1158]: "0"
                    - generic [ref=e1159]: int
                    - generic [ref=e1160] [cursor=pointer]: Investigation
                    - generic [ref=e1161]: "+0"
                    - generic [ref=e1162]: "10"
                  - listitem [ref=e1163]:
                    - generic "Not Proficient" [ref=e1164]:
                      - spinbutton [disabled] [ref=e1166]: "0"
                    - generic [ref=e1167]: wis
                    - generic [ref=e1168] [cursor=pointer]: Medicine
                    - generic [ref=e1169]: "-1"
                    - generic [ref=e1170]: "9"
                  - listitem [ref=e1171]:
                    - generic "Not Proficient" [ref=e1172]:
                      - spinbutton [disabled] [ref=e1174]: "0"
                    - generic [ref=e1175]: int
                    - generic [ref=e1176] [cursor=pointer]: Nature
                    - generic [ref=e1177]: "+0"
                    - generic [ref=e1178]: "10"
                  - listitem [ref=e1179]:
                    - generic "Proficient" [ref=e1180]:
                      - spinbutton [disabled] [ref=e1182]: "1"
                    - generic [ref=e1183]: wis
                    - generic [ref=e1184] [cursor=pointer]: Perception
                    - generic [ref=e1185]: "+1"
                    - generic [ref=e1186]: "11"
                  - listitem [ref=e1187]:
                    - generic "Not Proficient" [ref=e1188]:
                      - spinbutton [disabled] [ref=e1190]: "0"
                    - generic [ref=e1191]: cha
                    - generic [ref=e1192] [cursor=pointer]: Performance
                    - generic [ref=e1193]: "+1"
                    - generic [ref=e1194]: "11"
                  - listitem [ref=e1195]:
                    - generic "Not Proficient" [ref=e1196]:
                      - spinbutton [disabled] [ref=e1198]: "0"
                    - generic [ref=e1199]: cha
                    - generic [ref=e1200] [cursor=pointer]: Persuasion
                    - generic [ref=e1201]: "+1"
                    - generic [ref=e1202]: "11"
                  - listitem [ref=e1203]:
                    - generic "Not Proficient" [ref=e1204]:
                      - spinbutton [disabled] [ref=e1206]: "0"
                    - generic [ref=e1207]: int
                    - generic [ref=e1208] [cursor=pointer]: Religion
                    - generic [ref=e1209]: "+0"
                    - generic [ref=e1210]: "10"
                  - listitem [ref=e1211]:
                    - generic "Expertise" [ref=e1212]:
                      - spinbutton [disabled] [ref=e1214]: "2"
                    - generic [ref=e1215]: dex
                    - generic [ref=e1216] [cursor=pointer]: Sleight of Hand
                    - generic [ref=e1217]: "+5"
                    - generic [ref=e1218]: "15"
                  - listitem [ref=e1219]:
                    - generic "Expertise" [ref=e1220]:
                      - spinbutton [disabled] [ref=e1222]: "2"
                    - generic [ref=e1223]: dex
                    - generic [ref=e1224] [cursor=pointer]: Stealth
                    - generic [ref=e1225]: "+5"
                    - generic [ref=e1226]: "15"
                  - listitem [ref=e1227]:
                    - generic "Not Proficient" [ref=e1228]:
                      - spinbutton [disabled] [ref=e1230]: "0"
                    - generic [ref=e1231]: wis
                    - generic [ref=e1232] [cursor=pointer]: Survival
                    - generic [ref=e1233]: "-1"
                    - generic [ref=e1234]: "9"
              - generic [ref=e1235]:
                - heading " Tools" [level=3] [ref=e1236]:
                  - generic [ref=e1237]: 
                  - generic [ref=e1238]: Tools
                - list [ref=e1239]:
                  - listitem [ref=e1240]:
                    - generic "Proficient" [ref=e1241]:
                      - spinbutton [disabled] [ref=e1243]: "1"
                    - generic [ref=e1244]: dex
                    - generic [ref=e1245] [cursor=pointer]: Thieves' Tools
                    - generic [ref=e1246]: "+3"
            - generic [ref=e1247]:
              - generic [ref=e1248]:
                - generic [ref=e1249]:
                  - heading " Saving Throws" [level=3] [ref=e1250]:
                    - generic [ref=e1251]: 
                    - generic [ref=e1252]: Saving Throws
                  - list [ref=e1253]:
                    - listitem [ref=e1254]:
                      - generic "Not Proficient" [ref=e1255]:
                        - spinbutton [disabled] [ref=e1257]: "0"
                      - generic [ref=e1258] [cursor=pointer]: str
                      - generic [ref=e1259]: "+2"
                    - listitem [ref=e1260]:
                      - generic "Proficient" [ref=e1261]:
                        - spinbutton [disabled] [ref=e1263]: "1"
                      - generic [ref=e1264] [cursor=pointer]: dex
                      - generic [ref=e1265]: "+3"
                    - listitem [ref=e1266]:
                      - generic "Not Proficient" [ref=e1267]:
                        - spinbutton [disabled] [ref=e1269]: "0"
                      - generic [ref=e1270] [cursor=pointer]: con
                      - generic [ref=e1271]: "+2"
                    - listitem [ref=e1272]:
                      - generic "Proficient" [ref=e1273]:
                        - spinbutton [disabled] [ref=e1275]: "1"
                      - generic [ref=e1276] [cursor=pointer]: int
                      - generic [ref=e1277]: "+2"
                    - listitem [ref=e1278]:
                      - generic "Not Proficient" [ref=e1279]:
                        - spinbutton [disabled] [ref=e1281]: "0"
                      - generic [ref=e1282] [cursor=pointer]: wis
                      - generic [ref=e1283]: "-1"
                    - listitem [ref=e1284]:
                      - generic "Not Proficient" [ref=e1285]:
                        - spinbutton [disabled] [ref=e1287]: "0"
                      - generic [ref=e1288] [cursor=pointer]: cha
                      - generic [ref=e1289]: "+1"
                - generic [ref=e1290]:
                  - generic [ref=e1293]:
                    - generic [ref=e1294]: Humanoid
                    - generic [ref=e1295]: Halfling
                  - generic "Edit Item" [ref=e1296] [cursor=pointer]:
                    - img "Halfling" [ref=e1297]
                    - generic [ref=e1298]:
                      - generic [ref=e1299]: Halfling
                      - generic [ref=e1300]: Small
                  - generic [ref=e1301] [cursor=pointer]: Add Background
              - generic [ref=e1302]:
                - heading "Armor" [level=3] [ref=e1303]:
                  - generic [ref=e1304]: Armor
                - list [ref=e1305]:
                  - listitem [ref=e1306]:
                    - generic [ref=e1307]: Light
              - generic [ref=e1308]:
                - heading "Weapons" [level=3] [ref=e1309]:
                  - generic [ref=e1310]: Weapons
                - list [ref=e1311]:
                  - listitem [ref=e1312]:
                    - generic [ref=e1313]: Simple
                  - listitem [ref=e1314]:
                    - generic [ref=e1315]: Hand Crossbow
                  - listitem [ref=e1316]:
                    - generic "Weapon Mastery" [ref=e1317]: 
                    - generic [ref=e1318]: Rapier
                  - listitem [ref=e1319]:
                    - generic [ref=e1320]: Scimitar
                  - listitem [ref=e1321]:
                    - generic [ref=e1322]: Shortsword
                  - listitem [ref=e1323]:
                    - generic [ref=e1324]: Whip
                  - listitem [ref=e1325]:
                    - generic "Weapon Mastery" [ref=e1326]: 
                    - generic [ref=e1327]: Light Crossbow
              - generic [ref=e1328]:
                - heading " Languages" [level=3] [ref=e1329]:
                  - generic [ref=e1330]: 
                  - generic [ref=e1331]: Languages
                - list [ref=e1332]:
                  - listitem [ref=e1333]:
                    - generic [ref=e1334]: Goblin
                  - listitem [ref=e1335]:
                    - generic [ref=e1336]: Thieves' Cant
          - text:             + –     ┗ – – – –    + –     ┗ – – – –    + –     ┗ – – – – –       – –    – –   ┗ –  – –    – –    – –    – –    – –    – –        –    ┗ – – –                            
      - generic:
        - generic:
          - generic:
            - generic [ref=e1337]:
              - generic [ref=e1338] [cursor=pointer]: str
              - generic [ref=e1339]: "+2"
              - generic [ref=e1340]: "15"
            - generic [ref=e1341]:
              - generic [ref=e1342] [cursor=pointer]: dex
              - generic [ref=e1343]: "+1"
              - generic [ref=e1344]: "13"
            - generic [ref=e1345]:
              - generic [ref=e1346] [cursor=pointer]: con
              - generic [ref=e1347]: "+2"
              - generic [ref=e1348]: "14"
            - generic [ref=e1349]:
              - generic [ref=e1350] [cursor=pointer]: int
              - generic [ref=e1351]: "+0"
              - generic [ref=e1352]: "10"
            - generic [ref=e1353]:
              - generic [ref=e1354] [cursor=pointer]: wis
              - generic [ref=e1355]: "-1"
              - generic [ref=e1356]: "8"
            - generic [ref=e1357]:
              - generic [ref=e1358] [cursor=pointer]: cha
              - generic [ref=e1359]: "+1"
              - generic [ref=e1360]: "12"
      - navigation [ref=e1361]:
        - generic "Details" [ref=e1362] [cursor=pointer]:
          - generic: 
        - generic "Inventory" [ref=e1363] [cursor=pointer]
        - generic "Features" [ref=e1364] [cursor=pointer]:
          - generic: 
        - generic "Spells" [ref=e1365] [cursor=pointer]:
          - generic: 
        - generic "Effects" [ref=e1366] [cursor=pointer]:
          - generic: 
        - generic "Biography" [ref=e1367] [cursor=pointer]:
          - generic: 
        - generic "Special Traits" [ref=e1368] [cursor=pointer]:
          - generic: 
      - text: +
```

# Test source

```ts
  47  |             assignedCharacterId: assignedCharacter?.id ?? null,
  48  |             namedActorName: namedActor?.name ?? null,
  49  |             namedActorId: namedActor?.id ?? null,
  50  |             namedActorOwnership
  51  |         };
  52  |     }, actorName);
  53  | 
  54  |     if (!diagnostics.assignedCharacterId || !diagnostics.namedActorOwnership)
  55  |     {
  56  |         console.log("[playwright] user/actor diagnostics", diagnostics);
  57  |     }
  58  | 
  59  |     return diagnostics;
  60  | }
  61  | 
  62  | async function getOwnedCharacterActors(page)
  63  | {
  64  |     return page.evaluate(() =>
  65  |     {
  66  |         const user = game.user;
  67  |         return (game.actors?.contents ?? [])
  68  |             .filter(actor => actor?.type === "character" && user && actor.testUserPermission(user, "OWNER"))
  69  |             .map(actor => ({
  70  |                 id: actor.id,
  71  |                 name: actor.name,
  72  |                 uuid: actor.uuid
  73  |             }));
  74  |     });
  75  | }
  76  | 
  77  | async function openCharacterSheet(page, actorName = "Tester the Brave")
  78  | {
  79  |     const actorId = await page.evaluate((name) =>
  80  |     {
  81  |         const actor = game.user?.character
  82  |             ?? game.actors?.find(candidate => candidate?.type === "character" && candidate?.name === name)
  83  |             ?? game.actors?.find(candidate => candidate?.type === "character" && candidate?.isOwner);
  84  |         if (!actor?.id)
  85  |         {
  86  |             return null;
  87  |         }
  88  | 
  89  |         actor.sheet?.render?.(true);
  90  |         return actor.id;
  91  |     }, actorName);
  92  | 
  93  |     expect(actorId).toBeTruthy();
  94  | 
  95  |     await page.waitForFunction((name) =>
  96  |     {
  97  |         const actor = game.user?.character
  98  |             ?? game.actors?.find(candidate => candidate?.type === "character" && candidate?.name === name)
  99  |             ?? game.actors?.find(candidate => candidate?.type === "character" && candidate?.isOwner);
  100 |         return Boolean(game.ready && actor?.sheet?.rendered);
  101 |     }, actorName, { timeout: 10000 });
  102 | 
  103 |     const sheetSelector = `.application.sheet.actor.character[id$="Actor-${actorId}"]`;
  104 |     await page.waitForFunction((selector) =>
  105 |     {
  106 |         return Array.from(document.querySelectorAll(selector)).some(element => element.offsetParent);
  107 |     }, sheetSelector, { timeout: 10000 });
  108 | 
  109 |     const sheet = page.locator(sheetSelector).filter({ visible: true }).last();
  110 |     await expect(sheet).toBeVisible({ timeout: 10000 });
  111 |     await expect(sheet).toHaveClass(/sheet/);
  112 |     await expect(sheet).toHaveClass(/actor/);
  113 |     await expect(sheet).toHaveClass(/character/);
  114 | 
  115 |     return sheet;
  116 | }
  117 | 
  118 | async function setCharacterSheetClass(page, actorName, sheetClass)
  119 | {
  120 |     const sheet = await openCharacterSheet(page, actorName);
  121 | 
  122 |     const toggleControlsButton = sheet.locator('[data-action="toggleControls"]');
  123 |     await expect(toggleControlsButton).toBeVisible();
  124 |     await toggleControlsButton.click({ force: true });
  125 | 
  126 |     const visibleControlsDropdown = sheet.locator(".controls-dropdown:visible");
  127 |     await expect(visibleControlsDropdown).toBeVisible();
  128 | 
  129 |     const configureSheetControl = visibleControlsDropdown.locator('[data-action="configureSheet"] button');
  130 |     await expect(configureSheetControl).toBeVisible();
  131 |     await configureSheetControl.click();
  132 | 
  133 |     const sheetClassSelect = page.locator('select[name="sheetClass"]').last();
  134 |     await expect(sheetClassSelect).toBeVisible();
  135 |     await sheetClassSelect.selectOption(sheetClass);
  136 | 
  137 |     const saveButton = page.getByRole("button", { name: /Save Sheet Configuration/i }).last();
  138 |     await expect(saveButton).toBeVisible();
  139 |     await saveButton.click();
  140 | 
  141 |     return openCharacterSheet(page, actorName);
  142 | }
  143 | 
  144 | async function focusShouldReturnToTab(page, sheet, tabName)
  145 | {
  146 |     const tab = sheet.getByRole("tab", { name: new RegExp(`^${tabName}$`, "i") });
> 147 |     await expect(tab).toBeVisible();
      |                       ^ Error: expect(locator).toBeVisible() failed
  148 |     await tab.click();
  149 |     await expect(tab).toHaveAttribute("aria-selected", /true/i);
  150 |     await tab.press("Enter");
  151 |     await expect(tab).not.toBeFocused();
  152 | 
  153 |     await page.keyboard.press("Alt+T");
  154 |     await expect(tab).toBeFocused();
  155 | }
  156 | 
  157 | test("Alt+T returns focus to the active tab well on the current character sheet", async ({ page }) =>
  158 | {
  159 |     await joinAsTester(page);
  160 |     await logUserCharacterDiagnostics(page, "Tester the Brave");
  161 |     const sheet = await openCharacterSheet(page, "Tester the Brave");
  162 | 
  163 |     // These tab labels are shared by the default and modern Tidy 5e sheets.
  164 |     await focusShouldReturnToTab(page, sheet, "Inventory");
  165 |     await focusShouldReturnToTab(page, sheet, "Features");
  166 | });
  167 | 
  168 | test("Alt+T still works after changing the actor between Tidy and default sheets", async ({ page }) =>
  169 | {
  170 |     await joinAsTester(page);
  171 | 
  172 |     const tidySheet = await setCharacterSheetClass(
  173 |         page,
  174 |         "Tester the Brave",
  175 |         "dnd5e.Tidy5eCharacterSheetQuadrone"
  176 |     );
  177 |     await focusShouldReturnToTab(page, tidySheet, "Inventory");
  178 | 
  179 |     const defaultSheet = await setCharacterSheetClass(
  180 |         page,
  181 |         "Tester the Brave",
  182 |         "dnd5e.CharacterActorSheet"
  183 |     );
  184 |     await focusShouldReturnToTab(page, defaultSheet, "Features");
  185 | });
  186 | 
```