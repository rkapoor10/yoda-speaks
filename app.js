const txtInput = document.querySelector('#txt-input');
const btnTranslate = document.querySelector("#btn-translate")
const outputDiv = document.querySelector("#output-div")


var serverURL = "https://api.funtranslations.com/translate/yoda.json"



function getTranslationalURL (text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured",error)
    // alert("Somethin wrong with server plaese try again later")
    message = "Something wrong with server please try again later.😢"
    outputDiv.style.color = "red"
    outputDiv.innerText = message

}


function onClickHandler(){
    var inputText = txtInput.value

    fetch(getTranslationalURL(inputText))
    .then(response => response.json())
    .then(json=>{
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText
    })
    .catch(errorHandler)


}



btnTranslate.addEventListener("click",onClickHandler)

