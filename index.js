let paraEle = document.getElementById("para");
let authEle = document.getElementById("author")

let url = "https://dummyjson.com/quotes/random"

async function getQuote() {
    try {
            let response = await fetch(url)
            let data = await response.json()

            paraEle.textContent = data.quote;
            authEle.textContent = "- " + data.author;

    }
    catch(error){
        authEle.innerText = "Quote not Found"
    }
}
