/*jshint esversion: 6 */
class Map
{
    constructor()
    {
        this.mapRep = AssetManager.getTmx('map');


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

        console.log(this.tilesets.length);
    }

    getTilesetForGid(gid)
    {
        //to be done.
    }

    convertData(data,width,height)
    {
        //to be done.
    }
}