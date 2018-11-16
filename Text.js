/*jshint esversion: 6 */

class Text extends Entity
{
    constructor(pfont)
    {
        super();

        this.x = 0;
        this.y = 0;
        this.font = pfont;
        this.color = "White";
        this.fontsize = 64;
        this.string = "Default string";
    }

    start()
    {
        super.start();
    }

    update()
    {
        super.update();
        push();
        fill(this.color);
        textFont(this.font,this.fontsize);
        text(this.string,this.x,this.y);
        pop();
    }
}