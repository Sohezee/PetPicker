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

let pets = [new Pet('labradorRetriever', 'dog', 3, 3, 12, 150, true),
new Pet('goldfish', 'fish', 2, 1, 10, 20, true),
new Pet('siameseCat', 'cat', 2, 3, 17.5, 50, false),
new Pet('bettaFish', 'fish', 1, 2, 3, 10, false),
new Pet('cockatiel', 'bird', 2, 2, 13.5, 30, true),
new Pet('hamster', 'rodent', 1, 2, 3, 15, true),
new Pet('chameleon', 'reptile', 3, 1, 6, 42, false),
new Pet('chihuahua', 'dog', 1, 2, 13, 90, true),
new Pet('miniatureLop', 'rabbit', 2, 3, 10, 55, true),
new Pet('easternNewt', 'amphibian', 2, 1, 14, 30, false)
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
                document.getElementById('life-span-value').innerText = parseFloat(sliders[2].value);
                break;
            case sliders[3]:
                document.getElementById('price-value').innerText = '$' + parseFloat(sliders[3].value);
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

function makeMobileFriendly() {
    let regexp = /android|iphone|kindle|ipad|iPod/i;
    var isMobile = regexp.test(navigator.userAgent);
    if (isMobile) {
        document.getElementById("nav").style.display = "none";
        let tooltips = document.getElementsByClassName("tooltip");
        tooltips.forEach(tooltip => tooltip.style.display = "none");
    }
}



sliders.forEach(slider => slider.addEventListener('input', inputChange));
checkboxes.forEach(checkbox => checkbox.addEventListener('input', inputChange));
document.addEventListener('DOMContentLoaded', inputChange);
document.addEventListener('DOMContentLoaded', makeMobileFriendly);