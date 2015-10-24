(function() {
  "use strict";

  angular.module("MyApp", []);

  MyCtrl.$inject = ["$filter"];

  angular.module("MyApp").controller("MyCtrl", MyCtrl);

  function MyCtrl($filter) {

    var vm = this;

    //Structure of a mod: { acronym, fullName, url, note(optional), maybe? youtubeLink/Icon }
    vm.mods = [
        { acronym: "SKSE", fullName: "Skyrim Script Extender", url: "http://skse.silverlock.org/", note: "" },
        { acronym: "USLEEP", fullName: "Unofficial Skyrim Legendary Edition Patch", url: "", note: "" },
        { acronym: "BOSS", fullName: "Better Oblivion Sorting Software", url: "https://loot.github.io/", note: "Obsolete! Use LOOT instead!" },
        { acronym: "DynDOLOD", fullName: "Dynamic Distant Objects LOD", url: "http://www.nexusmods.com/skyrim/mods/59721/", note: "Highly recommended!"},
        { acronym: "SkyUI", fullName: "Skyrim User Interface", url: "http://www.nexusmods.com/skyrim/mods/3863"},
        { acronym: "USKP", fullName: "Unofficial Skyrim Patch", url: "http://www.nexusmods.com/skyrim/mods/19", note: "" },
        { acronym: "UHFP", fullName: "Unofficial Hearthfire DLC Patch", url: "http://www.nexusmods.com/skyrim/mods/19", note: "" },
        { acronym: "UDBP", fullName: "Unofficial Dragonborn DLC Patch", url: "http://www.nexusmods.com/skyrim/mods/19", note: "" },
        { acronym: "UDGP", fullName: "Unofficial Dawnguard DLC Patch", url: "http://www.nexusmods.com/skyrim/mods/19", note: "" },
        { acronym: "TES5Edit", fullName: "The Elder Scrolls V Edit Tool", url: "http://www.nexusmods.com/skyrim/mods/25859", note: "" },
        { acronym: "SoS", fullName: "Sounds of Skyrim", url: "http://www.nexusmods.com/skyrim/mods/10886/", note: "" },
        { acronym: "CoT", fullName: "Climates of Tamriel - Weather - Lighting - Audio", url: "http://www.nexusmods.com/skyrim/mods/17802/", note: "" },
        { acronym: "EBT", fullName: "Enhanced Blood Textures", url: "http://www.nexusmods.com/skyrim/mods/60", note: "" },
        { acronym: "iHUD", fullName: "Immersive HUD", url: "http://www.nexusmods.com/skyrim/mods/3222", note: "" },
        { acronym: "UI", fullName: "", url: "", note: "User Interface - Not a mod, just a general term." },
        { acronym: "HUD", fullName: "", url: "", note: "Heads Up Display - Not a mod, just a general term." },
        { acronym: "FNIS", fullName: "Fore's New Idles in Skyrim", url: "http://www.nexusmods.com/skyrim/mods/11811/", note: "" },
        { acronym: "MO", fullName: "Mod Organizer", url: "http://www.nexusmods.com/skyrim/mods/1334", note: "Way better than NMM!" },
        { acronym: "NMM", fullName: "Nexus Mod Manager", url: "http://www.nexusmods.com/skyrim/mods/modmanager/", note: "Not as good as MO" },
        { acronym: "AOS", fullName: "Audio Overhaul for Skyrim", url: "http://www.nexusmods.com/skyrim/mods/43773/", note: "" },
        { acronym: "EBQO", fullName: "Even Better Quest Objectives", url: "http://www.nexusmods.com/skyrim/mods/32695", note: "" },
        { acronym: "MCM", fullName: "Mod Configuration Menu", url: "", note: "Component of SkyUI" },
        { acronym: "SkyProc", fullName: "Skyrim ReProcesser", url: "https://code.google.com/p/skyproc/", note: "Used to create patches for mods." },
        { acronym: "AQWMWR", fullName: "A Quality World Map with Roads", url: "http://www.nexusmods.com/skyrim/mods/4929", note: "(same mod as AQWM)" },
        { acronym: "UHRP", fullName: "Unofficial High Resolution Texture DLC Patch", url: "http://www.nexusmods.com/skyrim/mods/31255/", note: "Only download and use if you you are using the Official HD DLC" },
        { acronym: "ENB", fullName: "Enhanced Natural Bloom? Who knows...", url: "http://enbdev.com/download_mod_tesskyrim.htm", note: "Adds a lot more graphical features/fidelity" },
        { acronym: "SMIM", fullName: "Static Mesh Improvement Mod", url: "http://www.nexusmods.com/skyrim/mods/8655/", note: "" },
        { acronym: "RLO", fullName: "Realistic Light Overhaul", url: "http://www.nexusmods.com/skyrim/mods/30450/", note: "" },
        { acronym: "ELFX", fullName: "Enhanced Lights and FX", url: "http://www.nexusmods.com/skyrim/mods/27043", note: "" },
        { acronym: "7B", fullName: "SevenBase", url: "http://www.nexusmods.com/skyrim/mods/36992/", note: "" },
        { acronym: "ADEC", fullName: "Andale EyeCandy", url: "http://www.nexusmods.com/skyrim/mods/5390", note: "" },
        { acronym: "CBBE ", fullName: "Caliente's Beautiful Bodies Edition", url: "http://www.nexusmods.com/skyrim/mods/2666", note: "" },
        { acronym: "UNP", fullName: "UNpretend", url: "http://www.nexusmods.com/skyrim/mods/6709", note: "" },
        { acronym: "UNPB", fullName: "UNpretend Blessed", url: "http://www.nexusmods.com/skyrim/mods/1489", note: "" },
        { acronym: "RM", fullName: "Race Menu", url: "http://www.nexusmods.com/skyrim/mods/29624/", note: "" },
        { acronym: "ELE", fullName: "Enhanced Lighting for ENB", url: "http://www.nexusmods.com/skyrim/mods/59733/?", note: "" },
        { acronym: "ETAC", fullName: "Expanded Towns and Cities", url: "http://www.nexusmods.com/skyrim/mods/13608/?", note: "" },
        { acronym: "RCRN", fullName: "HDR Lighting and Weather Enhancement", url: "http://www.nexusmods.com/skyrim/mods/1875/?/", note: "" },
        { acronym: "IW", fullName: "Immersive Weapons", url: "http://www.nexusmods.com/skyrim/mods/27644/?", note: "" },
        { acronym: "IA", fullName: "Immersive Armors", url: "http://www.nexusmods.com/skyrim/mods/19733/?", note: "" },
        { acronym: "CoS", fullName: "Cloaks of Skyrim", url: "http://www.nexusmods.com/skyrim/mods/12092/?", note: "" },
        { acronym: "UFO", fullName: "Ultimate Follower Overhaul", url: "http://www.nexusmods.com/skyrim/mods/14037/?", note: "" },
        { acronym: "SFO", fullName: "Skyrim FLoral Overhaul", url: "http://www.nexusmods.com/skyrim/mods/141/?", note: "" },
        { acronym: "SkyRE", fullName: "Skyrim Redone", url: "http://www.nexusmods.com/skyrim/mods/9286/?", note: "" },
        { acronym: "XCE", fullName: "Xenius Character Enhancement", url: "http://www.nexusmods.com/skyrim/mods/2356/?", note: "" },
        { acronym: "SSME", fullName: "Skyrim Startup Memory Editor", url: "http://www.nexusmods.com/skyrim/mods/50305/?", note: "" },
        { acronym: "CTD", fullName: "", url: "", note: "Crash to Desktop - not a mod, just general term." },
        { acronym: "EC", fullName: "Enhanced Camera", url: "http://www.nexusmods.com/skyrim/mods/57859/?", note: "Get this mod now." },
        { acronym: "CWO", fullName: "Civil War Overhaul", url: "http://www.nexusmods.com/skyrim/mods/37216/?", note: "" },
        { acronym: "OBIS", fullName: "Organized Bandits in Skyrim", url: "http://www.nexusmods.com/skyrim/mods/31264/?", note: "" },
        { acronym: "MTWWO", fullName: "Moonlight Tales - Werewolf and Werebear Overhaul", url: "http://www.nexusmods.com/skyrim/mods/35470/?", note: "" },
        { acronym: "PM", fullName: "Perkus Maximus", url: "http://www.nexusmods.com/skyrim/mods/59849/?", note: "" },
        { acronym: "BVFE", fullName: "Better Vampire Fangs and Eyes", url: "http://www.nexusmods.com/skyrim/mods/38829/?", note: "" },
        { acronym: "ASIS", fullName: "Automatic Spells Incresed Spawns", url: "http://www.nexusmods.com/skyrim/mods/18436/?", note: "" },
        { acronym: "STEP", fullName: "Skyrim Total Enhancement Project", url: "http://www.nexusmods.com/skyrim/mods/11/?", note: "" },
        { acronym: "CC", fullName: "Customizable Camera", url: "http://www.nexusmods.com/skyrim/mods/37347/?", note: "" },
        { acronym: "SUM", fullName: "SkyProc Unified Manager", url: "http://www.nexusmods.com/skyrim/mods/29865/?", note: "" },
        { acronym: "BFT", fullName: "Better Fast Travel", url: "http://www.nexusmods.com/skyrim/mods/15508/?", note: "" },
        { acronym: "CFTO", fullName: "Complete Fast Travel Overhaul", url: "http://www.nexusmods.com/skyrim/mods/68221/?", note: "" },
        { acronym: "AV", fullName: "Automatic Variants", url: "http://www.nexusmods.com/skyrim/mods/21377/?", note: "" },
        { acronym: "ASH", fullName: "Apachii Sky Hair", url: "http://www.nexusmods.com/skyrim/mods/10168/?", note: "" },
        { acronym: "TRF", fullName: "The Ruffled Feather - Mod Collection", url: "http://www.nexusmods.com/skyrim/mods/13268/?", note: "Mod Collection of SparrowPrince mods" },
        { acronym: "PCEA", fullName: "PC Exclusive Animation Path", url: "http://www.nexusmods.com/skyrim/mods/14871", note: "" },
        { acronym: "AFT", fullName: "Amazing Follower Tweaks", url: "http://www.nexusmods.com/skyrim/mods/15524/", note: "" },
        { acronym: "OCS", fullName: "Open Cities Skyrim", url: "http://www.nexusmods.com/skyrim/mods/8058/?", note: "" },
        { acronym: "XPMS", fullName: "XP32 Maximum Skeleton", url: "http://www.nexusmods.com/skyrim/mods/26800/", note: "" },
        { acronym: "XP32", fullName: "XP32 Maximum Skeleton", url: "http://www.nexusmods.com/skyrim/mods/26800/", note: "" },
        { acronym: "XPMSE", fullName: "XP32 Maximum Skeleton Extended", url: "http://www.nexusmods.com/skyrim/mods/68000", note: "" },
        { acronym: "WAFR", fullName: "Weapons and Armor Fixes Remade", url: "http://www.nexusmods.com/skyrim/mods/34093", note: "" },
        { acronym: "CCOR", fullName: "Complete Crafting Overhaul Remade", url: "http://www.nexusmods.com/skyrim/mods/49791", note: "" },
        { acronym: "BOYD", fullName: "Bring Out Your Dead", url: "http://www.nexusmods.com/skyrim/mods/14178", note: "" },
        { acronym: "ILS", fullName: "", url: "", note: "Infinite loading screen - not a mod, just a general term" },
        { acronym: "CACO", fullName: "Complete Alchemy and Cooking Overhaul", url: "http://www.nexusmods.com/skyrim/mods/69306/?", note: "" },
        { acronym: "3DNPC", fullName: "Interesting NPCs", url: "http://www.nexusmods.com/skyrim/mods/8429/?", note: "" },
        { acronym: "ABT", fullName: "Arrow and Bolt Tweaks", url: "http://www.nexusmods.com/skyrim/mods/11941", note: "" },
        { acronym: "AMT", fullName: "A Matter of Time", url: "http:://www.nexusmods.com/skyrim/mods/44091/", note: "" },
        { acronym: "AQWM", fullName: "A Quality World Map With Roads", url: "http://www.nexusmods.com/skyrim/mods/4929", note: "(same mod as AQWMWR)" },
        { acronym: "ASLAL ", fullName: "Alternate Start Live Another Life", url: "http://www.nexusmods.com/skyrim/mods/9557/", note: "" },
        { acronym: "BDC", fullName: " Better Dialogue Controls", url: "http://www.nexusmods.com/skyrim/mods/27371", note: "See also BMC" },
        { acronym: "BMC", fullName: "Better MessageBox Controls", url: "http://www.nexusmods.com/skyrim/mods/28170/", note: "See Also BDC" },
        { acronym: "BMBC", fullName: "Better MessageBox Controls", url: "http://www.nexusmods.com/skyrim/mods/28170/", note: "" },
        { acronym: "BSA", fullName: "Bethesda Softworks Archive", url: "", note: "" },
        { acronym: "BS", fullName: "Beyond Skyrim", url: "http://www.darkcreations.org/forums/forum/119-beyond-skyrim/", note: "" },
        { acronym: "BSW", fullName: "Better Shaped Weapons", url: "http://www.nexusmods.com/skyrim/mods/39870", note: "" },
        { acronym: "BYOH", fullName: "Build Your Own Home", url: "http://www.nexusmods.com/skyrim/mods/18480", note: "" },
        { acronym: "CCF", fullName: "Clothing and Clutter Fixes", url: "http://www.nexusmods.com/skyrim/mods/43053", note: "" },
        { acronym: "CDO", fullName: "Combat Drama Overhaul", url: "http://www.nexusmods.com/skyrim/mods/52474", note: "" },
        { acronym: "CE", fullName: "Combat Evolved", url: "http://www.nexusmods.com/skyrim/mods/56147", note: "" },
        { acronym: "CFM", fullName: "Categorized Favorites Menu", url: "http://www.nexusmods.com/skyrim/mods/4862", note: "" },
        { acronym: "CCFM ", fullName: "Customized Categorized Favorites Menu", url: "http://www.nexusmods.com/skyrim/mods/34150", note: "" },
        { acronym: "CH", fullName: "Convienient Horses", url: "http://www.nexusmods.com/skyrim/mods/14950", note: "" },
        { acronym: "CRF", fullName: "Cutting Room Floor", url: "http://www.nexusmods.com/skyrim/mods/47327", note: "" },
        { acronym: "DoS", fullName: "Dawn of Skyrim", url: "http://www.nexusmods.com/skyrim/mods/58275", note: "" },
        { acronym: "DAYMOYL", fullName: "Death Alternative: Your Money or Your Life", url: "http://www.nexusmods.com/skyrim/mods/45894", note: "" },
        { acronym: "DA", fullName: "Death Alternative: Your Money or Your Life", url: "http://www.nexusmods.com/skyrim/mods/45894", note: "" },
        { acronym: "DC", fullName: "Deadly Combat", url: "http://www.nexusmods.com/skyrim/mods/5485", note: "" },
        { acronym: "DCO", fullName: "Dragon Combat Overhaul", url: "http://www.nexusmods.com/skyrim/mods/32597", note: "" },
        { acronym: "DCR", fullName: "Duel Combat Realism", url: "http://www.nexusmods.com/skyrim/mods/2700", note: "" },
        { acronym: "DD", fullName: "Deadly Dragons", url: "http://www.nexusmods.com/skyrim/mods/3829", note: "" },
        { acronym: "De-LARP", fullName: "Skyrim De-LARPification Project", url: "http://www.nexusmods.com/skyrim/mods/16072/?", note: "(thinner weapon meshes)" },
        { acronym: "DoD", fullName: "Dance of Death", url: "http://www.nexusmods.com/skyrim/mods/10906", note: "" },
        { acronym: "DSR", fullName: "Duel Sheath Redux", url: "http://www.nexusmods.com/skyrim/mods/34155", note: "" },
        { acronym: "EEO", fullName: "Ethereal Elven Overhaul", url: "http://www.nexusmods.com/skyrim/mods/24273", note: "" },
        { acronym: "EGO", fullName: "Epic Gameplay Overhaul", url: "http://www.nexusmods.com/skyrim/mods/52487", note: "" },
        { acronym: "EEF", fullName: "Extensible Follower Framework", url: "http://www.nexusmods.com/skyrim/mods/12933", note: "" },
        { acronym: "EMO", fullName: "Epic Music Overhaul", url: "http://www.nexusmods.com/skyrim/mods/53888", note: "" },
        { acronym: "EO", fullName: "Equipping Overhaul", url: "http://www.nexusmods.com/skyrim/mods/49784", note: "" },
        { acronym: "ERSO", fullName: "Erkeil’s Real Skyrim Overhaul", url: "http://erkeilmods.altervista.org/skyrim/r-s-o/", note: "(Non nexus mod)" },
        { acronym: "ESF", fullName: "Enhanced Skyrim Factions", url: "http://www.nexusmods.com/skyrim/mods/22650", note: "" },
        { acronym: "ESP", fullName: "Elder Scrolls Plugin File", url: "", note: ".esp" },
        { acronym: "ESM", fullName: "Elder Scrolls Master File", url: "", note: ".esm" },
        { acronym: "FCO", fullName: "Follower Commentary Overhaul", url: "http://www.nexusmods.com/skyrim/mods/52019", note: "" },
        { acronym: "FIO", fullName: "Fire and Ice Overhaul", url: "http://www.nexusmods.com/skyrim/mods/43241", note: "" },
        { acronym: "FISS", fullName: "File Access Interface for Skyrim Script", url: "http://www.nexusmods.com/skyrim/mods/48265/?", note: "" },
        { acronym: "FF", fullName: "Frostfall", url: "http://www.nexusmods.com/skyrim/mods/11163", note: "" },
        { acronym: "FF", fullName: "Familiar Faces", url: "http://www.nexusmods.com/skyrim/mods/54509", note: "" },
        { acronym: "F2F", fullName: "Face to Face", url: "http://www.nexusmods.com/skyrim/mods/30533", note: "" },
        { acronym: "FSP", fullName: "Fantasy Soundtrack Project", url: "http://www.nexusmods.com/skyrim/mods/46518", note: "" },
        { acronym: "GCP", fullName: "Grimy's Combat Patcher", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "GDO", fullName: "Guard Dialogue Overhaul", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "GEMS", fullName: "Gameplay Enhancement Mods for Skyrim", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "GoS", fullName: "Grass on Steroids", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "GUISE", fullName: "Grimy's Unrealistic Immersionless Skill Expansion", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "HDT", fullName: "HDT Physics Extension", url: "http://www.nexusmods.com/skyrim/mods/", note: "HDT is the author's name" },
        { acronym: "HLE", fullName: "High Level Enemies", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "HQ3DM", fullName: "Hight Quality 3D Map", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "ICW", fullName: "Immersive College of Winterhold", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "IH", fullName: "Immersive Horses", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "IIO", fullName: "Important Information Overhaul", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "IFP", fullName: "Immersive First Person View", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "iNeed", fullName: "Immersive Needs", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "IP", fullName: "Immersive Patrols", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "INPC", fullName: "Inconsequential NPCs", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "NPC", fullName: "Non Player Character", url: "http://www.nexusmods.com/skyrim/mods/", note: "not a mod - just a general term" },
        { acronym: "ISC", fullName: "Immersive Sounds Compendium", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "JS", fullName: "Jaysus Swords", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "JKS", fullName: "JK's Skyrim", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "JoP", fullName: "Joy of Perspective", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "LIHUD2", fullName: "Less Intrusive HUD II", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "LOD", fullName: "Level of Detail", url: "http://www.nexusmods.com/skyrim/mods/", note: "not a mod - just a general term" },
        { acronym: "LoS", fullName: "Lanterns of Skyrim", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "LS", fullName: "Last Seed", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "MBI", fullName: "Molag Bal's Inferno", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "MHIYM", fullName: "My Home is Your Home", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "MM", fullName: "Monster Mod", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "NLA", fullName: "Natural Lighting and Atmospheric ENB", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "PW", fullName: "Pure Water", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "PW", fullName: "Pure Weather", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "PCaPP", fullName: "PerMa Compatibility and PaMa Patches", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "PerMa", fullName: "Perkus Maximus", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "PaMa", fullName: "Patchus Maximus", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "RAT", fullName: "Realistic Aspen Trees", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "RND", fullName: "Realistic Needs and Diseases", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "RFYL", fullName: "Run for Your Lives", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "RLS", fullName: "Relighting Skyrim", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "RoTE", fullName: "Revenge of the Enemies", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "RWT", fullName: "Realistic Water 2", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "RV", fullName: "RealVision ENB", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "SBT", fullName: "Skyrim Bigger Trees", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "SSBT", fullName: "Skysight: Simply Bigger Trees", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "SIC", fullName: "Skyrim Immersive Creatures", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "SDO", fullName: "Skyrim Distance Overhaul", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "SkyMoMod ", fullName: "Skyrim Monster Mod", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "SMM", fullName: "Skyrim Monster Mod", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "SLoD ", fullName: "Silly Level of Detail", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "SMC", fullName: "Skyrim Mod Combiner", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "SMO", fullName: "Simple Magic Overhaul", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "SoS", fullName: "Seasons of Skyrim", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "SoT", fullName: "Sands of Time", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "SPERG ", fullName: "Skyrim Perk Enhancements and Rebalanced Gameplay", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "SPO", fullName: "Skyrim Project Optimization", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "SPP", fullName: "Skyrim Performance Plus", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "SSR", fullName: "Stealth Skills Rebalanced", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "SWIFT", fullName: "Skyrim Wayshrines - Immersive Fast Travel", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "SW", fullName: "Steam Workshop", url: "http://www.nexusmods.com/skyrim/mods/", note: "No no no use NexusMods instead to get your mods" },
        { acronym: "TAVE", fullName: "Town and Villages Enhanced", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "TCIY", fullName: "The Choice is Yours", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "TIE", fullName: "Timing is Everything", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "TPC", fullName: "Texture Pack Combiner", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "TS", fullName: "True Storms", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "TTYM", fullName: "Think To Yourself Messages", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "TO", fullName: "Tamriel Online", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "UGG", fullName: "Unique Grasses and Groundcovers", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "UISO", fullName: "Useless Interior Shop Overhaul", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "UC", fullName: "Ultimate Combat", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "URWL", fullName: "Ultra Realistic World Lighting", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "UU", fullName: "Unique Uniques", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "WB", fullName: "Wrye Bash", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "WAC", fullName: "Wet and Cold", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "WAO", fullName: "Weather and Ambience Overhaul", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "WIC", fullName: "Winter is Coming", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "WoTE", fullName: "Weapons of the Third Era", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "WoW", fullName: "Wonders of Weather", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        { acronym: "Your Own Thoughts", fullName: "placeholder", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
        //{ acronym: "zzzplaceholder", fullName: "placeholder", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },

        //Last item
        { acronym: "LOOT", fullName: "Load Order Optimization Tool", url: "https://loot.github.io/" }
        // backup { acronym: "zzzplaceholder", fullName: "placeholder", url: "http://www.nexusmods.com/skyrim/mods/", note: "" },
    ];

    vm.mods = $filter("orderBy")(vm.mods, "acronym");

  }

  var lastUpdated = document.lastModified.substr(0,10);
  document.getElementById("lastUpdated").innerHTML = lastUpdated;

}());
