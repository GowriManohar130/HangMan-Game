
let i = 0;
let j = 0;
let buttons = document.querySelectorAll(".bt");
const fruits = ["apple","banana", "orange", "grape","kiwi","pear","pineapple","strawberry","watermelon","blueberry","mango", "cherry","peach","lemon","plum"];
const animals = [ 'lion', 'elephant','tiger', 'giraffe', 'zebra','monkey', 'koala', 'panda', 'rhinoceros','hippopotamus','crocodile','kangaroo','cheetah', 'gorilla','lemur'];
const clothes = [ "t-shirt","Jeans","sweater","dress","shorts","jacket", "skirt", "hoodie", "blouse", "pants", "coat","shirt","tank top","sweatpants","vest"];
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var btt;
let array = [fruits, animals,planets,clothes]
let selected
let values = document.getElementById("value")
let ne = "";
let text = document.getElementById("text")
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        btt = button.value;
        localStorage.setItem('selectedCategory', btt);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    btt = localStorage.getItem('selectedCategory');
});
function get() {
    let got = array[btt]
    const index = Math.floor(Math.random() * got.length);
    selected = got[index]
    values.value = "*".repeat(selected.length)
    if (got == fruits)
        text.innerHTML = "Guess one of the "+(selected.length)+" letter fruit"
    if (got == clothes)
        text.innerHTML = "Guess one of the "+(selected.length)+" letter clothe"
    if(got == animals)
        text.innerHTML = "Guess one of the "+(selected.length)+" letter animal"
        if(got == planets)
        text.innerHTML = "Guess one of the "+(selected.length)+" letter planet"

}
function search(event) {
    const charCode = event.which || event.keyCode;
    const isAlphabeticKey = (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);

    if (!isAlphabeticKey) {
        return;
    }
    let a = document.getElementById("ans").value
    let d2 = document.getElementById('demo2')
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
            document.getElementById('demo').innerHTML = "👍You Won The Game!<br/>🏆";
        }

    } else {
        if (j < 4) {
            const stages = ['😥<br>', '_/|\\_<br/>', '|<br>', '_/\\_<br>',''];
            d2.innerHTML += stages[j];
            document.getElementById("demo").innerHTML = "lost "+(j+1)+" out of 5";
            del.value = del.value.slice(0, -1);
            j++
        }
        else{
            del.disabled = true;
            document.getElementById('text').style.display = 'none';
            document.getElementById('demo').innerHTML = "🤯Hangman!😲 the correct word is " + selected
        }
    }

}

