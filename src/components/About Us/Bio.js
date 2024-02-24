import React from 'react';
import Box from '@mui/material/Box';
import QureshiSir  from './images/QureshiSir.jpeg';
import Badrul  from './images/Badrul.jpeg';
import Nafisa from './images/Nafisa.jpeg';
import HomeNavbar from "../../components/LandingPage/Components/Navbar";




const Bio = () => {
    return (
        <>
            <HomeNavbar />
             <div className="container-emp-profile">
                <form method="">
                    <div className="row" align="center">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <h1>About Our Supervisor</h1>
                                <br/>
                            <img className="photo" src={QureshiSir} alt="bio" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h2>Arafat Habib Quraishi</h2>
                                <p>Lecturer</p>
                                <p className="profile-rating mt-3 mb-5">Advisor, Leading University Computer Club (LUCC)<br />Computer Science & Engineering<br />Leading University, Sylhet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row" align="center">
                        {/*left side url */}
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>Contact</p>
                                <a href="https://www.facebook.com/arafat.quraishi?mibextid=ZbWKwL">Facebook</a><br/>
                                <a href="https://www.linkedin.com/in/arafat-habib-quraishi-b0a5701b4/">Linkedin</a>
                            </div>
                        </div>
                        <br/>
                        {/*right side toggle*/}
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                    <br/>
                    <div className="col-md-2" align="center">
                            <input type="submit" className="profite-edit-button" name="btnAddMore" value="Edit Profile" />
                    </div>
                </form>
             </div>
             <br/>
             <br/>

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
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry. Lorem Ipsum has been the industry's standard dummy<br/> text ever since the 1500s, when an unknown printer took a galley<br/> of type and scrambled it to make a type specimen book. It has<br/> survived not only five centuries, but also the leap into electronic<br/> typesetting, remaining essentially unchanged. It was popularised in<br/> the 1960s with the release of Letraset sheets containing Lorem<br/> Ipsum passages, and more recently with desktop publishing <br/>software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row" align="center">
                        {/*left side url */}
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>Contact</p>
                                <a href="https://www.facebook.com/muhammadbadrul1234?mibextid=ZbWKwL">Facebook</a><br/>
                                <a href="https://www.linkedin.com/in/muhammadbadrul/">Linkedin</a>
                            </div>
                        </div>
                        <br/>
                        {/*right side toggle*/}
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                    <br/>
                    <div className="col-md-2" align="center">
                            <input type="submit" className="profite-edit-button" name="btnAddMore" value="Edit Profile" />
                    </div>
                </form>
             </div>
             <br/>
             <br/>

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
                                <p>I'm a student and I have a strong academic foundation and hands-on experience<br/> in programming language like C, C++, Python, Java, HTML, CSS, Flutter, MERN.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row" align="center">
                        {/*left side url */}
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>Contact</p>
                                <a href="https://www.facebook.com/nafs.tasmi?mibextid=ZbWKwL">Facebook</a><br/>
                                <a href="https://www.linkedin.com/in/nafisa-tasmiya/">Linkedin</a>
                            </div>
                        </div>
                        <br/>
                        {/*right side toggle*/}
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                    <br/>
                    <div className="col-md-2" align="center">
                            <input type="submit" className="profite-edit-button" name="btnAddMore" value="Edit Profile" />
                    </div>
                </form>
             </div>
             <br/>
             <br/>
        </>
    );
}

export default Bio