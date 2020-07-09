import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class Contact extends Component {
  
    constructor(props)
    {
        super(props);
    }  
    
    render()
    {
        return (
            <div className="mt-5">
                <h1>Contact</h1>
                <ul className="mt-4 pl-3">
                    <li>
                        <p><strong>Email: </strong>{this.props.contact[0].email}</p>
                    </li>
                    <li>
                        <p><strong>Github: </strong><a href="https://github.com/arslanyousaf77">{this.props.contact[0].github}</a></p>
                    </li>
                    <li>
                        <p><strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/arslan-yousaf-932360148/">{this.props.contact[0].linkedin}</a></p>
                    </li>
                    <li>
                        <p><strong>Facebook: </strong><a href="https://www.facebook.com/arslan.yousaf.142/">{this.props.contact[0].facebook}</a></p>
                    </li>
                    <li>
                        <p><strong>Phone: </strong>{this.props.contact[0].phone}</p>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Contact;
