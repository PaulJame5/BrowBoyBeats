// Position class using function
function Position(position = {x: 0,y: 0})
{
    this.position = position;
}

// Returns the x and y values of objects position
Position.prototype.get = function() 
{
    return {x: this.position.x, y: this.position.y};
};

// Return x of value of transforms position
Position.prototype.getX = function() 
{
    return this.position.x;
};

// Return y value of objects position
Position.prototype.getY = function() 
{
    return this.position.y;
};

// Set x to value
Position.prototype.setX = function(value = 0.0) 
{
    this.position.x = value;
};

// Set y to value
Position.prototype.setY = function(value = 0.0) 
{
    this.position.y = value;
};
Position.prototype.setPosition = function(pos = {x: 0,y: 0})
{
    this.position = pos;
    
}
Position.prototype.getPosition = function()
{
    return this.position;
}