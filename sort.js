// Exemple de tableau d'objets
// let myArray = [
//     { id: 1, attributDeTri: 10, autreAttribut: 'abc' },
//     { id: 2, attributDeTri: 5, autreAttribut: 'xyz' },
//     { id: 3, attributDeTri: 8, autreAttribut: 'def' }
// ];

// Fonction de comparaison pour le tri
function comparerParAttribut(a, b) {
    // console.log(a);
    // Utilisez '<' pour trier par ordre croissant
    // Utilisez '>' pour trier par ordre décroissant
    return a[2] - b[2];
}

// // Tri du tableau en utilisant la fonction de comparaison
// myArray.sort(comparerParAttribut);

// // Affichage du tableau trié
// console.log(myArray);