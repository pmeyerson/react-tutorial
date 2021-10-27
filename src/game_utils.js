function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function calculateSquarePlayed(new_squares, old_squares) {
    console.log("determine square played: ", new_squares, old_squares)
    if (! old_squares) {
        return null;
    }
    for (let i =0; i < new_squares.length; i++) {
        console.log("checking elements: ",i, new_squares[i], old_squares[i])
        if ((new_squares[i] || new_squares[i]==0)  && old_squares[i] == null) {
            return i;
        }
    }
    return null;
}

function convertSquareNumberToGridPosition(position) {
    // return string of (x, y)
    // x=0 is  left column, y=0 is top row
    // position 0 is top left, 8 is bottom right
    console.log("converting square: ", position, " to grid layout")
    if (! Number.isInteger(position)) {
        return null;
    }

    var y = Math.floor(position / 3);

    var x = [0, 3, 6].includes(position) ? 0 : 
               ([1, 4, 7].includes(position) ? 1 : 
                 ([2, 5, 8].includes(position) ? 2 : null));

    return '(' + x + ', ' + y + ')';
}

module.exports = {
    convertSquareNumberToGridPosition,
    calculateWinner,
    calculateSquarePlayed,
}