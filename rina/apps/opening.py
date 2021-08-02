import RinaApp from somewhere

if not RinaApp.appExists("opening"):
    RinaApp("opening")
app = RinaApp.getApp("opening")

app.createVarIfAbsent("first_time", True)
app.createVarIfAbsent("first_name")
app.createVarIfAbsent("last_name")
app.createVarIfAbsent("pref_name")
app.createVarIfAbsent("pronouns")

if not app.getVar("firsttime"):
    app.say(f"Welcome back, {app.getVar('pref_name')}!")
else:
    app.say("Hello! I'm Rina, your devoted digital assistant.")
    app.say("I'll start off with some basic questions to get to know you!")
    app.setVar("first_name", app.ask("What's your first name?"))
    app.setVar("last_name", app.ask("What's your last name?"))
    if app.ask("Do you have a preferred name you want me to call you?", ["Yes", "No"]) == "Yes":
        app.setVar("pref_name", app.ask("What's your preferred name?"))
    else:
        app.setVar("pref_name", app.getVar("first_name"))
    app.setVar("pronouns", app.ask("What are your preferred pronouns?", ["He/him", "She/her", "They/them"]))
    app.say(f"Awesome! It's great to meet you, {app.getVar('pref_name')}.")

    if not app.ask("Since it's your first time here, would you like to go through the tutorial real quick?", ["Yes", "No"]) == "Yes":
        app.say(f"No problem! I look forward to working with you, {app.getVar('pref_name')}!")
    else:
        app.say("Okay! Using me should be pretty simple and intuitive.")
        app.say("Once this tutorial is over, I'll display a textbox where you can input commands.")
        app.say("Some basic commands that I'll understand are APPS, TALK, DEVCONTACT, and HELP.")
        app.say("If you enter APPS, I'll display a list of the various services I can perform, including keeping track of notes, setting alarms, and maintaining a calendar, among others.")
        app.say("If you enter TALK, I'll have a conversation with you! I can't understand everything, but I'll try my best to make it fun.")
        app.say("Enter DEVCONTACT if there are any bugs you want my developer to know about or any features you'd like implemented.")
        app.say("And finally, enter HELP to have me repeat this tutorial.")
        app.say("Okay! That's all I have to say for now.")
        app.say(f"I look forward to working with you, {app.getVar('pref_name')}!")