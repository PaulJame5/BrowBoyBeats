// transform.js is a class for performing transform calcultions it takes in a position to initialise the class 
function Transform(position={x:0.0, y:0.0})
{
    // declare this position as new Position
    this.position = new Position(position);
}

 // Finds Distance From Self to passed in target
 Transform.prototype.distanceFromSelf = function (otherPosition = {x: 0.0, y: 0.0})
 {
     const distX = otherPosition.getX() - this.position.getX();
     const distY = otherPosition.getY() - this.position.getY();

     // Returns the hyptonuse of a triangle in other words the distance between these two points
     return Math.hypot(distX,distY);
 } // End distance from self


// Returns the distance of two points in 2D space
Transform.prototype.distance = function(position1 = {x: 0.0, y: 0.0}, position2 = {x: 0.0, y: 0.0})
{
    const distX = position1.x - position2.x;
    const distY = position1.y - position2.y;
    
    // Returns the hyptonuse of a triangle in other words the distance between these two points
    return Math.hypot(distX,distY);
} // end distance



    
