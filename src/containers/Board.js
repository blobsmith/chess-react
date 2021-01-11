import React from 'react';
import ReactDOM from 'react-dom';
import Square from '../components/Square';
import '../styles/board.css';

class Board extends React.Component {

    render() {
        let numbers = ['8', '7', '6', '5', '4', '3', '2', '1'];
        let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        if (this.props.reverse) {
            numbers = numbers.reverse();
            letters = letters.reverse();
        }

        const squares = numbers.map((number, index) => (
            <div className={"board-row row-" + number} >
                <Square cell={letters[0] + number} background={number%2 === 0 ? 'dark' : 'light' } />
                <Square cell={letters[1] + number} background={number%2 !== 0 ? 'dark' : 'light' } />
                <Square cell={letters[2] + number} background={number%2 === 0 ? 'dark' : 'light' } />
                <Square cell={letters[3] + number} background={number%2 !== 0 ? 'dark' : 'light' } />
                <Square cell={letters[4] + number} background={number%2 === 0 ? 'dark' : 'light' } />
                <Square cell={letters[5] + number} background={number%2 !== 0 ? 'dark' : 'light' } />
                <Square cell={letters[6] + number} background={number%2 === 0 ? 'dark' : 'light' } />
                <Square cell={letters[7] + number} background={number%2 !== 0 ? 'dark' : 'light' } />
            </div>
        ));

        return (
            <div >
                { squares }
            </div>
        );
    }
}

export default Board;
