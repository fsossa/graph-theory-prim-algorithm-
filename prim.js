// class Prim{

// }
var ensembleArretes = []; var poids = 0; var ensembleSommets = []; var ensembleArretesDeSommmets = [];

function prim(graph){

    // console.log("debut => ", ensembleSommets);
    // console.log(ensembleArretes);
    // console.log(poids);
    // console.log(graph);
    // console.log(Object.entries(graph).length === 0);
    while (Object.entries(graph).length > 0){
        getNextArrete(graph);
    };

    // console.log("fin => ", ensembleSommets);
    // console.log(ensembleArretes);
    // console.log(poids);
    // console.log(graph);
    return {
        t : ensembleArretes,
        p : poids
    }
}

function getNextArrete(graph){
    for (index in graph){
        ensembleSommets.push(index);
        graph[index].map(function(adjacent){
            // console.log(adjacent);
            ensembleArretesDeSommmets.push([index, adjacent.sommet, adjacent.poids]);
        });
        delete graph[index];
        break;
    }
    // console.log(ensembleArretesDeSommmets);
    ensembleArretesDeSommmets.sort(comparerParAttribut);
    // console.log(ensembleArretesDeSommmets);
    for (let i = 0; i < ensembleArretesDeSommmets.length; i++) {
        let arrete = ensembleArretesDeSommmets[i];
        isInArreteList = ensembleArretes.some(function(alreadyInsertArrete){
            return (
                arrete == alreadyInsertArrete) || 
                (arrete[0] == alreadyInsertArrete[1] && arrete[1] == alreadyInsertArrete[0]) ||
                (ensembleSommets.indexOf(arrete[0]) != -1 && ensembleSommets.indexOf(arrete[1]) != -1);
        });
        if(!isInArreteList) {
            ensembleArretes.push(arrete);
            poids += arrete[2];
            break;
        }
    }
}

// Fonction de comparaison pour le tri
function comparerParAttribut(a, b) {
    // console.log(a);
    return a[2] - b[2];
}

// Function pour definir les sommets du graphe d'ordre "ordre"
function defineSommets(ordre){
    if(ordre >= 1){
        for (let i = 0; i < ordre; i++) {
            graph["sommet"+graph.length] = [];
        }
        console.log(graph);
    }else alert("Erreur, le nombre de sommet est invalid. Reessayer!");
}

// Fonction pour definir les sommets adjacents et poids d'un sommet du graphe
function assignSommetsAdjacents(sommet, sommetsAdjacents){
    if(sommet){
        graph[sommet] = JSON.parse(JSON.stringify(sommetsAdjacents));
        console.log(graph);
    }else alert("Erreur, sommet invalid. Veuillez selectionner un sommet valid du graph");
}