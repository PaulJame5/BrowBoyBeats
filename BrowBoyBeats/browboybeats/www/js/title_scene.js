class TitleScene extends Scene
{
     
    /**
    * 
    * sets up the constructor ctx and color
    */
    constructor(title ,width,height)
    {
       
        super(title,width,height);
        this.title = title;
        this.canvasWidth = width;
        this.canvasHeight = height;
        
    }
    initScene(ctx)
    {
        this.img = new Image();   

        this.img.addEventListener('load', function() 
        {
            
        }, false);
      
        this.img.src = 'sprites/Background.png'; 
      
        
    }
    /**
    * 
    * Function to draw the scene and  also clears the window 
    * 
    *
    */
    render(ctx)
    {

        ctx.drawImage(this.img, 0, 0);
        //ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
        ctx.font = '48px serif';
        //ctx.fillStyle = rgb( this.color);
        document.body.style.background = 'red';
    }
    update(tappedX , tappedY , ctx)
    {
        this.context = ctx;

        this.tappedXPos = tappedX;
        this.tappedYPos = tappedY;
        //return;
    }
} // end class title screen