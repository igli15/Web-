/*jshint esversion: 6 */
class Sprite extends Entity
{
    constructor(pfilename)
    {
        super();
        Canvas.getRenderer.addSprite(this);
        this.x = super.x;
        this.y = super.y;
    
        this.filename = pfilename;
        this.texture = loadImage(pfilename);

        this.width = 100;
        this.height = 100;
    } 

    setPos(x,y)
    {
        this.x = x;
        this.y = y;
    }

    setWidth(newWidth,newHeight)
    {
        this.width = newWidth;
        this.height = newHeight;
    }

    start()
    {
        console.log("spriteStarted");
    }
    
    update()
    {
        
    }

    render()
    {
       image(this.texture,this.x,this.y,this.width,this.height);
    }
}