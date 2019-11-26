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
        

          
  

        // var dist = this.playerOne.transform.DistanceFromSelf(this.playerTwo.transform.position);
        // var dist2 = this.playerOne.transform.Distance(this.playerTwo.transform.position,this.playerOne.transform.position);
        // console.log("Dist should = 5 : " + dist.toString()); // works
        // console.log("Dist2 should = 5 : " + dist2.toString()); // works

    }

    inputs()
    {
        this.sceneManager.goToNextScene();
        this.sceneManager.initScene(this.ctx);
        this.sceneManager.render(this.ctx);


       

        this.update();
        
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
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
       
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
        var menuScene = new MenuScene("MenuScreen");
        var titleScene = new TitleScene("TitleScreen");
        this.gameScene = new GameScene("GameScreen" , this.ctx);
        
        /**
         * 
         *adds scenes to the dictionary in addScene function
         *and calls renders the screenManger 
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
            this.enemyArray[i] = new Enemy(this.enemyPos[i],"Sprites/browBoy.png",this.ctx);
            this.enemyArray[i].setPosition(this.enemyPos[i]);
        }
        
        /* END ENEMY INITIALISE POOL */

        this.sceneManager.addScene( this.gameScene);
        this.sceneManager.addScene(menuScene);        
        this.sceneManager.addScene(titleScene);



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
        this.ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
        this.touches = e.touches;
        
        /**
          get the start of touch position x and y create two variables and store the start x and y
        */
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
        this.startForX = this.startX;
        this.startForY = this.startY;
        console.log(this.startX + " " + this.startY );
        this.time1 = new Date();
        
  
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
        
        var LeghtOfSwipe = Math.sqrt((x+y));
        
        
        /**
         * check if the time is greater tham 360 and thhe swipe is greater than 240
         * the output a message swipe detected
         */
        if(timeLapsed >= 360 && LeghtOfSwipe >= 240)
        {
            console.log("Swipe Detected");
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
        
        //this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        //console.log("Updating");
        this.lastFrameTimeMs = Date.now();
        this.sceneManager.update();



        
        
        for(var i = 0; i < 10; i++)
        {
          this.enemyArray[i].render();
        }

        
        /**var scene = this.sceneManager.getScene();
        this.sceneManager.update();
        */
        

      //  console.log("Rendering Completed");
      
        window.requestAnimationFrame(this.boundRecursiveUpdate);


        
         
    }

    

}

