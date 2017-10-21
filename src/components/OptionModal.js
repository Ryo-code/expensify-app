import React, { Component } from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption} //adding "!!" forces this to become a boolean
    onRequestClose={props.handleClearSelectedOption} //triggered when user hits ESC or clicks off modal
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal" //ReactModal lets us use our own styles 
  >
    <h3 className="modal__title">Selection Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;