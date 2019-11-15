// position class using function
function Position(position = {x: 0,y: 0})
{
    this.position = position;
    
}

// function Apple (type) {
//     this.type = type;
//     this.color = "red";
// }
 
// Apple.prototype.getInfo = function() {
//     return this.color + ' ' + this.type + ' apple';
// };

Position.prototype.get = function() 
{
    return {x: this.position.x, y: this.position.y};
};

Position.prototype.getX = function() 
{
    return this.position.x;
};

Position.prototype.getY = function() 
{
    return this.position.y;
};

Position.prototype.setX = function(value = 0.0) 
{
    Position (this.position.x = value);
};

Position.prototype.setY = function(value = 0.0) 
{
    Position (this.position.y = value);
};
