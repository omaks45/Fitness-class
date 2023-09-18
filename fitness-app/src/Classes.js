import "./styles/Classes.css";
import Image16 from "./images/Image-16.png";
import Image17 from "./images/Image-17.png";
import Image18 from "./images/Image-18.png";
import C1 from "./images/c1.png";
import C2 from "./images/c2.png";
import C3 from "./images/c3.png";
import { Facebook } from "react-feather";
import { Instagram } from "react-feather";
import { Twitter } from "react-feather";
import { ArrowUpCircle } from "react-feather";
import Groupp40 from "./images/Group 40.png";

function ClassPage() {
  return (
    <div>
      <div className="about-banner">
        <h1>CLASSES</h1>
      </div>
      <div className="class">
        <div className="class-header">
          <h3>OUR TRAINERS</h3>
          <h1>We Trained You to Gain</h1>
        </div>
        <div className="classes-2">
          <div className="element-17">
            <img width="347px" height="400px" alt="Image" src={Image16} />
            <div className="text-4">
              <div className="text-wrapper-56">Pilates Training</div>
              <p className="containing-lorem">
                Containing Lorem Ipsum Passagesand More Recently With
              </p>
              <button className="button-9">Read More</button>
            </div>
          </div>
          <div className="element-17">
            <img width="347px" height="400px" alt="Image" src={Image17} />
            <div className="text-4">
              <div className="text-wrapper-56">Aerobic Training</div>
              <p className="containing-lorem">
                Containing Lorem Ipsum Passagesand More Recently With
              </p>
              <button className="button-9">Read More</button>
            </div>
          </div>
          <div className="element-17">
            <img width="347px" height="400px" alt="Image" src={Image18} />
            <div className="text-4">
              <div className="text-wrapper-56">CrossFit Workout</div>
              <p className="containing-lorem">
                Containing Lorem Ipsum Passagesand More Recently With
              </p>
              <button className="button-9">Read More</button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="classes-2">
          <div className="element-17">
            <img width="347px" height="400px" alt="Image" src={C1} />
            <div className="text-4">
              <div className="text-wrapper-56">Pilates Training</div>
              <p className="containing-lorem">
                Containing Lorem Ipsum Passagesand More Recently With
              </p>
              <button className="button-9">Read More</button>
            </div>
          </div>
          <div className="element-17">
            <img width="347px" height="400px" alt="Image" src={C2} />
            <div className="text-4">
              <div className="text-wrapper-56">Aerobic Training</div>
              <p className="containing-lorem">
                Containing Lorem Ipsum Passagesand More Recently With
              </p>
              <button className="button-9">Read More</button>
            </div>
          </div>
          <div className="element-17">
            <img width="347px" height="400px" alt="Image" src={C3} />
            <div className="text-4">
              <div className="text-wrapper-56">CrossFit Workout</div>
              <p className="containing-lorem">
                Containing Lorem Ipsum Passagesand More Recently With
              </p>
              <button className="button-9">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="join-club">
        <div className="join">
          <h1>JOIN OUR CLUB</h1>
          <p>
            It is a long established fact that a reader will be distracted{" "}
            <br /> by the readable content of a page when looking at its layout.{" "}
            <br /> point of using Lorem Ipsum is
          </p>
          <button>START NOW</button>
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

export default ClassPage;
