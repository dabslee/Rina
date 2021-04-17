var buffer = [];
var finished = false;
buffer = [];

const delay = 50;
var desired_output = "";
var current_output = "";
var new_target = false;
var value = buffer.shift();

var typewriter = function() {
    if (finished) current_output = desired_output;
    if (value != desired_output) {
        desired_output = value;
        new_target = true;
        current_output = "";
        finished = false;
    } else if (current_output != desired_output) {
        current_output += desired_output[current_output.length];
    } else if (current_output == desired_output) {
        finished = true;
    }
    document.getElementById("dialoguebox").innerText = current_output;
}
var timer = setInterval(typewriter, delay);

document.addEventListener('keyup', (e) => {
    if (e.code == "Space") {
        if (finished) {
            if (buffer.length > 0) value = buffer.shift();
        } else finished = true;
    }
});

/* Public functions */
var startTyping = function() {
    if (buffer.length > 0) value = buffer.shift();
}
var dialoguePrint = function(input) {
    buffer.push(input);
}

dialoguePrint("Hello! I'm Rina, your devoted digital assistant.");
dialoguePrint("I look forward to working with you!");
startTyping();