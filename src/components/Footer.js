import React, { Component } from "react";

export class footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <section className="contact" id="contact">
            <ul className="contact-list">
              <li>
                <a href="mailto:chavis.y0807@gmail.com?subject=Responding%20to%20Your%20Portfolio!">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/chavis-yang-631180368/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/openfuture0308" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </section>
          <h4>© 2014-2022 Chavis Yang</h4>
          <a href="#top">
            <i className="far fa-caret-square-up fa-2x"></i>
          </a>
        </footer>
      </div>
    );
  }
}

export default footer;
