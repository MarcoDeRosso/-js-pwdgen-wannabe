var firstname = prompt("Inserisci Nome");

var surname = prompt("Inserisci Cognome");

var color = prompt("Inserisci colore preferito");

var result = firstname + surname + color;

var letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Z"];

var randomItem = letter[Math.floor(Math.random() * letter.length)];

document.getElementById("password").innerHTML = "La tua password è: " + result + 21 + randomItem;