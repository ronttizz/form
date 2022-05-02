import React from "react";

import classes from "./Popup.module.css";

function Popup(props) {
  return (
    <div className={classes.modalBg}>
      <div className={classes.modal}>
        <h2>Your note:</h2>
        <button className={classes.closeBtn} name="close" onClick={props.popup}>
          X
        </button>
        <ul className={classes.list}>
          <li className={classes.item}>First name: {props.firstname}</li>
          <li className={classes.item}>Last name: {props.lastname}</li>
          <li className={classes.item}>Phone: {props.phone}</li>
          <li className={classes.item}>Role: {props.role}</li>
          <li className={classes.item}>Message: {props.message}</li>
        </ul>
        <p>Do you want to keep this note</p>
        <button onClick={props.post} className={classes.buttonOk}>
          Yes, I am sure
        </button>
        <button onClick={props.close} className={classes.buttonNo}>
          Nope, I don't want to post it
        </button>
      </div>
    </div>
  );
}

export default Popup;
