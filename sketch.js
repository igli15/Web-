/*jshint esversion: 6 */

function setup() 
{
	this.canvas = new Canvas(windowWidth,windowHeight);
	this.canvas.start();
}

function draw() 
{
	this.canvas.update();
}
