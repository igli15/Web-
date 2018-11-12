/*jshint esversion: 6 */
class BoxCollider extends Collider
{
    constructor()
    {
        super();
    }

    start()
    {
       super.start();
       this.width = this.parent.width;
       this.height = this.parent.height;
       this.x = this.parent.x;
       this.y = this.parent.y;

       this.left = this.x - this.width/2;
       this.right = this.x + this.width/2;
       this.top = this.y - this.height/2;
       this.bottom = this.y + this.height/2;
    }

    update()
    {
        super.update();
    }
    
    checkForMouseHover()
    {
        if(mouseX > this.left && mouseX< this.right)
        {
            if(mouseY>this.top && mouseY<this.bottom)
            {
                return true;
            }
        }
        else return false;
    }
}