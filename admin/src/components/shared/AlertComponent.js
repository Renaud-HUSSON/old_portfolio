import { useContext } from "react"
import { Alert } from "react-bootstrap"
import ReactDOM from 'react-dom'
import { Redirect } from "react-router-dom"
import { AlertContext } from "../../contexts/Alert"

const AlertComponent = () => {
  let success, content
  const [alert, setAlert] = useContext(AlertContext)

  const handleClose = () => {
    setAlert(false)
  }

  //Determine if it's a succes or an error
  if(alert.active){
    success = alert.content.hasOwnProperty('success')
    content = success ? alert.content.success : alert.content.error 
  }

  return alert.active
  ?ReactDOM.createPortal(
  <>
    {
      alert.redirect
      ?<Redirect to={alert.redirect}/>
      :<></>
    }
    <Alert style={{top: '2rem', left: '50%', transform: 'translateX(-50%)'}} className="position-fixed" variant={success ? 'success' : 'danger'} onClose={handleClose} dismissible>
      <Alert.Heading>{success ? 'Succès !' : 'Erreur !'}</Alert.Heading>
      <p>
        {content}
      </p>
    </Alert>
  </>, document.body)
  :<></>
}

export default AlertComponent