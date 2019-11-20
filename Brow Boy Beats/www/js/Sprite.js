class Sprite
{
    
  constructor()
  {
    this.context;
    this.width;
    this.height;
    this.image;
  }


    
  sprite (options) 
  {
    var that = {},
    frameIndex = 0,
    tickCount = 0,
    ticksPerFrame = options.ticksPerFrame || 4;
            
    that.xVal = options.xVal;
    that.yVal = options.yVal;
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    that.numberOfFrames = options.numberOfFrames || 1;
    
    that.render = function () 
    {
      that.context.drawImage(that.image, frameIndex * that.width / that.numberOfFrames, 0, that.width / that.numberOfFrames, 32, that.xVal, that.yVal, that.width / that.numberOfFrames, 32);
    };

      
    that.loop = options.loop;
      
    that.update = function () 
    {

      tickCount += 1;
			
      if (tickCount > ticksPerFrame) 
      {
        tickCount = 0;
          
        // Increase frame index if we haven't reached the last frame
        if (frameIndex < that.numberOfFrames - 1)
        {	
            // Go to the next frame
            frameIndex += 1;
        }
        // We go back to 0 and loop the animation
        else
        {
            frameIndex = 0;
        }

      } // end if tickCount > ticksPerFrame
    };// end that.update call 

    // retrun the sprite    
    return that;
  }

} // End Sprite Class