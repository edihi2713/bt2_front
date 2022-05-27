import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function NewEventModal({open, setOpen}) {
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Crear Evento
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="names"
                    required
                    fullWidth
                    id="names"
                    label="Nombre evento"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    name="email"
                    type="datetime-local"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Capacidad"
                    type="number"
                  />
                </Grid>
                <Grid item xs={12}>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => alert("asdasd")}
                >
                    Guardar
                </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => setOpen(false)}
                >
                    Cerrar
                </Button>
                </Grid>
              </Grid>
            </Box>
        </Box>
      </Modal>
    </div>
  );
}