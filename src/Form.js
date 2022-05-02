import React from "react";
import classes from "./Form.module.css";

function Form(props) {
  return (
    <form onSubmit={props.submit} onChange={props.onChange} className={classes.form}>
      <div>
        <label htmlFor="fname" className={classes.alignRight}>
          Firstname:
        </label>
        <input
          type="text"
          name="firstname"
          className={classes.input}
          id="fname"
          required
        />
        <label htmlFor="lname" className={classes.alignRight}>
          Lastname:
        </label>
        <input
          type="text"
          name="lastname"
          className={classes.input}
          id="lname"
          required
        />
        <label htmlFor="phone" className={classes.alignRight}>
          Phone#:
        </label>
        <input type="tel" name="phone" className={classes.input} id="phone" required />
        <label htmlFor="role" className={classes.alignRight}>
          Role:
        </label>
        <select
          id="role"
          name="role"
          className={classes.input}
          onChange={props.onChange}
          required
        >
          <option value="" invalid="true" hidden>
            Choose a role
          </option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="msg" className={classes.alignRight}>
          Message:
        </label>
        <textarea
          type="textarea"
          name="message"
          className={classes.input}
          id="msg"
          required
        ></textarea>
        <fieldset>
          <legend className={classes.legend}>
            Do you want supervisor to contact you?
          </legend>
          <input
            type="radio"
            id="yes"
            name="contact"
            className={classes.radio}
            value="yes"
          />
          <label htmlFor="yes">Yes</label>
          <input
            type="radio"
            id="no"
            name="contact"
            className={classes.radio}
            value="no"
          />
          <label htmlFor="no">No</label>
        </fieldset>
        <input type="submit" className={classes.sendBtn} name="send" value="Send" />
      </div>
    </form>
  );
}

export default Form;
