// transform.js is a class for performing transform calcultions 
pos = ([0,0])
function Transform(pos)
{
    var position = new Position(pos);
    this.position = position;

}

 // Finds Distance From Self to passed in target
 Transform.prototype.DistanceFromSelf = function (otherPosition)
 {
     const distX = otherPosition.x - this.position.x;
     const distY = otherPosition.y - this.position.y;

     // Returns the hyptonuse of a triangle in other words the distance between these two points
     return Math.hypot(distX,distY);
 }


// Returns the distance of two points in 2D space
Transform.prototype.Distance = function(position1, position2)
{
    const distX = position1.x - position2.x;
    const distY = position1.y - position2.y;

    return Math.hypot(distX,distY);
}

// Returns the distance of two points in 2D space
Transform.prototype.Pos = function()
{

    return this.position;
}



    
