/**
*   Application Logic
*/

'use strict';
console.log('Welcome to Yeogurt');

var mic = new Wit.Microphone(document.getElementById("microphone"));

var info = function (msg) {
    console.log(msg);
    document.getElementById("info").innerHTML = msg;
};

var error = function (msg) {
  document.getElementById("error").innerHTML = msg;
};

mic.onready = function () {
  info("Microphone is ready to record");
};

mic.onaudiostart = function () {
  info("Recording started");
  error("");
};

mic.onaudioend = function () {
  info("Recording stopped, processing started");
};

mic.onresult = function (intent, entities, outcome) {
    console.log(outcome);
    document.getElementById("result").innerHTML = '<strong>You said: </strong> ' + outcome.msg_body + '<br><strong>Intent: </strong> ' + outcome.outcome.intent + '<br><strong>Confidence: </strong> ' + Math.round(outcome.outcome.confidence*100) + '%';
    if (outcome.outcome.intent === 'set_lights_on' && outcome.outcome.confidence > 0.5) {
        document.getElementById("result").innerHTML = '<strong>You said: </strong> ' + outcome.msg_body + '<br><strong>Intent: </strong> ' + outcome.outcome.intent + '<br><strong>Confidence: </strong> ' + Math.round(outcome.outcome.confidence*100) + '%';
        $('body').addClass('lights-on');
    }
    if (outcome.outcome.intent === 'set_lights_off' && outcome.outcome.confidence > 0.5) {
        document.getElementById("result").innerHTML = '<strong>You said: </strong> ' + outcome.msg_body + '<br><strong>Intent: </strong> ' + outcome.outcome.intent + '<br><strong>Confidence: </strong> ' + Math.round(outcome.outcome.confidence*100) + '%';
        $('body').removeClass('lights-on');
    }

    // var r = kv("intent", intent);
    // for (var k in entities) {
    //     var e = entities[k];
    //     if (!(e instanceof Array)) {
    //         r += kv(k, e.value);
    //     } else {
    //         for (var i = 0; i < e.length; i++) {
    //             r += kv(k, e[i].value);
    //         }
    //     }
    // }
    // document.getElementById("result").innerHTML = r;
};

mic.onerror = function (err) {
  error("Error: " + err);
};

mic.onconnecting = function () {
  info("Microphone is connecting");
};

mic.ondisconnected = function () {
  info("Microphone is not connected");
};

mic.connect("V7JHAOR65J2BYFOOSCUZ2EDPWDLP6GVB");
  // mic.start();
  // mic.stop();

function kv (k, v) {
  if (toString.call(v) !== "[object String]") {
    v = JSON.stringify(v);
  }
  return k + "=" + v + "\\n";
}