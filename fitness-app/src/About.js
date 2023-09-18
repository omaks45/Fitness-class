import "./styles/About.css";
import G1 from "./images/g1.png";
import G2 from "./images/g2.png";
import G3 from "./images/g3.jpg";
import Gicon from "./images/gicon.png";
import Gicon1 from "./images/gicon1.png";
import Gicon2 from "./images/gicon2.png";
import Photoo from "./images/photo.png";
import Photo1 from "./images/photo(1).png";
import Photo2 from "./images/hoto(2).png";
import { Facebook } from "react-feather";
import { Instagram } from "react-feather";
import { Twitter } from "react-feather";
import { ArrowUpCircle } from "react-feather";
import Groupp40 from "./images/Group 40.png";

function AboutPage() {
  return (
    <div>
      {/* <div className="box">
        <div className="banner">
          <div className="overlap">
            <div className="display-text-wrapper">
              <div className="display-text">
                <div className="overlap-group">
                  <p className="start-with-us-the">
                    Start with us the body and
                    <br /> mind clensing
                  </p>
                  <p className="text-wrapper">
                    Start with us the body and
                    <br /> mind clensing
                  </p>
                </div>
              </div>
            </div>
            <div className="image">
              <div className="div">
                <img className="element" alt="Element" src="1.png" />
                <img className="img" alt="Element" src="2.png" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="about-banner">
        <h1>
          Start with us the body and <br /> mind clensing
        </h1>
      </div>
      <div className="about-box">
        <img src={G1} />
        <img src={G2} />
      </div>
      <div className="welcome">
        <div className="welcome-content">
          <div className="each-welcome">
            <h5>WELCOME</h5>
            <h2>The Story Behind Our Gym</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. point
              of using Lorem Ipsum is{" "}
            </p>
          </div>
          <div className="each-welcome-2">
            <h3>STORY</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.point of
              using Lorem Ipsum.
            </p>
            <img src={G3} />
          </div>
        </div>
        <div className="welcome-content">
          <div className="each-mission">
            <div className="mission">
              <h3>OUR MISSION</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout.point of using Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="each-value">
            <div className="value">
              <h3>OUR VALUE</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout.point of using Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="values">
        <div className="values-container">
          <div className="values-header">
            <div>
              <h3>VALUES</h3>
              <h2>My core work values</h2>
            </div>
            <div>
              <button className=""> Book a Class</button>
            </div>
          </div>
          <div className="values-2">
            <div className="values-2-content">
              <div className="">
                <img alt="Icon" src={Gicon} />
                <h2>Certified trainer</h2>
                <p>
                  Bring To The Table Win Survival
                  <br />
                  strategies Ensure Proactive
                  <br />
                  new Domination.
                </p>
              </div>
            </div>
            <div className="values-2-content">
              <div className="">
                <img alt="Healthy eating" src={Gicon1} />
                <h2>Nutrition &amp; diet</h2>
                <p>
                  Bring To The Table Win Survival
                  <br />
                  strategies Ensure Proactive
                  <br />
                  new Domination.
                </p>
              </div>
            </div>
            <div className="values-2-content">
              <div className="">
                <img alt="Personal trainer" src={Gicon2} />
                <h2>Years of experience</h2>
                <p>
                  Bring To The Table Win Survival
                  <br />
                  strategies Ensure Proactive
                  <br />
                  new Domination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="counter">
        <div className="count">
          <h1>10+</h1>
          <p>Year of Experience</p>
        </div>
        <div className="count">
          <h1>500+</h1>
          <p>Happy Clients</p>
        </div>
        <div className="count">
          <h1>50k+</h1>
          <p>Expert Trainers</p>
        </div>
        <div className="count">
          <h1>15k</h1>
          <p>Instagram followers</p>
        </div>
      </div>
      <div className="team">
        <div className="title-3">
          <div className="text-wrapper-15">OUR TRAINERS</div>
          <p className="text-wrapper-16">We Trained You to Gain</p>
        </div>
        <div className="members">
          <div className="each-member">
            <img width="300px" height="350vh" src={Photoo} />
            <div className="about-member">
              <h1
                style={{
                  color: "red",
                  paddingBottom: "5px",
                  borderBottom: "1px solid white",
                }}
              >
                Amanda
              </h1>
              <span>
                <p>Specialisations :</p>
                <p>Crossfit Expoort, Nutrition & Rehab</p>
              </span>
              <div>
                <a className="socialmedia">
                  <Facebook />
                </a>
                <a className="socialmedia">
                  {" "}
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <div className="each-member">
            <img width="300px" height="350vh" src={Photo1} />
            <div className="about-member">
              <h1
                style={{
                  color: "red",
                  paddingBottom: "5px",
                  borderBottom: "1px solid white",
                }}
              >
                Amanda
              </h1>
              <span>
                <p>Specialisations :</p>
                <p>Crossfit Expoort, Nutrition & Rehab</p>
              </span>
              <div>
                <a className="socialmedia">
                  <Facebook />
                </a>
                <a className="socialmedia">
                  {" "}
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <div className="each-member">
            <img width="300px" height="350vh" src={Photo2} />
            <div className="about-member">
              <h1
                style={{
                  color: "red",
                  paddingBottom: "5px",
                  borderBottom: "1px solid white",
                }}
              >
                Amanda
              </h1>
              <span>
                <p>Specialisations :</p>
                <p>Crossfit Expoort, Nutrition & Rehab</p>
              </span>
              <div>
                <a className="socialmedia">
                  <Facebook />
                </a>
                <a className="socialmedia">
                  {" "}
                  <Instagram />
                </a>
              </div>
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

export default AboutPage;
