def prim(graph):
    # Sélectionner un sommet initial (ici, le premier sommet du graphe)
    initial_vertex = list(graph.keys())[0]
    print(graph.keys())
    # Ensemble pour suivre les sommets inclus dans l'arbre de poids minimum









# Exemple d'utilisation
graph = {
    'A': [('B', 2), ('C', 3)],
    'B': [('A', 2), ('C', 1), ('D', 1)],
    'C': [('A', 3), ('B', 1), ('D', 4)],
    'D': [('B', 1), ('C', 4)]
}

result = prim(graph)
print("Arbre de poids minimum:", result)