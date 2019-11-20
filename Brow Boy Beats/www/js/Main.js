 /**
 * Main function
 * creates the game,  calls the game update , initialise 
 */
function main()
{
    /**
     * call function to check is a touch device
     */
    is_touch_device();
    /**
     * log whether its a touch device
     */
    console.log(is_touch_device());
    /**
     * create game object and call Game constructor
     */
    var game = new Game();
    document.addEventListener("keydown", () => this.keyDownHandler(game , event)); 
    /**
     * call functions to init the world and update game
     */
    game.initWorld();
    game.update();
    
    

}
function keyDownHandler (t_game , e)
{
    
    if(e.keyCode === 87)
    {
     t_game.inputs();
    }
}


