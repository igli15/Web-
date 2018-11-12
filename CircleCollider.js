/*jshint esversion: 6 */

class CircleCollider extends Collider
{
    constructor()
    {
        super();
    }

    start()
    {
       super.start();
       this.radius = this.parent.width/2;
    }

    update()
    {
        super.update();
    }

    checkForMouseHover()
    {
        if(dist(mouseX,mouseY,this.parent.x,this.parent.y) < this.radius)
        {
            return true;
        }
        else return false;
    }
}