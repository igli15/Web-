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
	//background(100,100,100,1);
	this.canvas.update();
}
