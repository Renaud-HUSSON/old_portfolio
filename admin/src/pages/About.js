import { Container, Row } from "react-bootstrap"
import CardComponent from "../components/shared/CardComponent"

const About = () => {
  return <div>
    <Container fluid>
      <Row>
        <CardComponent 
          link="/admin/projets" 
          title="Projets" 
          body="Tous mes projets"
        />
        <CardComponent 
          link="/admin/competences" 
          title="Compétences" 
          body="Toutes mes compétences"
        />
        <CardComponent 
          link="/admin/parcours" 
          title="Parcours" 
          body="Tous mes parcours"
        />
        <CardComponent 
          link="/admin/experiences" 
          title="Expériences" 
          body="Toutes mes expériences"
        />
        <CardComponent 
          link="/admin/messages" 
          title="Messages" 
          body="Tous les messages"
        />
      </Row>
    </Container>
  </div>
}

export default About