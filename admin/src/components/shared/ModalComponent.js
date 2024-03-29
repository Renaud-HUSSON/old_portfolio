import { Children, cloneElement } from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalComponent = ({children, header}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return <>
    <Button className="m-2" variant="dark" onClick={handleShow}>
      Ajouter
    </Button>

    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{header[0].toUpperCase().concat(header.slice(1).toLowerCase())}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {
          Children.map(children, children => {
            return cloneElement(children, {handleClose: handleClose})
          })
        }
      </Modal.Body>
    </Modal>
  </>
}

export default ModalComponent