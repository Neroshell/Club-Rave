import React from 'react'
import Modal from 'react-bootstrap/Modal';

const ReservationModal = () => {
  return (
    <Modal show={show} onHide={onHide} className='modal-reserve'>
    <Modal.Body className='modal-body'>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CheckCircleIcon fontSize="large"  style={{color: 'rgb(49, 25, 107)'}} />
      </div>
      <h3>Thanks for yor reservation, {initialValues.firstName}!</h3>
      <Button style={{color: 'red'}}  name='Close' onClick={onHide} />
    </Modal.Body>
  </Modal>
  )
}

export default ReservationModal
