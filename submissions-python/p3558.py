from collections import defaultdict


class Solution:
    def assignEdgeWeights(self, edges: list[list[int]]) -> int:
        graph = self.make_graph(edges)
        max_depth = self.max_depth(graph)
        return 2 ** (max_depth - 1) % (10**9 + 7)

    def make_graph(self, edges: list[list[int]]):
        graph = defaultdict(set)

        for u, v in edges:
            graph[u].add(v)
            graph[v].add(u)

        return graph

    def max_depth(self, graph) -> int:
        max_depth = 0
        visited = set()
        stack = [(1, 0)]

        while stack:
            n, depth = stack.pop()
            if n in visited:
                continue
            visited.add(n)

            if depth > max_depth:
                max_depth = depth

            for m in graph[n]:
                stack.append((m, depth + 1))

        return max_depth


assert Solution().assignEdgeWeights([[1, 2]]) == 1
assert Solution().assignEdgeWeights([[1, 2], [1, 3], [3, 4], [3, 5]]) == 2
