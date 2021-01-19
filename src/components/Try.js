import React from 'react';

class Try extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id
        };
    }
    render(){
        return (
            <div>{this.state.id}</div>
        );
    }
}

export default Try;