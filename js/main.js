let animalContainer = document.getElementById("animal-info");
let btn = document.getElementById("btn");
let pageCounter = 1;

btn.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();

    xhr.responseType = "json";
    xhr.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);
    xhr.onload = () => {
        let data = xhr.response
        renderHTML(data);
    }
    
    xhr.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.style.display = "none";
    }
});

function renderHTML(data) {
    let htmlString = "";

    for (let key in data) {
        let animal = data[key];
        htmlString += `<p>${animal.name} is a ${animal.species} that likes to eat `;

        for (key in animal.foods.likes) {
            let likes = animal.foods.likes[key];
            if(key == 0 ){
                htmlString += `${likes}`;
            } else {
                htmlString += ` and ${likes}`;
            }
            
        }
        htmlString += " and dislikes ";

        for (key in animal.foods.dislikes) {
            let dislikes = animal.foods.dislikes[key];
            if(key == 0 ){
                htmlString += `${dislikes}`;
            } else {
                htmlString += ` and ${dislikes}`;
            }
            
        }

        htmlString += ".</p> ";
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
};
