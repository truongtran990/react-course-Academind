import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './InvalidUserInputModal.module.css';


/* New react component for react portal */
const OverlayModal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>
          {props.title}
        </h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button
          type='button'
          onClick={props.onConfirm}
        >
          Ok
        </Button>
      </footer>
    </Card>
  )
}

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}/>
  )
}


const InvalidUserInputModal = (props) => {

  return (
    <>
      {
        ReactDOM.createPortal(
          <Backdrop 
            onConfirm={props.onConfirm}
          />,
          document.getElementById('backdrop-root')
        )
      }
      {
        ReactDOM.createPortal(
          <OverlayModal 
            title={props.title}
            message={props.message}
            onConfirm={props.onConfirm}
          />,
          document.getElementById('overlay-root')
        )        
      }
    </>
  )
}

export default InvalidUserInputModal;