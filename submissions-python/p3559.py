from collections import defaultdict


class LCA:
    def __init__(self, edges: list[list[int]]):
        self.n = len(edges) + 1
        self.n_bits = self.n.bit_length()
        self.depth, self.up = self.dfs(self.make_graph(edges))

    def make_graph(self, edges: list[list[int]]) -> dict[int, set[int]]:
        graph = defaultdict(set)

        for u, v in edges:
            graph[u].add(v)
            graph[v].add(u)

        return graph

    def dfs(self, graph: dict[int, set[int]]) -> tuple[list[int], list[list[int]]]:
        depth = [-1] * (self.n + 1)
        depth[1] = 0

        up = [[-1] * self.n_bits for _ in range(self.n + 1)]

        def dfs(node: int, parent: int):
            up[node][0] = parent

            for child in graph[node].difference({parent}):
                depth[child] = depth[node] + 1
                dfs(child, node)

        dfs(1, 1)

        for i in range(1, self.n_bits):
            for n in range(1, self.n + 1):
                up[n][i] = up[up[n][i - 1]][i - 1]

        return depth, up

    def lca(self, u: int, v: int) -> int:
        if self.depth[u] > self.depth[v]:
            u, v = v, u

        diff = self.depth[v] - self.depth[u]
        for i in range(diff.bit_length()):
            if diff & (1 << i):
                v = self.up[v][i]

        if u == v:
            return u

        for i in reversed(range(self.n_bits)):
            if self.up[u][i] != self.up[v][i]:
                u = self.up[u][i]
                v = self.up[v][i]

        return self.up[u][0]

    def distance(self, u: int, v: int) -> int:
        return self.depth[u] + self.depth[v] - 2 * self.depth[self.lca(u, v)]


M = 10**9 + 7


class Solution:
    def assignEdgeWeights(
        self, edges: list[list[int]], queries: list[list[int]]
    ) -> list[int]:
        lca = LCA(edges)
        return [pow(2, lca.distance(u, v) - 1, M) if u != v else 0 for u, v in queries]


def test():
    assert Solution().assignEdgeWeights(edges=[[1, 2]], queries=[[1, 1], [1, 2]]) == [
        0,
        1,
    ]
    assert Solution().assignEdgeWeights(
        [[1, 2], [1, 3], [3, 4], [3, 5]], queries=[[1, 4], [3, 4], [2, 5]]
    ) == [2, 1, 4]
