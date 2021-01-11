import React from 'react';
import Rook from './Rook';
import Knight from './Knight';
import Bishop from './Bishop';
import Queen from './Queen';
import King from './King';
import Pawn from './Pawn';
import '../styles/pieces.css';


class Pieces extends React.Component {

    render() {
        return (
            <div className="pieces">
                <Rook color="white" position="A1"/>
                <Rook color="white" position="H1"/>
                <Rook color="black" position="A8"/>
                <Rook color="black" position="H8"/>

                <Knight color="white" position="B1"/>
                <Knight color="white" position="G1"/>
                <Knight color="black" position="B8"/>
                <Knight color="black" position="G8"/>

                <Bishop color="white" position="C1"/>
                <Bishop color="white" position="F1"/>
                <Bishop color="black" position="C8"/>
                <Bishop color="black" position="F8"/>

                <King color="white" position="D1"/>
                <King color="black" position="D8"/>

                <Queen color="white" position="E1"/>
                <Queen color="black" position="E8"/>

                <Pawn color="white" position="A2"/>
                <Pawn color="white" position="B2"/>
                <Pawn color="white" position="C2"/>
                <Pawn color="white" position="D2"/>
                <Pawn color="white" position="E2"/>
                <Pawn color="white" position="F2"/>
                <Pawn color="white" position="G2"/>
                <Pawn color="white" position="H2"/>


                <Pawn color="black" position="A7"/>
                <Pawn color="black" position="B7"/>
                <Pawn color="black" position="C7"/>
                <Pawn color="black" position="D7"/>
                <Pawn color="black" position="E7"/>
                <Pawn color="black" position="F7"/>
                <Pawn color="black" position="G7"/>
                <Pawn color="black" position="H7"/>

            </div>
        );
    }
}
export default Pieces;
