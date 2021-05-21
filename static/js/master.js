// ui = user interface module
// dm = data manager module

if (!dm.getVar("veteran")) newUserSequence();
else veteranSequence();
executeActivity(ui.buttonInput("Press one of the buttons to get started!", ["Alarm", "Notes", "Mood tracking", "Sleep tracking", "Diary"]));

function newUserSequence() {
    ui.display("<<Press space to talk to Rina.>>");
    ui.display("Hello! I'm Rina, your devoted digital assistant.");
    ui.display("I look forward to working with you!");
    dm.setVar("fname", ui.textInput("To start off, what's your first name?"));
    dm.setVar("lname", ui.textInput("And your last name?"));
    var pname = ui.textInput("And what would you like me to call you?");
    dm.setVar("pname", pname);
    ui.display(`Thanks! Nice to meet you, ${pname}`);
    ui.display("To introduce myself, I offer a host of tools to help make your days more productive!");
    ui.display("Some of my features include: alarms, notes, mood tracking, sleep tracking, and a diary.");
    dm.setVar("veteran", true);
}
function veteranSequence() {
    ui.display(`Welcome back, ${dm.getVar("pname")}!`);
    ui.display("I hope you've had a good day so far. Tell me all about it in my mood tracking app!")
}

function executeActivity(activity) {
    switch (activity) {
        case "Alarm":
            activity_alarm();
            break;
        case "Notes":
            activity_notes();
            break;
        case "Mood tracking":
            activity_mood();
            break;
        case "Sleep tracking":
            activity_sleep();
            break;
        case "Diary":
            activity_diary();
            break;
    }
}
function activity_alarm() {
    var userChoice = ui.buttonInput("", ["View existing alarms", "Create new alarm", "Remove an alarm"]);
    if (userChoice == "View existing alarms") {
        var alarms = dm.getQuery_all("Alarm_alarms");
        ui.display(`You have ${alarms.length} alarms set up.`);
        var allalarmsoutput = "";
        for (alarm of alarms) {
            allalarmsoutput += `${alarm.get("time")} - ${alarm.get("note")}\n`;
        }
        ui.display(`Here are the alarms:\n${allalarmsoutput}`);
    } else if (userChoice == "Create new alarm") {
        var time = ui.textInput("What time should the alarm be? Please enter the time in HH:MM military form.");
        var note = ui.textInput("And what should the note be?");
        dm.instantiateModel("Alarm_alarms", {"time":time, "note":note});
        ui.display("Your alarm has been created.");
    } else if (userChoice == "Remove an alarm") {
        var time = ui.textInput("What time is the alarm you want to remove?");
        var alarms = dm.getQuery_where("Alarm_alarms", {"time":time});
        var allalarmsoutput = "";
        for (alarm of alarms) {
            allalarmsoutput += `${alarm.get("time")} - ${alarm.get("note")}\n`;
        }
        if (alarms.length > 1){
            ui.display(`You have the following alarms set up for then:\n${allalarmsoutput}`);
            var removenote = ui.textInput("What is the note of the one you want to remove?");
            dm.removeQuery_where("Alarm_alarms", {"time":time, "note":removenote});
        } else {
            dm.removeQuery_where("Alarm_alarms", {"time":time});
        }
        ui.display("The alarm has been removed!");
    }
}