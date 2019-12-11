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
Transform.prototype.distance = function(position1 = {x:0 , y:0}, position2 = {x:0 , y:0})
{
    /**this.pos = position1;
    this.targetPos = position2;*/
    
    const distX = position1.x - position2.x;
    const distY = position1.y - position2.y;

    var dist = 0.0;
    dist = Math.hypot(distX,distY);
    console.log(dist + "distance");
    
    // Returns the hyptonuse of a triangle in other words the distance between these two points
    return dist;
} // end distance



Transform.prototype.moveTowards = function(current_position={x:0.0,y:0.0},target_position={x:0.0,y:0.0} ,maxDistance)
{
    

    //console.log("Target to X : " + this.target.x + " Current to X : " + this.current.x + " MaxDistance" + this.maxDistance );
    this.toVecX = target_position.x - current_position.x;
    this.toVecY = target_position.y - current_position.y; 
    
    this.squaredDistance = this.toVecX * this.toVecX + this.toVecY * this.toVecY;

    if(this.squaredDistance == 0 || maxDistance >= 0 
        && this.squaredDistance <= maxDistance * maxDistance)
    {
       return target_position;
      
    }
    var dist = Math.sqrt(this.squaredDistance);
    return  {x: current_position.x + this.toVecX / dist * maxDistance , y: current_position.y + this.toVecY / dist * maxDistance};
   
}



    
