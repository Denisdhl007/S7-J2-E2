// # Méthodes string (prompt etc)

// ### Exercice 1
// - Créer un programme qui demande un prénom a l'utilisateur (prompt) et qui renvoi le 1er caractere du prénom dans une alert.

let message = `here`
console.log(message.charAt(0));

let name = prompt(`What is your name?`);
console.log(name);
console.log(`Hello ${name} !`);
console.log(name.charAt(0));

// ### Exercice 2
// - Créer un programme qui demande un prénom a l'utilisateur (prompt) et qui renvoi tout sauf le premier caractère du prénom dans une alert

let prenom = prompt(`Quel est votre prénom?`);
console.log(prenom);
console.log(`Hello ${prenom}!`);
alert(`Hello ${prenom} !`);
console.log(prenom.substr(1));
alert(prenom.substr(1))

// ### Exercice 3
// - Créer un programme qui renvoi le 5eme caractère du prénom dans une alerte si le prénom est suffisamment long sinon on dit a l'utilisateur que son prénom était trop court. (prompt, pas de boucle)

let prenom = prompt(`Quel est votre prénom?`);
console.log(prenom);

if (prenom.length > 4) {
console.log(prenom.charAt(4));
alert(prenom.substr(4));
console.log(`Hello ${prenom}!`);
alert(`Hello ${prenom} !`);
}else{
  alert(`votre prénom est trop court`)
}

// ### Exercice 4
// - Créer un programme qui renvoi le 5eme caractère du prénom dans une alerte, si le prénom est suffisamment long, sinon il renvoi le dernier caractère est prévient l'utilisateur que son prénom était trop court, qu'il n'était que de X caractère

// test
var str = "Hello, World!";
var lastChar = str.charAt(str.length - 1);
console.log(lastChar);

let prenom = prompt(`Quel est votre prénom?`);
console.log(prenom);

if (prenom.length > 4) {
  console.log(prenom.charAt(4));
  alert(prenom.substr(4));
  console.log(`Hello ${prenom}!`);
  alert(`Hello ${prenom} !`);
  }
  else{
  let lastChar = prenom.charAt(prenom.length - 1);
  console.log(lastChar);
  alert(lastChar);
  let length = prenom.length;
  console.log(prenom.length); // Output: 13
  alert(`votre prénom est trop court, il ne compte que ${length} characters`)
  }

// ### Exercice 5
// - Créer un programme qui renvoi ce que l'utilisateur rentre d'abord un minuscule (meme si il l'écrit en majuscule), puis la même chose en majuscule (meme si il l'écrit en minuscule), puis  avec la première lettre en majuscule et le reste en minuscule puis avec la premiere en minuscule et le reste en majuscule(toujours prompt sans boucle)

let prenom = prompt(`Quel est votre prénom?`);
console.log(prenom.toLocaleLowerCase());
alert(prenom.toLocaleLowerCase());

console.log(prenom.toUpperCase());
alert(prenom.toUpperCase());

let upperCaseString = prenom.charAt(0).toUpperCase() + prenom.slice(1);
console.log(upperCaseString);
alert(upperCaseString);