import React from 'react';
import Button from '../UI/Button';

import Card from '../UI/Card';
import classes from './InvalidUserInputModal.module.css';

const InvalidUserInputModal = (props) => {
  const clickHandler = (event) => {
    props.onCancelHandler();
  }
  return (
    <div>
      <div className={classes.backdrop} />
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
              onClick={clickHandler}
            >
              Ok
            </Button>
          </footer>
        </Card>
    </div>
  )
}

export default InvalidUserInputModal;