const accessKey = "EmSliopt_n_Vm9RgO8l0dpK7qsHljn7bsIeSjQpMTAI";

const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;
let per_page = 9;

async function searchImages() {
    inputData = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&per_page=${per_page}&client_id=${accessKey}`
    
    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    if (page === 1) {
        searchResults.innerHTML = ""
    }

    results.map((result) =>{
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    });

    page++
    if (page > 1) {
        showMore.style.display = "block"
    }
}

formE1.addEventListener("submit", (event) => {
    event.preventDefault()
    page = 1;
    searchImages()
})

showMore.addEventListener("click", () => {
    
    searchImages()
})

let theme = document.querySelector('button'); 

theme.onclick = () => {
    document.body.style.backgroundColor = "Black"
}



let theme2 = document.querySelector('.theme2');

theme2.onclick = () => {
    document.body.style.backgroundColor = "white"
}

let theme3 = document.querySelector('.theme3');

theme3.onclick = () => {
    document.body.style.backgroundColor = "gray"
}

let theme4 = document.querySelector('.theme4');

theme4.onclick = () => {
    document.body.style.backgroundColor = "pink"
}


