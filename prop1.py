import heapq

def prim(graph):
    # Sélectionner un sommet initial (ici, le premier sommet du graphe)
    initial_vertex = list(graph.keys())[0]
    print(initial_vertex)
    # Ensemble pour suivre les sommets inclus dans l'arbre de poids minimum
    included_vertices = set([initial_vertex])
    print(included_vertices)
    # File de priorité pour stocker les arêtes disponibles, triées par poids
    priority_queue = [
        (weight, initial_vertex, neighbor) for neighbor, weight in graph[initial_vertex]
    ]
    heapq.heapify(priority_queue)
    # Ensemble pour stocker les arêtes de l'arbre de poids minimum
    minimum_spanning_tree = set()
    # print(included_vertices)

    while priority_queue:
        weight, current_vertex, next_vertex = heapq.heappop(priority_queue)

        if next_vertex not in included_vertices:
            # Ajouter l'arête au minimum_spanning_tree
            minimum_spanning_tree.add((current_vertex, next_vertex, weight))
            
            # Ajouter le nouveau sommet à l'ensemble inclus
            included_vertices.add(next_vertex)

            # Ajouter les arêtes du nouveau sommet à la file de priorité
            for neighbor, weight in graph[next_vertex]:
                if neighbor not in included_vertices:
                    heapq.heappush(priority_queue, (weight, next_vertex, neighbor))

    return minimum_spanning_tree

# Exemple d'utilisation
graph = {
    'A': [('B', 2), ('C', 3)],
    'B': [('A', 2), ('C', 1), ('D', 1)],
    'C': [('A', 3), ('B', 1), ('D', 4)],
    'D': [('B', 1), ('C', 4)]
}

result = prim(graph)
print("Arbre de poids minimum:", result)
