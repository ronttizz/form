import classes from "./Listing.module.css";

const Listing = (props) => {
  return (
    <li className={classes.listing}>
      {props.firstname} {props.lastname} | {props.phone} | {props.role} | {props.message}{" "}
      | Contact: {props.contact}
    </li>
  );
};

export default Listing;
