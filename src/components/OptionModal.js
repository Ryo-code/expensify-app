import React, { Component } from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption} //adding "!!" forces this to become a boolean
    onRequestClose={props.handleClearSelectedOption} //triggered when user hits ESC or clicks off modal
    contentLabel="Selected Option"
  >
    <h3>Selection Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;