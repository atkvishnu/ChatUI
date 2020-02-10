import { Link } from 'react-router-dom';
import React from 'react';
import styles from './styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const firebase = require("firebase");

class LoginComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            serverError: ''
        }
    }

    render(){

        const { classes } = this.props;

        return(
            <main className={classes.main}>
                <CssBaseline/>
                
                <Paper className={classes.paper}>
                    <Typography component='h1' variant='h5'>
                        Log In!
                    </Typography>
                    <form onSubmit={(e) => this.submitLogin(e)} className={classes.form}>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='login-email-input'>Enter Your Email</InputLabel>
                            <Input autoComplete='email' autoFocus id='login-email-input' onChange={(e) => this.userTyping('email', e)}></Input>
                        </FormControl>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='login-password-input'>Enter Your Password</InputLabel>
                            <Input type='password' autoComplete='password' id='login-password-input' onChange={(e) => this.userTyping('password', e)}></Input>
                        </FormControl>
                        <Button type='submit' fullWidth variant='contained'color='primary' className={classes.submit}>LOG IN</Button>
                    </form>
                    {
                        this.state.serverError ? 
                        <Typography className={classes.errorText} component='h5' variant='h6'>
                            Incorrect Login Information
                        </Typography> :
                        null
                    }
                    <h5 className={classes.noAccountHeader}>Don't Have An Account?</h5>
                    <Link className={classes.signUpLink} to='/signup'>Sign Up!</Link>
                </Paper>
            
            </main>
            // </div>
            
        );
    }

    userTyping = (type, e) => {
        switch (type) {
            case 'email':
                this.setState({ email: e.target.value })
                break;
            
            case 'password':
                this.setState({ password: e.target.value })
                break;
            
            default:
                break;
        }
    }

    submitLogin = (e) => {
        e.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.history.push('/dashboard');
            }, err => {
                this.setState({ serverError: true });
                console.log('Error logging in: ', err);
            });
    };
}



export default withStyles(styles)(LoginComponent);

