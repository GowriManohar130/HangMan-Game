
let i = 0;
let j = 0;
let buttons = document.querySelectorAll(".bt");
const stages = ['😥<br>', '_/|\\_<br/>', '|<br>', '_/\\_<br>', ''];
const fruits = [
    "apple", "banana", "orange", "grape", "kiwi", "pear",
    "pineapple", "strawberry", "watermelon", "blueberry",
    "mango", "cherry", "peach", "lemon", "plum"
];

const fruithints = [
    "Commonly associated with technology company logos.",
    "Often referred to as a 'yellow fruit' and is known for its curved shape.",
    "A citrus fruit, known for its juicy and tangy flavor.",
    "Small, round, and can be red, green, or purple. Often used to make wine.",
    "A brown, fuzzy fruit with green flesh that's rich in Vitamin C.",
    "Shaped like a teardrop, it comes in various varieties like Bartlett and Bosc.",
    "A tropical fruit with spiky skin and sweet, juicy yellow flesh.",
    "Small, red, and heart-shaped. Often used in desserts and jams.",
    "A juicy and refreshing fruit, typically eaten in slices.",
    "Small, round, and blue-black in color. Often used in muffins and pancakes.",
    "A tropical fruit with sweet, orange flesh and a large seed in the center.",
    "Small, round, and comes in various colors. Often used as a dessert topping.",
    "A fuzzy fruit with juicy, yellow or orange flesh.",
    "A sour citrus fruit used for its juice and zest in cooking and beverages.",
    "Usually round or oval with smooth skin and sweet or tart flesh."
]; const animals = [
    "lion", "elephant", "tiger", "giraffe", "zebra", "monkey",
    "koala", "panda", "rhinoceros", "hippopotamus", "crocodile",
    "kangaroo", "cheetah", "gorilla", "lemur"
];

const animalhints = [
    "Known as the 'king of the jungle' with a majestic mane.",
    "Recognized for its large size, long trunk, and distinctive ears.",
    "A majestic big cat with distinctive orange fur and black stripes.",
    "Known for its long neck and spotted coat pattern.",
    "Has black and white stripes and is native to Africa.",
    "A clever and agile primate known for its intelligence.",
    "An arboreal herbivorous marsupial native to Australia.",
    "A black and white bear-like mammal native to China.",
    "Large herbivore with thick skin and one or two horns on its snout.",
    "A large, mostly aquatic mammal with a barrel-shaped body.",
    "A large reptile known for its armored body and powerful jaws.",
    "A marsupial known for its powerful hind legs and tail.",
    "A fast, spotted big cat known for its incredible speed.",
    "A close relative to humans, known for its strength and intelligence.",
    "A small primate with a distinctive long tail and large eyes."
];
const clothes = [
    "t-shirt", "Jeans", "sweater", "dress", "shorts", "jacket",
    "skirt", "hoodie", "blouse", "pants", "coat", "shirt",
    "tank top", "sweatpants", "vest"
];

const clothehints = [
    "A casual and comfortable top with short sleeves.",
    "Sturdy, casual pants made of denim.",
    "A warm knitted garment worn on the upper body.",
    "A one-piece outfit typically worn by women.",
    "Cool and comfortable bottoms for warm weather.",
    "An outer garment worn to protect from the cold.",
    "A garment worn around the waist that hangs down.",
    "A casual, hooded sweatshirt or jacket.",
    "A stylish top typically worn by women.",
    "Bottoms that cover the legs, usually made of fabric.",
    "An outer garment worn for warmth or style.",
    "A classic upper-body garment with buttons down the front.",
    "A sleeveless top, often worn in warm weather.",
    "Comfortable pants typically worn for exercise or lounging.",
    "A sleeveless garment often worn over a shirt."
];
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
const planethints = ["This planet is the closest to the Sun.", "Its thick atmosphere traps heat, making it the hottest planet.", "The only planet known to support life."
    , "Often called the 'Red Planet' due to its reddish appearance.", "The largest planet in our solar system.", "Recognizable by its stunning ring system.",
    "This planet rotates on its side, so it appears to roll along its orbit.", "It has a deep blue color due to methane in its atmosphere."]
var btt;
let index
let d2 = document.getElementById('demo2')
let array = [fruits, animals, planets, clothes]
let arrayhint = [fruithints, animalhints, planethints, clothehints]
let selected
let values = document.getElementById("value")
let ne = "";
let text = document.getElementById("text")
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        bttt.disabled = false;
        btt = button.value;
        localStorage.setItem('selectedCategory', btt);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    btt = localStorage.getItem('selectedCategory');
});
function get() {
    let got = array[btt]
    index = Math.floor(Math.random() * got.length);
    selected = got[index]
    values.value = "*".repeat(selected.length)
    if (got == fruits)
        text.innerHTML = "Guess one of the " + (selected.length) + " letter fruit"
    if (got == clothes)
        text.innerHTML = "Guess one of the " + (selected.length) + " letter cloth"
    if (got == animals)
        text.innerHTML = "Guess one of the " + (selected.length) + " letter animal"
    if (got == planets)
        text.innerHTML = "Guess one of the " + (selected.length) + " letter planet"

}
function search(event) {
    const charCode = event.which || event.keyCode;
    const isAlphabeticKey = (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
    if (!isAlphabeticKey) {
        event.preventDefault();
    }
    let a = document.getElementById("ans").value
    let del = document.getElementById("ans");
    document.getElementById("demo").innerHTML = "";
    if (a.toLowerCase().charAt(i) === selected.charAt(i)) {
        ne = ne + selected.charAt(i)
        values.value = ne + "*".repeat(selected.length - i - 1);
        if (selected.length > a.length) {
            document.getElementById("demo").innerHTML = "safe";
            i++;
        }
        else {
            d2.style.display = 'none'
            del.disabled = true;
            document.getElementById('text').style.display = 'none';
            document.getElementById('button1').style.display = 'none';
            document.getElementById('demo').innerHTML = "👍You Won The Game!<br/>🏆";
        }

    } else {
        if (j < 4) {
            d2.innerHTML += stages[j];
            document.getElementById("demo").innerHTML = "lost " + (j + 1) + " out of 5";
            del.value = del.value.slice(0, -1);
            j++
        }
        else {
            del.disabled = true;
            document.getElementById('text').style.display = 'none';
            document.getElementById('button').style.display = 'none';
            document.getElementById('button1').style.display = 'none';
            document.getElementById('demo').innerHTML = "🤯Hangman!😲 the correct word is " + selected
        }
    }

}

function hint1() {
    let hint = arrayhint[btt]
    document.getElementById('button').style.display = 'none';
    document.getElementById('button1').innerHTML = hint[index];
    d2.innerHTML += stages[j];
    document.getElementById("demo").innerHTML = "lost " + (j + 1) + " out of 5";
    j++
}

