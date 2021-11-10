import React from "react";
// import PropTypes from "prop-types";
import "./FooterWave.scss";

// FooterWave.propTypes = {};

function FooterWave(props) {
  return (
    <div className="footer-wrapper">
      <footer>
        <svg viewBox="0 0 120 28">
          <defs>
            <mask id="xxx">
              <circle cx={7} cy={12} r={40} fill="#fff" />
            </mask>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation={2}
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
            <path
              id="wave"
              d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
            />
          </defs>
          <use id="wave3" className="wave" xlinkHref="#wave" x={0} y={-2} />
          <use id="wave2" className="wave" xlinkHref="#wave" x={0} y={0} />
          <g className="gooeff">
            <circle className="drop drop1" cx={20} cy={2} r="1.8" />
            <circle className="drop drop2" cx={25} cy="2.5" r="1.5" />
            <circle className="drop drop3" cx={16} cy="2.8" r="1.2" />
            <use id="wave1" className="wave" xlinkHref="#wave" x={0} y={1} />
            {/* g mask="url(#xxx)">
    <path   id="wave1"  class="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
    </g>
  </g */}
          </g>
        </svg>
        <div className="container-footer">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">shipping</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <a href="#">watch</a>
                </li>
                <li>
                  <a href="#">bag</a>
                </li>
                <li>
                  <a href="#">shoes</a>
                </li>
                <li>
                  <a href="#">dress</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
      </footer>
    </div>
  );
}

export default FooterWave;
