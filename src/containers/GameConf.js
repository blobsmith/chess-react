import React from 'react';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import ConfigurationForm from '../components/ConfigurationForm';
import { continueGameAction } from '../redux/actions';

class GameConf extends React.Component {

    submit = (values) => {
        this.props.continueGame(values)
    }

    render() {
        return (
            <div className={this.props.configuration['status'] !== 'pending' ? 'hidden' : ''} >
                <Fade top when={this.props.configuration['status'] === 'pending'}>
                    <div className="game-conf">
                        <h1>Menu</h1>
                        <ConfigurationForm 
                            onSubmit={this.submit} 
                            initialValues={this.props.configuration} 
                            submitLabel="Save and continue"
                        />
                    </div>
                </Fade>
            </div>
        );
    }
}

const mapStatesToProps = (state) => {
    return {
        configuration: state.configuration,
        form: state.form,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        continueGame: (values) => {
            dispatch(continueGameAction(values));
        },
    };
};

export default connect(mapStatesToProps, mapDispatchToProps)(GameConf);
