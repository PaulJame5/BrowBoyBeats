class MenuScene extends Scene
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
    
    /**
    * 
    * Function to draw the scene and  also clears the window 
    * @param {Object} ctx ctx used to create a font and text on screen also to clear screen
    *
    */
    render(ctx)
    {
        ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
        ctx.font = '48px serif';
        ctx.fillText('Menu Scene' , 10 , 50);
        document.body.style.background = 'green';
    }
}