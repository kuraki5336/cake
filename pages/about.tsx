import {
  createStyles,
  Fade,
  makeStyles,
  Modal,
  Theme,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      width: "100px",
      height: "50px",
    },
    modal: {
      display: "flex",
      padding: theme.spacing(1),
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

const AboutPage = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <h1>About</h1>
      <p>This is the about page</p>
      <button className={classes.btn} type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        // BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">Spring modal</h2>
            <p id="spring-modal-description">react-spring animates me.</p>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default AboutPage;
