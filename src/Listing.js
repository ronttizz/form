import classes from "./Listing.module.css";

const Listing = (props) => {
  return (
    <li className={classes.listing}>
      {props.firstname} {props.lastname} | {props.phone} | {props.role} | {props.message}{" "}
      | Contact: {props.contact} |{" "}
      <sub>
        <span className="material-symbols-outlined" onClick={props.delete}>
          delete_forever
        </span>
        <span className="material-symbols-outlined" onClick={props.edit}>
          edit_note
        </span>
      </sub>
    </li>
  );
};

export default Listing;
