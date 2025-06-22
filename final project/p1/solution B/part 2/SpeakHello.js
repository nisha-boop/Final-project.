(function(window) {
  var greetings = [
    "Hello",
    "Bonjour",
    "Hola",
    "Ciao",
    "Hallo",
    "Konnichiwa",
    "Namaste",
    "Salaam",
    "Zdravstvuyte",
    "Shalom"
  ];
  var helloSpeaker = {};
  helloSpeaker.speak = function(name) {
    for (var i = 0; i < greetings.length; i++) {
      console.log(greetings[i] + " " + name);
    }
  };
  window.helloSpeaker = helloSpeaker;
})(window);
