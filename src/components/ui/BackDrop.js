import classes from '../../components/ui/Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onCancel} />;
}


export default Backdrop;