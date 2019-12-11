class GameScene extends Scene
{
    /**
 * 
 * sets up the constructor with title
 */
    constructor(title , ctx)
    {
       
        super(title);
        this.title = title;
        this.ctx = ctx;

        this.camera = new Camera();

    

        
    }

    initScene(ctx)
    {

        // DEBUG CAMERA
        this.offsetX = 0;
        this.offsetY = 0;
        //================
        

           // initialise Players
           this.playerOnePosition = {x: 100.0, y:500.0};
           this.playerTwoPosition = {x: 100.0, y:100.0};
   
           var playerOneName = "Player1";
           this.playerOne = new Player(this.playerOnePosition, playerOneName,"sprites/PlayerOne.png", this.ctx);
           //this.playerTwo = new Player(this.playerTwoPosition, "Player Two","sprites/PlayerTwo.png", this.ctx);
           // End Initialisation of players
          
           // Init enemy
           
           this.enemyBrowPosition = {x: 50.0, y: 50.0};
           this.enemyBrowBoy = new Enemy(this.enemyBrowPosition,"sprites/browBoy.png",this.ctx,this.playerOne);
           
         
             
        /* INITIALISE ENEMY POOL */
        this.enemyPos = new Array(10);
        
        for(var i = 0; i < 10; i++)
        {
            this.enemyPos[i] = {x:0,y:0};
        }
        
        this.enemyArray = new Array(10); 
        
        for(var i = 0; i < 10; i++)
        {
            this.enemyPos[i].x = Math.floor(Math.random() * 300);
            this.enemyPos[i].y = Math.floor(Math.random() * 300);
            this.enemyArray[i] = new Enemy(this.enemyPos[i],"sprites/browBoy.png",this.ctx);
            this.enemyArray[i].setPosition(this.enemyPos[i]);
        }
        
        /* END ENEMY INITIALISE POOL */
    }
    /**
 * 
 * Function to draw the scene and  also clears the window 
 * @param {Object} t_ctx ctx used to create a font and text on screen and clear screen
 *
 */
    render(ctx)
    {
        ctx.clearRect(0,0, 100,100);
        ctx.save();
        //ctx.setPosition(this.camera.getPosition().x,this.camera.getPosition().y);
        ctx.translate(this.camera.getPosition().x,this.camera.getPosition().y);
        
        
       
       
        ctx.font = '48px serif';
        
        

        
        
        
        
        //this.playerTwo.renderPlayer(ctx);
        this.playerOne.renderPlayer(ctx);
        this.enemyBrowBoy.render();


        for(var i = 0; i < 10; i++)
        {
          this.enemyArray[i].render();
        }

        if(this.playerOne.getRight() == true)
        {
            console.log("ff");
            this.camera.setPositionX(this.camera.getPosition().x += 5);
        }
        if(this.playerOne.getLeft() == true)
        {
            
            console.log("dd");
            this.camera.setPositionX(this.camera.getPosition().x -= 5);
        }
        
        ctx.restore();
        //ctx.fillStyle = rgb( this.color);
        document.body.style.background = 'White'; 
        //ctx = null;
    }


    update(tappedX , tappedY , ctx)
    {

        this.tappedXPos = tappedX;
        this.tappedYPos = tappedY;
        this.playerOne.update( this.tappedXPos ,  this.tappedYPos,this.enemyBrowBoy,ctx);
        //this.playerTwo.update();
        this.enemyBrowBoy.update();

    //this.playerTwo.update();
    
    



    }
}