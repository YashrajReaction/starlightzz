const { MessageEmbed } = require('discord.js')
const { pagination } = require("reconlx")
module.exports = {
    name: "agents",
    aliases: ["valorantagents", "agent"],
    description: "Get some information about Valorant",
    run: async(client, message, args) => {
      
    const embed1 = new MessageEmbed()
.setTitle("__CONTROLLER : ASTRA__")
.setColor("#FF5733")
.setDescription("Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move.\n\n**__About Moves:__**")
.addField("<:novapulse:933371131891699734> Nova Pulse", "Place Stars in Astral Form (Ultimate Key). ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area.")
.addField("<:nebula:933375955886571581> Nebula / Dissipate", "Place Stars in Astral Form (Ultimate Key). ACTIVATE a Star to transform it into a Nebula (smoke). USE a Star to Dissipate it, returning the star to be placed in a new location after a delay. Dissipate briefly forms a fake Nebula at the Star's location before returning.")
.addField("<:gravitywell:933376131019730964> Gravity Well", "Place Stars in Astral Form (Ultimate Key). ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside vulnerable.")
.addField("<:cosmicdivide:933376403481718854> Astral Form / Cosmic Divide", "ACTIVATE to enter Astral Form where you can place Stars with PRIMARY FIRE. Stars can be reactivated later, transforming them into a Nova Pulse, Nebula, or Gravity Well. When Cosmic Divide is charged, use SECONDARY FIRE in Astral Form to begin aiming it, then PRIMARY FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and heavily dampens audio.")
.addField("<:astralform:933376438931976213> Astral Form", "ACTIVATE Ultimate to enter Astral Form and PRIMARY FIRE to place Stars. Target Stars with your Nova Pulse, Nebula, or Gravity Well to use those abilities.")
.addField("\u200B", "\u200B")
.addField("<:ac:932333902754906183> Astra Insights", "Pick Rate: **2.8%**\u200B                    Win Rate: **35.5%**")
.setImage("https://i.imgur.com/8zwaY7O.png")
    
    
    const embed2 = new MessageEmbed()
.setTitle("__INITIATOR : BREACH__")
.setColor("#FF5733")
.setDescription("The bionic Swede Breach fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.\n\n__**About Moves:**__")
.addField("<:flashpoint:933383135662592071> Flashpoint", "EQUIP a blinding charge. FIRE the charge to set a fast-acting burst through the wall. The charge detonates to blind all players looking at it.")
.addField("<:faultline:933383280164741130> Fault Line", "EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.")
.addField("<:aftershock:933383497798803496> Aftershock", "EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.")
.addField("<:rollingthunder:933383610130653274> Rolling Thunder", "EQUIP a Seismic Charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.")
.addField("\u200B", "\u200B")
.addField("<:ac:932333902754906183> Breach Insights", "Pick Rate: **2.6%**\u200B                    Win Rate: **32.8%**")
.setImage("https://i.imgur.com/PXOntxW.png")
    
    
    const embed3 = new MessageEmbed()
.setTitle("__CONTROLLER : BRIMSTONE__")
.setColor("#FF5733")
.setDescription("Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander.\n__**About Moves:**__")
.addField("Stim Beacon", "INSTANTLY toss a stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.")
.addField("Incendiary", "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.")
.addField("Sky Smoke", "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.")
.addField("Orbital Strike", "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.")
.addField("\u200B", "\u200B")
.addField("<:ac:932333902754906183> Brimstone Insights", "Pick Rate: **3.7%**\u200B                    Win Rate: **37.0%**")
.setImage("https://i.imgur.com/rpgUPOR.png")
    
    
    const embed4 = new MessageEmbed()
.setTitle("__SENTINEL : CHAMBER__")
.setColor("#FF5733")
.setDescription("Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.\n**__About Moves:__**")
.addField("Rendezvous", "PLACE two teleport anchors. While on the ground and in range of an anchor, REACTIVATE to quickly teleport to the other anchor. Anchors can be picked up to be REDEPLOYED.")
.addField("Trademark", "PLACE a trap that scans for enemies. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them , creating a lingering field that slows players caught inside of it.")
.addField("Headhunter", "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights.")
.addField("Tour De Force", "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit. Killing an enemy creates a lingering field that slows players caught inside of it.")
.addField("\u200B", "\u200B")
.addField("<:ac:932333902754906183> Chamber Insights", "Pick Rate: **5.9%**\u200B                    Win Rate: **43.0%**")
.setImage("https://i.imgur.com/pASzFWN.png")
    
    
    const embed5 = new MessageEmbed()
.setTitle("__SENTINEL : CYPHER__")
.setColor("#FF5733")
.setDescription("The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.\n**__About Moves:__**")
.addField("Cyber Cage", "INSTANTLY toss the cyber cage in front of Cypher. ACTIVATE to create a zone that blocks vision and plays an audio cue when enemies pass through it.")
.addField("Spycam", "EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.")
.addField("Trapwire", "EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location, creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.")
.addField("Neural Theft", "INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.")
.addField("\u200B", "\u200B")
.addField("<:ac:932333902754906183> Cypher Insights", "Pick Rate: **3.3%**\u200B                    Win Rate: **35.9%**")
.setImage("https://i.imgur.com/XEsXYV1.png")
   
    
    const embed6 = new MessageEmbed()
.setTitle("__DUELIST : JETT__")
.setColor("#FF5733")
.setDescription("Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies up before they even know what hit them.\n**__About Moves:__**")
.addField("Updraft", "INSTANTLY propel Jett high into the air.")
.addField("Tailwind", "INSTANTLY propel Jett in the direction she is moving. If Jett is standing still, she will propel forward.")
.addField("Cloudburst", "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.")
.addField("Blade Strom", "EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALTERNATE FIRE to throw all remaining daggers but does not recharge on a kill.")
.addField("Drift", "Holding the jump button while falling allows you to glide through the air.")
.addField("\u200B", "\u200B")
.addField("<:ac:932333902754906183> Jett Insights", "Pick Rate: **12.2%**\u200B                    Win Rate: **46.1%**")
.setImage("https://i.imgur.com/tZlkIiJ.png")

    
    const embed7 = new MessageEmbed()
.setTitle("__INITIATOR : KAY/O__")
.setColor("#FF5733")
.setDescription("KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge.\n__**About Moves:**__")
.addField("FRAG/Ment", "EQUIP an explosive fragment. FIRE to throw. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.")
.addField("FLASH/Drive", "EQUIP a flash grenade. FIRE to throw. The flash grenade explodes after a short fuse, blinding anyone in line of sight.")
.addField("ZERO/Point", "EQUIP a suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and suppresses anyone in the radius of the explosion.")
.addField("NULL/Cmd", "INSTANTLY overload with polarized radianite energy that pulses from KAY/O in a massive radius. Enemies hit with pulses are suppressed for a short duration. While overloaded, KAY/O gains combat stim and can be re-stabilized if downed.")
.addField("\u200B", "\u200B")
.addField("<:ac:932333902754906183> Kay/o Insights", "Pick Rate: **3.0%**\u200B                    Win Rate: **33.9%**")
.setImage("https://i.imgur.com/A9OsWeG.png")

    
    const embed8 = new MessageEmbed()
.setTitle("__SENTINEL : KILLJOY__")
.setColor("#FF5733")
.setDescription("The genius of Germany, Killjoy secures and defends key battlefield positions with a collection of traps, turrets, and mines. Each invention is primed to punish any assailant too dumb to back down.\n**__About Moves:__**")
.addField("Nanoswarm", "EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.")
.addField("ALARMBOT", "EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes and applies Vulnerable to enemies in the area. HOLD EQUIP to recall a deployed bot.")
.addField("TURRET", "EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret.")
.addField("Lockdown", "EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.")
.addField("\u200B", "\u200B")
.addField("<:ac:932333902754906183> Killjoy Insights", "Pick Rate: **5.0%**\u200B                    Win Rate: **42.2%**")
.setImage("https://i.imgur.com/kOFQGT5.png")

    
    const embed9 = new MessageEmbed()
.setTitle("__DUELIST : NEON__")
.setColor("#FF5733")
.setDescription("Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard then strikes them down quicker than lightning.\n**__About Moves:__**")
.addField("High Gear", "INSTANTLY channel Neon’s power for increased speed. When charged, ALT FIRE to trigger an electric slide. Slide charge resets every two kills.")
.addField("Relay Bolt", "INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a concussive blast.")
.addField("Fast Lane", "FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision and damage enemies passing through them.")
.addField("Overdrive", "Unleash Neon’s full power and speed for a short duration. FIRE to channel the power into a deadly lightning beam with high movement accuracy.")
.addField("\u200B", "\u200B")
.addField("<:ac:932333902754906183> Neon Insights", "Pick Rate: **1.9%**\u200B                    Win Rate: **46.9%**")
.setImage("https://i.imgur.com/HrNC9iK.png")

    
    const embed10 = new MessageEmbed()
.setTitle("__CONTROLLER : OMEN__")
.setColor("#FF5733")
.setDescription("A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to uncover where he might strike next.\n__**About Moves:**__")
.addField("Paranoia", "EQUIP a blinding orb. FIRE to throw it forward, briefly reducing the vision range and deafening all players it touches. This projectile can pass straight through walls.")
.addField("Dark Cover", "EQUIP a shadow orb, entering a phased world to place and target the orbs. PRESS the ability key to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD FIRE while targeting to move the marker further away. HOLD SECONDARY FIRE while targeting to move the marker closer. PRESS RELOAD to toggle normal targeting view.")
.addField("Shrouded Step", "EQUIP a shrouded step ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.")
.addField("From the Shadows", "EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport, or PRESS EQUIP for Omen to cancel his teleport.")
.addField("\u200B", "\u200B")
.addField("<:ac:932333902754906183> Omen Insights", "Pick Rate: **4.8%**\u200B                    Win Rate: **39.6%**")
.setImage("https://i.imgur.com/9016oE6.png")

    
    const embed11 = new MessageEmbed()
.setTitle("__DUELIST : PHOENIX__")
.setColor("#FF5733")
.setDescription("Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he's rushing in to fight on his own terms.\n__**About Moves:**__")
.addField("Blaze", "EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.")
.addField("Curveball", "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.")
.addField("Hot Hands", "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.")
.addField("Run it Back", "INSTANTLY place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.")
.addField("Heating Up", "PASSIVELY heal Phoenix instead of taking damage when standing in Phoenix's own fire")
.addField("\u200B", "\u200B")
.addField("<:ac:932333902754906183> Phoenix Insights", "Pick Rate: **4.3%**\u200B                    Win Rate: **37.4%**")
.setImage("https://i.imgur.com/oYdEIUW.png")

    
    const embed12 = new MessageEmbed()
.setTitle("__DUELIST : RAZE__")
.setColor("#FF5733")
.setDescription("Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of `boom`.\n__**About Moves:**__")
.addField("Blast Pack", "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit.")
.addField("Paint Shells", "EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.")
.addField("Boom Bot", "EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.")
.addField("Showstopper", "EQUIP a rocket launcher. FIRE shoots a rocket that does massive area damage on contact with anything.")
.addField("\u200B", "\u200B")
.addField("<:ac:932333902754906183> Raze Insights", "Pick Rate: **7.2%**\u200B                    Win Rate: **43.8%**")
.setImage("https://i.imgur.com/kWzq1vd.png")

    
    const embed13 = new MessageEmbed()
.setTitle("__DUELIST : REYNA__")
.setColor("#FF5733")
.setDescription("Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her sharply dependant on performance.\n__**About Moves:**__")
.addField("Devour", "Soul Harvest: Enemies that die to Reyna, or die within 3 seconds of taking damage from Reyna, leave behind Soul Orbs that last 3 seconds. Devour: INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the Soul Orb.")
.addField("Dismiss", "INSTANTLY consume a nearby Soul Orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.")
.addField("Leer", "EQUIP an ethereal, destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.")
.addField("Empress", "INSTANTLY enter a frenzy, increasing firing, equip and reload speed dramatically. Gain infinite charges of Soul Harvest abilities. When an enemy dies to Reyna, or dies within 3 seconds of taking damage from Reyna, the duration is renewed.")
.addField("\u200B", "\u200B")
.addField("<:ac:932333902754906183> Reyna Insights", "Pick Rate: **12.1%**\u200B                    Win Rate: **46.5%**")
.setImage("https://i.imgur.com/cKzodFH.png")

    
    const embed14 = new MessageEmbed()
.setTitle("__SENTINAL : SAGE__")
.setColor("#FF5733")
.setDescription("The bastion of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off forceful assaults, she provides a calm center to a hellish battlefield.\n__**About Moves:**__")
.addField("Slow Orb", "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.")
.addField("Healing Orb", "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.")
.addField("Barrier Orb", "EQUIP a barrier orb. FIRE places a wall that fortifies after a few seconds. ALT FIRE rotates the targeter.")
.addField("Resurrection", "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.")
.addField("\u200B", "\u200B")
.addField("<:ac:932333902754906183> Sage Insights", "Pick Rate: **11.1%**\u200B                    Win Rate: **45.9%**")
.setImage("https://i.imgur.com/6LROmm8.png")

    
    const embed15 = new MessageEmbed()
.setTitle("__INITIATOR : SKYE__")
.setColor("#FF5733")
.setDescription("Hailing from Australia, Skye and her band of beasts trailblaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye's side.\n__**About Moves:**__")
.addField("Trailblazer", "EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a concussive blast and damaging directly hit enemies.")
.addField("Guiding Light", "EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash.")
.addField("Regrowth", "EQUIP a healing trinket. HOLD FIRE to channel, healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.")
.addField("Seekers", "EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it nearsights them.")
.addField("\u200B", "\u200B")
.addField("<:ac:932333902754906183> Skye Insights", "Pick Rate: **4.7%**\u200B                    Win Rate: **40.3%**")
.setImage("https://i.imgur.com/YGGXodh.png")

    
    const embed16 = new MessageEmbed()
.setTitle("__INITIATOR : SOVA__")
.setColor("#FF5733")
.setDescription("Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.\n__**About Moves:**__")
.addField("Shock Bolt", "EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.")
.addField("Recon Bolt", "EQUIP a bow with recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.")
.addField("Owl Drone", "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.")
.addField("Hunter's Fury", "EQUIP a bow with three long-range, wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.")
.addField("Uncanny Marksman", "Sova's custom bow can fire his arrows and bounce them off terrain. Holding fire charges the bow's power, and the bolt is loosed when released. Press alt fire to change the number of bounces.Your arrows can bounce off terrain. Holding left click increases the bow's range trajectory. Right clicking Toggle through the desired number of terrain bounces by right clicking. The arrow is loosed when left click is released.")
.addField("\u200B", "\u200B")
.addField("<:ac:932333902754906183> Sova Insights", "Pick Rate: **6.5%**\u200B                    Win Rate: **42.2%**")
.setImage("https://i.imgur.com/jSHJB5a.png")

    
    const embed17 = new MessageEmbed()
.setTitle("__CONTROLLER : VIPER__")
.setColor("#FF5733")
.setDescription("The American Chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mindgames surely will.\n__**About Moves:**__")
.addField("Poison Cloud", "EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.")
.addField("Toxic Screen", "EQUIP a gas emitter launcher that penetrates terrain. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.")
.addField("Snake Bite", "EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and applies Vulnerable.")
.addField("Viper's Pit", "EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range of players and maximum health of enemies inside of it. HOLD the ability key to disperse the cloud early.")
.addField("Toxic", "You gradually generate and replenish the toxin that fuels your abilities. Enemies that cross through Viper's Poison Cloud, Toxic Screen, or Viper's Pit are instantly inflicted with at least 50 decay. Their decay level increases the longer they remain in contact with it.")
.addField("\u200B", "\u200B")
.addField("<:ac:932333902754906183> Viper Insights", "Pick Rate: **5.7%**\u200B                    Win Rate: **42.4%**")
.setImage("https://i.imgur.com/sMzIfMe.png")

    
    const embed18 = new MessageEmbed()
.setTitle("__DUELIST : YORU__")
.setColor("#FF5733")
.setDescription("Japanese native Yoru rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.\n__**About Moves:**__")
.addField("Fakeout", "EQUIP an echo that mimics footsteps when activated FIRE to activate and send the echo forward ALT FIRE to place an echo in place USE the inactive echo to send it forward.")
.addField("Blindside", "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in world.")
.addField("Gatecrash", "EQUIP to harness a rift tether FIRE to send the tether out moving forward ALT FIRE to place a tether in place ACTIVATE to teleport to the tether's location.")
.addField("DIMENSIONAL DRIFT", "EQUIP a mask that can see between dimensions FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside.")
.addField("\u200B", "\u200B")
.addField("<:ac:932333902754906183> Yoru Insights", "Pick Rate: **3.0%**\u200B                    Win Rate: **33.7%**")
.setImage("https://i.imgur.com/Hi8YeiO.png")

   const embeds = [embed1, embed2,  embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10, embed11, embed12, embed13, embed14, embed15, embed16, embed17, embed18]   
      
      pagination({
        embeds: embeds,
        channel: message.channel,
        author: message.author,
        time: 30000,
        pageTravel: true,
        button: [
          {
           name: "number",
           style: "DANGER",
           emoji: "<:reply:933423898442235945>"
          }
        ]
      });
    }
}