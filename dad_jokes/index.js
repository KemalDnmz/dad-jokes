const btnEl=document.querySelector("#btn-joke")
const jokeEl=document.querySelector("#joke")

const apiKey="C2w26wYOjA7jjF6oclwXZQ==yZEH3KviOveJM5ib"

const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    },
}

const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
    try {
    jokeEl.innerText="updating..."
    btnEl.disabled=true
    btnEl.innerText="Loading..."

    const response=await fetch(apiURL,options)
    const data=await response.json()
   
    btnEl.disabled=false
    btnEl.innerText="Tell Me A Joke"
   
    jokeEl.innerText=data[0].joke  
    } catch (error) {
    jokeEl.innerText="An error happened, try again later"
    btnEl.disabled=false
    btnEl.innerText="Tell Me A Joke"
    }
  
}



btnEl.addEventListener("click",getJoke)

