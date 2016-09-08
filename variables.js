// Keycodes to catch key-events
var KEYCODE_ESC = 27;
var KEYCODE_CTRL = 17;
var KEYCODE_SHIFT = 16;


// All the drawable objects are in lists
var nodes = [];
var lines = [];
var dimensions = [];


// Temporary lists for storing information
var movable = [];
var hlNodes = [];


// Variables to store information temporarily
var selectedNode;
var selectedLine;
var selectionBoxX;
var selectionBoxY;
var moveX;
var moveY;


// Booleans
var movingNodes = false;
var drawLines = false;
var drawNodes = false;
var drawDimensions = false;

var forceHorizontal = false;
var forceVertical = false;
var ctrl = false;
var shift = false;
var drawBox = false;


// Misc
var radius = 10;
