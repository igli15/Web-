/*jshint esversion: 6 */

let canvas;

function setup() 
{
	canvas = new Canvas(windowWidth,windowHeight);
	canvas.start();
}

function draw() 
{
	canvas.update();
}
