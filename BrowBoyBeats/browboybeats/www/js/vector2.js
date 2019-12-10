function Vector2(x,y)
{
    this.x = x;
    this.y = y;
}
  Vector2.prototype.add = function (vec)
  {
    return new Vector2(this.x +vec.x , this.y + vec.y);
  }
  Vector2.prototype.sub = function (vec)
  {
    return new Vector2(this.x - vec.x , this.y - vec.y);
  }
  Vector2.prototype.scale = function (scale)
  {
    return new Vector2(this.x *scale , this.y *scale);
  }
  Vector2.prototype.dot = function (vec)
  {
    return new Vector2(this.x *vec.x , this.y * vec.y);
  }
  Vector2.prototype.distance = function (vec)
  {
   return Math.sqrt(this.distanceSquared(vector));
  }
  Vector2.prototype.distanceSquared = function (vec)
  {
    var xVal = this.x - vec.x;
    var yVal = this.y - vec.y; 
    return (xVal * xVal + yVal*yVal);
  }
  Vector2.prototype.magnitude = function ()
  {
    return Math.sqrt(this.magnitudeSquared());
  } 

  Vector2.prototype.magnitudeSquared = function ()
  {
    return (this.x * this.x + this.y * this.y);
  }
  Vector2.prototype.clone = function ()
  {
    return new Vector2(this.x , this.y);
  }

  Vector2.prototype.normalise = function ()
  {
    var mag = this.magnitude();
    var vec = this.clone();
     if(Math.abs(mag) < 1e-9)
     {
         vec.x =0;
         vec.y =0;
     }
     else
     {
        vec.x /= mag;
        vec.y /= mag;
     }

     return vec;
  }
  Vector2.prototype.angle = function ()
  {
    return Math.atan2(this.y , this.x);
  }
