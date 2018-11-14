/*jshint esversion: 6 */


class GraphicalTile extends AnimationSprite
{
    constructor(tileset,gid)
    {
        var image = tileset.getChild('image');
        var tilecount = tileset.getNum('tilecount');
        var firstGid = tileset.getNum('firstgid');
        var columns = tileset.getNum('columns');
        var imageSource = image.getString('source');

        super(AssetManager.getImage(imageSource.split('.')[0]),columns,tilecount/columns,gid - firstGid);
        //this.setFrame(gid - firstGid);   
    }
}