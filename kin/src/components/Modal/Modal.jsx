import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from './modal.module.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  color: 'white',
  bgcolor: '#45971c',
  border: '1px solid',
  boxShadow: 24,
  borderRadius: '10px',
  p: 4,
  display: 'flex',
  justifyContent: 'center'
};

export default function ModalPopUp() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
    
        <div className={styles.cont}>   
          <button className={styles.btn} onClick={handleOpen}>Finish Assessment</button>
        </div> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>
            Congratulations for your baby progress!
          </h3>
          
        </Box>
      </Modal>
    </div>
  );
}
