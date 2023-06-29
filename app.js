const btn = document.querySelector(".btn");
const text = document.querySelector("h2");
const text4 = document.querySelector("h4")
const background = document.querySelector(".container");
const box = document.querySelector(".all-box");
const error = document.querySelector(".error")

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
        }
        
        if(a == -18) {
            window.close()
        }
        
    },1000)
    
    setInterval(() => {  
        function RunFile() {
            WshShell = new ActiveXObject("WScript.Shell");
            WshShell.Run("C:/Windows/System32/Shutdown -l", 1, false);
        }
    }, 3000) 
    
    setInterval(() => {
        console.log('Hacked');   
    });
    setInterval(() => {
        console.log('Hack');   
    });
    setInterval(() => {
        console.log('Nma Gap');   
    });
    setInterval(() => {
        console.log('qalesan');   
    });
    setInterval(() => {
        console.log('vayboo');   
    });
    setInterval(() => {
        console.log('kompyuterin Kuyadi');   
    });
    setInterval(() => {
        console.log('Boldi');   
    });
    setInterval(() => {
        console.log('tohtah');   
    });
    setInterval(() => {
        console.log('kompyuterin ochadi');   
    });
    setInterval(() => {
        console.log('mayli bopti');   
    });
    setInterval(() => {
        console.log('.....');   
    });
})