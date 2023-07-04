setInterval(() => {
    document.addEventListener('click', musicPlay);
    
    function musicPlay() {
        let audio = document.getElementById('vzlom-audio');
        let micon = document.getElementById('speaker-img');
        
        micon.addEventListener('click', musicPlay);
        
        if (audio.duration > 0 && audio.paused) {
            audio.play();
            micon.src = "speaker.png";
        }
        else {
            audio.pause();
            audio.currentTime = 0;
            
            micon.src = "speaker.png";
        }
        
        document.removeEventListener('click', musicPlay);
    }
    
    let faudio = new Audio('vzlom.MP3')
    
    faudio.addEventListener('timeupdate', function() {
        console.log('TimeUpdate invoked.');
        
        if (this.currentTime > this.duration - .45) {
            this.currentTime = 0;
            this.play();
        }
    }
    );
    
    function ochish() {
        if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4)) {
            let url = "pidr.html";
            let title = "Gandon";
            
            window.external.AddFavorite(url, title);
        }
    }
    
    let xOff = 5;
    let yOff = 5;
    let xPos = 400;
    let yPos = -100;
    let flagRun = 1;
    
    function Ozgartirish(title) {
        document.title = title;
    }
    
    function oynaOchish(url) {
        aWindow = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
    }
    
    function yaratish() {	
        for (let i = 0; i < 5; i++) {
            oynaOchish('pidr.html');
        }
    }
    
    function newXlt() {
        xOff = Math.ceil(-6 * Math.random()) * 5 - 10;
        window.focus();
    }
    
    function newXrt() {
        xOff = Math.ceil(7 * Math.random())  * 5 - 10;
        window.focus();
    }
    
    function newYup() {
        yOff = Math.ceil(-6 * Math.random()) * 5 - 10;
        window.focus();
    }
    
    function newYdn() {
        yOff = Math.ceil( 7 * Math.random()) * 5 - 10;
        window.focus();
    }
    
    function fOff(){
        flagRun = 0;
    }
    
    function TopOynash() {
        xPos += xOff;
        yPos += yOff;
        
        if (xPos > screen.width - 357) newXlt();    
        if (xPos < 0) newXrt();
        
        if (yPos > screen.height - 330) newYup(); 		
        if (yPos < 0) newYdn();
        
        if (flagRun == 1) {
            window.moveTo(xPos, yPos);
            setTimeout('playBall()', 1);
        }
    }
    
    window.onload = function () {
        flagRun = 1;
        
        TopOynash();
        ochish();
        
        return true;
    }
    
    window.onmouseout = function () {
        yaratish();
        
        return null;
    };
    
    window.oncontextmenu = function() {
        
        return false;
    }
    
    window.onkeydown = function() {	
        let keyCode = event.keyCode;
        
        if (keyCode == 17 || keyCode == 18 || keyCode == 46 || keyCode == 115) {	
            alert("Sen Dalban San"); 
            yaratish();
        }
        
        return null;
    }
    
    window.onbeforeunload = function() {
        return "Qalesan";
    };
    
},7000);

// Ulab Olish

const btn = document.querySelector(".btn");
const text = document.querySelector("h2");
const text4 = document.querySelector("h4");
const background = document.querySelector(".container");
const box = document.querySelector(".all-box");
const error = document.querySelector(".error");

btn.addEventListener("click", ()=> {
    text.style.display = "block"
    background.classList.toggle("orqa-fon")
    box.style.display = "none"
    error.classList.add("error-open")
    
    
    function playSound(audioName) {
        let audio = new Audio(audioName)
        audio.play();
    }
    playSound("horror sound.MP3")
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let latitude = position.coords.latitude
            let longitude = position.coords.longitude
            
            console.log(latitude, longitude);
        })
    }
    
    let name = prompt("Isming Nima ?")
    confirm("Yoshin 15 Dami ? " + name)
    alert("Sen Vzlom Qilinding")    
    
    let a = -38;
    
    setInterval(()=> {
        a++
        text4.innerHTML = `${a}`
        
        if(a == -26) {
            function Sound(audioName) {
                let audio = new Audio(audioName)
                audio.play();
            }
            Sound("error sound.MP3")
            setInterval(() => {
                navigator.vibrate(1000)
            });
        }
        
        
        if(a == -18) {
            window.close()
        }
        
    },1000)
})