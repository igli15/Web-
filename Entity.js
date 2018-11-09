/*jshint esversion: 6 */
class Entity
{
	constructor()
	{
		this.x = 0;
		this.y = 0;
		this.r = 100;
		Entity.count += 1;
		this.id = Entity.count;
	}

	render()
	{
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}

	setPos(px,py)
	{
		this.x = px;
		this.y = py;
	}
}

Entity.count = 0;


