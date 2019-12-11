function Camera()
{

    this.position = {x: 0, y: 0};

}





Camera.prototype.setPositionX = function(x)
{
    this.position.x = x;
}

Camera.prototype.setPositionY = function(y)
{
    this.position.y = y;
}


Camera.prototype.getPosition = function()
{
    return this.position;
}