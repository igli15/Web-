/*jshint esversion: 6 */
let images = new Array();

class AssetManager
{

    constructor()
    {
        
    }

    //Load your assets here.
    loadAssets()
    {
        this.addImage('test','Assets/testButton.png');
    }

    //Adds it to the dictionary;
    addImage(name,pfilename)
    {
        images[name] = loadImage(pfilename);
    }

    //get your image when you need it.
    static getImage(name)
    {
        if(images[name] != null)
        return images[name];
        else throw "there is no asset with that name";
    }
}