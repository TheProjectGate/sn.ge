import React from 'react';
import '../../assets/styles/ContactPage.scss';

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us for a Consultation</h1>
      <div className="contact-container">
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-map">
          {/* Replace with your Google Maps embed code */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.825422239834!2d44.782830815435!3d41.71513797923458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d24f3d7e0c3%3A0x2f2d7b0b9f6b1b0!2sTbilisi!5e0!3m2!1sen!2sge!4v1678886282093!5m2!1sen!2sge"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
