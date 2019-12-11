function Camera()
{

    this.position = {x: 0, y: 0};
    this.canFollow = true;
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

Camera.prototype.canFollow = function()
{
    return this.canFollow;
}

Camera.prototype.setCanFollow = function(t_bool = true)
{
    this.canFollow = t_bool;
}




