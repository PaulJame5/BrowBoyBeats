class OptionsScene extends Scene
{
     /**
 * 
 * sets up the constructor ctx and color
 */
    constructor(title)
    {
       
        super(title);
        this.title = title;
        this.buttonWidth = 300;
        this.buttonHeight= 95;
        this.XPos = 10;
        this.yPos = 600; 
    }
    initScene(ctx)
    {
        this.img = new Image();   
        this.img.addEventListener('load', function() 
        {
           

        }, false);
        this.img.src = 'sprites/Back.png';
    }
    
    /**
    * 
    * Function to draw the scene and  also clears the window 
    * @param {Object} ctx ctx used to create a font and text on screen also to clear screen
    *
    */
    render(ctx)
    {
        ctx.drawImage(this.img, this.XPos , this.yPos);
        ctx.font = '48px serif';
        document.body.style.background = 'green';
    }
    update(tappedX , tappedY)
    {

        this.tappedXPos = tappedX;
        this.tappedYPos = tappedY;
        
    }
    getWidth()
    {
        return this.buttonWidth;
    }
    getHeight()
    {
        return this.buttonHeight;
    }
    getPosX()
    {
        return this.XPos; 
    }
    getPosY()
    {
        return this.yPos; 
    }
   

}