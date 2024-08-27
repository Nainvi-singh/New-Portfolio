import { Container } from "react-bootstrap";
import project1 from "../assests/img/project1.png"
import project2 from "../assests/img/project2.png"
import gmail1 from "../assests/img/gmail1.png"
import gmail2 from "../assests/img/gmail2.png"
import gmail3 from "../assests/img/gmail3.png"
export const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <section id="projects" className="projects sec-pad border border-1">
          <div className="main-container">
            <h2 className="heading">
              <span className="heading_main">PROJECTS</span>
              <span className="heading_sub">
                Here you will find some of the personal projects that I
                created with each project containing its GitHub or Live link.
              </span>
            </h2>


            <div className="content">
              <div className="projects__row row">
                <div className="projects__row-img-cont col">
                  <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={gmail1} className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={gmail2} className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={gmail3} className="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="projects__row-content col">
                  <h3 className="projects__row-content-title">Email Management System</h3>
                  <p className="projects__row-content-desc">
                  Developed an Email Management System inspired by Gmail, focusing on core features such as 
                  user authentication and email management. As part of a <b>MERN</b> project, 
                  it uses MongoDB to store user information and emails securely. Users can register, log in, 
                  and send emails, with access restricted to authorized users only. The system also supports 
                  viewing, managing, and deleting emails.
                  </p>
                  <a className="btn btn-light" href="https://github.com/Nainvi-singh/Gmail_Clone" >GitHub Link</a>
                </div>
              </div>
              <div className="projects__row row">
                <div className="projects__row-img-cont col">
                  <img src={project1} alt="Software Screenshot" className="projects__row-img" loading="lazy" />
                </div>
                <div className="projects__row-content col">
                  <h3 className="projects__row-content-title">Tiny Tales</h3>
                  <p className="projects__row-content-desc">
                    The objective of this project is to demonstrate how to implement Add to Cart
                    functionality and dynamically update cart contents using <b>React</b>. It showcases managing state,
                    displaying products, and calculating the total price in a shopping app for children's short story books.
                  </p>
                  <a className="btn btn-light" href="https://github.com/Nainvi-singh/Tiny-Tales">GitHub Link</a>
                </div>
              </div>

              <div className="projects__row row">
                <div className="projects__row-img-cont col">
                  <img src={project2} alt="Software Screenshot" className="projects__row-img" loading="lazy" />
                </div>
                <div className="projects__row-content col">
                  <h3 className="projects__row-content-title">Music Store</h3>
                  <p className="projects__row-content-desc">
                    The objective of the MusicStore application is to demonstrate how to create a basic
                    UI using <b>React</b> and fetch data from the iTunes API with axios to display music.
                    It highlights integrating external APIs and dynamically rendering content in a React application.
                  </p>
                  <a className="btn btn-light" href="https://illustrious-bunny-5d5801.netlify.app/" >View</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>

    </section>
  )
}