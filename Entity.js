/*jshint esversion: 6 */
class Entity
{
	constructor()
	{
		this.manager = Canvas.getEntityManager.addEntity(this);
		this.components = [];
		this.x = 0;
		this.y = 0;
		Entity.count += 1;
		this.id = Entity.count;
		
	}

	start()
	{
		for(let i = 0; i < this.components.length;i++)
		{
			this.components[i].start();
		}
	}

	update()
	{
		for(let i = 0; i < this.components.length;i++)
		{
			this.components[i].update();
		}
	}

	addComponent(component)
	{
		if(!(component instanceof Component))
		{
			throw "You are NOT adding a component! check the type!";
		}
		else
		{
		component.parent = this;
		this.components.push(component);
		}
		
	}

	setPos(px,py)
	{
		this.x = px;
		this.y = py;
	}
}

Entity.count = 0;


