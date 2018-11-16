/*jshint esversion: 6 */

let ninetyDegreedRotFlag = 0xa0000000;
let oneEightyDegreedRotFlag = 0xc0000000;
let twoSeventyDegreedRotFlag = 0x60000000;

class Map
{
    constructor(pmap)
    {
        //this is map's representation.
        this.mapRep = pmap;


        this.width = this.mapRep.getNum('width');
        this.height = this.mapRep.getNum('height');
        this.tileWidth = this.mapRep.getNum('tilewidth');
        this.tileHeight = this.mapRep.getNum('tileheight');
        this.version = this.mapRep.getString('version');
        this.orientation = this.mapRep.getString('orientation');
        this.renderOrder = this.mapRep.getString('renderorder');
        this.nextObjId = this.mapRep.getNum('nextobjectid');
        this.tilesets = this.mapRep.getChildren('tileset');
        this.objectGroups = this.mapRep.getChildren('objectgroup');
        this.layers = this.mapRep.getChildren('layer');


       this.convertData(this.layers[0],this.width,this.height);
       this.interpretMap();
       this.interpretMapObjects();
    }

    //returns the tileset by giving the tile gid
    getTilesetForGid(gid)
    {
        for(let i = 0; i < this.tilesets.length;i++)
        {
            if(gid >= this.tilesets[i].getNum('firstgid') && gid < 
                this.tilesets[i].getNum('firstgid') + this.tilesets[i].getNum('tilecount'))
                {
                   // console.log(this.tilesets[i].getChild('image').getString(''));
                    return this.tilesets[i];
                }
        }
    }

    //converts the data 1D array to an 2D array
    convertData(layer,width,height)
    {
        var output = [];
 
        var seperatedByComaData = layer.getChild('data').getContent().split(',');
        var count  = 0;

        for(var i = 0; i<width;i++)
        {
            output[i] = [];
            for(var j = 0; j<height;j++)
            {
                output[i][j] = seperatedByComaData[count];
                count++;
            }
        }
        //console.log(output);
        return output;
    }

    //creates the sprite from the tilesheet
    createGraphicalTile(ptileset,pgid,prows,pcolumns,protation)
    {
        if(ptileset != null)
        {
            var tile = new GraphicalTile(ptileset,pgid);
            tile.x = pcolumns * ptileset.getNum('tilewidth');
            tile.y = prows * ptileset.getNum('tileheight');
            tile.rotation = protation;
            console.log(tile.frameWidth);
        }
        else throw 'tileset is null';
    }

    //calculates if the tile is rotated or not
    calculateTileRotation(currentGid)
    {
        if((currentGid & ninetyDegreedRotFlag) == -1610612736)
        {
            return 90;
                           
        }
        else if(( currentGid & oneEightyDegreedRotFlag ) == -1073741824)
        {
             return 180;
                           
         }
        else if((currentGid & twoSeventyDegreedRotFlag) == 1610612736)
        {
            return 270;
                        
        }
        else 
         {
            return  0;
         }
    }

    //interprets the tiles of the map
    interpretMap()
    {
        for(var i = 0 ; i < this.layers.length; i++)
       {
            var allGids = this.convertData(this.layers[i],this.width,this.height);
            for(var row = 0;row< allGids.length;row++)
            {
                for(var column = 0;column< allGids[row].length;column++)
                {
                    var gid = allGids[row][column];
                    var rotation = 0;
                    if(gid > 0)
                    {
                       var currentGid = gid;
                       var rotation = this.calculateTileRotation(currentGid);
                       currentGid &= ~(0xe0000000);
                       this.createGraphicalTile(this.getTilesetForGid(currentGid),currentGid,row,column,rotation);
                    }
                }
            }
       }
    }

    interpretMapObjects()
       {
           for(var i = 0; i < this.objectGroups.length;i++)
           {
               var objects = this.objectGroups[i].getChildren("object");
               for(var j = 0; j< objects.length;j++)
               {
                   if(objects[j].getChild("ellipse"))
                   {
                       if(objects[j].getString("type") == "Button")
                       {
                           var width = objects[j].getNum('width');
                           var height = objects[j].getNum('height');
                            var button = new Button(width,height,"CIRCLE");
                            button.x = objects[j].getNum('x');
                            button.y = objects[j].getNum('y');
                       }
                   }
                   else if(objects[j].getChild("polygon"))
                   {
                       console.log("polygon was found");
                   }
                   else 
                   {
                    if(objects[j].getString("type") == "Button")
                    {
                        var width = objects[j].getNum('width');
                        var height = objects[j].getNum('height');
                         var button = new Button(width,height,"BOX");
                         button.x = objects[j].getNum('x');
                         button.y = objects[j].getNum('y');
                    }

                       if(objects[j].getChild("text"))
                       {
                           var textObj = objects[j].getChild("text");
    
                           var text = new Text(AssetManager.getFont(textObj.getString("fontfamily")));
                           text.size = textObj.getString('pixelsize');
                           text.color = textObj.getString("color");
                           text.x = objects[j].getNum('x');
                           text.y = objects[j].getNum('y');
                           text.string = textObj.getContent();                       
                       }
                   }
               }
           }
       }
}