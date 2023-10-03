import { useState } from "react";
import "../styles/Book.css";
import Modal from "../components/Modal.js";
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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleBookClassClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

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
                Unleash your inner strength and sculpt the body you've always
                dreamed of in our dynamic muscle-building class. Get ready to
                challenge yourself, increase muscle mass, and transform your
                physique under expert guidance. Join us now to embark on your
                journey to a stronger, more confident you.
              </p>
              <button onClick={handleBookClassClick}>Book now</button>
            </div>

            <div className="book">
              <div className="book-header">
                <img src={Yoga} />
                <h3>YOGA</h3>
              </div>
              <p>
                Discover inner peace, enhance flexibility, and boost your
                overall well-being in our rejuvenating yoga class. Join us for a
                transformative journey of mindfulness, guided by experienced
                instructors, in a serene and welcoming atmosphere. Enroll today
                to find your path to balance and vitality.
              </p>
              <button onClick={handleBookClassClick}>Book now</button>
            </div>

            <div className="book">
              <div className="book-header">
                <img src={Boxing} />
                <h3>ACTION SPORTS</h3>
              </div>
              <p>
                Experience the thrill of action sports like never before! Our
                action sports class is your gateway to adrenaline-pumping
                excitement. From skateboarding to parkour, we'll teach you the
                skills and techniques to conquer the urban playground. Dive into
                the world of extreme sports and become a true daredevil. Enroll
                today and start living life on the edge!
              </p>
              <button onClick={handleBookClassClick}>Book now</button>
            </div>

            <div className="book">
              <div className="book-header">
                <img src={Bicycle} />
                <h3>THE RIDE</h3>
              </div>
              <p>
                Elevate your lower body strength and redefine your leg muscles
                in our specialized leg muscle class. Our program is designed to
                sculpt and tone your legs while increasing endurance and
                stability. Join us now to unlock powerful, shapely legs that
                will make every step feel like a confident stride. Don't wait –
                enroll today and take the first step towards leg day success!
              </p>
              <button onClick={handleBookClassClick}>Book now</button>
            </div>

            <div className="book">
              <div className="book-header">
                <img src={Dance} />
                <h3>CARDIO DANCE</h3>
              </div>
              <p>
                Join our dance class and let the rhythm move you! Whether you're
                a beginner or an experienced dancer, our classes cater to all
                skill levels. Get ready to groove to the latest beats, learn new
                dance styles, and boost your confidence on the dance floor.
                Embrace the joy of movement and express yourself through dance.
                Enroll now and dance your way to a happier, healthier you!
              </p>
              <button onClick={handleBookClassClick}>Book now</button>
            </div>

            <div className="book">
              <div className="book-header">
                <img src={DoubleDumbbell} />
                <h3>ADVANCED HIIT</h3>
              </div>
              <p>
                Elevate your fitness game with our advanced intense training
                class. Get ready to sweat, push your boundaries, and see
                remarkable results. Join us now and take your fitness journey to
                new heights. It's time to unleash your full potential!
              </p>
              <button onClick={handleBookClassClick}>Book now</button>
            </div>
          </div>
        </div>
        {isModalVisible && <Modal onClose={handleCloseModal} />}
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
                | Designed by Banjo Adijat Adebimpe - Powered by Webflow{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookClass;
