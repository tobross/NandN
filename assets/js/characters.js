// function Char(active, image, cClass, name, playername, STR, STRMOD, DEX, DEXMOD, CON, CONMOD, INT, INTMOD, WIS, WISMOD, CHA, CHAMOD, lang, alignment, background, race, itemName, itemImage, itemStats) {
//     this.active=active;
//     this.image=image;
//     this.cClass=cClass;
//     this.name=name;
//     this.playername=playername;
//     this.stats={};
//     this.stats.STR=STR;
//     this.stats.STRMOD=STRMOD;
//     this.stats.DEX=DEX;
//     this.stats.DEXMOD=DEXMOD;
//     this.stats.CON=CON;
//     this.stats.CONMOD=CONMOD;
//     this.stats.INT=INT;
//     this.stats.INTMOD=INTMOD;
//     this.stats.WIS=WIS;
//     this.stats.WISMOD=WISMOD;
//     this.stats.CHA=CHA;
//     this.stats.CHAMOD=CHAMOD;
//     this.lang=lang;
//     this.personality={};
//     this.personality.alignment=alignment;
//     this.personality.background=background;
//     this.personality.race=race;
//     this.sItems= {};
//     this.sItems.item = {};
//     this.sItems.item.name = itemName;
//     this.sItems.item.image = itemImage;
//     this.sItems.item.stats = itemStats;

//     // this.hp = function(){
//     //     var hitpoints = CONMOD * (Math.floor(Math.random()*12)+1);
//     //     console.log(hitpoints)
//     // }
// };

// brunhildo = new Char(true, ".assets/images/MDB.jpg", "Barbarian", "Brunhildo", "Furb", 19, +4, 12, +1, 19, +4, 8, -1, 11, 0, 15, +2, "Common<br>Dwarvish", "Lawful Good", "Outlander", "Mountain Dwarf", "Hewn", "./assets/images/hewn.png", "<p>This axe has the power to destroy your home in the forest, and yet, provide life through providing you with kindling for fire</p><br><p>When you fell an enemy, regain 2d6 (7) HP</p>");

// console.log(brunhildo);
// brunhildo.hp();



var characters = [
    barbarian= {
        active: true,
        image: "./assets/images/MDB.jpg",
        cClass: "Barbarian",
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
        lang: "Common<br>Dwarvish",
        personality: {
            alignment: "Lawful Good",
            background: "Outlander",
            race: "Mountain Dwarf"
        },
        sItems: {
            item: {
                name: "Hewn",
                image: "./assets/images/hewn.png",
                stats: "<p>This axe has the power to destroy your home in the forest, and yet, provide life through providing you with kindling for fire</p><br><p>When you fell an enemy, regain 2d6 (7) HP</p>"
            }
        }
    },
    bard= {
        active: true,
        image: "./assets/images/TB.jpg",
        class: "Bard",
        name: "Najean",
        playername: "Najean",
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
        lang: "Common<br>Draconic",
        personality: {
            alignment: "Neutral",
            background: "Entertainer",
            race: "Tiefling"
        },
        sItems: {
            item: {
                name: "",
                image: "",
                stats: ""
            }
        }
    },
    cleric= {
        active: true,
        image: "./assets/images/HEC.jpg",
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
        lang: "Common<br>Elvish",
        personality: {
            alignment: "Chaotic Good",
            background: "Acolyte",
            race: "Half-Elf"
        },
        sItems: {
            item: {
                name: "",
                image: "",
                stats: ""
            }
        }
    },
    cleric= {
        active: false,
        image: "./assets/images/GTC.jpg",
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
        lang: "Common<br>Gnomish<br>Halfling<br>Primordial",
        personality: {
            alignment: "Chaotic Good",
            background: "Acolyte",
            race: "Rock Gnome"
        },
        sItems: {
            item: {
                name: "",
                image: "",
                stats: ""
            }
        }
    },
    druid= {
        active: true,
        image: "./assets/images/WED.png",
        class: "Druid",
        name: "Belias Darkstalker",
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
        lang: "Common<br>Elvish<br>Gnoll",
        personality: {
            alignment: "Good",
            background: "Hermit",
            race: "Wood Elf"
        },
        sItems: {
            item: {
                name: "",
                image: "",
                stats: ""
            }
        }
    },
    fighter= {
        active: true,
        image: "./assets/images/TF.jpg",
        class: "Fighter",
        name: "Dune Amongst the Setting Sun",
        playername: "Seger",
        stats: {
        STR: "14",
        STRMOD: "+2",
        DEX: "17",
        DEXMOD: "+3",
        CON: "15",
        CONMOD: "+2",
        INT: "14",
        INTMOD: "+2",
        WIS: "14",
        WISMOD: "+2",
        CHA: "15",
        CHAMOD: "+2"},
        lang: "Common<br>Dwarvish<br>Draconic",
        personality: {
            alignment: "Chaotic Good",
            background: "Noble",
            race: "Tabaxi"
        },
        sItems: {
            item: {
                name: "",
                image: "",
                stats: ""
            }
        }
    },
    fighter= {
        active: false,
        image: "./assets/images/DBF.jpg",
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
        lang: "Common<br>Draconic",
        personality: {
            alignment: "Good",
            background: "Soldier",
            race: "White Dragonborn"
        },
        sItems: {
            item: {
                name: "",
                image: "",
                stats: ""
            }
        }
    },
    monk= {
        active: false,
        image: "./assets/images/HM.png",
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
        lang: "Common<br>Gnomish",
        personality: {
            alignment: "Lawful Good",
            background: "Hermit",
            race: "Lightfoot Halfling"
        },
        sItems: {
            item: {
                name: "",
                image: "",
                stats: ""
            }
        }
    },
    paladin= {
        active: false,
        image: "./assets/images/HOP.jpg",
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
        lang: "Common<br>Orc<br>Elvish",
        personality: {
            alignment: "Lawful Good",
            background: "Hermit",
            race: "Half-Orc"
        },
        sItems: {
            item: {
                name: "",
                image: "",
                stats: ""
            }
        }
    },
    ranger= {
        active: false,
        image: "./assets/images/HR.jpg",
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
        lang: "Common",
        personality: {
            alignment: "Good",
            background: "Outlander",
            race: "Human"
        },
        sItems: {
            item: {
                name: "",
                image: "",
                stats: ""
            }
        }
    },
    rogue= {
        active: true,
        image: "./assets/images/WER.jpg",
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
        lang: "Common<br>Elvish",
        personality: {
            alignment: "Chaotic Neutral",
            background: "Charlatan",
            race: "Wood Elf"
        },
        sItems: {
            item: {
                name: "",
                image: "",
                stats: ""
            }
        }
    },
    pirate= {
        active: false,
        image: "./assets/images/TP.jpg",
        class: "Pirate",
        name: "Sleight Paw (Paw)",
        playername: "Tobey",
        stats: {
        STR: "11",
        STRMOD: "0",
        DEX: "19",
        DEXMOD: "+4",
        CON: "12",
        CONMOD: "+1",
        INT: "10",
        INTMOD: "0",
        WIS: "14",
        WISMOD: "+2",
        CHA: "16",
        CHAMOD: "+3"},
        lang: "Common<br>Gnoll",
        personality: {
            alignment: "Good",
            background: "Criminal",
            race: "Tabaxi"
        },
        sItems: {
            item: {
                name: "",
                image: "",
                stats: ""
            }
        }
    },
    sorcerer= {
        active: true,
        image: "./assets/images/GS.png",
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
        lang: "Common<br>Gnomish",
        personality: {
            alignment: "Good",
            background: "Sage",
            race: "Rock Gnome"
        },
        sItems: {
            item: {
                name: "",
                image: "",
                stats: ""
            }
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
        lang: "Common",
        personality: {
            alignment: "",
            background: "",
            race: ""
        },
        sItems: {
            item: {
                name: "",
                image: "",
                stats: ""
            }
        }
    },
    wizard= {
        active: true,
        image: "./assets/images/HEW.jpg",
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
        lang: "Common<br>Elvish",
        personality: {
            alignment: "Chaotic Good",
            background: "Sage",
            race: "High Elf"
        },
        sItems: {
            item: {
                name: "",
                image: "",
                stats: ""
            }
        }
    },
    wolf= {
        active: true,
        image: "./assets/images/wolf.jpg",
        class: "Wolf",
        name: "Trogdorg",
        playername: "Tobey",
        stats: {
        STR: "12",
        STRMOD: "+1",
        DEX: "15",
        DEXMOD: "+2",
        CON: "12",
        CONMOD: "+1",
        INT: "3",
        INTMOD: "-4",
        WIS: "12",
        WISMOD: "+1",
        CHA: "6",
        CHAMOD: "-2"},
        lang: "Wolf<br>Animal",
        personality: {
            alignment: "Neutral",
            background: "Hermit",
            race: "Wolf"
        },
        sItems: {
            item: {
                name: "",
                image: "",
                stats: ""
            }
        }
    }
]


for (var i=0; i<characters.length; i++) {
    var charimg = "<img class='charimg' src='"+characters[i].image+"'alt='charimg'>";

    var characterCard = $("<div class='card charcard' style='width: 18rem;'>"+charimg+"<div class='card-body'><h5 class='card-title'>"+characters[i].name+"</h5><h6>"+characters[i].class+"</h6><ul><li><button type='button' class='btn btn-warning stats'>Stats</button><ul class='statsList hide'><li>STR: "+characters[i].stats.STR+" MOD: ("+characters[i].stats.STRMOD+")</li><li>DEX: "+characters[i].stats.DEX+" MOD: ("+characters[i].stats.DEXMOD+")</li><li>CON: "+characters[i].stats.CON+" MOD: ("+characters[i].stats.CONMOD+")</li><li>INT: "+characters[i].stats.INT+" MOD: ("+characters[i].stats.INTMOD+")</li><li>WIS: "+characters[i].stats.WIS+" MOD: ("+characters[i].stats.WISMOD+")</li><li>CHA: "+characters[i].stats.CHA+" MOD: ("+characters[i].stats.CHAMOD+")</li></ul></li><li><button type='button' class='btn btn-warning pers'>Personality</button><ul class='pList hide'><li>Background: "+characters[i].personality.background+"</li><li>Alignment: "+characters[i].personality.alignment+"</li><li>Race: "+characters[i].personality.race+"</li></ul></li><li><button type='button' class='btn btn-warning lang'>Languages</button><ul class='langList hide'><li>"+characters[i].lang+"</li></ul></li><li><button type='button' class='btn btn-warning item'>Special Items</button><ul class='sItems hide'><li class='itemImg'><img class='itemimg' src='"+characters[i].sItems.item.image+"'alt='"+characters[i].sItems.item.name+"'></li><li><b>"+characters[i].sItems.item.name+"</b></li><li>"+characters[i].sItems.item.stats+"</li></ul></li></ul></div></div>")

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

    $(".charcard").on("click", ".btn", function() {
        // $(this).addClass("hide");
        // console.log(this);
        // console.log($(this).parent().children(".storydata"));
        if ($(this).hasClass("stats")){
            // console.log("whoo!");
        $(this).parent().children(".statsList").toggleClass("hide")
        }
        else if ($(this).hasClass("pers")){
            $(this).parent().children(".pList").toggleClass("hide")
        }
        else if ($(this).hasClass("lang")){
            $(this).parent().children(".langList").toggleClass("hide")
        }
        else if ($(this).hasClass("item")){
            // console.log($(this).parent().children(".sItems").children(".itemImg").children(".itemimg").attr("alt"))
            if($(this).parent().children(".sItems").children(".itemImg").children(".itemimg").attr("alt")== ""){

            }
            else{
                
            $(this).parent().children(".sItems").toggleClass("hide")
            }
        };
    })

