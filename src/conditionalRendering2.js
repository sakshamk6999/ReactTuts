import React from 'react';

class HideMessage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: true
        };
    }

    render(){
        return(
            <div>
                {this.state.show && (<h1>This is the message</h1>)}
                <button onClick = {(e) =>
                this.setState({
                    show: !this.state.show
                })}>{this.state.show ? 'Hide' : 'Show'}</button>
            </div>
        );
    }
}

export default HideMessage;