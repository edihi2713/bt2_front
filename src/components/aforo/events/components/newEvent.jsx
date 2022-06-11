import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import { genericPostService, getAuthHeaders } from '../../../../api/externalServices';
import { useDispatch  } from 'react-redux'
import {setSelectedEvent} from '../../../../features/events/eventsSlice';
import { B2C_BASE_URL } from '../../../../constants';

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

const validationSchema = yup.object({
  name: yup
    .string('Ingrese el correo')
    .required('El nombre del evento es obligatorio'),
  date: yup
    .string('Ingresa la contraseña')
    .required('la fecha y hora es obligatoria'),
  capacity: yup
    .number()
    .positive("El campo debe sere mayor a 0")
    .required('La capacidad es obligatorio')
});

export default function NewEventModal({open, setOpen, setIsUpdateRequired}) {

  const dispatch = useDispatch();

  const BASE_URL = B2C_BASE_URL;
  const user = useSelector(state => state.user);
  const selectedEventId = useSelector(state => state.events.selectedEventId);

  const isEditting = selectedEventId !== null;

  useEffect(() => {
    if(isEditting){
      formik.values.name = selectedEventId.name
      formik.values.date = `${selectedEventId.date.split("T")[0]}T${selectedEventId.time}`
      formik.values.capacity = selectedEventId.capacity
    }else{
      formik.values.name = ''
      formik.values.date = ''
      formik.values.capacity = ''
    }
  }, [isEditting])

  const formik = useFormik({
    initialValues: {
      name: '',
      date: '',
      capacity: 0
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {

      var payload = {...values, time: values.date.split("T")[1], churchId: user.selectedChurchId };

      const results = await genericPostService(`${BASE_URL}/event`, payload, getAuthHeaders(user.token));

      if(results[1]){
        alert("Se ha presentado un error")
      }else{
        setIsUpdateRequired(true)
        closeModal();
      }   
    },
  });

  const closeModal = () => {
    formik.resetForm()
    dispatch(
      setSelectedEvent({
          selectedEventId: null
      }))

    setOpen(false);
  } 

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {isEditting ? "Editar Evento" : "Crear Evento"} 
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 3 }}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Nombre evento"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="date"
                    name="date"
                    type="datetime-local"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    error={formik.touched.date && Boolean(formik.errors.date)}
                    helperText={formik.touched.date && formik.errors.date}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="capacity"
                    label="Capacidad"
                    type="number"
                    error={formik.touched.capacity && Boolean(formik.errors.capacity)}
                    helperText={formik.touched.capacity && formik.errors.capacity}
                    value={formik.values.capacity}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
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
                    onClick={() => closeModal()}
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