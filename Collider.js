/*jshint esversion: 6 */

let colliders = [];
class Collider extends Component
{
    constructor()
    {
        super();
        colliders.push(this);
        this.parent = super.parent;
    }

    start()
    {
        super.start();
        this.width = this.parent.width;
        this.height = this.parent.height;
        this.x = this.parent.x;
        this.y = this.parent.y;
    }

    update()
    {
       super.update();
    }

}

function mousePressed()
{
    for(var i= colliders.length -1 ; i >=0; i--)
    {
        if(colliders[i].checkForMouseHover())
        {
            console.log("CLICKED");
        }
        else
        {
            console.log("LUL");
        }
    }
}