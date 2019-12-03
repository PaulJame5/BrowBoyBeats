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
        
    }

    initScene(ctx)
    {

         
           // initialise Players
           this.playerOnePosition = {x: 500.0, y:500.0};
           this.playerTwoPosition = {x: 100.0, y:100.0};
   
           var playerOneName = "Player1";
           this.playerOne = new Player(this.playerOnePosition, playerOneName,"sprites/PlayerOne.png", this.ctx);
           this.playerTwo = new Player(this.playerTwoPosition, "Player Two","sprites/PlayerTwo.png", this.ctx);
           // End Initialisation of players
          
           // Init enemy
           
           this.enemyBrowPosition = {x: 50.0, y: 50.0};
           this.enemyBrowBoy = new Enemy(this.enemyBrowPosition,"sprites/browBoy.png",this.ctx);

             
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
       // ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
        ctx.font = '48px serif';
        
         // console.log("Rendering");
        this.playerTwo.renderPlayer();
        this.playerOne.renderPlayer();
        this.enemyBrowBoy.render();

        for(var i = 0; i < 10; i++)
        {
          this.enemyArray[i].render();
        }

        
        //ctx.fillStyle = rgb( this.color);
        document.body.style.background = 'White';
    }
    update()
    {
        this.playerOne.update();
        this.playerTwo.update();
        this.enemyBrowBoy.update();

    //this.playerTwo.update();
    
   // console.log("Finished Updating");



    }
}