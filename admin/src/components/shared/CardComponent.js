import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const CardComponent = ({title, body, link}) => {
  return <Col lg={3} md={4} sm={6} xs={12}>
    <Link to={link}>
      <Card className="mt-3">
        <Card.Header className="text-center bg-secondary text-white">{title}</Card.Header>
        <Card.Body>
          <Card.Text className="text-dark">{body}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  </Col> 
}

export default CardComponent