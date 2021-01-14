import React from 'react';
import Square from '../components/Square';
import '../styles/board.css';
import { movePieceAction } from '../redux/actions';
import { connect } from 'react-redux';

class Board extends React.Component {

    handleMove(position) {
        this.props.move(this.props.selectedPiece, position);
    }

    render() {
        let numbers = ['8', '7', '6', '5', '4', '3', '2', '1'];
        let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        if (this.props.reverse) {
            numbers = numbers.reverse();
            letters = letters.reverse();
        }

        const squares = numbers.map((number, index) => (
            <div className={"board-row row-" + number} >
                <Square 
                    key={letters[0] + number} 
                    cell={letters[0] + number} 
                    background={number%2 === 0 ? 'dark' : 'light' } 
                    onClick={() => (this.handleMove(letters[0] + number))}
                />
                <Square 
                    key={letters[1] + number}  
                    cell={letters[1] + number} 
                    background={number%2 !== 0 ? 'dark' : 'light' } 
                    onClick={() => (this.handleMove(letters[1] + number))}
                    />
                <Square 
                    key={letters[2] + number}  
                    cell={letters[2] + number} 
                    background={number%2 === 0 ? 'dark' : 'light' } 
                    onClick={() => (this.handleMove(letters[2] + number))}
                    />
                <Square 
                    key={letters[3] + number}  
                    cell={letters[3] + number} 
                    background={number%2 !== 0 ? 'dark' : 'light' } 
                    onClick={() => (this.handleMove(letters[3] + number))}
                    />
                <Square 
                    key={letters[4] + number}  
                    cell={letters[4] + number} 
                    background={number%2 === 0 ? 'dark' : 'light' } 
                    onClick={() => (this.handleMove(letters[4] + number))}
                    />
                <Square 
                    key={letters[5] + number}  
                    cell={letters[5] + number} 
                    background={number%2 !== 0 ? 'dark' : 'light' } 
                    onClick={() => (this.handleMove(letters[5] + number))}
                    />
                <Square 
                    key={letters[6] + number}  
                    cell={letters[6] + number} 
                    background={number%2 === 0 ? 'dark' : 'light' } 
                    onClick={() => (this.handleMove(letters[6] + number))}
                    />
                <Square 
                    key={letters[7] + number}  
                    cell={letters[7] + number} 
                    background={number%2 !== 0 ? 'dark' : 'light' } 
                    onClick={() => (this.handleMove(letters[7] + number))}
                    />
            </div>
        ));

        return (
            <div >
                { squares }
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        selectedPiece: state.selectedPiece,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        move: (selectedPiece, toPosition) => {
            dispatch(movePieceAction(selectedPiece, toPosition));
        },
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Board);
