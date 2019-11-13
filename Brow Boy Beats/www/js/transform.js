// transform.js is a class for performing transform calcultions 

// Objects that use the transform class will inherit a position class as well
class Transform
{
    
    constructor(position)
    {
        this.positon.x = position.x;
        this.position.y = position.y;
    }

    // Returns the distance of two points in 2D space
    static Distance(transform1, transform2)
    {
        const distX = transform1.position.x - transform2.position.x;
        const distY = transform1.position.y - transform2.position.y;

        return Math.hypot(distX,distY);
    }

    // Finds Distance From Self to passed in target
    DistanceFromSelf(otherTransform)
    {
        const distX = otherTransform.position.x - this.x;
        const distY = otherTransform.position.y - this.y;

        return Math.hypot(distX,distY);
    }
}