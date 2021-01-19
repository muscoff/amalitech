import React from 'react';

class EmailSignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {email: ''}
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    validateEmail = email => {
        let em = email.split('@');
        if(em.length > 1){
            em = em[1].split('.');
            if(em.length > 1 && em[1] !== ''){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    onClick(){
        if(this.state.email !== ''){
            if(this.validateEmail(this.state.email)){
                this.props.onClick? this.props.onClick(this.state.email) : alert('No function provided');
            }else{
                alert('Invalid email');
            }
        }else{
            alert('Email field cannot be empty');
        }
    }

    render(){
        const {email} = this.state;
        return (
            <React.Fragment>
                <div className="col-9 padding-all-10">
                    <input type="email" className="email" value={email} onChange={(e)=>this.onChange(e)} name="email" placeholder="Email Address" />
                </div>
                <div className="col-3 padding-all-10">
                    <button className="join" onClick={()=>this.onClick()}>JOIN</button>
                </div>
            </React.Fragment>
        );
    }
}

export default EmailSignUp;