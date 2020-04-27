var validUrl = require('valid-url')

function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    //Client.checkForName(formText)
    //var input_url = document.querySelectorAll('input[name=test-url]');
   //fetch('http://localhost:8081/save')
    //.then(res => res.json())
    //.then(function(res) {
        //document.getElementById('results').innerHTML = res.message
    //})
 
    console.log("::: Form Submitted :::")
    const formText = document.getElementById('name').value   

    if (validUrl.isUri(formText)){
        fetchAylien('http://localhost:8080/article', formText)
    } else {
        document.getElementById('error-message').innerHTML = "Hey, check out your URL. This one \
        is not a valid URL."
    }
};
const fetchAylien = async (path, input_url) => {
    await fetch(path, {
        method: "POST",
        cache: "no-cache", 
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        body: JSON.stringify({text: input_url})
          })
          .then(res => {
            console.log(res)
            return res.json()
          })
          .then(function(res) {
  
            console.log(res);
  
            document.getElementById('polarity').innerHTML = JSON.stringify(res.polarity);
            document.getElementById('subjectivity').innerHTML = JSON.stringify(res.subjectivity);
            document.getElementById('polarity_confidence').innerHTML = JSON.stringify(res.polarity_confidence);
            document.getElementById('subjectivity_confidence').innerHTML = JSON.stringify(res.subjectivity_confidence);
            document.getElementById('excerpt').innerHTML = JSON.stringify(res.text);
    }
  )}

export { handleSubmit }
