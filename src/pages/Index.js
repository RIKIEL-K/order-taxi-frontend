import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/main.css';
import '../assets/css/custom.css';
import usermap from '../assets/images/uber_map.jpg';
import AuthService from '../services/Authservice';

function Index() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate(`/user-dashboard/${id}`);
  };

  const handleLogout = () =>{
    AuthService.logout();
    navigate('/login');
  }

  return (
    <>
      <header id="header" className="header sticky-top bg-white shadow-sm">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <h1 className="h4 m-0">Autodrive</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item"><a href="#hero" className="nav-link active">Home</a></li>
              <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
              <li className="nav-item"><a href="#testimonials" className="nav-link">Testimonials</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
              <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            </ul>
          </nav>
            <div className="d-flex gap-2">
            {AuthService.isAuthenticated() && (
              <>
                <button className="btn btn-dark px-3" onClick={handleDashboardClick}>
                  Mon dashboard
                </button>
                <button className="btn btn-outline-danger px-3" onClick={handleLogout}>
                  Déconnexion
                </button>
              </>
            )}
          </div>

        </div>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section py-5 bg-light">
          <div className="container">
            <div className="row align-items-center gy-4">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center px-5">
                <h1 className="fw-bold display-5">Allez où vous le souhaitez</h1>
                <div className="mt-4 mb-3 d-flex gap-3">
                  <button className="tab-button active"><i className="bi bi-car-front me-1"></i> Courses</button>
                </div>
                <form>
                  <input type="text" className="form-control input-box mb-3" placeholder="Lieu de prise en charge" />
                  <input type="text" className="form-control input-box mb-3" placeholder="Destination" />
                  <button type="submit" className="btn btn-black">Voir les prix</button>
                </form>
                <div className="mt-4">
                  <small className="text-muted">Connectez-vous pour consulter votre activité récente</small>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <img src={usermap} className="img-fluid animated w-100" alt="map" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services section py-5">
          <div className="container section-title text-center mb-5">
            <span>Services</span>
            <h2>Services</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4">
                <div className="service-item text-center">
                  <div className="icon mb-3"><i className="bi bi-activity fs-1"></i></div>
                  <h4>Commander un taxi</h4>
                  <p>Réservez un taxi rapidement et simplement où que vous soyez.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-item text-center">
                  <div className="icon mb-3"><i className="bi bi-easel fs-1"></i></div>
                  <h4>Monétiser ses services</h4>
                  <p>Offrez vos services de transport à nos utilisateurs en toute sécurité.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-item text-center">
                  <div className="icon mb-3"><i className="bi bi-chat-square-text fs-1"></i></div>
                  <h4>Support 24/7</h4>
                  <p>Notre équipe est disponible pour vous aider à tout moment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials section bg-light py-5">
          <div className="container section-title text-center mb-5">
            <span>Testimonials</span>
            <h2>Testimonials</h2>
            <p>Ce que nos utilisateurs disent de nous</p>
          </div>
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4">
                <div className="testimonial-item">
                  <p><i className="bi bi-quote quote-icon-left"></i> Service rapide et fiable. Je recommande fortement ! <i className="bi bi-quote quote-icon-right"></i></p>
                  <img src="/assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo & Founder</h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial-item">
                  <p><i className="bi bi-quote quote-icon-left"></i> Application intuitive et chauffeurs très pros. <i className="bi bi-quote quote-icon-right"></i></p>
                  <img src="/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="testimonial-item">
                  <p><i className="bi bi-quote quote-icon-left"></i> Très pratique pour mes déplacements quotidiens. <i className="bi bi-quote quote-icon-right"></i></p>
                  <img src="/assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact section py-5">
          <div className="container section-title text-center mb-5">
            <span>Contact</span>
            <h2>Nous contacter</h2>
            <p>Envoyez-nous un message, nous vous répondrons rapidement.</p>
          </div>
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5">
                <div className="info-wrap">
                  <div className="info-item d-flex mb-3">
                    <i className="bi bi-geo-alt flex-shrink-0 me-3"></i>
                    <div>
                      <h3>Adresse</h3>
                      <p>123 rue Principale, Montréal, QC</p>
                    </div>
                  </div>
                  <div className="info-item d-flex mb-3">
                    <i className="bi bi-telephone flex-shrink-0 me-3"></i>
                    <div>
                      <h3>Téléphone</h3>
                      <p>+1 514-555-1234</p>
                    </div>
                  </div>
                  <div className="info-item d-flex mb-3">
                    <i className="bi bi-envelope flex-shrink-0 me-3"></i>
                    <div>
                      <h3>Email</h3>
                      <p>info@autodrive.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <form className="php-email-form">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <label htmlFor="name-field" className="pb-2">Votre nom</label>
                      <input type="text" className="form-control" id="name-field" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email-field" className="pb-2">Votre email</label>
                      <input type="email" className="form-control" id="email-field" required />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="subject-field" className="pb-2">Sujet</label>
                      <input type="text" className="form-control" id="subject-field" required />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="message-field" className="pb-2">Message</label>
                      <textarea className="form-control" rows="6" id="message-field" required></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-black">Envoyer</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - last section */}
        <section id="about" className="about section py-5">
          <div className="container section-title text-center mb-5">
            <span>About Us</span>
            <h2>About</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6">
                <img src="/assets/img/about.png" className="img-fluid" alt="about" />
              </div>
              <div className="col-lg-6">
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check2-all"></i> Dolor in reprehenderit in voluptate trideta storacalaperda.</li>
                </ul>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer bg-dark text-white py-3">
        <div className="container text-center">
          <p>© <strong className="px-1 sitename">eNno</strong> All Rights Reserved</p>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/" className="text-white">BootstrapMade</a> Distributed by <a href="https://themewagon.com" className="text-white">ThemeWagon</a>
          </div>
        </div>
      </footer>

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
      <div id="preloader"></div>
    </>
  );
}

export default Index;
