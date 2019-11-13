// transform.js is a class for performing transform calcultions 

class Transform
{
    
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }

    // Returns the distance of two points in 2D space
    static Distance(position1, position2)
    {
        const distX = position1.x - position2.x;
        const distY = position1.y - position2.y;

        return Math.hypot(distX,distY);
    }

    // Finds Distance From Self to passed in target
    DistanceFromSelf(otherObject)
    {
        const distX = otherObject.x - this.x;
        const distY = otherObject.y - this.y;

        return Math.hypot(distX,distY);
    }
}