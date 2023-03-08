let adviceButton = document.querySelector("button");
adviceButton.addEventListener("click" , doWork);

function doWork(){
    

    fetch("	https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector("h1").innerText = data.slip.advice
    })
    .catch(err => {
        console.log(`ERROR: ${err}`)
    })
}