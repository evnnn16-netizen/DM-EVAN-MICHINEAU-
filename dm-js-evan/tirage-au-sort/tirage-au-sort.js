let mangas = ["Naruto", "One Piece", "DBZ", "Bleach", "HxH", "JJK", "Spy x Family", "Sakamoto Days", "JJBA", "HnK", "Boruto"];

function tirage() {
    let indexAleatoire = Math.floor(Math.random() * mangas.length);

    let mangaChoisi = mangas[indexAleatoire];

    document.getElementById("affichage").textContent = "Le manga tiré au sort est : " + mangaChoisi;
}