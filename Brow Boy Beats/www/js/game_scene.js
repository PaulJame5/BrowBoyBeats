class GameScene extends Scene
{
    /**
 * 
 * sets up the constructor with title
 */
    constructor(title ,ctx)
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
          this.playerOne = new Player(this.playerOnePosition, playerOneName,"Sprites/PlayerOne.png", this.ctx);
          this.playerTwo = new Player(this.playerTwoPosition, "Player Two","Sprites/PlayerTwo.png", this.ctx);
          // End Initialisation of players
    }
    update()
    {
        this.playerOne.update();
        this.playerTwo.update();
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

        this.playerTwo.renderPlayer();
        this.playerOne.renderPlayer();
    }
}