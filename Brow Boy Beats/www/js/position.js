// Position class using function
function Position(position = {x: 0,y: 0})
{
    this.position = position;
}

// Get the x and y values of objects position
Position.prototype.get = function() 
{
    return {x: this.position.x, y: this.position.y};
};

// Get x of value of transforms position
Position.prototype.getX = function() 
{
    return this.position.x;
};

// Get y value of objects position
Position.prototype.getY = function() 
{
    return this.position.y;
};

// Set x to value
Position.prototype.setX = function(value = 0.0) 
{
    Position (this.position.x = value);
};

// Set y to value
Position.prototype.setY = function(value = 0.0) 
{
    Position (this.position.y = value);
};
