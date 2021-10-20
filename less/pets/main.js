"use strict"

let menu = document.querySelector(".menu");
let button = document.querySelector(".toggle");
let logo = document.querySelector(".logo");
let list = document.querySelector(".list");
let body = document.querySelector(".body");
let header = document.querySelector(".header");
let main = document.querySelector(".main");
let logoTitle = document.querySelector(".logo__title");
let logoSubtitle = document.querySelector(".logo__subtitle");
let popup = document.getElementById("popup");

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
    if (e.target.className !== "menu menu__active" && e.target.className !== "logo__burger" && e.target.className !== "logo__title" && e.srcElement.className !== "logo__subtitle" && e.srcElement.className !== "list__link list__link--disabled" && e.srcElement.className !== "list__item") {
        button.classList.remove("toggle__active");
        menu.classList.remove("menu__active");
        logo.classList.remove("logo__disabled");

    }
})


body.addEventListener("click", function (e) {
    if (e.target.className == "toggle toggle__active") {
        button.classList.add("toggle__active");
        menu.classList.add("menu__active");
        logo.classList.add("logo__disabled");
        body.classList.add("body__popup");
        logoTitle.classList.add("display-none");
        logoSubtitle.classList.add("display-none");
        popup.classList.add("popup");
    } else if (e.target.className !== "menu menu__active" && e.target.className !== "logo__burger" && e.target.className !== "logo__title" && e.srcElement.className !== "logo__subtitle" && e.srcElement.className !== "list__link list__link--disabled" && e.srcElement.className !== "list__item") {
        button.classList.remove("toggle__active");
        menu.classList.remove("menu__active");
        logo.classList.remove("logo__disabled");
        body.classList.remove("body__popup");
        logoTitle.classList.remove("display-none");
        logoSubtitle.classList.remove("display-none");
        popup.classList.remove("popup");
    }
})


let pets = []; // 8
let fullPetsList = []; // 48

const request = new XMLHttpRequest();
request.open("GET", "pets.json");

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
        return 6;
    } else if (document.querySelector("body").offsetWidth >= 320 && document.querySelector("body").offsetWidth < 768) {
        return 3;
    } else {
        return 8;
    }
}

let listEvent = 1;
let elementScore = document.getElementsByClassName("our-friend__card");

document.querySelector("#prevSlide").addEventListener("click", (e) => {
    if (listEvent === 1) {
        document.getElementById("prevSlide").classList.add("our-friend__button-slider--disabled");
        document.getElementById("firstList").classList.add("our-friend__button-slider--disabled");
        document.getElementById("nextSlide").classList.remove("our-friend__button-slider--disabled");
        document.getElementById("lastList").classList.remove("our-friend__button-slider--disabled");
        return;
    }
    var elementses = document.getElementsByClassName("our-friend__card");
    while (elementses.length > 0) {
        elementses[0].parentNode.removeChild(elementses[0]);
    }
    listEvent--;
    createPets(fullPetsList.slice(checkItemsLimit() * listEvent - checkItemsLimit(), (checkItemsLimit() * listEvent)));
    document.querySelector("#list").innerHTML = listEvent;
    document.getElementById("nextSlide").classList.remove("our-friend__button-slider--disabled");
    document.getElementById("lastList").classList.remove("our-friend__button-slider--disabled");
    if (listEvent === 1) {
        document.getElementById("prevSlide").classList.add("our-friend__button-slider--disabled");
        document.getElementById("firstList").classList.add("our-friend__button-slider--disabled");
    }
})
let numberes = 48 / checkItemsLimit();


document.querySelector("#nextSlide").addEventListener("click", (e) => {
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


document.querySelector("#lastList").addEventListener("click", (e) => {
    if (listEvent === numberes) {
        return;
    }
    var elementses = document.getElementsByClassName("our-friend__card");
    while (elementses.length > 0) {
        elementses[0].parentNode.removeChild(elementses[0]);
    }
    createPets(fullPetsList.slice(checkItemsLimit() * listEvent, checkItemsLimit() + (checkItemsLimit() * listEvent)));
    listEvent = numberes;
    document.querySelector("#list").innerHTML = listEvent;
    document.getElementById("firstList").classList.remove("our-friend__button-slider--disabled");
    document.getElementById("prevSlide").classList.remove("our-friend__button-slider--disabled");
    document.getElementById("nextSlide").classList.add("our-friend__button-slider--disabled");
    document.getElementById("lastList").classList.add("our-friend__button-slider--disabled");
})


document.querySelector("#firstList").addEventListener("click", (e) => {
    if (listEvent === 1) {
        return;
    }
    var elementses = document.getElementsByClassName("our-friend__card");
    while (elementses.length > 0) {
        elementses[0].parentNode.removeChild(elementses[0]);
    }
    createPets(fullPetsList.slice(checkItemsLimit() - checkItemsLimit(), checkItemsLimit()));
    listEvent = 1;
    document.querySelector("#list").innerHTML = listEvent;
    if (listEvent === 1) {
        document.getElementById("prevSlide").classList.add("our-friend__button-slider--disabled");
        document.getElementById("firstList").classList.add("our-friend__button-slider--disabled");
        document.getElementById("nextSlide").classList.remove("our-friend__button-slider--disabled");
        document.getElementById("lastList").classList.remove("our-friend__button-slider--disabled");
    }
})
let pitomchik;

window.addEventListener("load", function () {
    document.querySelector("#body > main > section > div > div.our-friend__slider").addEventListener("click", (e) => {
        console.log(e.target.className)
        if (e.target.className == "popup__card" || e.target.className == "pets__container pets__container__active") {
            document.querySelector("#popup__card").classList.remove("popup__card");
            document.querySelector(`#pets__container__${pitomchik}`).classList.remove("pets__container__active");
            document.querySelector("#body").classList.remove("body__popup__card");
            return
        }


        let pitomec = e.target.offsetParent.id;
        let clicked = e.target.className;


        for (let i = 0; i < pets.length; i++) {
            if (pitomec === pets[i]["name"]) {
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
