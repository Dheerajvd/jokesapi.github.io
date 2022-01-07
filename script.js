/*
const next = document.getElementById('next');
const jokes = document.getElementById('joke');

const generateJokes = ()=>{
const setHeader ={
    headers: {
        Accept: "application/json"
    }
}

    fetch('https://icanhazdadjoke.com/', setHeader)
    .then((res)=> res.json())
    .then((data)=>{
        jokes.innerHTML = data.joke;
    }).catch((error)=>{
        console.log(error);
    })
}

next.addEventListener('click',generateJokes);
generateJokes();
*/

// Using async await 

const next = document.getElementById('next');
const jokes = document.getElementById('joke');

/*
if using traditional function type withoud fat arrow
then write 
async function() 
*/

const generateJokes = async () =>{
    try {
        const setHeader ={
            headers:{
                Accept: "application/json"
            }
        }
        const response = await fetch('https://icanhazdadjoke.com/', setHeader);
        const data = await response.json();
        jokes.innerText = data.joke;

    } catch (error) {
        console.log(error);
    }
}

next.addEventListener('click',generateJokes);
generateJokes();