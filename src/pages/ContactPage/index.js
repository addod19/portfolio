import React, { Component } from 'react';

import './style.css';

export default class ContactPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log(e);
    }

    resetForm() {
        this.setState( {
            name: '',
            email: '',
            message: ''
        })
    }
    render() {
        return (
            <div className="contactWrap">
                <div className="innerWrap">
                    <h2 className="text-center">Contact Page</h2>

                    <form id="contact-form"  onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" value={this.state.name} onChange={this.onNameChange.bind(this)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea value={this.state.message} onChange={this.onMessageChange.bind(this)} className="form-control" rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                
            </div>
        )
    }
    onNameChange(e) {
        this.setState( { name: e.target.value });
    }

    onEmailChange(e) {
        this.setState( { email: e.target.value });
    }

    onMessageChange(e) {
        this.setState( { message: e.target.value });
    }

}
