import { Container} from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  
  return (
    <section className="skill" id='skills' >
      <Container>
      <div className="about__content-skills border border-1"> 
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
            <h3 className="skills__skill">Java</h3>
              <h3 className="skills__skill">HTML</h3>
              <h3 className="skills__skill">CSS</h3>
              <h3 className="skills__skill">Bootstrap</h3>
              <h3 className="skills__skill">JavaScript</h3>
              <h3 className="skills__skill">React</h3>
              <h3 className="skills__skill">Node js</h3>
              <h3 className="skills__skill">Mongodb</h3>
              <h3 className="skills__skill">MySql</h3>
              <h3 className="skills__skill">GIT</h3>
              <h3 className="skills__skill">Github</h3>
              <h3 className="skills__skill">Responsive Design</h3>
              <h3 className="skills__skill">Postman</h3>
            </div>
          </div>
      </Container>

    </section>
  )

}
