var menu = document.querySelector(".menu");
var button = document.querySelector(".toggle");
var logo = document.querySelector(".logo");
var list = document.querySelector(".list");
var body = document.querySelector(".body");
var header = document.querySelector(".header");
var main = document.querySelector(".main");
var logoTitle = document.querySelector(".logo__title");
var logoSubtitle = document.querySelector(".logo__subtitle");
var popup = document.getElementById("popup");


button.addEventListener("click", function () {
    if (button.classList.contains("toggle__active")) {
        button.classList.remove("toggle__active");
        menu.classList.remove("menu__active");
        logo.classList.remove("logo__disabled");
        console.log("delete")
    } else {
        button.classList.add("toggle__active");
        menu.classList.add("menu__active");
        logo.classList.add("logo__disabled");
    }
})


menu.addEventListener("click", function (e) {
    if (e.srcElement.className !== "menu menu__active" && e.srcElement.className !== "logo__burger" && e.srcElement.className !== "logo__title" && e.srcElement.className !== "logo__subtitle" && e.srcElement.className !== "list__link list__link--disabled" && e.srcElement.className !== "list__item") {
        console.log("click")
        button.classList.remove("toggle__active");
        menu.classList.remove("menu__active");
        logo.classList.remove("logo__disabled");

    }
})


body.addEventListener("click", function (e) {
    if (e.srcElement.className == "toggle toggle__active") {
        button.classList.add("toggle__active");
        menu.classList.add("menu__active");
        logo.classList.add("logo__disabled");
        body.classList.add("body__popup");
        logoTitle.classList.add("display-none");
        logoSubtitle.classList.add("display-none");
        popup.classList.add("popup");
    } else if (e.srcElement.className !== "menu menu__active" && e.srcElement.className !== "logo__burger" && e.srcElement.className !== "logo__title" && e.srcElement.className !== "logo__subtitle" && e.srcElement.className !== "list__link list__link--disabled" && e.srcElement.className !== "list__item") {
        button.classList.remove("toggle__active");
        menu.classList.remove("menu__active");
        logo.classList.remove("logo__disabled");
        body.classList.remove("body__popup");
        logoTitle.classList.remove("display-none");
        logoSubtitle.classList.remove("display-none");
        popup.classList.remove("popup");
    }
})

var myArray = [
    {
        "name": "Jennifer",
        "img": "../../assets/images/jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "../../assets/images/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }];


let pets = []; // 8
let fullPetsList = []; // 48


const request = new XMLHttpRequest();

request.open("GET", "pets.json", true);

request.onload = () => {
    pets = JSON.parse(request.response);

    fullPetsList = (() => {
        let tempArr = [];
        for (let i = 0; i < 6; i++) {
            const newPets = pets;

            for (let j = pets.length; j > 0; j--) {
                let randInd = Math.floor(Math.random() * j);
                const rendElem = newPets.splice(randInd, 1)[0];
                newPets.push(rendElem);
            }
            tempArr = [...tempArr, ...newPets];
        }
        return tempArr;
    })();

    fullPetsList = sort863(fullPetsList);


    createPets(fullPetsList.slice(checkItemsLimit() - checkItemsLimit(), checkItemsLimit()));


    for (let i = 0; i < fullPetsList.length / 6; i++) {
        const stepList = fullPetsList.slice(i * 6, (i * 6) + 6);

        for (let j = 0; j < 6; j++) {
            stepList.forEach((item, ind) => {
                if (item.name === stepList[j].name && (ind !== j)) {
                    document.querySelector("body > main > section > div > div.our-friend__slider").children[(i * 6) + j].style.border = '5px solid red';
                }
            });
        }
    }
}

const createPets = (petsList) => {
    const elem = document.querySelector("body > main > section > div > div.our-friend__slider");
    elem.innerHTML = createElements(petsList);
}

let createElements = (petsList) => {
    let str = "";
    for (let i = 0; i < petsList.length; i++) {
        if (i === 0) {
            str += `<span class="our-friend__early left" id="prevSlide"></span>`
        }
        str += `<div class="${petsList[i].name} our-friend__card " id="${petsList[i].name}">
    <img src="${petsList[i].img}" >
    <p class="our-friend__name">${petsList[i].name}</p>
    <span class="fullScreen"></span>
    <button class="our-friend__button" type="button">Learn more</button>
    <div class="pets__container" id="pets__container__${petsList[i].name}">
    <div class="full__wrappers">
    <div class="pets__popup" id="pet__popup">
    <div>
    <img src="${petsList[i].img} "class="pets__img">
    </div>
    <div class="pets__wrapper">
    <h3 class="pets__name">${petsList[i].name}</h3>
    <p class="pets__type">${petsList[i].type} - ${petsList[i].breed}</p>
    <p class="pets__text">${petsList[i].description}</p>
    <ul class="pets__list">
    <li class="pets__other"><b>Age: </b> ${petsList[i].age}</li>
    <li class="pets__other"><b>Inoculations: </b> ${petsList[i].inoculations}</li>
    <li class="pets__other"><b>Diseases: </b> ${petsList[i].diseases}</li>
    <li class="pets__other"><b>Parasites: </b> ${petsList[i].parasites}</li>
    </ul>
    </div>
    </div>
    <button class="close" id="close"></button>
    </div>
    </div>
    <div id="popup__card"></div>
    </div>
    `;

    }
    str += `<span class="our-friend__next right" id="nextSlide"></span>`
    return str;
}


request.send();

const sort863 = (list) => {
    list = sort6recursively(list);


    return list;
}

const sort6recursively = (list) => {
    const length = list.length;

    for (let i = 0; i < (length / 6); i++) {
        const stepList = list.slice(i * 6, (i * 6) + 6);

        for (let j = 0; j < 6; j++) {
            const duplicatedItem = stepList.find((item, ind) => {
                return item.name === stepList[j].name && (ind !== j)
            })

            if (duplicatedItem !== undefined) {
                const ind = (i * 6) + j;
                const which8OfList = Math.trunc(ind / 8);

                const elem = list.splice(ind, 1)[0];
                list.splice(which8OfList * 8, 0, elem);

                sort6recursively(list);
            }
        }
    }
    return list;
}


let pageCounter = 0;


const checkItemsLimit = () => {
    if (document.querySelector("body").offsetWidth >= 768 && document.querySelector("body").offsetWidth < 1280) {
        return 2;
    } else if (document.querySelector("body").offsetWidth >= 320 && document.querySelector("body").offsetWidth < 768) {
        return 1;
    } else {
        return 3;
    }
}

let listEvent = 1;
let elementScore = document.getElementsByClassName("our-friend__card");


document.querySelector("#body").addEventListener("click", (e) => {
    if (e.srcElement.id === "nextSlide") {
        let numberes = 48 / checkItemsLimit();
        if (listEvent === numberes) {
            listEvent = 1;
            var elementses = document.getElementsByClassName("our-friend__card");
            while (elementses.length > 0) {
                elementses[0].parentNode.removeChild(elementses[0]);
            }
            listEvent--;
            createPets(fullPetsList.slice(checkItemsLimit() * listEvent, checkItemsLimit() + (checkItemsLimit() * listEvent)));
            console.log(listEvent)
        }
        var elementses = document.getElementsByClassName("our-friend__card");
        while (elementses.length > 0) {
            elementses[0].parentNode.removeChild(elementses[0]);
        }

        createPets(fullPetsList.slice(checkItemsLimit() * listEvent, checkItemsLimit() + (checkItemsLimit() * listEvent)));
        listEvent++;
        console.log(listEvent)
    }
    if (e.srcElement.id === "prevSlide") {
        let numberes = 48 / checkItemsLimit();
        if (listEvent === 1) {
            listEvent = numberes;
            var elementses = document.getElementsByClassName("our-friend__card");
            while (elementses.length > 0) {
                elementses[0].parentNode.removeChild(elementses[0]);
            }
            createPets(fullPetsList.slice(checkItemsLimit() * listEvent - checkItemsLimit(), (checkItemsLimit() * listEvent)));
            listEvent++;
        }
        var elementses = document.getElementsByClassName("our-friend__card");
        while (elementses.length > 0) {
            elementses[0].parentNode.removeChild(elementses[0]);
        }

        listEvent--;
        createPets(fullPetsList.slice(checkItemsLimit() * listEvent - checkItemsLimit(), (checkItemsLimit() * listEvent)));
        console.log(listEvent)
    }
})
document.querySelector("#prevSlide").addEventListener("click", (e) => {
    if (listEvent === 1) {
        document.getElementById("prevSlide").classList.add("our-friend__button-slider--disabled");
        document.getElementById("firstList").classList.add("our-friend__button-slider--disabled");
        document.getElementById("nextSlide").classList.remove("our-friend__button-slider--disabled");
        document.getElementById("lastList").classList.remove("our-friend__button-slider--disabled");
        return;
    }
    var elementses = document.getElementsByClassName("our-friend__card");
    console.log(elementses);
    while (elementses.length > 0) {
        elementses[0].parentNode.removeChild(elementses[0]);
    }
    listEvent--;
    createPets(fullPetsList.slice(checkItemsLimit() * listEvent - checkItemsLimit(), (checkItemsLimit() * listEvent)));
    console.log(checkItemsLimit() * listEvent - checkItemsLimit());
    console.log(checkItemsLimit() * listEvent)
    document.querySelector("#list").innerHTML = listEvent;
    document.getElementById("nextSlide").classList.remove("our-friend__button-slider--disabled");
    document.getElementById("lastList").classList.remove("our-friend__button-slider--disabled");
    if (listEvent === 1) {
        document.getElementById("prevSlide").classList.add("our-friend__button-slider--disabled");
        document.getElementById("firstList").classList.add("our-friend__button-slider--disabled");
    }
})


document.querySelector("#nextSlide").addEventListener("click", (e) => {
    console.log(e.srcElement.id);
    let firstList = document.getElementById("#firstList");
    document.getElementById("firstList").classList.remove("our-friend__button-slider--disabled");
    document.getElementById("prevSlide").classList.remove("our-friend__button-slider--disabled");
    if (listEvent === numberes) {
        return;
    }
    var elementses = document.getElementsByClassName("our-friend__card");
    while (elementses.length > 0) {
        elementses[0].parentNode.removeChild(elementses[0]);
    }
    createPets(fullPetsList.slice(checkItemsLimit() * listEvent, checkItemsLimit() + (checkItemsLimit() * listEvent)));
    listEvent++;
    document.querySelector("#list").innerHTML = listEvent;
    if (listEvent === numberes) {
        document.getElementById("nextSlide").classList.add("our-friend__button-slider--disabled");
        document.getElementById("lastList").classList.add("our-friend__button-slider--disabled");
    }
})


let pitomchik;
window.addEventListener("load", function () {
    document.querySelector("#body > main > section > div > div.our-friend__slider").addEventListener("click", (e) => {
        if (e.target.className == "popup__card" || e.target.className == "pets__container pets__container__active") {
            document.querySelector("#popup__card").classList.remove("popup__card");
            document.querySelector(`#pets__container__${pitomchik}`).classList.remove("pets__container__active");
            document.querySelector("#body").classList.remove("body__popup__card");
            return
        }


        let pitomec = e.target.offsetParent.id;
        let clicked = e.target.className;

        for (let i = 0; i < pets.length; i++) {
            if (pitomec === pets[i]["name"] || clicked === `${pets[i]} our-friend__card`) {
                console.log(`${pets[i]} our-friend__card`)
                document.querySelector("#popup__card").classList.add("popup__card");
                document.querySelector(`#pets__container__${pets[i]["name"]}`).classList.add("pets__container__active");
                body.classList.add("body__popup__card");
                pitomchik = pets[i]["name"]
            }
            if (clicked === "close") {
                document.querySelector("#popup__card").classList.remove("popup__card");
                document.querySelector(`#pets__container__${pitomchik}`).classList.remove("pets__container__active");
                document.querySelector("#body").classList.remove("body__popup__card");
            }
        }
    })
});
