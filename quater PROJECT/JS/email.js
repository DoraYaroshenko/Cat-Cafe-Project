const init = () => {
declareEvents();
}

const declareEvents = () => {
    let form = document.querySelector("#id_form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let email_val = document.querySelector("#id_email").value;
        if(!(email_val.includes(".")&&email_val.includes("@"))){
            alert("The email is invalid");
        }
        else{
            window.open("thanku.html","_self");
        }
    })
}

init();