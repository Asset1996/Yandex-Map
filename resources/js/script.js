const button = document.getElementById('submit_button');
const Z = 19;
const R = 6367;
const E = 0.0818191908426;
button.onclick = function(e){
    e.preventDefault();
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

    results = document.getElementById("results")
    results.innerHTML = `<p>X = ${X}</p><p>Y = ${Y}</p>`;
    results.style["display"] = "block";
};