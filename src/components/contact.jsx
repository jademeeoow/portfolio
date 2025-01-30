
import '../assets/styles/contact.css';


import emailIcon from '../assets/images/envelope.svg';
import phoneIcon from '../assets/images/telephone.svg';
import locationIcon from '../assets/images/location.svg';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-message">
        If ganahan ka mag chat chat sa akua testinga ra ba ang mga methods below:
      </p>
      <div className="contact-info">
        <div className="contact-item">
          <img src={emailIcon} alt="Email Icon" className="contact-icon" />
          <span>qb202100947@wmsu.edu.ph</span>
        </div>
        <div className="contact-item">
          <img src={phoneIcon} alt="Phone Icon" className="contact-icon" />
          <span>+639158423931</span>
        </div>
        <div className="contact-item">
          <img src={locationIcon} alt="Location Icon" className="contact-icon" />
          <span>Guiwan Zamboanga City</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
