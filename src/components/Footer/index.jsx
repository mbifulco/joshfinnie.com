/* eslint-disable react/self-closing-comp */
import React from 'react';
import './footer.css';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-12 mx-auto">
          <p className="copyright text-muted">
            &copy; 2010 - 2018.
            <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">
              <img
                alt="Creative Commons License"
                src="https://i.creativecommons.org/l/by-nc-sa/3.0/80x15.png"
                className="cc-img"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
