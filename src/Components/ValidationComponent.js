import React,{Component} from 'react'

class ValidationComponent extends Component {
    render(props) {
        return (
            <div>
                {this.props.length >= 5 ? "Text long enough" : "Text too short"}
            </div>
        )
    }
}

export default ValidationComponent