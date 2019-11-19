class Scene
{
        /**
 * 
 * sets up the constructor and title title and ctx
 */
    constructor(title, ctx)
    {
        this.title=title;
        this.ctx = ctx;
 
    }
 /**
 * Function to start scene  
 */
    start()
    {
        console.log("Starting");
    }
/**
 * 
 * Function to stop the scene
 */
    stop()
    {
        console.log("Stopping");
    }
/**
 * 
 * Function to render the text on the screen for scene
 * @param {Object} t_ctx ctx used to create a font and text on screen 
 *   
 */
    render(ctx)
    {
        ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
        ctx.font = '48px serif';
        ctx.fillText('Scene' , 10 , 50);

        
        
    }
}