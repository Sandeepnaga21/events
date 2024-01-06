import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {ActiveEventRegistration} = props
  const {registrationStatus} = ActiveEventRegistration

  const renderYetToRegister = () => {
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
        />
      </div>
    )
  }
  const renderRegister = () => {
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
          alt="registered"
        />
      </div>
    )
  }
  const renderRegisterClosed = () => {
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
        />
      </div>
    )
  }

  if (registrationStatus === 'YET_TO_REGISTER') {
    return {renderYetToRegister}
  } else if (registrationStatus === 'REGISTERED') {
    return {renderRegister}
  } else {
    return {renderRegisterClosed}
  }
}

export default ActiveEventRegistrationDetails
