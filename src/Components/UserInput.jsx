import React, {Component} from 'react'

class UserInput extends Component {
    render(props) {
        return (
            <div>
                <input type="text" onChange={this.props.changeUsername} value={this.props.value} />
            </div>
        )
    }
}

export default UserInput;