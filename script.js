const joke = document.querySelector('#joke')

const jokeBtn = document.querySelector('#jokeBtn')

jokeBtn.addEventListener('click', generateJoke)


async function generateJoke() {
    
    let url = 'https://icanhazdadjoke.com/'
    const config = {
        headers: {
            'Accept': 'application/json'
        }

    }


    const resp = await fetch(url, config)

    const data = await resp.json()

    joke.innerHTML = data.joke


}