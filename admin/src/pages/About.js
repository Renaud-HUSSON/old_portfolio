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
          link="/admin/users" 
          title="Users" 
          body="Tous les utilisateurs"
        />
        <CardComponent 
          link="/admin/perms" 
          title="Perms" 
          body="Toutes les permissions sur les endpoints, suivant la méthode HTTP et le role nécessaire"
        />
        <CardComponent 
          link="/admin/endpoints" 
          title="Endpoints" 
          body="Tous les endpoints"
        />
        <CardComponent 
          link="/admin/methods" 
          title="Methods" 
          body="Toutes les méthodes HTTP utilisés par mon API"
        />
        <CardComponent 
          link="/admin/roles" 
          title="Rôles" 
          body="Tous les rôles que peuvent avoir les utilisateurs"
        />
      </Row>
    </Container>
  </div>
}

export default About