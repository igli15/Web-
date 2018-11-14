/*jshint esversion: 6 */

class Sprite extends Entity
{
    constructor(ptexture)
    {
        super();
        angleMode(DEGREES);

        Canvas.getRenderer.addSprite(this);
        this.x = super.x;
        this.y = super.y;

        this.texture = ptexture;
        this.rotation = 0;
        this.width = this.texture.width;
        this.height = this.texture.height;

        imageMode(CENTER);
       
    } 

    setPos(x,y)
    {
        super.setPos(x,y);
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
        super.start();
        console.log("spriteStarted");
    }
    
    update()
    {
        super.update();
    }

    render()
    {
        push();
        translate(this.x,this.y);
        rotate(this.rotation);
       image(this.texture,0,0,this.width,this.height);
       pop();
    }

	onMouseClicked()
	{
        console.log("Clicked");
	}
}