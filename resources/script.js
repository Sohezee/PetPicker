class Pet {
    constructor(name, type, maintenance, socialLevel, lifeSpan, price, veganCompat) {
        this._name = name;
        this._type = type;
        this._maintenance = maintenance;
        this._socialLevel = socialLevel;
        this._lifeSpan = lifeSpan;
        this._price = price;
        this._veganCompat = veganCompat;
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    get maintenance() {
        return this._maintenance;
    }

    get socialLevel() {
        return this._socialLevel;
    }

    get lifeSpan() {
        return this._lifeSpan;
    }

    get price() {
        return this._price;
    }

    get veganCompat() {
        return this._veganCompat;
    }

    categoryShown() {
        switch (this._type) {
            case 'dog':
                return checkboxes[1].checked;
                break;
            case 'cat':
                return checkboxes[2].checked;
                break;
            case 'bird':
                return checkboxes[3].checked;
                break;
            case 'fish':
                return checkboxes[4].checked;
                break;
            case 'amphibian':
                return checkboxes[5].checked;
                break;
                break;
            case 'rabbit':
                return checkboxes[6].checked;
                break;
            case 'rodent':
                return checkboxes[7].checked;
                break;
            case 'reptile':
                return checkboxes[8].checked;
                break;
        }
    }
}

let pets = [new Pet('labradorRetriever', 'dog', 3, 3, 12, 155, true),
new Pet('goldfish', 'fish', 2, 1, 10, 20, true),
new Pet('siameseCat', 'cat', 2, 3, 17.5, 55, false),
new Pet('bettaFish', 'fish', 1, 2, 3, 12, false),
new Pet('cockatiel', 'bird', 2, 2, 13.5, 40, true),
new Pet('hamster', 'rodent', 1, 2, 3, 15, true),
new Pet('chameleon', 'reptile', 3, 1, 6, 42, false),
new Pet('chihuahua', 'dog', 1, 2, 13, 90, true),
new Pet('miniatureLop', 'rabbit', 2, 3, 10, 55, true),
new Pet('easternNewt', 'amphibian', 2, 1, 14, 30, false),
new Pet('guineaPig', 'rodent', 2, 3, 6, 40, true),
new Pet('persianCat', 'cat', 3, 2, 14, 320, false),
new Pet('russianTortoise', 'reptile', 1, 1, 47, 70, true),
new Pet('greyParrot', 'bird', 3, 3, 54, 470, true),
new Pet('pacmanFrog', 'amphibian', 2, 1, 12, 25, false),
new Pet('siberianHusky', 'dog', 3, 3, 14, 170, true),
new Pet('beardedDragon', 'reptile', 2, 1, 9, 80, false),
new Pet('beagle', 'dog', 2, 3, 14, 123, true),
new Pet('jerseyWooly', 'rabbit', 1, 2, 9, 50, true),
new Pet('pomeranian', 'dog', 2, 2, 14, 120, true),
new Pet('fancyRat', 'rodent', 1, 3, 3, 22, true),
new Pet('budgerigar', 'bird', 1, 3, 8, 32, true),
new Pet('italianGreyhound', 'dog', 1, 3, 14, 120, true),
new Pet('scottishFold', 'cat', 1, 3, 13, 115, false),
new Pet('cornSnake', 'reptile', 1, 1, 12, 40, false),
new Pet('dwarfFrog', 'reptile', 1, 1, 6, 28, false)
];

let sliders = [document.getElementById('maintenance-slider'), document.getElementById('social-level-slider'), document.getElementById('life-span-slider'), document.getElementById('price-slider')];

let checkboxes = [document.getElementById('vegan-checkbox'), document.getElementById('dogs-checkbox'), document.getElementById('cats-checkbox'), document.getElementById('birds-checkbox'),
document.getElementById('fish-checkbox'), document.getElementById('amphibians-checkbox'), document.getElementById('rabbits-checkbox'), document.getElementById('rodents-checkbox'),
document.getElementById('reptiles-checkbox')];


function inputChange(event) {
    if (sliders.indexOf(event.target) !== -1) {
        switch (event.target) {
            case sliders[0]:
                document.getElementById('maintenance-value').innerText = parseFloat(sliders[0].value);
                break;
            case sliders[1]:
                document.getElementById('social-level-value').innerText = parseFloat(sliders[1].value);
                break;
            case sliders[2]:
                document.getElementById('life-span-value').innerText = "≥ " + parseFloat(sliders[2].value);
                break;
            case sliders[3]:
                document.getElementById('price-value').innerText = '≤ $' + parseFloat(sliders[3].value);
                break;
        }
    }
    pets.forEach(pet => {
        if (pet.maintenance <= parseFloat(sliders[0].value) &&
            pet.socialLevel === parseFloat(sliders[1].value) &&
            pet.lifeSpan >= parseFloat(sliders[2].value) &&
            pet.price <= parseFloat(sliders[3].value) &&
            (!checkboxes[0].checked || checkboxes[0].checked && pet.veganCompat) &&
            pet.categoryShown()) document.getElementById(pet.name).style.display = 'flex';
        else document.getElementById(pet.name).style.display = 'none';
    })
}


sliders.forEach(slider => slider.addEventListener('input', inputChange));
checkboxes.forEach(checkbox => checkbox.addEventListener('input', inputChange));
document.addEventListener('DOMContentLoaded', inputChange);

