class TitleScene extends Scene
{
     
    /**
    * 
    * sets up the constructor ctx and color
    */
    constructor(title)
    {
       
        super(title);
        this.title = title;
        
    }
    initScene(ctx)
    {
        var img = new Image();   
        img.addEventListener('load', function() 
        {
            ctx.drawImage(img, 0, 0);
        }, false);

        img.src = 'Sprites/Background.png'; 
    }
    update()
    {
        
    }
    /**
    * 
    * Function to draw the scene and  also clears the window 
    * 
    *
    */
    render(ctx)
    {
        ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
        ctx.font = '48px serif';
        ctx.fillText('Title Scene' , 10 , 50);
        //ctx.fillStyle = rgb( this.color);
        document.body.style.background = 'red';
    }
} // end class title screen