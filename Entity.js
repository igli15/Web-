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

	// pass in an instance of the component to add... 
	//components have to be created before then passed in.
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

	//make sure to pass in a type of component to get.
	getComponent(type)
	{
		for(let i = 0; i < this.components.length;i++)
		{
			if(this.components[i] instanceof type)
			{
				return this.components[i];
			}
		}

		throw "there is no component of that type attached to this entity";
	}

	setPos(px,py)
	{
		this.x = px;
		this.y = py;
	}

	onMouseClicked()
	{

	}
}

Entity.count = 0;  //how many entities have been created in total.


