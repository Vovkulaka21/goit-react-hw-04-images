import css from './Modal.module.css';

import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {


  componentDidMount() {
    document.addEventListener("keydown", this.closeModal)
  }

  componenWillUnmount() {
    document.removeEventListener("keydown", this.closeModal)
  }

  closeModal = ({target, currentTarget, code}) => {

    if(target === currentTarget || code === "Escape") {
      this.props.close()
    }
  }
  
  render() {
    const { children} = this.props;
    return createPortal(
      <div onClick={this.closeModal} className={css.overlay}>
        <div className={css.modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
