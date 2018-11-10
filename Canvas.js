/*jshint esversion: 6 */
let entitymanager;
class Canvas
{
    constructor(width,height)
    {
        entitymanager = new EntityManager();
        createCanvas(windowWidth, windowHeight);

        this.test = new Entity();
        this.entity = new Entity();

        this.test.setPos(200,200);
        this.entity.setPos(500,500);
    }

    start()
    {
        for(var i= entitymanager.entities.length - 1; i >=0; i--)
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
    }

    static get getEntityManager()
    {
        console.log("getting entity manager");
        return  entitymanager;
    }
}