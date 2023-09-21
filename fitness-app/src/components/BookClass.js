import "../styles/Book.css";
import Boxing from "../images/boxing-icon.png";
import Dumbbell from "../images/dumbbell.png";
import Yoga from "../images/yoga.png";
import Bicycle from "../images/stat-bicycle.png";
import Dance from "../images/dance.png";
import DoubleDumbbell from "../images/two-dumbell.png";
import { Facebook } from "react-feather";
import { Instagram } from "react-feather";
import { Twitter } from "react-feather";
import { ArrowUpCircle } from "react-feather";
import Groupp40 from "../images/Group 40.png";


function BookClass() {
  return (
    <div>
      <div className="booking">
        <h1>Categories</h1>
        <div>
          <div className="booking-container">
            <div className="book">
              <div className="book-header">
                <img src={Dumbbell} />
                <h3>CHISEL IT</h3>
              </div>
              <p>
                It’s a party for your muscles! Shape, tone, sculpt and chisel
                your way through a transformative body experience.
              </p>
              <button><a href="/.formm">Book now</a></button>
            </div>

            <div className="book">
              <div className="book-header">
                <img src={Yoga} />
                <h3>YOGA</h3>
              </div>
              <p>
                Ready for the ride of your life? We’ve got something for however
                you want to spin, so saddle up and get those wheels turning!
              </p>
              <button>Book now</button>
            </div>

            <div className="book">
              <div className="book-header">
                <img src={Boxing} />
                <h3>ACTION SPORTS</h3>
              </div>
              <p>
                Get ready to muscle up for a full-blown body workout that will
                get you pumped, in the sweaty spirit and totally wanting more!
              </p>
              <button>Book now</button>
            </div>

            <div className="book">
              <div className="book-header">
                <img src={Bicycle} />
                <h3>THE RIDE</h3>
              </div>
              <p>
                Ready for the ride of your life? We’ve got something for however
                you want to spin, so saddle up and get those wheels turning!
              </p>
              <button>Book now</button>
            </div>

            <div className="book">
              <div className="book-header">
                <img src={Dance} />
                <h3>CARDIO DANCE</h3>
              </div>
              <p>
                Get grooving and moving as you follow the beat and feel the
                burn. Come channel your inner dance star!
              </p>
              <button>Book now</button>
            </div>

            <div className="book">
              <div className="book-header">
                <img src={DoubleDumbbell} />
                <h3>ADVANCED HIIT</h3>
              </div>
              <p>
                Get sweaty with your best friend or make a new workout buddy on
                the turf in our small group training sessions!
              </p>
              <button>Book now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="follow-me">
          <div className="text">
            <p className="follow-me-on">
              <span className="text-wrapper-8">Follow me on </span>
              <span className="text-wrapper-9">Instagram</span>
            </p>
          </div>
        </div>
        <div className="footer-2">
          <div className="sub-content">
            <div className="sub-content-2">
              <div className="element">
                <div className="content">
                  <div className="logo">
                    <img src={Groupp40} width="20%" />
                    <h1>strengthy</h1>
                  </div>
                  <p className="it-is-a-long">
                    It Is A Long Established Fact That A Reader Will Be
                    Distracted By The Readable.
                  </p>
                </div>
                <div className="call-and-mail">
                  <p className="call">
                    <span className="text-wrapper">
                      Call :<br />
                    </span>
                    <span className="span">
                      01234 987654
                      <br />
                      098765 34621
                      <br />
                    </span>
                    <span className="text-wrapper">
                      <br />
                      Mail :
                    </span>
                    <span className="span">
                      {" "}
                      <br />
                    </span>
                    <span className="span">contact@fitnessfit.com</span>
                  </p>
                </div>
              </div>
              <div className="element-2">
                <div className="text-wrapper-2">Utility Pages</div>
                <p className="style-guide">
                  <span className="text-wrapper-3">
                    Style Guide <br />
                  </span>
                  <span className="text-wrapper-4">Changelog</span>
                  <span className="text-wrapper-3">
                    {" "}
                    <br />
                    404 Page
                    <br />
                    Password Protected
                    <br />
                    Licenses
                    <br />
                    Contact
                  </span>
                </p>
              </div>
              <div className="element-3">
                <div className="element-4">
                  <div className="text-wrapper-2">Newsletter</div>
                  <div className="content-2">
                    <div className="button">
                      <div className="mail">
                        <input
                          type="text"
                          className="enter-your-email"
                          placeholder="Enter your email"
                          id="enter-your-email"
                        />
                      </div>
                      <button className="div-wrapper">
                        <div className="text-wrapper-5">Subscribe</div>
                      </button>
                    </div>
                    <div className="social-media">
                      <Instagram />
                      <Facebook />
                      <Twitter />
                    </div>
                  </div>
                </div>
                <a href=".header" className="top">
                  <ArrowUpCircle color="red" size={48} />
                </a>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p className="copyright-fitnessfit">
              <span className="text-wrapper-6">Copyright © </span>
              <span className="text-wrapper-7">FitnessFit </span>
              <span className="text-wrapper-6">
                | Designed byVictorFlow Templates - Powered by Webflow{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookClass;
