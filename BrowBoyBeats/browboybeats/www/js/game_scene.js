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
        this.input = new Input();
        this.camera = new Camera();
        
        

        
    }

    initScene(ctx)
    {
        this.timer = 0;
        // DEBUG CAMERA
        this.offsetX = 0;
        this.offsetY = 0;
        //================
        //load the tutorial message
        this.img = new Image();   
        this.img.addEventListener('load', function() 
        {
           

        }, false);
        this.img.src = 'sprites/tutorial.png';


           // initialise Players
           this.playerOnePosition = {x: 100.0, y:500.0};
           this.playerTwoPosition = {x: 100.0, y:100.0};
           this.spritePosition ={x:50 ,y:50};
           this.bgPos ={x:400 ,y:0};
           var playerOneName = "Player1";
           this.playerOne = new Player(this.playerOnePosition, playerOneName,"sprites/PlayerOne.png", this.ctx ,this.input);
           //this.playerTwo = new Player(this.playerTwoPosition, "Player Two","sprites/PlayerTwo.png", this.ctx);
           // End Initialisation of players
          // this.value = ;
           //handleFiles("tilemap/Level_One.txt");
          
          
           // Init enemy
           
           
           //var level = new LevelLoading(); 
           //this.levelLoader = new LevelLoading("tilemap/BrowBoyMap/json");
           
           this.enemyBrowPosition = {x: 50.0, y: 50.0};
           this.enemyBrowBoy = new Enemy(this.enemyBrowPosition,"sprites/browBoy.png",this.ctx,this.playerOne);
           
           this.map = new Sprite();

           this.mapImg = new Image();   // Create new img element
           this.mapImg.addEventListener('load', function() 
           {
               // execute drawImage statements here
           }, false);

           this.mapImg.src = "tilemap/BrowBoyMap.png"; // Set source path
          /**  this.map = this.map.sprite
           ({
               xVal : 400,
               yVal : 0,
               context: this.ctx,
               width: 792,
               height: 264,
               image: this.mapImg,
               numberOfFrames: 1
           });
         */
             
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
            this.enemyArray[i] = new Enemy(this.enemyPos[i],"sprites/browBoy.png",this.ctx,this.playerOne);
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
        ctx.resetTransform();
        
       // ctx.style(pixel)
        ctx.clearRect(0,0, 100,100);
        ctx.scale(2,2);
        ctx.save();
        
        this.camera.setPositionX(-this.playerOne.transform.position.getX() + -273 + window.innerWidth/2);
        this.camera.setPositionY(-this.playerOne.transform.position.getY() + -435 + window.innerHeight/2);
        //ctx.setPosition(this.camera.getPosition().x,this.camera.getPosition().y);
        ctx.translate(this.camera.getPosition().x,this.camera.getPosition().y);
        
       
       
        ctx.font = '48px serif';
        
        //this.map.render();

        
        ctx.drawImage(this.mapImg, this.bgPos.x  , this.bgPos.y);
        ctx.drawImage(this.img, this.spritePosition.x  , this.spritePosition.y);
        // Not drawing 
        
        //this.playerTwo.renderPlayer(ctx);
        this.playerOne.renderPlayer(ctx);
        this.enemyBrowBoy.render();
        //scene.call(renderL)
        


        for(var i = 0; i < 10; i++)
        {
          this.enemyArray[i].render();
          this.enemyArray[i].update();
        }

        // Camera move debug ===============
        // if(this.playerOne.getRight() == true)
        // {
            
        //     this.offsetX--;
        // }

        // if(this.playerOne.getLeft() == true)
        // {
        //     this.offsetX++;
        // } 
        
        // if(this.playerOne.getUp() == true)
        // {
        //     this.offsetY++;
        // }

        // if(this.playerOne.getDown() == true)
        // {
        //     this.offsetY--;
        // }
        // // end camera move debug ================
        //draw tutorial sprite
     
        ctx.restore();
        document.body.style.background = 'White'; 
        
    }
    update(tappedX , tappedY , ctx)
    {       
        this.tutorialManager();
        this.tappedXPos = tappedX;
        this.tappedYPos = tappedY;
        this.playerOne.update( this.tappedXPos ,  this.tappedYPos,this.enemyBrowBoy,ctx);
        //this.playerTwo.update();
        this.enemyBrowBoy.update();
    }
    tutorialManager()
    {
        if(this.timer !== 120)
        {
            this.timer  = this.timer +1;
        }
        //this changes turorial message only tempory for test
        if(this.timer >= 30 && this.input.pressedDown === true)
        {
            this.img.src = 'sprites/tutorial1.png';
        }
        else if(this.timer >= 60 && this.input.attack === true 
            && this.input.pressedDown === false)
        {
            this.img.src = 'sprites/tutorial2.png';
        }
    }
}