  /**
 * 
 * Game class with constructor to set up event listener
 * and set up boundRecursiveUpdate
 *    
 */

//playerOne = new Player(playerOneX,playerOneX);

class Game
{
    constructor()
    {
        document.addEventListener('touchstart', function(e) {e.preventDefault();}, {passive: false});
        this.boundRecursiveUpdate = () => this.update(this);

        // We want to simulate 1000 ms / 60 FPS = 16.667 ms per frame every time we run update()
        this.timestep = 1000 / 60;
        this.tapped =false;
        this.tappedX = 0;
        this.tappedY = 0;
        this.timer =0;
        this.buttonTimer = 0;

       
    }

    inputs()
    {
        this.sceneManager.goToNextScene();
        this.sceneManager.initScene(this.ctx);
    }

   

    /**
    * 
    * Function to set up the canvas of the game and listen for a touch begin , a move and a end
    *    
    */
    initWorld()
    {
        // initialise update variables
        this.lastFrameTimeMs = 0; // The last time the loop was run
        this.maxFPS = 30; // The maximum FPS we want to allow
        this.delta = 0;
        
        var canvas = document.createElement("canvas");
        canvas.id = 'mycanvas';
    
        const DEFAULT_HEIGHT = 768;
        const DEFAULT_WIDTH = (window.innerWidth / window.innerHeight) * DEFAULT_HEIGHT;
        canvas.width = DEFAULT_WIDTH;
        canvas.height = DEFAULT_HEIGHT;

       
        /**
        * We want this to be a 2D canvas.
        */
       
        this.ctx = canvas.getContext("2d");
        /**
        *Adds the canvas element to the document.
        */
        document.body.appendChild(canvas);

    
        //calls and passes title to the constructors of each class
        this.sceneManager = new SceneManager();
        this.menuScene = new MenuScene("MenuScreen");
        this.titleScene = new TitleScene("TitleScreen" ,canvas.width,canvas.height );
        this.gameScene = new GameScene("GameScreen" , this.ctx);
        //OptionsScreen
        this.optionsScene = new OptionsScene("OptionsScreen");
        /**
         * 
         *adds scenes to the dictionary in addScene function
         *and calls the init scene for each scene the screenManger 
         */
        this.menuScene.initScene(this.ctx);
        this.titleScene.initScene(this.ctx);
        this.gameScene.initScene(this.ctx);
        this.optionsScene.initScene(this.ctx);


        this.sceneManager.addScene( this.gameScene);
        this.sceneManager.addScene(this.menuScene);        
        this.sceneManager.addScene(this.titleScene);
        this.sceneManager.addScene(this.optionsScene);
        /**goes to very first scene eg title scene */
        this.sceneManager.goToScene("TitleScreen");



        /**
        * event listener to listen for a touch move, start and end
        */
        document.addEventListener("touchstart", () => this.onTouchStart(event)); 
        document.addEventListener("touchmove", () => this.onTouchMove(event)); 
        document.addEventListener("touchend", () => this.onTouchEnd(event)); 

        window.addEventListener("keydown", e => 
        {
            /**
             *  Space and arrow keys to prevent the scrool of the screen
              */
                if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1)
                {
                    e.preventDefault();
                }
            }, false);
 
    }
    
    
    /*
    * 
    * Function to clear the window and get the start of the touch and get time at start of touch
   * @param {Object} e event hanlder
    *    
    */
    onTouchStart(e)
    {
        //this.ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
        this.touches = e.touches;
        
        /**
          get the start of touch position x and y create two variables and store the start x and y
        */
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
        this.startForX = this.startX;
        this.startForY = this.startY;
        
        this.time1 = new Date();
        this.tappedX = this.startForX;
        this.tappedY =this.startForY;
        this.tapped = true;
        
    }
      
    /**
    * 
    * Function to get whether there is a move across the screen, also draws a line along the movement and get the end x and y
    * also update start to be at the end as  finger is moved 
    * @param {Object} e event hanlder
    *     
    */
    onTouchMove(e)
    {
        this.changedTouches = e.changedTouches;
        this.endX = e.changedTouches[0].clientX;
        this.endY = e.changedTouches[0].clientY;
        
        /**
         * sets up the line
         */
        this.ctx.beginPath(); 
        this.ctx.moveTo(this.startX, this.startY);	//the previous touch
        this.ctx.lineTo(this.endX,this.endY);	//the current touch
        this.ctx.stroke();

        this.startX = this.endX;
        this.startY = this.endY;
    }
        
    /**
    * 
    * Function to get the end of a touch and the time when touch ends
    * also gets lenght of swipe to determine if its long enough to swipe.
    * @param {Object} e event hanlder
    *    
    */
    onTouchEnd(e)
    {

        var x;
        var y;
        /**
         * get the time and timplaspsed
         */
        this.time2 = new Date();
        var timeLapsed =this.time2 -this.time1;
        /** 
        *get and set the end x and y 
        *get value for x squared and multiply
        */
        this.endSwipeX = this.endX;
        this.endSwipeY = this.endY;
        x = this.endSwipeX - this.startForX;
        x = x * x;

        /** 
        *get value for y squared and multiply
        * get the lenght of swipe usin the square root of x +y
        */
        y = this.endSwipeY - this.startForY;
        y = y * y;
        
        this.LeghtOfSwipe = Math.sqrt((x+y));
        
        
        /**
         * check if the time is greater tham 360 and thhe swipe is greater than 240
         * the output a message swipe detected
         */
        if(timeLapsed >= 360 && this.LeghtOfSwipe >= 240)
        {
            
            this.tapped = false;
            
        }
      
       
    }
        
    /**
    * 
    * Function to create game loop
 
    *    
    */
    update()
    { 
        // Throttle the frame rate.    
        if (Date.now() < this.lastFrameTimeMs + (1000 / this.maxFPS)) 
        {
           // console.log("Frame Buffer");
            window.requestAnimationFrame(this.boundRecursiveUpdate);


            return;
        }
        /**
        var menuScene = new MenuScene("MenuScreen");
        var titleScene = new TitleScene("TitleScreen");
        this.gameScene = new GameScene("GameScreen" , this.ctx);
        */
       
       if( this.sceneManager.getScene() === "TitleScreen")
       {
            if(this.timer !== 30)
            {
                this.timer  = this.timer +1 ;
                
            }
            else if(this.timer === 30)
            {
                this.sceneManager.goToScene("MenuScreen");
                this.timer = 0;
            }
        }
        else if(this.tappedX > this.menuScene.getPosX() && this.tappedX < this.menuScene.getPosX() + this.menuScene.getWidth()
            && this.tappedY > this.menuScene.getPosY() && this.tappedY < this.menuScene.getPosY() + this.menuScene.getHeight()
            && this.sceneManager.getScene() === "MenuScreen")
        {
            this.sceneManager.goToScene("GameScreen");
        }
        else if(this.tappedX > this.menuScene.getPosX() && this.tappedX < this.menuScene.getPosX() + this.menuScene.getWidth()
            && this.tappedY > this.menuScene.getOptionsPosY() && this.tappedY < this.menuScene.getOptionsPosY() + this.menuScene.getHeight()
            && this.sceneManager.getScene() === "MenuScreen" )
        {
            
            this.sceneManager.goToScene("OptionsScreen");
        }
        else if(this.tappedX > this.menuScene.getPosX() && this.tappedX < this.menuScene.getPosX() + this.menuScene.getWidth()
        && this.tappedY > this.menuScene.getQuitPosY() && this.tappedY < this.menuScene.getQuitPosY() + this.menuScene.getHeight()
        && this.sceneManager.getScene() === "MenuScreen" )
        {
            this.tappedX = 0;
            this.tappedY = 0;
            this.sceneManager.goToScene("TitleScreen");
        }
        else if(this.tappedX > this.optionsScene.getPosX() && this.tappedX < this.optionsScene.getPosX() + this.optionsScene.getWidth()
            && this.tappedY > this.optionsScene.getPosY() && this.tappedY < this.optionsScene.getPosY()  + this.optionsScene.getHeight()
            && this.sceneManager.getScene() === "OptionsScreen" )
        {
            this.sceneManager.goToScene("MenuScreen");
        }
       
        
        if(this.tapped = true && this.sceneManager.getScene() == "GameScreen")
        {
            this.sceneManager.update(this.tappedX , this.tappedY,this.ctx);
        }
        else
        {
            this.sceneManager.update(this.tappedX , this.tappedY,this.ctx);
        }
        
        this.lastFrameTimeMs = Date.now();

        this.render();

        /**var scene = this.sceneManager.getScene();
        this.sceneManager.update();
        */
        

      //  console.log("Rendering Completed");
      
        window.requestAnimationFrame(this.boundRecursiveUpdate);


        
         
    }
    render()
    {
        this.ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
        this.sceneManager.render(this.ctx);
    }

    

}

