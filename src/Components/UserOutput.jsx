import React, {Component} from 'react'
import './UserOutput.css'

class UserOutput extends Component {
    render(props) {
        const style = {
            fontWeight: 'bold',
            color: 'red'
        }
        return (
            <div className="output-box">
                <p >Hello <span style={style}>{this.props.username}</span> This Is 1</p>
                <p>Hello Nice!</p>
            </div>
        )
    }
}

export default UserOutput;