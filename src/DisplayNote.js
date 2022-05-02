import React from "react";
import classes from "./DisplayNote.module.css";

function DisplayNote(props) {
  return (
    <ul className={classes.list}>
      <li className={classes.item}>
        <p className={classes.spacer}>
          First name:
          <span className={classes.handwriting}>{props.firstname}</span>
        </p>
      </li>
      <li className={classes.item}>
        <p className={classes.spacer}>
          Last name:
          <span className={classes.handwriting}>{props.lastname}</span>
        </p>
      </li>
      <li className={classes.item}>
        <p className={classes.spacer}>
          Phone:
          <span className={classes.handwriting}>{props.phone}</span>
        </p>
      </li>
      <li className={classes.item}>
        <p className={classes.spacer}>
          Role:
          <span className={classes.handwriting}>{props.role}</span>
        </p>
      </li>
      <li className={classes.item}>
        <p className={classes.spacer}>
          Message:
          <span className={classes.handwriting}>{props.message}</span>
        </p>
      </li>
      <li className={classes.item}>
        <p className={classes.spacer}>
          Contact:
          <span className={classes.handwriting}>{props.contact}</span>
        </p>
      </li>
    </ul>
  );
}

export default DisplayNote;
