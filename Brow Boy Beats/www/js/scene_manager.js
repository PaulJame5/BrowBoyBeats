class SceneManager
{
    /**
    * 
    * sets up the constructor and dictionary , array and tile and currentscene
    */
    constructor()
    {
        this.currentScene = null;
        this.scenesDict = {};
        this.scenesList = [];
        this.index =-1;
    }
        
    /**
    * 
    * Function to add scene to the dictionary
    * @param {Object} scene used to pass a scene 
    * 
    */
    addScene(scene)
    {
       
        /**
        * 
        * puts passed scene into a dictioary
        * 
        *
        */
        this.scenesDict[scene.title] = scene;

        this.scenesList.push(scene.title);
        console.log("scene lists" + this.scenesList);
        
    }
    
    /**
    * 
    * Function to check the scene and go to it 
    * @param {Object} title checks the passed in scene in the array
    */
    goToScene(sceneTitle)
    {
        if (this.currentScene !== null)
        {
            this.currentScene.stop();
        }
        
        this.currentScene = this.scenesDict[sceneTitle];
        this.currentScene.start();
        
       
    }

    /**
    * 
    * Function to go to the next scene
    */
    goToNextScene()
    {

        if(this.currentScene != null)
        {    
            this.currentScene.stop();
        }
        
        this.index = (this.index + 1 ) % this.scenesList.length;
        var sceneTitle = this.scenesList[this.index];
        
        // Get the scene object from the dictionary
        this.currentScene = this.scenesDict[sceneTitle];
        this.currentScene.start();
       

    }
    
    
    /**
    * 
    * Function to render the text on the screen for Scene Manager
    * @param {Object} ctx ctx used to create a font and text on screen 
    *   
    */
    render(ctx)
    {
        ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
        ctx.fillText('Scene Manager' , 10 , 50);
        this.currentScene.render(ctx);
    }
    initScene(ctx)
    {
       this.currentScene.initScene(ctx);
    }
    update()
    {
        this.currentScene.update();
    }

}