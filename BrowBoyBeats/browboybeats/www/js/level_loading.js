function LevelLoading()
{
    var context;
    var data;
    var layers = [];

    this.getMap = function(name,ctx)
    {
        context = ctx;
        $.getJSON('tilemap/'+ name + '.json' , function(json)
        {
            getTileset(json);
        });
    };

    function getTileset(json)
    {
        data = json;
        this.tileset = $("<sprites/>" , {src: json.tilesets[o].image})[0];
        this.tileset.onload = renderLayers(this);

    }
    function renderLayers(layers)
    {
        layers = $.isArray(layers) ? layers :data.layers;
        layers.forEach(renderLayer);
            
        
    }
    function renderLayer(layer)
    {
        if(layer.type !== "tilelayer" || !layer.opacity)
        {
            alert("Not tilelayer");
        }
        var s = c.canvas.cloneNode(),size = data.tileWidth;
        s = s.getContext("2d");

        if(layers.length < data.layers.length)
        {
            layer.data.forEach(function(title_idx, i)
            {
                if(!title_idx)
                {
                    return;
                }

                var imgX ,imgY ,sX,sY,title=data.tileset[0];
                title_idx--;
                imgX = (title_idx % (tile.imagewidth / size)) * size;
                imgY = ~~(title_idx / (tile.imagewidth / size)) * size;
                sX = (i % layer.width) * size;
                sY = ~~(i / layer.width) * size;

                s.drawImage(this.tileset , imgX ,imgY ,size ,size ,sX,sY,size,size)
            });

            layers.push(s.canvas.toDataURL());
            context.drawImage(s.canvas, 0 ,0);

        }
        else
        {
            layers.forEach(function(src)
            {
                var i =$("<img />", { src: src })[0];
                context.drawImage(i,0,0);
            })
        }
    }
}