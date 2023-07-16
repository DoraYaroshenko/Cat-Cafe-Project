const init = () => {
    declareEvents();
}
const declareEvents = () => {
    let more = document.querySelector("#more");
    more.style.display = "none";
    let btn = document.querySelector("#myBtn");
    let dots = document.querySelector("#dots");

    btn.addEventListener("click", () => {
        if(btn.innerHTML == "Read more"){
        more.style.display = "block";
        btn.innerHTML = "Read less";
        dots.style.display = "none";
    }
    else {
        more.style.display = "none";
        btn.innerHTML = "Read more";
        dots.style.display = "inline-block";
    }
    })
}

init();