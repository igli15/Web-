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
	this.canvas.update();
}
