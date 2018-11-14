/*jshint esversion: 6 */
let images = new Array();
let tmxFiles = new Array();

class AssetManager
{

    constructor()
    {
        
    }

    //Load your assets here.
    loadAssets()
    {
        this.addImage('test','Assets/testButton.png');
        this.addImage('spriteSheet','Assets/skeletonSpritesheet.png');
        this.addTmxFile('map','Assets/test.tmx');
        //this.addImage('tilesheet','Assets/tilesheet.png')
        //console.log(AssetManager.getTmx('map'));
    }

    //Adds it to the dictionary;
    addImage(name,pfilename)
    {
        images[name] = loadImage(pfilename);
    }

    addTmxFile(name,pfilename)
    {
        tmxFiles[name] = loadXML(pfilename);
    }

    //get your image when you need it.
    static getImage(name)
    {
        if(images[name] != null)
        return images[name];
        else throw "there is no asset with that name";
    }

    static getTmx(name)
    {
        if(tmxFiles[name] != null)
        return tmxFiles[name];
        else throw "there is no asset with that name";
    }

    static loadImageLate(pfilename)
    {
        return loadImage(pfilename);
    }
    
}