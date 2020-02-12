import React,{Component} from 'react'

class CharComponent extends Component {
    
    render(props) {
        let style = {
            display: 'inline-block', padding: '16px', textAlign: 'center', margin: '16px', border: '1px solid black'
        }
        return (
            <div style={style} onClick={this.props.click}>
                {this.props.val}
            </div>
        )
    }
}

export default CharComponent