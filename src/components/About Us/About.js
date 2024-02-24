import React from 'react';
import Sidenav from '../AdminPage/Home Page/ccomponents/Sidenav';
import CNavbar from '../AdminPage/Home Page/ccomponents/CNavbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HomeNavbar from "../../components/LandingPage/Components/Navbar";



export default function About() {
    return (
        <>
            <HomeNavbar/>
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
            
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>About</h1>
            <Typography>
<b>About Us</b><br /><br />

Welcome to Code-Compass, your ultimate destination for learning and unleashing your creativity! We are a passionate team of educators, creators, and tech enthusiasts dedicated to providing you with a unique learning experience and an avenue to showcase your talents through exciting contests.<br /><br />

<b>Our Mission</b><br /><br />

Our mission is to empower individuals from all walks of life to acquire new skills, expand their knowledge horizons, and embrace their creative potential. We believe in the transformative power of education and the thrill of friendly competition. Our platform is designed to foster personal growth, encourage collaboration, and celebrate the diverse talents that make each individual truly exceptional..<br /><br />

<b>What We Offer</b><br /><br />

- <b>Courses:</b> Immerse yourself in a world of learning with our meticulously crafted courses. Whether you're a beginner or an expert, our diverse range of courses covers topics, ensuring there's something for everyone. Learn at your own pace, engage with experts, and earn certificates that showcase your accomplishments..<br /><br />

- <b>Contests:</b> Unleash your creativity and challenge your skills by participating in our thrilling contests. Our contests are designed to inspire innovation, test your abilities, and offer exciting rewards. Join a community of like-minded individuals who share your passion for excellence..<br /><br />

<b>Why Choose Us</b><br /><br />

- <b>Expertise:</b> Our team comprises experienced educators and professionals who are experts in their fields. You'll be learning from the best, gaining insights that can drive your personal and professional growth..<br />

- <b>Interactive Learning:</b> Our courses are designed to be engaging and interactive. Dive into real-world projects, collaborate with fellow learners, and apply your knowledge in practical ways..<br />

- <b>Innovation and Creativity:</b> Our contests are a platform for you to showcase your creativity and innovative ideas. We believe that every individual has a unique perspective to offer, and we're excited to see your talents shine..<br />

- <b>Community:</b> Join a vibrant community of learners, creators, and mentors. Connect, network, and collaborate with individuals who share your interests and aspirations..<br />

- <b>Flexibility:</b> Our platform is designed to fit into your busy lifestyle. Learn and participate on your own schedule, at your own pace..<br /><br /><br />

<b>Get Involved</b><br /><br />

Whether you're here to embark on a learning journey, participate in contests, or both, Code-Compass welcomes you with open arms. Join us in creating a community driven by knowledge, creativity, and passion. Let's learn, compete, and grow together..<br /><br />

<i>Thank you for being a part of our journey!!!</i>

                </Typography>    
            </Box>
            </Box>
        </>
    );
}