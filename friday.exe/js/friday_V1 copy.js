window.addEventListener("load", function() {
    var friday = new Artyom();
    var user = "unknown"
    var state = 0;


    var actions = [{
            smart: true,
            indexes: ["Du darfst mich * nennen", "Ich bin* ", "Ich heiße*"],
            action: function(i, wildcard) {
                if (state == 0) {
                    user = wildcard;
                    friday.say("Okey " + user + " ich werde mich jetzt zurückziehen und dich informieren sobald etwas wichtiges passiert.");
                    document.getElementById("message").value = "WhatsApp Nachricht Simulieren";
                    document.getElementById("start").style.visibility = "hidden"
                    document.getElementById("message").style.visibility = "visible";
                    state = 10;
                }
            }

        },
        {
            smart: true,
            indexes: ["* geschrieben", "schreibt *", "* sagt", "* nein", "*Ja", "sag ihm*", "*Uhr", "* nicht", "* beschäftigt", "antworte *"],
            action: function(i, wildcard) {
                if (state == 1) {
                    if (i <= 2 | i == 4) {
                        friday.say("Er hat gesagt: Wann bist du heute zu Hause?");
                        friday.say("Möchtest du Ihm antworten?");
                        state = 2;
                    } else {
                        friday.say("Okey. Möchtest du später daran errinnert werden?");
                        state = 3;
                    }
                    return;

                }
                if (state == 2) {
                    if (i == 4) {
                        friday.say("Okey was willst du ihm antworten?");
                        friday.say("Verwende bitte den begriff. Antworte. Vor deinem Satz, damit ich weiß, was ich antworten soll.");
                        state = 4;
                    }

                    if (i == 3) {
                        friday.say("Okey. Ich werde dich später nocheinmal dran erinnern. Einen schönen Resttag noch " + user);
                        friday.fatality;
                    }
                    return;

                }
                if (state == 3) {
                    if (i == 7) {
                        friday.say("Okey ich werde dich um " + wildcard + "Uhr erinnern");
                    }
                    if (i == 4) {
                        friday.say("Okey. Ich werde dich in 2h daran erinnern. Ich habe die Benachrichtungen für eine Stunde stummgeschalten. Einen schönen Resttag noch " + user);
                    }
                    if (i == 3) {
                        friday.say("Okey. Ich habe alle Benachrichtigungen für eine Stunde stummgestellt. Einen schönen Resttag noch " + user);
                    }
                    friday.fatality;
                    return;
                }
                if (state == 4) {
                    if (i == 9) {
                        friday.say("Okey du wolltest:" + wildcard + " schreiben");
                        friday.say("Ist das korrekt?");
                        state = 5;

                    }
                    return;
                }
                if (state == 5) {
                    if (i == 3) {
                        friday.say("Okey. Was wolltest du dann antworten?");
                        friday.say("Verwende bitte den begriff. Antworte. Vor deinem Satz, damit ich weiß, was ich antworten soll.");
                        state = 4;

                    }
                    if (i == 4) {
                        friday.say("Alles klar. Deine Nachricht wird gesendet. Ich wünsche dir noche einen tollen Tag " + user + ". Auf Wiedersehen.");
                        friday.fatality;

                    }
                    return;
                }
            }




        }, {
            smart: false,
            indexes: ["geschrieben", "schreibt", "sagt", "nein", "Ja", "sag ihm", "Uhr", "nicht", "beschäftigt"],
            action: function(i) {
                if (state == 1) {
                    if (i <= 2 | i == 7) {
                        friday.say("Er hat gesagt: Wann bist du heute zu Hause?");
                        friday.say("Möchtest du Ihm antworten?");
                        state = 2;
                    } else {
                        friday.say("Okey. Möchtest du später daran errinnert werden?");
                        state = 3;
                    }
                    return;
                }
                if (state == 2) {
                    if (i == 4) {
                        friday.say("Okey was willst du ihm antworten?");
                        state = 5;
                    }
                    if (i == 6) {
                        friday.say("Okey. Du wolltest ihm antworten: Ist das korrekt?");
                        state = 4;
                    }
                    if (i == 3) {
                        friday.say("Okey. Ich werde dich später nocheinmal dran erinnern. Einen schönen Resttag noch " + user);
                        friday.fatality;
                    }
                    return;
                }
                if (state == 3) {
                    if (i == 7) {
                        friday.say("Okey ich werde dich um  Uhr erinnern");
                        friday.say("Möchtest du Ihm antworten?");
                    }
                    if (i == 4) {
                        friday.say("Okey. Ich werde dich in 2h daran erinnern. Ich habe die Benachrichtungen für eine Stunde stummgeschalten. Einen schönen Resttag noch " + user);
                    }
                    if (i == 3) {
                        friday.say("Okey. Ich habe alle Benachrichtigungen für eine Stunde stummgestellt. Einen schönen Resttag noch " + user);
                    }
                    friday.fatality;
                    return;



                }
            }


        }




    ];
    friday.addCommands(actions);


    function start() {

        //friday.initialize({
        //   listen: false
        // });
        friday.say(" Guten Tag. Ich bin Friday, deine persönliche Sprachassistentin. Ich werde dich in deinem Altag unterstützen. Wie darf ich dich nennen?");
        document.getElementById("start").style.visibility = "hidden";
        // friday.initialize({
        //    listen: true
        // });
    }

    function message() {
        friday.say("Hallo " + user + "! du hast eine neue Whatsappnachricht von Marius. Hast du gerade Zeit?");
        state = 1;
        document.getElementById("message").style.visibility = "hidden";


    }

    function startContinuousArtyom() {
        friday.fatality();
        setTimeout(function() {
            friday.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true,
                speed: 0.9
            }).then(function() {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();

    document.getElementById("start").onclick = start;
    document.getElementById("message").onclick = message;
});