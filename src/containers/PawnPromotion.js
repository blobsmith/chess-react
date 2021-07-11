import React from 'react';
import {disablePawnPromotionAction, pawnPromotionReplaceAction } from '../redux/actions';
import PieceComponent from '../components/Piece';
import piecesService from '../services/PiecesService';
import promotionService from '../services/PromotionService';

import { connect } from 'react-redux';

class PawnPromotion extends React.Component {

    handleClick = (pieceName, pieceType) => {
        // Disabled the pawn promotion interface.
        this.props.disablePawnPromotion();

        // Replace the pawn by the selected "pieceType".
        this.props.replacePawn(pieceName, pieceType);
    }

    render() {
        const pieceName = promotionService.getPromotedPieceName(this.props.piecesPosition);
        const color = piecesService.getPieceColor(pieceName);
        return (
            <div className={'pawn-promotion ' + (this.props.pawnPromotion ? '' : 'hidden')} >
               <div className="label">
                   Select a piece to replace the pawn 
               </div>
               <div className="piece-selector">
               <div className="rook-button">
                   <PieceComponent
                        selected={false}  
                        className="row5 columnC"
                        image={piecesService.getImage(piecesService.ROOK+color)}
                        onClick={() => (this.handleClick(pieceName, piecesService.ROOK))}
                    />
                </div>

                <div className="knight-button">
                    <PieceComponent
                        selected={false}  
                        className="row5 columnD"
                        image={piecesService.getImage(piecesService.KNIGHT+color)}
                        onClick={() => (this.handleClick(pieceName, piecesService.KNIGHT))}
                    />
                </div>

                <div className="bishop-button">
                    <PieceComponent
                        selected={false}  
                        className="row5 columnE"
                        image={piecesService.getImage(piecesService.BISHOP+color)}
                        onClick={() => (this.handleClick(pieceName, piecesService.BISHOP))}
                    />
                </div>

                <div className="queen-button">
                    <PieceComponent
                        selected={false}  
                        className="row5 columnF"
                        image={piecesService.getImage(piecesService.QUEEN+color)}
                        onClick={() => (this.handleClick(pieceName, piecesService.QUEEN))}
                    />
                </div>
               </div>
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        selectedPiece: state.selectedPiece,
        pawnPromotion: state.pawnPromotion,
        piecesPosition: state.piecesPosition
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        disablePawnPromotion: () => {
            dispatch(disablePawnPromotionAction());
        },
        replacePawn: (pieceName, pieceType) => {
            dispatch(pawnPromotionReplaceAction(pieceName, pieceType));
        }
    };
};

export default connect(mapStatesToProps, mapDispatchToProps)(PawnPromotion);
