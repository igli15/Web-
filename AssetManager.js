/*jshint esversion: 6 */
let images = [];
let tmxFiles = [];
let fonts = [];
class AssetManager
{

    constructor()
    {
        
    }

    //Load your assets here.
    loadAssets()
    {
        this.addImage('test','Assets/testButton.png');
        this.addImage('skeletonSpritesheet','Assets/skeletonSpritesheet.png');
        this.addTmxFile('map','Assets/test.tmx');
        this.addImage('tilesheet','Assets/tilesheet.png')
        this.addImage('WebTileset','Assets/WebTileset.png')
        this.addFont("Roboto","Assets/Roboto-Regular.ttf");
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

    addFont(name,pfilename)
    {
        fonts[name] = loadFont(pfilename);
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
    
    static getFont(name)
    {
        if(fonts[name] != null)
        return fonts[name];
        else throw "there is no asset with that name";
    }
}