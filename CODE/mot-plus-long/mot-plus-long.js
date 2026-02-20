const paragrapheCitation = document.getElementById("citation");
const affichageResultat = document.getElementById("motPlusLong");

let phrase = paragrapheCitation.textContent;

let phraseNettoyee = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~]/g, "");

let mots = phraseNettoyee.split(" ");

let motLePlusLong = "";

for (let i = 0; i < mots.length; i++) {
  if (mots[i].length > motLePlusLong.length) {
    motLePlusLong = mots[i];
  }
}

affichageResultat.textContent = "Le mot le plus long est : " + motLePlusLong;