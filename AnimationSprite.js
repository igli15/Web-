/*jshint esversion: 6 */
class AnimationSprite extends Sprite
{
    constructor(spritesheet,pcols,prows,pframes)
    {
        super(spritesheet);
        
        this.cols = pcols;
        this.rows = prows;
        this.frames = pframes;

        this.frameWidth = floor(this.width/this.cols);
        this.frameHeight = floor(this.height/this.rows);

        this.x = 100;
        this.y = 100;
    }

    render()
    {
        imageMode(CENTER);

        if(this.frames > this.rows * this.cols)
        {
            this.frames = this.rows * this.cols;
        }

        this.frameX = this.frames;
        this.frameY = 0;

        this.frameX = floor(this.frames % this.cols);
        this.frameY = floor(this.frames/this.cols);

        this.image = this.texture.get(this.frameX * this.frameWidth, this.frameY * this.frameHeight, this.frameWidth, this.frameHeight);

        image(this.image, this.x, this.y, this.frameWidth,this.frameHeight);
    }

    setFrame(pframe)
    {
        this.frames = pframe;
    }
}   