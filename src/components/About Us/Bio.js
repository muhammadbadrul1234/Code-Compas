import React from 'react';
import Box from '@mui/material/Box';
import QureshiSir  from './images/QureshiSir.jpeg';
import Badrul  from './images/Badrul.jpeg';
import Nafisa from './images/Nafisa.jpeg';
import HomeNavbar from "../../components/LandingPage/Components/Navbar";
import UserNavbar from '../Navbar/Navbar';




const Bio = () => {
    return (
      <>
        <UserNavbar />
        <div className="container-emp-profile">
          <form method="">
            <div className="row" align="center">
              <div className="col-md-4">
                <div className="profile-img">
                  <h1>About Our Supervisor</h1>
                  <br />
                  <img className="photo" src={QureshiSir} alt="bio" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h2>Arafat Habib Quraishi</h2>
                  <p>Lecturer</p>
                  <p className="profile-rating mt-3 mb-5">
                    Advisor, Leading University Computer Club (LUCC)
                    <br />
                    Computer Science & Engineering
                    <br />
                    Leading University, Sylhet.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" align="center">
              {/*left side url */}
              <div className="col-md-4">
                <div className="profile-work">
                  <p>Contact</p>
                  <a href="https://www.facebook.com/arafat.quraishi?mibextid=ZbWKwL">
                    Facebook
                  </a>
                  <br />
                  <a href="https://www.linkedin.com/in/arafat-habib-quraishi-b0a5701b4/">
                    Linkedin
                  </a>
                </div>
              </div>
              <br />
              {/*right side toggle*/}
              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email: arafat@lus.ac.bd</label>
                        <p></p>
                        <label>Contact: +8801914487146</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
  
          </form>
        </div>
        <br />
        <br />

        {/*======================================================= */}

        <div className="container-emp-profile">
          <form method="">
            <div className="row" align="center">
              <div className="col-md-4">
                <div className="profile-img">
                  <br />
                  <h1>About Our Developers</h1>
                  <br />
                  <img className="photo" src={Badrul} alt="bio" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h2>Badrul Alom Tawsyat</h2>
                  <p>
                    Hello! Interestingly, I am Muhammad Badrul. Finding creative
                    solutions to problems is something I have always enjoyed. As
                    a kid I loved tinkering with things that were broken,
                    figuring out how they worked, and fixing them again. When I
                    finished high school, I knew exactly what I wanted my career
                    to be. I got introduced to competitive programming in my 2nd
                    year at Leading University, where I am completing my
                    Bachelors in Computer Science and Engineering (2020-Now)
                    with 79.3% aggregate. I'm currently working as a Freelance
                    Software Engineer at Fiverr, and Upwork. My responsibilty
                    includes Java/C++/C#/C/Python based projects as well as
                    development & testing for a variety of clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" align="center">
              {/*left side url */}
              <div className="col-md-4">
                <div className="profile-work">
                  <p>Contact</p>
                  <a href="https://www.facebook.com/muhammadbadrul1234?mibextid=ZbWKwL">
                    Facebook
                  </a>
                  <br />
                  <a href="https://www.linkedin.com/in/muhammadbadrul/">
                    Linkedin
                  </a>
                </div>
              </div>
              <br />
              {/*right side toggle*/}
              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email: cse_2012020216@lus.ac.bd</label>
                        <p></p>
                        <label>Contact: +8801727819354</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
           
          </form>
        </div>
        <br />
        <br />

        {/*============================================================= */}

        <div className="container-emp-profile">
          <form method="">
            <div className="row" align="center">
              <div className="col-md-4">
                <div className="profile-img">
                  <img className="photo" src={Nafisa} alt="bio" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h2>Nafisa Tasmiya</h2>
                  <p>
                    I'm a student and I have a strong academic foundation and
                    hands-on experience
                    <br /> in programming language like C, C++, Python, Java,
                    HTML, CSS, Flutter, MERN.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" align="center">
              {/*left side url */}
              <div className="col-md-4">
                <div className="profile-work">
                  <p>Contact</p>
                  <a href="https://www.facebook.com/nafs.tasmi?mibextid=ZbWKwL">
                    Facebook
                  </a>
                  <br />
                  <a href="https://www.linkedin.com/in/nafisa-tasmiya/">
                    Linkedin
                  </a>
                </div>
              </div>
              <br />
              {/*right side toggle*/}
              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email: cse_2012020388@lus.ac.bd</label>
                        <p></p>
                        <label>Contact: +8801724700964</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
           
          </form>
        </div>
        <br />
        <br />
      </>
    );
}

export default Bio