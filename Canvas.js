/*jshint esversion: 6 */
let entitymanager;
let renderer;


class Canvas
{
    constructor(width,height)
    {
        entitymanager = new EntityManager();
        renderer = new Renderer();

        createCanvas(windowWidth, windowHeight);

        this.test = new Sprite(AssetManager.getImage('test'));
        //this.entity = new Entity();

        this.test.setPos(windowWidth/2,windowHeight/2);
        
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
}