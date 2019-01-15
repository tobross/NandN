var characters = [
    barbarian= {
        active: true,
        image: "./assets/images/barb2.jpg",
        class: "Barbarian",
        name: "Bunhildo",
        playername: "Furb",
        stats: {
        STR: "19",
        STRMOD: "+4",
        DEX: "12",
        DEXMOD: "+1",
        CON: "19",
        CONMOD: "+4",
        INT: "8",
        INTMOD: "-1",
        WIS: "11",
        WISMOD: "0",
        CHA: "15",
        CHAMOD: "+2"},
        personality: {
            alignment: "Lawful Good",
            background: "Outlander",
            race: "Mountain Dwarf"
        }
    },
    bard= {
        active: false,
        image: "./assets/images/bard.jpg",
        class: "Bard",
        name: "---",
        playername: "",
        stats: {
        STR: "10",
        STRMOD: "0",
        DEX: "15",
        DEXMOD: "+2",
        CON: "14",
        CONMOD: "+2",
        INT: "16",
        INTMOD: "+3",
        WIS: "15",
        WISMOD: "+2",
        CHA: "18",
        CHAMOD: "+4"},
        personality: {
            alignment: "Neutral",
            background: "Entertainer",
            race: "Tiefling"
        }
    },
    cleric= {
        active: true,
        image: "./assets/images/cleric.jpg",
        class: "Cleric",
        name: "Sylfine",
        playername: "Izzy",
        stats: {
        STR: "16",
        STRMOD: "+3",
        DEX: "12",
        DEXMOD: "+1",
        CON: "16",
        CONMOD: "+3",
        INT: "10",
        INTMOD: "0",
        WIS: "16",
        WISMOD: "+3",
        CHA: "14",
        CHAMOD: "+2"},
        personality: {
            alignment: "Chaotic Good",
            background: "Acolyte",
            race: "Half-Elf"
        }
    },
    cleric= {
        active: false,
        image: "./assets/images/cleric.jpg",
        class: "Cleric",
        name: "---",
        playername: "Shelby",
        stats: {
        STR: "16",
        STRMOD: "+3",
        DEX: "13",
        DEXMOD: "+1",
        CON: "18",
        CONMOD: "+4",
        INT: "13",
        INTMOD: "+1",
        WIS: "17",
        WISMOD: "+3",
        CHA: "8",
        CHAMOD: "-1"},
        personality: {
            alignment: "Chaotic Good",
            background: "Acolyte",
            race: "Rock Gnome"
        }
    },
    druid= {
        active: false,
        image: "./assets/images/bard.jpg",
        class: "Druid",
        name: "---",
        playername: "John",
        stats: {
        STR: "13",
        STRMOD: "+1",
        DEX: "15",
        DEXMOD: "+2",
        CON: "17",
        CONMOD: "+3",
        INT: "12",
        INTMOD: "+1",
        WIS: "18",
        WISMOD: "+4",
        CHA: "10",
        CHAMOD: "0"},
        personality: {
            alignment: "Good",
            background: "Hermit",
            race: "Wood Elf"
        }
    },
    fighter= {
        active: false,
        image: "./assets/images/fighter.jpg",
        class: "Fighter",
        name: "---",
        playername: "---",
        stats: {
        STR: "16",
        STRMOD: "+3",
        DEX: "17",
        DEXMOD: "+3",
        CON: "15",
        CONMOD: "+2",
        INT: "12",
        INTMOD: "+1",
        WIS: "12",
        WISMOD: "+1",
        CHA: "16",
        CHAMOD: "+3"},
        personality: {
            alignment: "Good",
            background: "Soldier",
            race: "White Dragonborn"
        }
    },
    monk= {
        active: false,
        image: "./assets/images/monk.jpg",
        class: "Monk",
        name: "---",
        playername: "---",
        stats: {
        STR: "10",
        STRMOD: "0",
        DEX: "19",
        DEXMOD: "+4",
        CON: "12",
        CONMOD: "+1",
        INT: "10",
        INTMOD: "0",
        WIS: "16",
        WISMOD: "+3",
        CHA: "12",
        CHAMOD: "+1"},
        personality: {
            alignment: "Lawful Good",
            background: "Hermit",
            race: "Lightfoot Halfling"
        }
    },
    paladin= {
        active: false,
        image: "./assets/images/paladin.jpg",
        class: "Paladin",
        name: "---",
        playername: "---",
        stats: {
        STR: "19",
        STRMOD: "+4",
        DEX: "12",
        DEXMOD: "+1",
        CON: "16",
        CONMOD: "+3",
        INT: "11",
        INTMOD: "0",
        WIS: "12",
        WISMOD: "+1",
        CHA: "14",
        CHAMOD: "+2"},
        personality: {
            alignment: "Lawful Good",
            background: "Hermit",
            race: "Half-Orc"
        }
    },
    ranger= {
        active: false,
        image: "./assets/images/ranger.jpg",
        class: "Ranger",
        name: "---",
        playername: "---",
        stats: {
        STR: "12",
        STRMOD: "+1",
        DEX: "18",
        DEXMOD: "+4",
        CON: "14",
        CONMOD: "+2",
        INT: "15",
        INTMOD: "+2",
        WIS: "16",
        WISMOD: "+3",
        CHA: "11",
        CHAMOD: "0"},
        personality: {
            alignment: "Good",
            background: "Outlander",
            race: "Human"
        }
    },
    rogue= {
        active: true,
        image: "./assets/images/rogue.jpg",
        class: "Rogue",
        name: "Collenconsci",
        playername: "David",
        stats: {
        STR: "15",
        STRMOD: "+2",
        DEX: "19",
        DEXMOD: "+4",
        CON: "14",
        CONMOD: "+2",
        INT: "16",
        INTMOD: "+3",
        WIS: "16",
        WISMOD: "+3",
        CHA: "16",
        CHAMOD: "+3"},
        personality: {
            alignment: "Chaotic Neutral",
            background: "Charlatan",
            race: "Wood Elf"
        }
    },
    sorcerer= {
        active: true,
        image: "./assets/images/sorc.jpg",
        class: "Sorcerer",
        name: "Nifee",
        playername: "Namine",
        stats: {
        STR: "13",
        STRMOD: "+1",
        DEX: "11",
        DEXMOD: "0",
        CON: "18",
        CONMOD: "+4",
        INT: "18",
        INTMOD: "+4",
        WIS: "14",
        WISMOD: "+2",
        CHA: "16",
        CHAMOD: "+3"},
        personality: {
            alignment: "Good",
            background: "Sage",
            race: "Rock Gnome"
        }
    },
    warlock= {
        active: false,
        image: "./assets/images/warlock.jpg",
        class: "Warlock",
        name: "---",
        playername: "---",
        stats: {
        STR: "",
        STRMOD: "",
        DEX: "",
        DEXMOD: "",
        CON: "",
        CONMOD: "",
        INT: "",
        INTMOD: "",
        WIS: "",
        WISMOD: "",
        CHA: "",
        CHAMOD: ""},
        personality: {
            alignment: "",
            background: "",
            race: ""
        }
    },
    wizard= {
        active: true,
        image: "./assets/images/wiz.jpg",
        class: "Wizard",
        name: "Akasha",
        playername: "Babs",
        stats: {
        STR: "12",
        STRMOD: "+1",
        DEX: "19",
        DEXMOD: "+4",
        CON: "16",
        CONMOD: "+3",
        INT: "19",
        INTMOD: "+4",
        WIS: "9",
        WISMOD: "-1",
        CHA: "15",
        CHAMOD: "+2"},
        personality: {
            alignment: "Chaotic Good",
            background: "Sage",
            race: "High Elf"
        }
    }
]


for (var i=0; i<characters.length; i++) {
    var charimg = "<img class='charimg' src='"+characters[i].image+"'alt='charimg'>";

    var characterCard = $("<div class='card charcard' style='width: 18rem;'>"+charimg+"<div class='card-body'><h5 class='card-title'>"+characters[i].name+"</h5><h6>"+characters[i].class+"</h6><ul class='stats'><li>STR: "+characters[i].stats.STR+" MOD: ("+characters[i].stats.STRMOD+")</li><li>DEX: "+characters[i].stats.DEX+" MOD: ("+characters[i].stats.DEXMOD+")</li><li>CON: "+characters[i].stats.CON+" MOD: ("+characters[i].stats.CONMOD+")</li><li>INT: "+characters[i].stats.INT+" MOD: ("+characters[i].stats.INTMOD+")</li><li>WIS: "+characters[i].stats.WIS+" MOD: ("+characters[i].stats.WISMOD+")</li><li>CHA: "+characters[i].stats.CHA+" MOD: ("+characters[i].stats.CHAMOD+")</li></ul><a href='#' class='btn btn-warning statsbtn'>Character Page</a></div></div>")

    if (characters[i].active === true){
    $(".cardbox").append($(characterCard));
}
else if(characters[i].active === false){
    $(".cardbox").append($(characterCard).toggleClass("hide"))
}
}

$(".statsbtn").click(function(){
    $(this).addClass("hide");
    
});

$(".charbtn").click(function(){
    $(".charcard").toggleClass("hide");
    // console.log($(this).text());
    if ($(this).text()=="Unclaimed Characters"){
        $(this).text("Active Characters");
    }
    else {
        $(this).text("Unclaimed Characters");
    };
//     for (var i=0; i<characters.length; i++) {
//         var charimg = "<img class='charimg' src='"+characters[i].image+"'alt='charimg'>";
    
//         var characterCard = $("<div class='card charcard' style='width: 18rem;'>"+charimg+"<div class='card-body'><h5 class='card-title'>"+characters[i].name+"</h5><h6>"+characters[i].class+"</h6><ul class='stats'><li>STR: "+characters[i].stats.STR+" MOD: ("+characters[i].stats.STRMOD+")</li><li>DEX: "+characters[i].stats.DEX+" MOD: ("+characters[i].stats.DEXMOD+")</li><li>CON: "+characters[i].stats.CON+" MOD: ("+characters[i].stats.CONMOD+")</li><li>INT: "+characters[i].stats.INT+" MOD: ("+characters[i].stats.INTMOD+")</li><li>WIS: "+characters[i].stats.WIS+" MOD: ("+characters[i].stats.WISMOD+")</li><li>CHA: "+characters[i].stats.CHA+" MOD: ("+characters[i].stats.CHAMOD+")</li></ul><a href='#' class='btn btn-success statsbtn'>Character Page</a></div></div>")
    
//         if (characters[i].active === false){
//         $(".cardbox").append($(characterCard));
// }
//     }
    });

