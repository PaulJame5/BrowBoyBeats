// position class using function
position = {x: 0,y: 0};
function Position(position)
{

    this.position = position

}

Position.prototype.getPosition = function() 
{
    return Position ([this.positon.x,this.position.y]);
}

Position.prototype.getX = function() 
{
    return this.position.x;
}

Position.prototype.getY = function() 
{
    return this.position.y;
}
