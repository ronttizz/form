import classes from "./EditNote.module.css";
import Form from "./Form";

const EditNote = (props) => {
  return (
    <div className={classes.modalBg}>
      <div className={classes.modal}>
        <h4>Edit note:</h4>
        <Form {...props} />
      </div>
    </div>
  );
};

export default EditNote;
