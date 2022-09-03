function ready() {
    const button = document.getElementById('submit_button');
    const zoom_input = document.getElementById('zoom');
    const R = 6367;
    const E = 0.0818191908426;
    var Z = 19;

    button.onclick = function(e){
        e.preventDefault();
        Z = Number(zoom_input.value);
        let longitude = document.getElementById('longitude').value;
        let latitute = document.getElementById('latitute').value;
    
        let _ro = (Math.pow(2, (Z+8))) / 2;
        let _B = (Math.PI * latitute) / 180;
        let _phi = (1 - E * Math.sin(_B))/(1 + E * Math.sin(_B))
        let _phi_half_E = Math.pow(_phi, E/2)
        let _O = Math.tan( (Math.PI/4) + (_B/2) ) * _phi_half_E;
    
        let X = _ro * (1 + (longitude/180))
        let Y = _ro * (1 - (Math.log(_O)/Math.PI))
    
        X = Math.floor(X / 256)
        Y = Math.floor(Y / 256)
    
        url = `https://core-renderer-tiles.maps.yandex.net/tiles?l=map&v=22.08.31-1-b220819125430&x=${X}&y=${Y}&z=${Z}&scale=2&lang=ru_KZ&ads=enabled`;
    
        if (url){
            document.getElementById('zoom').disabled = false;
        }
        results = document.getElementById("results")
        results.innerHTML = `<p>X = ${X}</p><p>Y = ${Y}</p><p><img src="${url}"></img></p>`;
        results.style["display"] = "block";
    };
    
    zoom_input.onchange = function(e){
        button.click()
    }
}

document.addEventListener("DOMContentLoaded", ready);