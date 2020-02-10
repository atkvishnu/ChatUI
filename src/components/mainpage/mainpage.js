import { Link } from 'react-router-dom';
import React from 'react';

export default class MainPageComponent extends React.Component {

    render(){

        return(
            <div>
                <button 
                    style={{
                        margin: '100px',
                        alignItems: 'center',
                        display: 'flex',
                        float: 'left',
                        textDecoration: 'none',
                        fontWeight: 'bolder',
                        background: '#99ff33',
                        width: '50px',
                        padding: '100px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        borderColor: '#99ff33'
                    }}>
                    <Link to='/login'>Log In!</Link>
                </button>
                <button 
                    style={{
                        margin: '100px',
                        alignItems: 'center',
                        display: 'flex',
                        float: 'right',
                        textDecoration: 'none',
                        fontWeight: 'bolder',
                        background: '#99ff33',
                        width: '50px',
                        padding: '100px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        borderColor: '#99ff33'
                }}>
                    <Link to='/signup'>Sign Up!</Link>
                </button>
            </div>
        )
    }
}