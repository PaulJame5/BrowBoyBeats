function Sound(src) 
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";

    document.body.appendChild(this.sound);

    this.loopSong = function()
    {
        
        this.sound.loop = true;
        this.sound.play();
    }
    this.play = function()
    {
        this.sound.play();
    }
    this.stop = function()
    {
        this.sound.pause();
    }    
} // end sound manager