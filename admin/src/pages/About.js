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
        <CardComponent 
          link="/admin/endpoints" 
          title="Endpoints" 
          body="Tous les endpoints"
        />
        <CardComponent 
          link="/admin/roles" 
          title="Role" 
          body="Tous les roles"
        />
        <CardComponent 
          link="/admin/methods" 
          title="Méthodes" 
          body="Toutes les methodes"
        />
        <CardComponent 
          link="/admin/perms" 
          title="Permissions" 
          body="Toutes les permissions"
        />
      </Row>
    </Container>
  </div>
}

export default About