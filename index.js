//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
//
//Definition and Usage

//map() creates a new array from calling a function for every array element.

//map() calls a function once for each element in an array.

//map() does not execute the function for empty elements.

//map() does not change the original array.
// ${pet.favFoods ? food(pet.favFoods) : ''} === ${condition ? yay : non}




const petsData = [{
        name: "Purrsloud",
        species: "Cat",
        favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
        birthYear: 2017,
        photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
        name: "Barksalot",
        species: "Dog",
        birthYear: 2008,
        photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
        name: "Meowsalot",
        species: "Cat",
        favFoods: ["tuna", "catnip", "celery"],
        birthYear: 2012,
        photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
];
function age(birthYear){
    let ageCalculated = new Date().getFullYear() - birthYear;
    if(ageCalculated === 0){
        return `Baby`
    }
    else if(ageCalculated === 1){
        return `1 year old`
    }
    else{
        return `${ageCalculated} years old`
    }
}
function food(foods){
    return`
    <ul clas="foods-list">
    ${foods.map(function(item){
        return`
        <li>${item}</li>
        `
    }).join('')}
    </ul>
    
    `

};

function petTemplate(pet){
    return `
    <div class="animal">
    <img class="pet-photo" src="${pet.photo}">
    <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
    <p><strong>Age: </strong> ${age(pet.birthYear)}</p>
    ${pet.favFoods ? food(pet.favFoods) : ''}

    </div>
    `
}

//   document.getElementById("app").innerHTML = `Hello, two plus two equals ${2 + 2}
//   <p>Hi There.<\p>
//   <p>Hello Again</p>`

//`` template is string with powerful

document.getElementById("app").innerHTML = `
  <h1 class="app-title"> Pets (${petsData.length} results)</h1>
  ${petsData.map(petTemplate).join('')}
  <p class="footer">these ${petsData.length} pets were added recently. check back soon for updates</P>`