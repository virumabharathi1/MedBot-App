import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HospitalLandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="text-center text-white d-flex align-items-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", 
          backgroundSize: 'cover', 
          height: '100vh' 
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to CarePlus Hospital</h1>
          <p className="lead mb-4">Your health, our priority. Experienced doctors. State-of-the-art facilities.</p>
          <a href="#services" className="btn btn-primary btn-lg">Explore Services</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Services</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <i className="fas fa-stethoscope fa-3x mb-3 text-primary"></i>
              <h5>General Checkup</h5>
              <p>Comprehensive health checkups for all age groups with modern diagnostic equipment.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fas fa-syringe fa-3x mb-3 text-primary"></i>
              <h5>Vaccinations</h5>
              <p>Safe and effective immunizations for children and adults, preventing common diseases.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fas fa-heartbeat fa-3x mb-3 text-primary"></i>
              <h5>Cardiology</h5>
              <p>Advanced heart care services with experienced cardiologists and latest technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <img 
                src="https://plus.unsplash.com/premium_photo-1681843129112-f7d11a2f17e3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Hospital" 
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2>About CarePlus Hospital</h2>
              <p>CarePlus Hospital has been providing quality healthcare for over 20 years. Our team of dedicated doctors, nurses, and support staff ensure that each patient receives the best possible care.</p>
              <a href="#contact" className="btn btn-outline-primary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Get in Touch</h2>
          <p>Email: info@careplushospital.com | Phone: +91 12345 67890</p>
          <p>Address: 123 Health Street, Wellness City, India</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-center">
        <div className="container">
          <p className="mb-0">&copy; 2025 CarePlus Hospital. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
