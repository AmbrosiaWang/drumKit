const kits = ["crash", "kick", "snare", "tom"];
const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerHTML = kit;
    btnEl.style.backgroundImage = `url(image/${kit}.png)`;
    containerEl.appendChild(btnEl);


    const audioEl = document.createElement("audio");
    audioEl.src = `sound/${kit}.mp3`;
    containerEl.appendChild(audioEl);
    btnEl.addEventListener("click",function(){
        audioEl.play();
    });
    window.addEventListener("keydown", function(event){
        if(event.key=== kit.slice(0,1)){
            audioEl.play();
            btnEl.style.transform = "scale(0.9)";
            setTimeout(function(){
                btnEl.style.transform = "scale(1)"
            }, 100)
        }
    })
});