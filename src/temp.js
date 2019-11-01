import React from 'react';

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggle: false};
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        this.setState({
            isToggle: !this.state.isToggle
        });
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                the toggle is {this.state.isToggle ? 'True' : 'False'}
            </button>
        );
    }
}

export default Toggle;

