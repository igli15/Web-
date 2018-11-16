/*jshint esversion: 6 */

class Button extends Entity
{
    constructor(pwidth,pheight,TYPE)
    {  
        super();
        this.width = pwidth;
        this.height = pheight;

        if(TYPE == "CIRCLE")
        {
            this.collider = new CircleCollider();
            this.addComponent(this.collider);
        }
        else if (TYPE == "BOX")
        {
            this.collider = new BoxCollider();
            this.addComponent(this.collider);
        }
        else
        {
            throw 'there is no type with that name!!';
        }
    }

    onMouseClicked()
    {
       console.log("clicked");
    }
}