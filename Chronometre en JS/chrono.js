// les variables dont on a besoin

var span, t, ms, mn, h, ms, btn_start, btn_stop, sp


// fonction pour initailiser les variables quand la page se charge

window.onload = function() {
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    btn_reset = document.getElementById('reset')
    t;
    ms = 0, s = 0, mn = 0, h = 0
}

// mettre en place le compteur
function update_chrono() {
    ms+=1;
    if (ms == 10) {
        ms=1;
        s+= 1;   
    }
    if (s == 60) {
        s= 0;
        mn += 1 ;   
    }
    if (mn == 60) {
        mn= 0;
        h += 1;
    }

    // insertion des valeurs dans les span [0] 
    //permet de selectionner le premier span
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "mn";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";  
} 

// mettre en place la fonction du bouton start

function start() {
    // cette ligne de code excute la function update_chrono()
    // toutes les 100ms
    t = setInterval(update_chrono,100)
      btn_start.disabled = true;
    }
    document.getElementById('start').addEventListener('click', start)
// console.log(btn_start);

function stop() {
    clearInterval(t) // sppression de l'interval t que nous avions creer
    btn_start.disabled = false;    
}
document.getElementById('stop').addEventListener('click', stop)

function reset() {
    clearInterval(t);

    ms = 0, s = 0, mn = 0, h = 0
// inserer ces nouvelles valeurs dans les spans

    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "mn";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}
document.getElementById('reset').addEventListener('click', reset)
