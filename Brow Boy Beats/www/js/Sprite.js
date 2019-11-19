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
        console.log("sprite");
        var that = {},
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0;
                        
        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;
        that.numberOfFrames = options.numberOfFrames || 1;
    
      that.render = function () 
        {

          console.log("render");
          that.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
          that.context.drawImage(that.image, frameIndex * that.width / that.numberOfFrames, 0, that.width / that.numberOfFrames, 228, 0, 0, that.width / that.numberOfFrames, 228);
      };

    that.loop = options.loop;
    that.update = function () {

        tickCount += 1;
			
        if (tickCount > ticksPerFrame) {
        
        	tickCount = 0;
        	
          if (frameIndex < that.numberOfFrames - 1)
          {	
            // Go to the next frame
            frameIndex += 1;
          }
          else if (that.loop)
          {
            frameIndex = 0;
          }
        }
    }; 

        return that;
    }

}