/*jshint esversion: 6 */
let assetmanager;

function preload()
{
	assetmanager = new AssetManager();
	assetmanager.loadAssets();
}
function setup() 
{
	this.canvas = new Canvas(windowWidth,windowHeight);
	this.canvas.start();
	
}

function draw() 
{
	background(0);
	this.canvas.update();
	
}

function windowResized() 
{
	resizeCanvas(windowWidth, windowHeight);
  }
