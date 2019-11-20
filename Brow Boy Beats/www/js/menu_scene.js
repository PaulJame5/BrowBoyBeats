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
    initMenuScene()
    {
        var img = new Image();   // Create new img element
        img.addEventListener('load', function() {
          // execute drawImage statements here
        }, false);
        img.src = 'myImage.png'; // Set source path
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
        ctx.fillText('Menu Scene' , 100 , 100);
        document.body.style.background = 'green';
    }
}