class GameScene extends Scene
{
    /**
 * 
 * sets up the constructor with title
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
 * @param {Object} t_ctx ctx used to create a font and text on screen and clear screen
 *
 */
    render(ctx)
    {
        ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
        ctx.font = '48px serif';
        ctx.fillText('Game Scene' , 10 , 50);
        //ctx.fillStyle = rgb( this.color);
        document.body.style.background = 'pink';
    }
}