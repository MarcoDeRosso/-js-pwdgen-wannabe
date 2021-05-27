var firstName = prompt("Inserisci Nome");

var surName = prompt("Inserisci Cognome");

var color = prompt("Inserisci colore preferito");

var result = firstName + surName + color;

var letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Z"];

var randomItem = letter[Math.floor(Math.random() * letter.length)];

document.getElementById("password").innerHTML = "La tua password è: " + result + 21 + randomItem;