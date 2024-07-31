AOS.init();

function play(){
    var t = document.getElementById("illu")
    t.animate([
        
            { transform: 'translateY(0)' },
            { transform: 'translateY(75vh)' }  
    ],{
        duration: 1500,
        fill: 'forwards',
        iteration: 2
    })
    var k = document.getElementById("illu1");
        k.animate([
            { transform:'translateX(0)' },
            { transform: 'translateX(27vw)' }
        ],{
            duration: 1500,
            fill: 'forwards',
            iteration: 2
        })
    var h = document.getElementById("illu2");
    h.style.backgroundImage = "url('./illu.jpg')"
   
    }

function sing(){
    var p = document.getElementById("SF");
        p.animate([
            { transform:'translateX(0)' },
            { transform: 'translateX(30vw)' }
        ],{
            duration: 1500,
            fill: 'forwards',
            iteration: 2
        })
}

function dance(){
    var p = document.getElementById("ktj1");
        p.animate([
            { transform:'translateX(0)' },
            { transform: 'translateX(27vw)' }
        ],{
            duration: 1500,
            fill: 'forwards',
            iteration: 2
        })
}