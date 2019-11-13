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
        var that = {};
                        
        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;
    


        that.render = function () {

          console.log("render");

          // Draw the animation
          that.context.drawImage(
            that.image,
             0,
             0,
             that.width,
             that.height,
             0,
             0,
             that.width,
             that.height);
      };

        return that;
    }

}