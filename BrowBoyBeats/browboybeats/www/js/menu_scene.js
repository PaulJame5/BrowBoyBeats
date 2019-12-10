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
        this.buttonWidth = 300;
        this.gap = 80;
        this.buttonHeight= 95;
        this.XPos = 10;
        this.newGameY = 150;
        this.optionsY = this.newGameY + this.buttonHeight + this.gap;
        this.quitGameY = this.optionsY + this.buttonHeight + this.gap;
       
        

        
    }
    initScene(ctx)
    {
        this.img = new Image();   
        this.img.addEventListener('load', function() 
        {
           

        }, false);
        this.img.src = 'sprites/NewGame.png';

        this.quitImg = new Image();   
        this.quitImg.addEventListener('load', function() 
        {
           

        }, false);
        this.quitImg.src = 'sprites/QuitGame.png';


        this.optionsImg = new Image();   
        this.optionsImg.addEventListener('load', function() 
        {
           

        }, false);
        this.optionsImg.src = 'sprites/Options.png';

    }
    
    /**
    * 
    * Function to draw the scene and  also clears the window 
    * @param {Object} ctx ctx used to create a font and text on screen also to clear screen
    *
    */
    render(ctx)
    {
        ctx.drawImage(this.img, this.XPos , this.newGameY);
        ctx.drawImage(this.optionsImg, this.XPos , this.optionsY);
        ctx.drawImage(this.quitImg, this.XPos , this.quitGameY);
        
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
        return this.newGameY; 
    }
    getQuitPosY()
    {
        return this.quitGameY; 
    }
    getOptionsPosY()
    {
        return this.optionsY;
    }

}