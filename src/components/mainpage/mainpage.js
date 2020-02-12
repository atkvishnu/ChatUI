import React from 'react';
import { Link } from 'react-router-dom';
import Divider from "@material-ui/core/Divider";
import Icon from './icons';
import './styles.scss';
import './main.scss';
import Logo1 from './assets/icon_main.png'

export default class MainPageComponent extends React.Component {
  render() {
    return (
      <div className="App center">

        <header>
          <div className="logo">
                <img src={Logo1} height='125px' width='125px' alt=''/>
          </div>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li><Link to='/login'>Log In!</Link></li>
              <li><Link to='/signup'>Sign Up!</Link></li>
              <li>Contact us</li>
            </ul>
          </nav>
        </header>
        <Divider/>
        <Divider/>
        <Divider/>
        <br></br>
        <br></br>

        <section className="impress">
            <h1>
                Chat-UI
            </h1>
          <div className="button"><Link to='/signup'>Get early access</Link></div>
        </section>
        <br></br>
        <br></br>
        <footer>
        <Divider/>
          <nav>
            <div></div>
            <div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li><Link to='/login'>Log In!</Link></li>
                <li><Link to='/signup'>Sign Up!</Link></li>
                <li>Contact us</li>
              </ul>
            </div>

            <div>
              <ul>
                <li><a href="# ">Terms & Conditions</a></li>
                <li><a href="# ">Privacy policy</a></li>
                <li><a href="# ">Support</a></li>
              </ul>
            </div>

            <div
              className="text-right flex flex-direction-column justify-content-space-between align-items-end">

              <div className="flex align-items-start">
                <div className="address">Made with <span></span>❤️
                  <br/>
                  in India
                </div>
                <Icon name="Location" className="pin"/>
              </div>
            </div>

          </nav>
          <div className="credits">
            <span></span>
            <span className="copyright">
              © 2020  Copyrights 
            </span>
            <span className="credits-link">
              Graphics by <a href="https://github.com/nerdyninjahugs"
                             target="_blank"
                             rel="noopener noreferrer" >CleanScripting</a>
            </span>
          </div>
        </footer>

      </div>
    );
  }
}