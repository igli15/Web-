/*jshint esversion: 6 */

class Button extends Sprite
{
    constructor(texture,TYPE)
    {  
        super(texture);
        this.texture = texture;
        
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
        background("Gray");
    }
}