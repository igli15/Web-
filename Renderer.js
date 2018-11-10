/*jshint esversion: 6 */
class Renderer 
{
    constructor()
    {
        this.spritesToRender = [];
    }

    renderAllSprites()
    {
        for(let i = this.spritesToRender.length - 1; i >= 0; i--)
        {
            this.spritesToRender[i].render();
        }
    }

    addSprite(sprite)
    {
        this.spritesToRender.push(sprite);
    }


}