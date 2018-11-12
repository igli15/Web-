/*jshint esversion: 6 */

class Sprite extends Entity
{
    constructor(ptexture)
    {
        super();
       
        Canvas.getRenderer.addSprite(this);
        this.x = super.x;
        this.y = super.y;

        this.texture = ptexture;

        this.width = this.texture.width;
        this.height = this.texture.height;
       
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

    preload()
    {
        super.preload();
        console.log("loading");
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
       imageMode(CENTER);
       image(this.texture,this.x,this.y,this.width,this.height);
    }

	onMouseClicked()
	{
        console.log("Clicked");
	}
}