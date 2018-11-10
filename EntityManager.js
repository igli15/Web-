/*jshint esversion: 6 */

class EntityManager
{
    constructor()
    {
        this.entities = [];
        console.log("create the manager");
    }
    
    addEntity(entity)
    {
        console.log("added an entity");
        this.entities.push(entity);
    }

}

