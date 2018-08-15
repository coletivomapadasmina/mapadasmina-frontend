import React from 'react'

const CloseButton = ({ handleClose }) => (
  <button
    type="button"
    className="close"
    aria-label="Close"
    onClick={handleClose}
  >
    <span aria-hidden="true">&times;</span>
  </button>
)


export default CloseButton
