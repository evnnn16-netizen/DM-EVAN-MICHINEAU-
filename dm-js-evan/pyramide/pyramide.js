function construirePyramide() {
    const nbEtages = parseInt(document.getElementById('ligne-pyramide').value);
    const zoneAffichage = document.getElementById('pyramide');

    zoneAffichage.innerHTML = "";

    if (isNaN(nbEtages) || nbEtages <= 0) {
        zoneAffichage.innerHTML = "Veuillez entrer un nombre valide supérieur à 0.";
        return;
    }

    let resultat = "";

    for (let i = 1; i <= nbEtages; i++) {
        let espaces = " ".repeat(nbEtages - i);
        let etoiles = "*".repeat(2 * i - 1);

        let ligne = (espaces + etoiles).slice(0, nbEtages + i - 1);

        resultat += ligne + "<br>";
    }

    zoneAffichage.innerHTML = `<pre>${resultat}</pre>`;
}