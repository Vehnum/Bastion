/* ============================================================
   THE BASTION ARCHIVE — search index
   Add an entry here any time a new page is created.
   depth: 0 = root, 1 = one folder deep (characters/, locations/, world/)
   ============================================================ */
const BASTION_SEARCH_INDEX = [
  { title: "The Bastion Archive", type: "Home", url: "index.html", keywords: "home portal overview" },

  { title: "Scorio", type: "Character", url: "characters/scorio.html", keywords: "protagonist char cinder tomb spark blood baron the scourer red list proscribed house chimera withdrew renounced tournament heart fracture burn-off sol iron mana jova spike wager naomi rift praximar blackmail terrible idea nox delightful secret marinating imperial gel emberling kuragin duel eberro betrayal gauntlet second trial herdsmen infernarch fellowship departure left the academy book 2 rascor plains manticore xiang xi enforcer bastion rebellion ten day truce nissa dola abentha ixithilion goldyolk fiery shoals white queen council compulsion aura" },
  { title: "Lianshi", type: "Character", url: "characters/lianshi.html", keywords: "cinder emberling pyre lord nun of the red journals academy juniper tutoring invulnerability immovability pledge reconciliation death cult acolyte funnel trap left the academy fellowship" },
  { title: "Leonis", type: "Character", url: "characters/leonis.html", keywords: "cinder emberling pyre lord golden king the grim academy kuragin pep talk tournament broken elbow old gauntlet pledge nezzar child king trial emberling final gauntlet run left the academy fellowship" },
  { title: "Naomi", type: "Character", url: "characters/naomi.html", keywords: "nightmare lady emberling widow's tower mistress esoka mentor readmitted feng kuragin tournament refusal rift the flame interlude estranged watching in secret alben worm rescue sapphire vials golden statuette left the academy fellowship" },
  { title: "Pyre Lord Praximar", type: "Character", url: "characters/praximar.html", keywords: "chancellor academy hydra hell whip antagonist other characters readmission final warning blackmail kayla heart oath sixth chamber public humiliation naomi readmission double defection book 2 moira telepathic alliance tome of souls veris eira letter class reports treasures manipulation" },
  { title: "Jova Spike", type: "Character", url: "characters/jova-spike.html", keywords: "tomb spark emberling imperator locker mystery juniper zala other characters ravenna accardi amber circuit wager sparring duel massamach heart oath nox journal warning herdsmen second place shroud tomb spark aura left the academy fellowship book 2 lastrock charnel duchess blood ox horror form manifested power ixithilion goldyolk manticore" },
  { title: "Imogen", type: "Character", url: "characters/imogen.html", keywords: "imperator antagonist portal ettera shadow fog mordecholio other characters the fallen lacuna sol zellair joranvyn house basilisk" },
  { title: "Dola", type: "Character", url: "characters/dola.html", keywords: "house basilisk narrows the double other characters kayla asking after book 2 rebellion uprising rebel leader abentha ten day truce" },
  { title: "Sol", type: "Character", url: "characters/sol.html", keywords: "imperator sol the just imogen husband ferula halo duplication scorio companion" },
  { title: "Other Characters", type: "Character Hub", url: "characters/other-characters.html", keywords: "index directory minor characters supporting cast full articles everyone else" },
  { title: "Kuragin", type: "Character", url: "characters/kuragin.html", keywords: "emberling top five rival crab claws carapace mess hall accusation duel eberro betrayal claim sir kuragin king's warmonger tournament winner jova spike team" },
  { title: "Juniper", type: "Character", url: "characters/juniper.html", keywords: "emberling fellowship jova spike roommate lianshi journals death cult acolyte reconciliation tutor left the academy" },
  { title: "Zala", type: "Character", url: "characters/zala.html", keywords: "emberling top five fellowship jova spike best friend roommate juniper left the academy" },
  { title: "Nox", type: "Character", url: "characters/nox.html", keywords: "imperial ghost toad old academy guardian burrow imperial gel delightful secret marinating technique quantics book favorite friend scorio leonis lianshi black star farm alben worm" },
  { title: "Nova", type: "Character", url: "characters/nova.html", keywords: "the white queen charnel duchess defenders of bastion imogen sol praximar readmission golden wings halo ferula fiery shoals empyreal prophecy book 2 preeminence desiree departure imperator ambition heart oaths council ixithilion rescue golden circuit" },
  { title: "Nissa", type: "Character", url: "characters/nissa.html", keywords: "red list the flayer of men warrens group havert hestia salamander book 2 house basilisk eira rebellion agitator xiang xi retaliation power regeneration" },

  { title: "Book 1", type: "Story", url: "story/book-1.html", keywords: "summary plot chapters 1-80 complete story tournament house chimera sol praximar blackmail jova wager naomi rift lianshi emberling leonis elbow terrible idea marinating gambit nox gauntlet's end final gauntlet run departure fellowship herdsmen manticore infernarch open threads" },
  { title: "Book 2: Rascor Plains", type: "Story", url: "story/book-2.html", keywords: "book 2 rascor plains summary plot fellowship manticore infernarch herdsmen ash belt rain wall farmlands fiery shoals white queen nova council rebellion xiang xi nissa dola abentha ixithilion goldyolk gold islands" },

  { title: "The Fiery Shoals", type: "Location", url: "locations/the-fiery-shoals.html", keywords: "nova white queen crashed gold island crucible golden cupola bron celestial coffer captain thorne consortium iron tyrant preeminence desiree moira kyrie amity balco lava trees rascor plains" },

  { title: "Bastion", type: "Location", url: "locations/bastion.html", keywords: "city cylinder sun-wire ruins narrows graveyard wards hell's door dead portal mutated architecture imogen aftermath deepening unrest makiros deniers" },
  { title: "The Academy", type: "Location", url: "locations/the-academy.html", keywords: "basilica archspire amber circuit hall of golden reflections mess hall tournament arena house sponsorship offices curriculum instructors library hexagonal cells parafiendology inimical botany banned histories warded books nox delightful secret marinating gelegos" },
  { title: "The Warrens", type: "Location", url: "locations/the-warrens.html", keywords: "final door brass door exile red list underground" },
  { title: "The Old Academy", type: "Location", url: "locations/the-old-academy.html", keywords: "abandoned ruins private gauntlet path of ascension archspire imogen" },

  { title: "Great Souls & Rank", type: "System", url: "world/great-souls.html", keywords: "path of ascension char cinder emberling tomb spark flame vault dread blaze pyre lord blood baron charnel duke crimson earl imperator archspire house sponsorship the fallen infernarch herdsmen warning journal scorio jova spike" },
  { title: "The Igneous Heart & Mana", type: "System", url: "world/igneous-heart.html", keywords: "mana coal copper iron bronze silver gold sapphire ruby diamond noumenon saturation tension ignition treasures fracturing burn-off the fallen lacuna four trials pill hierarchy black star fat cricket glittering sage luminous ghost peaceful wheel attenuation spider crystal gauge heart oath praximar blackmail jova spike wager delightful secret marinating technique imperial gel nox tomb spark condensation bronze mana" },
  { title: "The Gauntlet", type: "System", url: "world/the-gauntlet.html", keywords: "trial chambers old gauntlet private gauntlet trial room first trial four trials mandatory end of year run final run golden statuette funnel trap second trial tomb spark scorio jova spike chen she standings" },
  { title: "The Four Houses", type: "System", url: "world/the-houses.html", keywords: "hydra kraken chimera basilisk politics deniers empyreal prophecy sponsorship recruitment selena wrack gelegos" },
  { title: "The Rascor Plains", type: "Geography", url: "locations/the-rascor-plains.html", keywords: "ash belt rain wall farmlands gold islands golden circuit curse mana dust book 2 geography scale bastion recontextualized hell places" },
  { title: "Manticore", type: "Organization", url: "world/manticore.html", keywords: "evelyn davelos simeon dameon dread blaze chasm the sloop independent deep hell whispered fate's whisper deep cut book 2" },
  { title: "The Empyreal Prophecy", type: "History", url: "world/empyreal-prophecy.html", keywords: "empyreal prophecy the pit ettera failed assault imogen sol zellair joranvyn the fallen house basilisk deniers riots unrest great soul organizations curriculum infernarch nova deep cut" },
  { title: "The Pit & Ettera", type: "Cosmology", url: "world/the-pit-and-ettera.html", keywords: "the pit ettera dead portal noumenon imperator the curse mana grade infernarch empyreal prophecy herdsmen scorio cosmology deep cut" },
  { title: "Hell", type: "Cosmology", url: "world/hell.html", keywords: "hell overview geography rascor plains iron weald fury spires iron tyrant vale of regrets fates whisper lastrock blood ox the pit danger scale survey regions" },

  { title: "Feiyan & Helena", type: "Character", url: "characters/feiyan-and-helena.html", keywords: "street musicians club owners the flame sunphire ward 11 basilisk operative fiddler book 2 evelyn introduction old memek" },
  { title: "Radert", type: "Character", url: "characters/radert.html", keywords: "deceased explorer brass door warrens bridge steel rod chalk salamander" },
  { title: "Instructor Helminth", type: "Character", url: "characters/helminth.html", keywords: "the hell whip dread blaze academy instructor geography of hell tournament official losers bracket courier memek" },
  { title: "Instructor Hera", type: "Character", url: "characters/hera.html", keywords: "dread blaze academy instructor history of bastion mana studies heart fracture burn-off fallen four trials defenders of bastion light beam tower" },
  { title: "Instructor Feng", type: "Character", url: "characters/feng.html", keywords: "dread blaze academy instructor sparring forms slowing cone naomi humiliation defenders of bastion phasing excavation" },
  { title: "Instructor Rex", type: "Character", url: "characters/rex.html", keywords: "dread blaze academy instructor tactics eye purple gem ghost enemies teamwork" },
  { title: "Jelan", type: "Character", url: "characters/jelan.html", keywords: "apothecary sincere refinery black star flowers mana pills tinctures mana grades traps heartstones" },
  { title: "Old Memek", type: "Character", url: "characters/old-memek.html", keywords: "oud musician ward 11 comic relief cover identity the flame book 2 manticore" },
  { title: "The Warrens Group", type: "Character", url: "characters/the-warrens-group.html", keywords: "havert hestia salamander sal brass door escape nissa red list exiles deceased" },
  { title: "Defenders of Bastion", type: "Character", url: "characters/defenders-of-bastion.html", keywords: "nova lady maeve grunsch havarn desiree raugr feng hera valdun jarex echo amity sharess imogen assault roster continuity note" },
  { title: "Ravenna Accardi", type: "Character", url: "characters/ravenna-accardi.html", keywords: "emberling tomb spark top five house hydra jova rival stone projectiles tournament" },
  { title: "Chen She", type: "Character", url: "characters/chen-she.html", keywords: "emberling top five house kraken kuragin bout gauntlet third place unnervingly pleasant" },
  { title: "Exero & Famissa", type: "Character", url: "characters/exero-and-famissa.html", keywords: "cinders ward 4 flame vault green flame constructs academy tour" },
  { title: "Selena, Wrack & Gelegos", type: "Character", url: "characters/house-chimera-recruiters.html", keywords: "house chimera recruiters principal recruiter attenuation spider crystal gauge rank 35 cinder sponsorship" },
  { title: "Chloe", type: "Character", url: "characters/chloe.html", keywords: "tournament opponent teleportation scorio loss" },
  { title: "Kayla", type: "Character", url: "characters/kayla.html", keywords: "praximar informant dola crime blackmail mentioned only unresolved" },
  { title: "Makiros", type: "Character", url: "characters/makiros.html", keywords: "unrest instigator bastion streets civic unrest mentioned only" },
  { title: "Massamach", type: "Character", url: "characters/massamach.html", keywords: "tournament fighter jova spike opponent brawler" },
  { title: "Manticore: Evelyn, Davelos & Simeon", type: "Character", url: "characters/manticore-evelyn-davelos-simeon.html", keywords: "manticore dread blazes founders evelyn hair web travel davelos metallic mist leonis zala simeon possession fiery shoals" },
  { title: "Pyre Lady Moira", type: "Character", url: "characters/moira.html", keywords: "house hydra liaison fiery shoals touch telepathy praximar alliance council concessions" },
  { title: "Abentha", type: "Character", url: "characters/abentha.html", keywords: "bastion rebel leader dola truce uprising" },
  { title: "Kyrie", type: "Character", url: "characters/kyrie.html", keywords: "tomb spark fiend scholar parafiendologist of xon fiery shoals guide" },
  { title: "Bron", type: "Character", url: "characters/bron.html", keywords: "dread blaze constable golden cupola fiery shoals crucible guard" },
  { title: "Pyre Lady Druanna", type: "Character", url: "characters/druanna.html", keywords: "house kraken farmlands security obsidian golem davelos praximar" },
  { title: "Flame Vault Xiang Xi", type: "Character", url: "characters/xiang-xi.html", keywords: "house hydra enforcer deceased protestors burned killed scorio fellowship retaliation" },
  { title: "Veris", type: "Character", url: "characters/veris.html", keywords: "praximar aide household letter eira house basilisk interlude" },

  { title: "Editorial Guidelines", type: "Meta", url: "editorial-guidelines.html", keywords: "conventions rules for editors sourcing discipline gauntlet death continuity flagging chapter references character template lean template sidebar workflow" },
];
