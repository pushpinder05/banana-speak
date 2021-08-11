var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "key=" + text
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("Something wrong with server, please try again after some time.")
}



function clickHandler() {
    // outputDiv.innerText = "olalolali " + txtInput.value;
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText)) 
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
    
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler) 