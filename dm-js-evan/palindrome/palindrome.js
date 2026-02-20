function palindrome() {
    let mot = document.getElementById("id-mot-saisi").value;

    let motMinuscule = mot.toLowerCase();

    let motInverse = motMinuscule.split('').reverse().join('');

    let zoneResultat = document.getElementById("resultat");

    if (motMinuscule === "") {
        zoneResultat.innerText = "Veuillez saisir un mot.";
    } else if (motMinuscule === motInverse) {
        zoneResultat.innerText = "Bravo ! '" + mot + "' est un palindrome.";
        zoneResultat.style.color = "green";
    } else {
        zoneResultat.innerText = "Dommage, '" + mot + "' n'est pas un palindrome.";
        zoneResultat.style.color = "red";
    }
}