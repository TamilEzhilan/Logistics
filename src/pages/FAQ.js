import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <div className="faq-page">
            <h1>Frequently Asked Questions</h1>

            <div className="faq-list">
                <div className="faq-item">
                    <input type="checkbox" id="faq1" className="faq-toggle" />
                    <label htmlFor="faq1" className="faq-question">What shipping services do you offer?</label>
                    <div className="faq-answer">
                        We offer a range of shipping services including freight forwarding, cargo handling, and warehousing solutions.
                    </div>
                </div>

                <div className="faq-item">
                    <input type="checkbox" id="faq2" className="faq-toggle" />
                    <label htmlFor="faq2" className="faq-question">How can I track my shipment?</label>
                    <div className="faq-answer">
                        You can track your shipment by entering your tracking number on our website's tracking page.
                    </div>
                </div>

                <div className="faq-item">
                    <input type="checkbox" id="faq3" className="faq-toggle" />
                    <label htmlFor="faq3" className="faq-question">What are your customer support hours?</label>
                    <div className="faq-answer">
                        Our customer support team is available 24/7 to assist you with any queries or concerns.
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FAQ;
