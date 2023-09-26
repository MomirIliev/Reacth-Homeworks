import React from 'react';
import {Users} from './Users.jsx';

export class Accounts extends React.Component{
    render() {
        return(
        <div>
            <p>This is from the client file</p>
            <p>User info: <Users /></p>
        </div>
        )
    }
}