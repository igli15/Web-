class Component
{
    constructor()
    {
        this.parent = null;
        this.x = 0;
        this.y = 0; 
    }

    start()
    {  
        this.x = this.parent.x;
        this.y =  this.parent.y; 
    }

    update()
    { 
    
    }
}