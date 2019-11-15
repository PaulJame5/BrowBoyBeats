// This is the player class where there are fuctions readily availble to be used

init_position = {x:0,y:0};
// Player Class
function Player(init_position)
{

    var transform = new Transform(init_position); // initilised Values

    this.transform = transform;
}



    // Used to initialise player class
    ///<summary> 
    /// init_posX: initialise position X to this
    /// init_posY: initialise position Y to this
    /// init_health: initialise health to this
    // Initialise(init_posX,init_posY)
    // {
    //     this.player_transform.position.x = init_posX;
    //     this.player_transform.y = init_posY;
    
    // }



//     // Move function for checking all types of inputs from the user
//     Move()
//     {
//         // Left and Right Movement (We can only ever be one or the other)
//         if(LeftInput())
//         {
//             this.player_transform.position.x -= player_speed;
//         }
//         else if(RightInput())
//         {
//             this.player_transform.position.x += player_speed;
//         }

//         // Up and Down Movement (Like left and right we can only ever be one or the other)
//         if(UpInput())
//         {
//             this.player_transform.position.y += player_speed;
//         }
//         else if(DownInput())
//         {
//             this.player_transform.position.y -= player_speed;
//         }

//     }




// /* Input Detection for Player */

// // if left key detected return true otherwise return false
//     LeftInput()
//     {
//         // event listener for detecting keyboard input
//         document.addEventListener('keydown', function(event) 
//         {
//             if(event.keyCode == LEFT_KEY)
//             {
//                 return true;
//             }
//             return false;
//         });
//     }


//     // if right key detected return true otherwise return false
//     RightInput()
//     {   
//         // event listener for detecting keyboard input
//         document.addEventListener('keydown', function(event) 
//         {
//             if(event.keyCode == RIGHT_KEY)
//             {
//                 return true;
//             }
//             return false;
//         });
//     }

//     UpInput()
//     {
//     // if up input return true

//     // else return false
//     }

//     DownInput()
//     {
//     // if down input return true

//     // else return false
//     }
// /* End Input Detection for Player */



//     RenderPlayer()
//     {
//         // Draw Player Sprite in here
//     }

// }