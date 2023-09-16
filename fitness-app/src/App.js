import "./App.css";
import Group40 from "./images/Group 40.png";
import Image16 from "./images/Image-16.png";
import Image17 from "./images/Image-17.png";
import Image18 from "./images/Image-18.png";
import Image2 from "./images/Image(2).jpg";
import Image3 from "./images/Image(3).png";
import Image4 from "./images/Image(4).png";
import GoogleIcon from "./images/google-icon.png";
import StarIcons from "./images/star(1).png";
import Slideshow from "./components/SlideShow";
import Photo from "./images/photo.png";
import Photo1 from "./images/photo(1).png";
import Photo2 from "./images/hoto(2).png";
import { Facebook } from "react-feather";
import { Instagram } from "react-feather";
import { Twitter } from "react-feather";
import { ArrowUpCircle } from "react-feather";
import Group37 from "./images/Group37.png";
import Group38 from "./images/group38.png";
import Icon from "./images/icon.png";
import Blog from "./images/blog.png";

// table
const data = [
  {
    time: "06.00 - 07.00",
    type: "beginners",
    workout: "Mixed Circuit Cardio Workout",
    trainer: "Floyd Miles",
  },
  {
    time: "07.00 - 09.00",
    type: "advanced",
    workout: "Cross Fit /Pilates",
    trainer: "Robert Cage",
  },
  {
    time: "09.00 - 10.00",
    type: "intermediate",
    workout: "Fit Body",
    trainer: "Donald Grey",
  },
  {
    time: "10.00 - 11.00",
    type: "beginners",
    workout: "Yoga / Athletic Class",
    trainer: "Floyd Miles",
  },
  {
    time: "04.00 - 06.00",
    type: "intermediate",
    workout: "Power Club / Boxing",
    trainer: "Kimberly Stone",
  },
  {
    time: "06.00 - 10.00",
    type: "advanced",
    workout: "Mixed Circuit",
    trainer: "Robert Cage",
  },
];

// ratings

function App() {
  return (
    <div className="homepage">
      <div className="div">
        <header className="header">
          <div className="logo">
            <img src={Group40} width="20%" />
            <h1>strengthy</h1>
          </div>
          <div className="menu-content">
            <div className="home-about-classes">
              <a href=".homepage">Home</a>
              <a>About</a>
              <a>Classes</a>
              <a>Trainers</a>
              <a>Newss</a>
              <a>Contact</a>
              <button className="button-13">Book Class</button>
            </div>
          </div>
        </header>
        <div className="banner">
          <div className="display-text">
            <div className="title-7">
              <p className="keep-your-body-fit">
                Keep Your Body
                <br />
                Fit &amp; Strong
              </p>
            </div>
            <div className="button-10">
              <button className="button-11">Start Today</button>
              <button className="button-12">About Me</button>
            </div>
          </div>
        </div>
        <div className="classes">
          <div className="overlap-8">
            <div className="content-27">
              <div className="content-28">
                <div className="title-6">
                  <div className="text-wrapper-15">OUR FITNESS TRAINING</div>
                  <div className="text-wrapper-55">Upcoming Classes</div>
                </div>
                <button className="button-8">
                  <div className="text-wrapper-23">More Class</div>
                </button>
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
            </div>
          </div>
        </div>

        <div className="text-3">
          <div className="FOCUS-ON-YOUR-wrapper">
            <p className="FOCUS-ON-YOUR">
              <p style={{ color: "white" }} className="moving">
                FOCUS ON YOUR&nbsp;&nbsp;{" "}
                <strong style={{ color: "#A1F65E" }}>FITNESS</strong>{" "}
                NOT&nbsp;&nbsp;YOUR LOSS
              </p>
            </p>
          </div>
        </div>
        <div className="about">
          <div className="overlap-7">
            <img className="heading-3" alt="Heading" src={Image2} />
            <div className="content-21">
              <div className="content-22">
                <div className="content-23">
                  <div className="title-5">
                    <div className="text-wrapper-15">ABOUT</div>
                    <p className="respect-your-body-it">
                      Respect Your Body, <br />
                      It’s the Only One You Get
                    </p>
                  </div>
                  <p className="it-is-a-long-3">
                    It Is A Long Established Fact That A Reader Will Be
                    Distracted <br />
                    by The Readable Content Of A Page When Looking At Its
                    Layout.
                    <br />
                    point Of Using Lorem Ipsum Is
                  </p>
                </div>
                <div className="sub-content-5">
                  <div className="element-16">
                    <div className="content-24">
                      <div className="content-25">
                        <div className="text-wrapper-12">Motivation</div>
                        <p className="text-wrapper-54">
                          It Is A Long Established Fact That A Reader Will Be
                          Distracted
                        </p>
                      </div>
                      <img className="image-9" alt="Image" src={Image3} />
                    </div>
                  </div>
                  <div className="element-16">
                    <div className="content-26">
                      <img className="image-10" alt="Image" src={Image4} />
                      <div className="content-25">
                        <div className="text-wrapper-12">Inspire</div>
                        <p className="text-wrapper-54">
                          Will Be Distracted By Readable Content Using Lorem
                          Ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-wrapper">
                <button className="button-7">
                  <div className="text-wrapper-5">Get Started</div>
                </button>
              </div>
            </div>
          </div>
          <div className="typs">
            {/* <img width="347px" height="400px" alt="Image" src={Image16} /> */}
            <div className="content-19">
              <div className="element-13">
                <div className="content-20">
                  <div className="element-14">
                    <div className="overlap-group-6">
                      <div className="text-wrapper-50">01</div>
                    </div>
                  </div>
                  <div className="text-wrapper-51">Fitnes Taining</div>
                </div>
              </div>
              <div className="element-13">
                <div className="content-20">
                  <div className="element-14">
                    <div className="overlap-group-6">
                      <div className="text-wrapper-52">02</div>
                    </div>
                  </div>
                  <div className="text-wrapper-51">Regular Routine</div>
                </div>
              </div>
              <div className="element-13">
                <div className="content-20">
                  <div className="element-14">
                    <div className="overlap-group-6">
                      <div className="text-wrapper-52">03</div>
                    </div>
                  </div>
                  <div className="text-wrapper-51">Deit Maintenance</div>
                </div>
              </div>
              <div className="element-15">
                <img
                  className="google-logo-png"
                  alt="Google logo png"
                  src={GoogleIcon}
                />
                <div className="rating-4">
                  <div className="text-wrapper-53">Review on Google</div>
                  <img className="star-3" alt="Star" src={StarIcons} />
                </div>
              </div>
            </div>
            {/* <img className="line-14" alt="Line" src={Water} /> */}
          </div>
        </div>
        <div className="time-table">
          <div className="time-table-2">
            <div className="heading-2">
              <div
                className="time-table-3"
                style={{
                  color: "#a1f65e",
                  fontFamily: 'Inter-SemiBold", Helvetica',
                  fontSize: "20px",
                  fontWeight: "600",
                  letterSpacing: "8px",
                }}
              >
                TIME TABLE
              </div>
              <div className="text-wrapper-28">Working Schedule</div>
            </div>
            <div className="table">
              <div className="date-2">
                <div className="text-wrapper-48">Sunday</div>
                <div className="text-wrapper-49">Monday</div>
                <div className="text-wrapper-48">Tuesday</div>
                <div className="text-wrapper-48">Wednesday</div>
                <div className="text-wrapper-48">Thursday</div>
                <div className="text-wrapper-48">Friday</div>
                <div className="text-wrapper-48">Saturday</div>
              </div>

              <div className="table-content">
                <table>
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Type</th>
                      <th>Workout</th>
                      <th>Trainer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((value, key) => {
                      return (
                        <tr key={key}>
                          <td>{value.time}</td>
                          <td>{value.type}</td>
                          <td>{value.workout}</td>
                          <td>{value.trainer}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* <div className="table-2">
                <div className="overlap-group-5">
                  <div className="table-content">
                    <div className="shedule">
                      <div className="element-11">
                        <img className="line-9" alt="Line" src="line-25.svg" />
                        <div className="trainer">
                          <img
                            className="image-8"
                            alt="Image"
                            src="image-8.png"
                          />
                          <div className="text-wrapper-37">Floyd Miles</div>
                        </div>
                        <div className="text-wrapper-38">
                          Mixed Circuit Cardio Workout
                        </div>
                        <div className="beginners">Beginners</div>
                        <div className="text-wrapper-39">06.00 - 07.00</div>
                      </div>
                      <div className="element-11">
                        <img className="line-9" alt="Line" src="line-26.svg" />
                        <div className="trainer-2">
                          <img
                            className="image-8"
                            alt="Image"
                            src="image-9.png"
                          />
                          <div className="text-wrapper-37">Robert Cage</div>
                        </div>
                        <p className="cross-fit-pilates">
                          <span className="text-wrapper-40">
                            Cross Fit&nbsp;&nbsp;
                          </span>
                          <span className="text-wrapper-41">/</span>
                          <span className="text-wrapper-40"> Pilates</span>
                        </p>
                        <div className="advanced">Advanced</div>
                        <div className="text-wrapper-39">07.00 - 09.00</div>
                      </div>
                      <div className="element-11">
                        <img className="line-9" alt="Line" src="line-27.svg" />
                        <div className="trainer-3">
                          <img
                            className="image-8"
                            alt="Image"
                            src="image-10.png"
                          />
                          <div className="text-wrapper-37">Donald Grey</div>
                        </div>
                        <div className="text-wrapper-42">Fit Body</div>
                        <div className="intermediate">Intermediate</div>
                        <div className="text-wrapper-39">09.00 - 10.00</div>
                      </div>
                      <div className="element-11">
                        <img className="line-9" alt="Line" src="line-28.svg" />
                        <div className="trainer">
                          <img
                            className="image-8"
                            alt="Image"
                            src="image-11.png"
                          />
                          <div className="text-wrapper-37">Floyd Miles</div>
                        </div>
                        <p className="div-5">
                          <span className="text-wrapper-40">Yoga </span>
                          <span className="text-wrapper-41">/</span>
                          <span className="text-wrapper-40">
                            {" "}
                            Athletic Class
                          </span>
                        </p>
                        <div className="beginners">Beginners</div>
                        <div className="text-wrapper-39">10.00 - 11.00</div>
                      </div>
                      <div className="element-11">
                        <img className="line-9" alt="Line" src="line-29.svg" />
                        <div className="trainer-4">
                          <img
                            className="image-8"
                            alt="Image"
                            src="image-12.png"
                          />
                          <div className="text-wrapper-37">Kimberly Stone</div>
                        </div>
                        <p className="div-5">
                          <span className="text-wrapper-40">Power Club </span>
                          <span className="text-wrapper-41">/</span>
                          <span className="text-wrapper-40"> Boxing</span>
                        </p>
                        <div className="intermediate">Intermediate</div>
                        <div className="text-wrapper-39">04.00 - 06.00</div>
                      </div>
                      <div className="element-12">
                        <img className="line-9" alt="Line" src="line-30.svg" />
                        <div className="trainer-2">
                          <img
                            className="image-8"
                            alt="Image"
                            src="image-13.png"
                          />
                          <div className="text-wrapper-37">Robert Cage</div>
                        </div>
                        <div className="text-wrapper-43">Mixed Circuit</div>
                        <div className="advanced">Advanced</div>
                        <div className="text-wrapper-39">06.00 - 10.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="title-wrapper">
                    <div className="title-4">
                      <div className="text-wrapper-44">Time</div>
                      <div className="text-wrapper-45">Workout</div>
                      <div className="text-wrapper-46">Type</div>
                      <div className="text-wrapper-47">Trainner</div>
                    </div>
                  </div>
                  <div className="frame">
                    <img className="line-10" alt="Line" src="line-31.svg" />
                    <img className="line-11" alt="Line" src="line-32.svg" />
                    <img className="line-12" alt="Line" src="line-33.svg" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="overlap-5">
            <div className="content-15">
              <div className="content-16">
                <h1 className="rev">Reviews</h1>
                <Slideshow />
              </div>
            </div>
          </div>
        </div>
        <div className="team">
          <div className="title-3">
            <div className="text-wrapper-15">OUR TRAINERS</div>
            <p className="text-wrapper-16">We Trained You to Gain</p>
          </div>
          <div className="members">
            <div className="each-member">
              <img width="300px" height="350vh" src={Photo} />
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
        <div className="pricing">
          <div className="content-5">
            <div className="title">
              <div className="text-wrapper-15">OUR PLAN</div>
              <div className="text-wrapper-16">Choose the Program</div>
            </div>
            <div className="price">
              <div className="element-7">
                <div className="content-6">
                  <div className="sub-content-3">
                    <div className="plan-2">
                      <div className="text-wrapper-17">Basic</div>
                      <img className="group" alt="Group" src={Group37} />
                    </div>
                    <div className="div-2">
                      <div className="sub-title">
                        <div className="text-wrapper-18">$25 / month</div>
                        <div className="billed-yearly">
                          <div className="overlap-group-2">
                            <div className="text-wrapper-19">
                              30% Off for Beginners
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-2">
                    <div className="plan-features">
                      <p className="div-3">
                        <span className="text-wrapper-20">
                          1 Day Free Trial <br />
                        </span>
                        <span className="text-wrapper-21"> 20 minutes of </span>
                        <span className="text-wrapper-22">
                          heart-pumping spin <br />
                        </span>
                        <span className="text-wrapper-21">
                          20 minutes of strength training
                          <br />
                        </span>
                        <span className="text-wrapper-22">50 Class</span>
                        <span className="text-wrapper-21">
                          {" "}
                          Times Available <br /> 20 minutes of invigorating yoga
                        </span>
                      </p>
                    </div>
                    <button className="button-4">
                      <div className="text-wrapper-23">Get Started</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="element-7">
                <div className="content-6">
                  <div className="sub-content-3">
                    <div className="plan-3">
                      <div className="text-wrapper-24">Standard</div>
                      <img className="group-2" alt="Group" src={Group38} />
                    </div>
                    <div className="div-2">
                      <div className="sub-title">
                        <div className="text-wrapper-18">$35 / month</div>
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group-3">
                            <div className="text-wrapper-25">Most popular</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-2">
                    <div className="element-week-free-trial-wrapper">
                      <p className="div-3">
                        <span className="text-wrapper-20">
                          2 Week Free Trial <br />
                        </span>
                        <span className="text-wrapper-21"> 30 minutes of </span>
                        <span className="text-wrapper-22">
                          heart-pumping spin <br />
                        </span>
                        <span className="text-wrapper-21">
                          30 minutes of strength training
                          <br />
                        </span>
                        <span className="text-wrapper-22">50 Class</span>
                        <span className="text-wrapper-21">
                          {" "}
                          Times Available <br /> 20 minutes of invigorating yoga
                          <br />
                          Unlimited{" "}
                        </span>
                        <span className="text-wrapper-22">CrossFit</span>
                        <span className="text-wrapper-21">
                          {" "}
                          Classes <br />
                          One Full Month Free <br />
                          First 25 New Members Only
                        </span>
                      </p>
                    </div>
                    <button className="button-5">
                      <div className="text-wrapper-26">Get Started</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="element-7">
                <div className="content-6">
                  <div className="sub-content-3">
                    <div className="plan-4">
                      <div className="text-wrapper-27">Premium</div>
                      <img className="icon" alt="Icon" src={Icon} />
                    </div>
                    <div className="div-2">
                      <div className="sub-title">
                        <div className="text-wrapper-18">$50 / month</div>
                        <div className="billed-yearly">
                          <div className="overlap-group-2">
                            <p className="text-wrapper-19">
                              10% Off for Yoga Class
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div-2">
                    <div className="plan-features">
                      <p className="div-3">
                        <span className="text-wrapper-20">
                          2 Week Free Trial <br />
                        </span>
                        <span className="text-wrapper-21"> 50 minutes of </span>
                        <span className="text-wrapper-22">
                          heart-pumping spin <br />
                        </span>
                        <span className="text-wrapper-21">
                          50 minutes of strength training
                          <br />
                        </span>
                        <span className="text-wrapper-22">60 Class</span>
                        <span className="text-wrapper-21">
                          {" "}
                          Times Available <br /> 50 minutes of invigorating yoga
                        </span>
                      </p>
                    </div>
                    <button className="button-4">
                      <div className="text-wrapper-23">Get Started</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog">
          <div className="blog-2">
            <div className="heading">
              <div className="articles-news">Articles &amp; News</div>
              <img className="img" alt="Blog" src={Blog} />
            </div>
            <div className="content-wrapper">
              <div className="content-3">
                <div className="date">
                  <div className="text-wrapper-10">March 23, 2022</div>
                  <div className="tag">
                    <div className="element-5">
                      <div className="text-wrapper-11">Fitness</div>
                    </div>
                  </div>
                </div>
                <div className="text-2">
                  <p className="text-wrapper-12">
                    The 10 best exercises to do in your park
                  </p>
                  <p className="there-are-many">
                    There Are Many Variations Of Passages Of Lorem Ipsum
                    Available, But The Majority Have Alterationlorem Ipsum Dolor
                    Sit Amet, Consectetur Adipiscing Elit. Habitasse .
                  </p>
                </div>
                <button className="button-2">
                  <div className="text-wrapper-13">Read More</div>
                </button>
              </div>
            </div>
            <div className="content-wrapper">
              <div className="content-3">
                <div className="date">
                  <div className="text-wrapper-10">March 23, 2022</div>
                  <div className="element-wrapper">
                    <div className="element-5">
                      <div className="text-wrapper-11">Health</div>
                    </div>
                  </div>
                </div>
                <div className="text-2">
                  <p className="text-wrapper-12">
                    The 10 best exercises to do in your park
                  </p>
                  <p className="there-are-many">
                    There Are Many Variations Of Passages Of Lorem Ipsum
                    Available, But The Majority Have Alterationlorem Ipsum Dolor
                    Sit Amet, Consectetur Adipiscing Elit. Habitasse .
                  </p>
                </div>
                <button className="button-2">
                  <div className="text-wrapper-13">Read More</div>
                </button>
              </div>
            </div>
            <div className="element-6">
              <div className="content-4">
                <div className="date">
                  <div className="text-wrapper-14">March 23, 2022</div>
                  <div className="tag-2">
                    <div className="element-5">
                      <div className="text-wrapper-11">Nutrition</div>
                    </div>
                  </div>
                </div>
                <div className="text-2">
                  <p className="p">The 10 best exercises to do in your park</p>
                  <p className="there-are-many-2">
                    There Are Many Variations Of Passages Of Lorem Ipsum
                    Available, But The Majority Have Alterationlorem Ipsum Dolor
                    Sit Amet, Consectetur Adipiscing Elit. Habitasse .
                  </p>
                </div>
                <button className="button-3">
                  <div className="text-wrapper-13">Read More</div>
                </button>
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
                      <img src={Group40} width="20%" />
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
                    <ArrowUpCircle color="red" size={48}  />
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
    </div>
  );
}

export default App;
