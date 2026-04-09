/**
 * 
 * @param {number[]} curPos
 * @returns {number[][]} 
 */
function calculateNext(curPos) {
    const moves = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-2, -1], [-1, -2]];
    const nextPositions = [];
    for (const move of moves) {
        const next = [...curPos];
        next[0] = next[0] + move[0];
        next[1] = next[1] + move[1];
        if (next[0] > 7 || next[0] < 0 ||
            next[1] > 7 || next[1] < 0) continue;
        nextPositions.push(next);
    }
    return nextPositions;
}

/**
 * 
 * @param {number[]} orig 
 * @param {number[]} dest 
 */
function knightMoves(orig, dest) {
    const visited = new Set();
    const queue = [{ place: orig, path: [orig] }];
    while (queue.length != 0) {
        const current = queue.shift();
        if (current['place'][0] == dest[0] && current['place'][1] == dest[1]) return current["path"];
        visited.add(current['place'] + "");

        const nextPositions = calculateNext(current['place']);
        queue.push(...nextPositions.reduce((acc, cur) => {
            if (!visited.has(cur + ""))
                acc.push({ place: cur, path: [...current['path'], cur] });
            return acc;
        }, []));
    }
}

console.log("Path: ", knightMoves([0,0], [7,7]));