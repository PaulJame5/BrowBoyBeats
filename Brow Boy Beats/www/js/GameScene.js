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