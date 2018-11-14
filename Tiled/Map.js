/*jshint esversion: 6 */
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
        this.objects = this.mapRep.getChildren('objectgroup');
        this.layers = this.mapRep.getChildren('layer');

        
       // console.log(this.tilesets[1].getNum('tilecount'));
      // console.log(this.layers[0].getChild('data').getContent());

       this.convertData(this.layers[0],this.width,this.height);

       for(var i = 0 ; i < this.layers.length; i++)
       {
            var allGids = this.convertData(this.layers[i],this.width,this.height);
            for(var row = 0;row< allGids.length;row++)
            {
                for(var column = 0;column< allGids[row].length;column++)
                {
                    var gid = allGids[row][column];
                    if(gid > 0)
                    {
                        var tileset = this.getTilesetForGid(gid);
                        if(tileset != null)
                        {
                            var tile = new GraphicalTile(tileset,gid);
                            tile.x = column * 64;
                            tile.y = row* 64;
                        }
                    }
                }
            }
       }
    }

    getTilesetForGid(gid)
    {
        for(let i = 0; i < this.tilesets.length;i++)
        {
            if(gid >= this.tilesets[i].getNum('firstgid') && gid< 
                this.tilesets[i].getNum('firstgid') + this.tilesets[0].getNum('tilecount'))
                {
                    return this.tilesets[i];
                }
                else
                {
                    return null;
                }
        }
    }

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
}