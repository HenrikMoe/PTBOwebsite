import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from "../actions/actions.js"
import App from "../App" //component

class MainApp extends React.Component{
    render(){
        return(
            <App object={this.props.object}></App>
        )
    }
}

const mapStateToProps=(state)=>{
    return state
}

export default connect (mapStateToProps, actionCreators)(MainApp)
