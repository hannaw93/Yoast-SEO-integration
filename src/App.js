import './App.css';
import React from 'react';
import * as contentAction from './redux/actions/updateContent';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor( props ) {
        super( props );
	    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        let content = e.target.value

        this.props.updateContent( content );
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        This is my yoastseo integration
                    </p>
                    <textarea id="content" name="content" rows="4" cols="50" onChange={this.handleChange}>{this.props.content}</textarea>
                </header>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        content: state.content
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateContent: content => dispatch(contentAction.updateContent( content ))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
