import React, { useState } from 'react'
import './capacity.css'
import BasicTable from './eventListView'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NewEventModal from '../components/newEvent';

export default function Aforo() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className='aforoMainContainer'>

      <div style={{ marginBottom: "30px" }}>Eventos</div>
      <div className='toolBarContainer' >
        <Stack spacing={2} direction="row">
          <Button variant="contained" style={{backgroundColor:"#454545"}}>Verificar</Button>
          <Button variant="outlined" style={{color:"black"}} onClick={handleOpen} >Crear Evento</Button>
        </Stack>

      </div>

      <NewEventModal open = {open} setOpen = {setOpen} />
      <BasicTable style={{ marginTop: "35px !important" }} />

    </div>
  )
}
