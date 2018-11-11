/*jshint esversion: 6 */
class Entity
{
	constructor()
	{
		this.manager = Canvas.getEntityManager.addEntity(this);
	
		this.x = 0;
		this.y = 0;
		Entity.count += 1;
		this.id = Entity.count;
		
	}

	start()
	{
		console.log("started");
	}

	update()
	{
		
	}

	setPos(px,py)
	{
		this.x = px;
		this.y = py;
	}
}

Entity.count = 0;


