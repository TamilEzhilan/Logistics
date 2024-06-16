import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Jumbotron from '../components/Jumbotron';
import Card from '../components/Card';
import './Home.css';

// Sample images (replace with actual URLs)
import Image1 from '../assets/image1.jpg';
import Image2 from '../assets/image2.jpg';
import Image3 from '../assets/image3.jpg';

const Home = () => {
    return (
        <div>
            <Carousel /> 
            
            <Jumbotron />

            <section className="cards">
                <Card
                    title="Our Services"
                    content="We offer a comprehensive range of marine logistics services including transportation, freight forwarding, and warehousing."
                />
                <Card
                    title="Why Choose Us"
                    content="With years of experience, we ensure reliability, efficiency, and excellence in every service we provide."
                />
                <Card
                    title="Customer Satisfaction"
                    content="Our commitment to customer satisfaction is our top priority. We tailor our services to meet your specific needs."
                />
            </section>

            <section className="about-content abt-content">
                <h2>About Marine Logistics</h2>
                <p>
                    Marine Logistics is a leading provider of integrated marine transportation and logistics services. We specialize in handling complex logistics challenges for a wide range of industries worldwide.
                </p>
                <p>
                    Our team of experts ensures seamless operations from start to finish, optimizing supply chain efficiency and delivering superior service quality.
                </p>
            </section>

            <section className="services">
                <h2>Explore Our Services</h2>
                <div className="service-item">
                    <h3>Freight Forwarding</h3>
                    <p>
                        Our comprehensive freight forwarding services ensure efficient transportation of goods across the globe.
                    </p>
                </div>
                <div className="service-item">
                    <h3>Cargo Handling</h3>
                    <p>
                        We provide secure and reliable cargo handling solutions tailored to meet your specific needs.
                    </p>
                </div>
                <div className="service-item">
                    <h3>Warehousing</h3>
                    <p>
                        Our advanced warehousing facilities offer storage and inventory management solutions for your goods.
                    </p>
                </div>
            </section>

            <section className="contact-us">
                <h2>Contact Us</h2>
                <p>
                    Ready to streamline your logistics operations? Contact us today to discuss how we can help you achieve your business goals.
                </p>
                <Link to="/contact-us" className="button">Get in Touch</Link>
            </section>
        </div>
    );
};

export default Home;
