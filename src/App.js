import './App.css';
import React, { Fragment } from "react";
import * as contentAction from './redux/actions/updateContent';
import { connect } from 'react-redux';
import { AnalysisWorkerWrapper, createWorker, Paper } from "yoastseo";
import Worker from "worker-loader!./analysis.worker.js";
import { Container, SidebarContent, KeywordContainer, Main, Sidebar, SidebarHeader } from "./components/styles.js";

// import Yoast_ContentAnalysis_Logo from "./Yoast_ContentAnalysis_Logo.png";
// import { KeywordInput } from "yoast-components";
// import ReadabilityResults from "./components/ReadabilityResults";
// import SEOResults from "./components/SEOResults";


class App extends React.Component {
    constructor( props ) {
        super( props );

        const worker = new AnalysisWorkerWrapper( new Worker() );

        worker.initialize( {
            locale: "en_US",
            contentAnalysisActive: true,
            keywordAnalysisActive: true,
            logLevel: "ERROR",
        } ).then( () => {
            // The worker has been configured, we can now analyze a Paper.
            const paper = new Paper( "Text to analyze", {
                keyword: "analyze",
            } );

            return worker.analyze( paper );
        } ).then( ( results ) => {
            console.log( 'Analysis results:' );
            console.log( results );
        } ).catch( ( error ) => {
            console.error( 'An error occured while analyzing the text:' );
            console.error( error );
        } );

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        let content = e.target.value

        this.props.updateContent( content );
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Main>
                        <div className="App">
                            <header className="App-header">
                                <p>
                                    This is my yoastseo integration
                                </p>
                                <textarea id="content" name="content" rows="4" cols="50" onChange={this.handleChange}>{this.props.content}</textarea>
                            </header>
                        </div>
                        <KeywordContainer>
                            <p>
                                Focus Keyphrase
                            </p>
                            {/*<KeywordInput*/}
                            {/*    id="keywordInput"*/}
                            {/*    label="Focus keyphrase"*/}
                            {/*    aria-label="Focus keyphrase"*/}
                            {/*    keyword={ this.props.keyword }*/}
                            {/*    onChange={ this.props.onFocusKeywordChange }*/}
                            {/*/>*/}
                        </KeywordContainer>
                    </Main>
                    <Sidebar>
                        <SidebarHeader>
                            <p>
                                Yoast Content Analysis
                            </p>
                            {/*<img src={Yoast_ContentAnalysis_Logo} width="99" alt="Yoast logo"/>*/}
                        </SidebarHeader>

                        <SidebarContent>
                            <h2>Readability analysis results</h2>
                            {/*<ReadabilityResults />*/}
                            <h2>SEO analysis results</h2>
                            {/*<SEOResults />*/}
                        </SidebarContent>
                    </Sidebar>
                </Container>
            </Fragment>
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
