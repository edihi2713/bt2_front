import React from 'react'
import './capacity.css'
import BasicTable from './eventListView'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Aforo() {
  return (
    <div className='aforoMainContainer'>

      <div style={{ marginBottom: "30px" }}>Eventos</div>
      <div className='toolBarContainer' >
        <Stack spacing={2} direction="row">
          <Button variant="contained" style={{backgroundColor:"#454545"}}>Verificar</Button>
          <Button variant="outlined" style={{color:"black"}}>Crear Evento</Button>
        </Stack>

      </div>

      <BasicTable style={{ marginTop: "35px !important" }} />

    </div>
  )
}
