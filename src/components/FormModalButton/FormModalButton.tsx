import React, { useState } from 'react';
import { Button, Modal, Fade, TextField } from '@mui/material';
import './FormModalButton.css';

const FormModalButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setError('');
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.value.replace(/\s/g, '');
    setName(inputName);
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputPhoneNumber = event.target.value.replace(/\D/g, '');
    setPhoneNumber(inputPhoneNumber);
  };

  const handleSubmit = () => {
    if (!name || !phoneNumber) {
      setError('Пожалуйста, заполните все поля');
      return;
    }
    console.log('Имя:', name);
    console.log('Номер телефона:', phoneNumber);
    setName('');
    setPhoneNumber('');
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleOpen}>
        Получить консультацию
      </Button>
      <Modal
        className='modal'
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <div className='paper'>
            <h2>Форма записи</h2>
            <form className='modal-form' noValidate autoComplete="off">
              <TextField
                id="name"
                label="Имя"
                value={name}
                onChange={handleNameChange}
                fullWidth
              />
              <TextField
                id="phoneNumber"
                label="Номер телефона"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                fullWidth
              />
              <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
                Отправить
              </Button>
              {error && <p className="error">{error}</p>}
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default FormModalButton;
