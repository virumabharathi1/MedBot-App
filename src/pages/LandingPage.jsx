import React from 'react';
import { Container, Row, Col, Button, Card, Carousel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cover from '../assets/Cover.jpg';
import { motion } from 'framer-motion';

// CSS for the component
const styles = `
  :root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --light-bg: #f8f9fa;
    --dark-bg: #343a40;
    --text-color-light: #fefefe;
    --text-color-dark: #333;
    --accent-blue: #0056b3;
    --shadow-light: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  body {
    font-family: 'Segoe UI', Arial, sans-serif;
    line-height: 1.6;
    color: var(--text-color-dark);
  }

  .section-spacing {
    padding: 80px 0;
  }

  /* Hero Section */
  .hero-section {
    color: var(--text-color-light);
    text-align: center;
    position: relative;
    overflow: hidden;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    padding: 20px;
  }

  .hero-content .display-4 {
    font-weight: 700;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  }

  .hero-content .lead {
    font-size: 1.5rem;
    margin-top: 20px;
  }

  .hero-buttons .btn {
    margin: 10px;
    min-width: 180px;
    font-weight: 600;
    border-radius: 50px;
    padding: 12px 30px;
    transition: all 0.3s ease-in-out;
  }

  .hero-buttons .btn-light {
    color: var(--primary-color);
  }

  .hero-buttons .btn-outline-light:hover {
    background-color: var(--primary-color);
    color: var(--text-color-light);
    border-color: var(--primary-color);
  }

  /* Card Styles */
  .card {
    border: none;
    border-radius: 15px;
    box-shadow: var(--shadow-light);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    overflow: hidden;
  }

  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  .card-service .card-body {
    padding: 2.5rem 1.5rem;
  }
  
  .card-service .card-title {
    color: var(--primary-color);
  }

  .card-team .card-img-top {
    height: 250px;
    object-fit: cover;
    object-position: top;
  }

  /* Carousel Styles */
  .carousel-item {
    padding: 30px;
  }

  .carousel-item blockquote p {
    font-size: 1.4rem;
    font-style: italic;
    color: var(--secondary-color);
  }

  .carousel-item blockquote .blockquote-footer {
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: 600;
  }

  .carousel-control-prev, .carousel-control-next {
    width: 5%;
    opacity: 0.8;
  }
  
  .carousel-control-prev-icon, .carousel-control-next-icon {
    filter: brightness(0) invert(1);
  }

  /* Contact Section */
  .contact-info-card {
    background-color: var(--accent-blue);
    color: var(--text-color-light);
  }

  .contact-info-card h4 {
    color: var(--text-color-light);
  }

  .contact-form .form-label {
    font-weight: 600;
    color: var(--secondary-color);
  }

  .form-control:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
  }

  /* Footer */
  .footer {
    background: var(--dark-bg);
    color: var(--text-color-light);
    padding: 30px 0;
  }
`;

const LandingPage = () => {
  const teamMembers = [
    { name: 'Dr. Anya Sharma', specialization: 'Child Wellness', image: 'https://media.istockphoto.com/id/1203995945/photo/portrait-of-mature-male-doctor-wearing-white-coat-standing-in-hospital-corridor.webp?s=2048x2048&w=is&k=20&c=7gwP31L-qatALbZNEjSPnkshGN_xxhW8kYpos4HXSNU=' },
    { name: 'Dr. David Chen', specialization: 'Adolescent Medicine', image: 'https://plus.unsplash.com/premium_photo-1664475543697-229156438e1e?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0' },
    { name: 'Dr. Maria Rodriguez', specialization: 'Immunology & Allergies', image: 'https://media.istockphoto.com/id/1200980392/photo/medical-concept-of-asian-beautiful-female-doctor-in-white-coat-with-stethoscope-waist-up.webp?s=2048x2048&w=is&k=20&c=fvE1Owrii-FY8kdKNbFHtrssigwcOR8WXJYtIWq18tQ=' },
    { name: 'Dr. Ben Carter', specialization: 'Pediatric Development', image: 'https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0' },
  ];

  return (
    <div>
      <style>{styles}</style>

      {/* ===== Hero Section ===== */}
      <section className="hero-section" style={{ backgroundImage: `url(${Cover})` }}>
        <Container className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="display-4">Compassionate Pediatric Care</h1>
            <p className="lead">Your child's health is our top priority. We're here to help them grow strong and healthy.</p>
            <div className="hero-buttons mt-4">
              <Button variant="light" size="lg">Schedule Appointment 🗓️</Button>
              <Button variant="outline-light" size="lg">Meet Our Team 🩺</Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <hr className="my-0" />

      {/* ===== Services Section ===== */}
      <section className="section-spacing bg-light">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Our Comprehensive Services</h2>
          <Row className="g-4">
            {['Well Visits 👶', 'Sick Visits 🤒', 'Nutrition Counseling 🍎', 'ADHD Management 🧠'].map((service, idx) => (
              <Col md={3} key={idx} className="d-flex">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="w-100"
                >
                  <Card className="h-100 text-center card-service">
                    <Card.Body>
                      <Card.Title className="h5 fw-bold">{service}</Card.Title>
                      <Card.Text className="text-muted mt-3">
                        We offer high-quality, evidence-based care tailored to your child's specific needs.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <hr className="my-0" />

      {/* ===== Team Section ===== */}
      <section className="section-spacing">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Meet Our Caring Team</h2>
          <Row className="g-4">
            {teamMembers.map((member, idx) => (
              <Col md={3} key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="h-100 text-center card-team">
                    <Card.Img variant="top" src={member.image} alt={member.name} />
                    <Card.Body>
                      <Card.Title className="h5 fw-bold">{member.name}</Card.Title>
                      <Card.Text className="text-muted">{member.specialization}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <hr className="my-0" />

      {/* ===== Testimonials Section ===== */}
      <section className="section-spacing bg-light">
        <Container>
          <h2 className="text-center mb-5 fw-bold">What Our Patients Say</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Carousel indicators={true}>
              <Carousel.Item>
                <blockquote className="blockquote text-center">
                  <p className="mb-0">"Excellent care and very friendly staff! Our family feels truly cared for here."</p>
                  <footer className="blockquote-footer mt-2">Jane D.</footer>
                </blockquote>
              </Carousel.Item>
              <Carousel.Item>
                <blockquote className="blockquote text-center">
                  <p className="mb-0">"We highly recommend this clinic for all your children's health needs. Professional and compassionate!"</p>
                  <footer className="blockquote-footer mt-2">Mark S.</footer>
                </blockquote>
              </Carousel.Item>
              <Carousel.Item>
                <blockquote className="blockquote text-center">
                  <p className="mb-0">"The doctors are so caring and they really take the time to listen to all our concerns."</p>
                  <footer className="blockquote-footer mt-2">Sarah K.</footer>
                </blockquote>
              </Carousel.Item>
            </Carousel>
          </motion.div>
        </Container>
      </section>

      <hr className="my-0" />

      {/* ===== Contact Section ===== */}
      <section className="section-spacing">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Get in Touch</h2>
          <Row className="g-4">
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-4 rounded-3 h-100 contact-info-card shadow-sm"
              >
                {/* Map and info */}
                <h4 className="mb-3">Our Location</h4>
                <p className="text-center text-light">123 Pediatric Way</p>
                <iframe title="clinic-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50665692.62573365!2d175.136724!3d39.188621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87403bd8158d164b%3A0xc80aee73a8ff6ec4!2sAspen%20Valley%20Pediatrics!5e0!3m2!1sen!2sin!4v1758619536113!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0, borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
              </motion.div>
            </Col>
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-4 bg-white rounded-3 shadow-sm h-100"
              >
                {/* Contact form */}
                <h4 className="mb-3">Send Us a Message</h4>
                <Form> <Row className="g-3"> <Col sm={6}> <Form.Group controlId="formName"> <Form.Label>Name</Form.Label> <Form.Control type="text" placeholder="Your name" /> </Form.Group> </Col> <Col sm={6}> <Form.Group controlId="formEmail"> <Form.Label>Email</Form.Label> <Form.Control type="email" placeholder="Your email" /> </Form.Group> </Col> </Row> <Form.Group className="mt-3" controlId="formPhone"> <Form.Label>Phone Number</Form.Label> <Form.Control type="tel" placeholder="Your phone number" /> </Form.Group> <Form.Group className="mt-3" controlId="formMessage"> <Form.Label>Message</Form.Label> <Form.Control as="textarea" rows={4} placeholder="How can we help you?" /> </Form.Group> <Button variant="primary" type="submit" className="w-100 mt-4"> Send Message 👋 </Button> </Form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="footer text-center">
        <Container>
          <p className="mb-0">© 2025 Pediatrics. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default LandingPage;