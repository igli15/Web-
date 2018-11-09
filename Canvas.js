/*jshint esversion: 6 */
let entity;
let test;

class Canvas
{
    constructor(width,height)
    {
        createCanvas(windowWidth, windowHeight);
    }

    start()
    {
        entity = new Entity(0);
        test = new Entity(0);
    
        test.setPos(200,200);
        entity.setPos(800,500)
    }
    update()
    {
        test.render();
        entity.render();
    }
}