var dateOfBirth;
var rand;
var distance = 0;
var previousPosition = 0;
var shopping = new Array();

function verifyAge() {
    dateOfBirth = parseInt(window.prompt("Podaj swoj rok urodzenia: "));
    var date = new Date();

    if (dateOfBirth === parseInt(dateOfBirth, 10) && dateOfBirth <= date.getFullYear() && dateOfBirth > 1900) {
        document.getElementById("calculator").style.display = "block";
        document.getElementById("welcomeText").innerHTML += dateOfBirth + " roku";
        puzzleRand();
    } else {
        document.writeln("Podales nieprawidlowa date!")
    }
}

function puzzleRand() {
    rand = Math.floor((Math.random() * 100) + 1);
    while (dateOfBirth % rand != 0) {
        rand = Math.floor((Math.random() * 100) + 1);
    }
    document.getElementById("puzzleRand").innerHTML += "<strong>" + rand + " = " + dateOfBirth + "</strong> ";
}

function puzzleCheck() {
    var answer = document.getElementById("answer").value;
    console.log(rand * answer == dateOfBirth);
    if (rand * answer == dateOfBirth) {
        document.getElementById("lastStep").style.display = "block";
        window.addEventListener("mousemove", firstSubtask);
    } else {
        window.alert("Niestety źle, poprawna odpowiedź to " + dateOfBirth / rand);
    }
}

function firstSubtask() {
    if (distance < 500) {
        var tmp = event.clientX;
        if (previousPosition == 0) {
            previousPosition = tmp;
        }
        distance += Math.abs(previousPosition - tmp);
        previousPosition = tmp;
        document.getElementById("firstSubtaskDistance").innerHTML = Math.floor(distance / 10) + " m";
    } else {
        window.removeEventListener("mousemove", firstSubtask);
        secondSubtask();
    }
}

function secondSubtask() {
    document.getElementById("secondSubtask").style.display = "block";
    var clicked = 0;
    var button = document.getElementById("secondSubtaskButton");

    button.addEventListener("click", function () {
        clicked += 1;
        document.getElementById("secondSubtaskClick").innerHTML = clicked;
        if (clicked == 5) {
            document.getElementById("thirdSubtask").style.display = "block";
        }
    });
}

function thirdSubtask() {
    var pi = parseFloat(document.getElementById("pi").value);
    document.getElementById("thirdSubtaskPi").innerHTML = pi;
    if (pi === 3.14159) {
        document.getElementById("win").style.display = "block";
        win();
    }
}
function win() {
    var i = 100;
    do {
        if (i % 1000 == 0) {
            document.getElementById("won").innerHTML += ".";
        }
        i--;
    } while (i > 0);

    var won = Math.floor((Math.random() * 10000) + 1);
    document.getElementById("won").innerHTML = won + " zł";

}

function prizeFor(){
    var prize  = document.getElementById("prize");
    console.log(prize);
    var prizeSelected = prize.options[prize.selectedIndex].value;
    document.getElementById("comment").innerHTML = prizeSelected;

    switch (prizeSelected) {
        case "mieszkanie":
            document.getElementById("comment").innerHTML = "Swietny wybor!";
            break;
        case "samochod":
            document.getElementById("comment").innerHTML = "Super, mamy nadzieje ze bedzie sluzyl lata";
            break;
        case "zona":
            document.getElementById("comment").innerHTML = "Prosimy o zwrot wygranej";
            break;
        case "alko":
            document.getElementById("comment").innerHTML = "Znakomity wybór, polecamy szczególnie whisky";
            break;
        case "wycieczka":
            document.getElementById("comment").innerHTML = "Mamy nadzieje ze wycieczka bedzie udana!";
            break;
        default:
            document.getElementById("comment").innerHTML = "Blad";
            break;
    }
}

function addToShopping(){
        var shop = document.getElementById("shop").value;
        var error = document.getElementById("errorList");
        console.log(shop);
        if(shop==null || shop==""){
            error.innerHTML = "Nic nie wpisales"
        }else{
            error.innerHTML = "Dodano "+shop;
            shopping.push(shop);
        }
}

function showShopping(){
    var error = document.getElementById("errorList");
    var list = document.getElementById("shoppingList");
        if(shopping.length == 0){
            error.innerHTML = "Twoja lista jest pusta";
        }else{
            for(var i=0;i<shopping.length;i++){
                list.innerHTML+= "<li>"+shopping[i]+"</li>";
            }
        }
}