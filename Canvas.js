/*jshint esversion: 6 */
let entitymanager;
let renderer;
class Canvas
{
    constructor(width,height)
    {
        entitymanager = new EntityManager();
        renderer = new Renderer();

      this.canvas=  createCanvas(windowWidth,windowHeight);
        //this.canvas.parent("can");
        this.map = new Map(AssetManager.getTmx('map'));
       // console.log(this.map.layers[0].getChild('data').getContent());
       
    }

    start()
    {
        for(var i= entitymanager.entities.length -1 ; i >=0; i--)
        {
           entitymanager.entities[i].start();
        }
    }
    update()
    {
        for(var i= entitymanager.entities.length - 1; i >=0; i--)
        {
           entitymanager.entities[i].update();
        }

        renderer.renderAllSprites();
    }

    static get getEntityManager()
    {
        return  entitymanager;
    }

    static get getRenderer()
    {
        return renderer;
    }

    static get getCanvas()
    {
        return this.canvas;
    }
}