var WEIGHT_PROJECT = 6;
var WEIGHT_CATEGORY = 12;
var WEIGHT_HIHLIGHT = 10;
var WEIGHT_UNDEVELOPED = 5.5;
var WEIGHT_TECHNO = 8;
var WEIGHT_LANGUAGE = 5;

var linkTemplate = function (word) {
  if (!word.link) {
    return word.text
  }
  return '<a href="' + word.link +
  '" rel="nofollow" target="_blank" title="' +
  word.text + '">' + word.text + '</a>'
}

var words = [
  {text: "ShaviRoom", weight: WEIGHT_PROJECT},
  {text: "Web", weight: WEIGHT_CATEGORY},
  {text: "Html5", weight: WEIGHT_LANGUAGE},
  {text: "JavaScript", weight: WEIGHT_HIHLIGHT},
  {
    text: "Node.js",
    link: "https://nodejs.org/en/",
    weight: WEIGHT_TECHNO
  },
  {
    text: "Meteor.js",
    link: "https://www.meteor.com/",
    weight: WEIGHT_TECHNO
  },
  {text: "Php", weight: WEIGHT_LANGUAGE},
  {text: "Générateur de graphique", weight: WEIGHT_PROJECT},
  {text: "SQL", weight: WEIGHT_HIHLIGHT},
  {text: "Intranet", weight: WEIGHT_PROJECT},
  {
    text: "Drupal",
    link: "https://www.drupal.org/",
    weight: WEIGHT_TECHNO
  },
  {text: "CMS", weight: WEIGHT_TECHNO},
  {
    text: "SDK Samsung Smart TV",
    link: "http://www.samsungdforum.com/devtools/sdkdownload",
    weight: WEIGHT_LANGUAGE
  },
  {text: "ActionScript 3", weight: WEIGHT_LANGUAGE},
  {text: "iOS", weight: WEIGHT_TECHNO},
  {text: "Objective-C", weight: WEIGHT_LANGUAGE},
  {text: "Python", weight: WEIGHT_LANGUAGE},
  {text: "C/C++", weight: WEIGHT_LANGUAGE},
  {text: "Logiciel", weight: WEIGHT_CATEGORY},
  {text: "RaspberryPI", weight: WEIGHT_TECHNO},
  {text: "Chrono TV app", weight: WEIGHT_PROJECT},
  {text: "Trafic Chrono", weight: WEIGHT_PROJECT},
  {text: "Visual Basic", weight: WEIGHT_LANGUAGE},
  {text: "Erlang", weight: WEIGHT_LANGUAGE},
  {text: "MySql", weight: WEIGHT_TECHNO},
  {text: "SQL Server", weight: WEIGHT_TECHNO},
  {text: "e-Serv concergerie", weight: WEIGHT_PROJECT},
  {text: "Nursing Management Software", weight: WEIGHT_PROJECT},
  {text: "Smart Tv", weight: WEIGHT_UNDEVELOPED},
  {text: "User Profiling", weight: WEIGHT_PROJECT},
  {text: "Java", weight: WEIGHT_HIHLIGHT},
  {text: "Text mining", weight: WEIGHT_UNDEVELOPED},
  {text: "Apache Lucene", weight: WEIGHT_UNDEVELOPED},
  {text: "Arduino Uno", weight: WEIGHT_TECHNO},
  {text: "Semantic Vectors", weight: WEIGHT_UNDEVELOPED},
  {text: "Git", weight: WEIGHT_HIHLIGHT},
  {text: "Scripting", weight: WEIGHT_TECHNO},
  {text: "Websocket", weight: WEIGHT_TECHNO},
  {
    text: "Code Igniter",
    link: "https://www.codeigniter.com/",
    weight: WEIGHT_TECHNO
  },
  {
    text: "Github",
    link: "https://github.com/djiworks",
    weight: WEIGHT_TECHNO
  },
  {text: "Gitlab", weight: WEIGHT_TECHNO},
  {text: "SharePoint", weight: WEIGHT_TECHNO},
  {text: "Mobile", weight: WEIGHT_CATEGORY}
];

$('#tags_cloud').jQCloud(words, {
  autoResize: true,
  colors: [
    "#39d",
    "#90a0dd",
    "#90c5f0",
    "#a0ddff",
    "#99ccee",
    "#8DD1BB",
    "#A0E085"
  ],
  steps: 7,
  delay: 5,
  template: linkTemplate
});
