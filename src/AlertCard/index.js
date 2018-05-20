import React from 'react'
import PropTypes from 'prop-types'

function AlertCard({ children, className }) {
  return <div className={`card card--alert ${className}`}>{children}</div>
}

AlertCard.propTypes = {
  /** class name to be passed to card */
  className: PropTypes.string
}

export default AlertCard
