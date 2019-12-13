this.loadJSON = function( path, success, error ) {
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

this.loadJSON("maps/level" + this.level + ".json?",function( map ) {
    dw.map = map;
    dw.load_map_resources();
    dw.on_load_completed();
}, false); 

this.load_map_resources = function() 
{

    var dw = this;
    var imagePath = "img";

    for ( var i = 0 ; i <  this.map.tilesets.length ; i++ ) 
    {
        if ( this.map.tilesets[i].name == "TileMap" ) {

            // Tiles
            this.sprite_bgtiles = new Image();
            this.sprite_bgtiles.src = imagePath + "/" + this.baseName( this.map.tilesets[i].image  );
            this.sprite_bgtiles.addEventListener('load', function() {
                dw.on_load_completed();
            },false);
        } 
    }
}