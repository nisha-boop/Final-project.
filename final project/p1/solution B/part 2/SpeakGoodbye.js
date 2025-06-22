(function(window) {
  var farewell = [
    "Goodbye",
    "Au Revoir",
    "Adiós",
    "Arrivederci",
    "Tschüss",
    "Sayonara",
    "Alvida",
    "Khuda Hafiz",
    "Do Svidaniya",
    "Shalom"
  ];
  var goodbyeSpeaker = {};
  goodbyeSpeaker.speak = function(name) {
    for (var i = 0; i < farewell.length; i++) {
      console.log(farewell[i] + " " + name);
    }
  };
  window.goodbyeSpeaker = goodbyeSpeaker;
})(window);
