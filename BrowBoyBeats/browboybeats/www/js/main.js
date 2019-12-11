 /**
 * Main function
 * creates the game,  calls the game update , initialise 
 */
function main()
{

    
    /**var ws = new WebSocket("ws://localhost:8080/wstest");
    
    //called when the websocket is opened
    ws.onopen = function() 
    {  
        ws.send("Hello, world");
    };
    //called when the client receives a message
    ws.onmessage = function (evt)
    {
        alert(evt.data);
    };*/

    /**
     * call function to check is a touch device
     */
    is_touch_device();
    /**
     * log whether its a touch device
     */
    
     
    /**
     * create game object and call Game constructor
     */
    var game = new Game();
    //document.addEventListener("keydown", () => this.keyDownHandler(game , event)); 
    //document.addEventListener("keyup", () => this.keyUpHandler(game , event)); 
    this.pressed = false;
    /**
     * call functions to init the world and update game
     */
    game.initWorld();
    game.update();



}
function keyDownHandler (t_game , e)
{
    if(e.keyCode === 87 && this.pressed == false)
    {
        this.pressed = true;
        t_game.inputs();
    }
}

function keyUpHandler (t_game , e)
{
    if(e.keyCode === 87 && this.pressed == true)
    {
        this.pressed = false;
    // t_game.inputs();
    }
}






