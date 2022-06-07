import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from "@mui/material/Grid";
import  AutoCompleteSearch from "../register/autoCompleteSearch";
import MainOptionsScreen from './MainOptionsScreen';
import { genericGetService, genericPostService } from "../../api/externalServices";
import { useDispatch  } from 'react-redux'
import {setSelectedChurch } from '../../features/user/userSlice';
import { useNavigate, Navigate  } from "react-router-dom";
import { useSelector } from 'react-redux';

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

export default function WelcomeScreen() {
    const user = useSelector(state => state.user);
    const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL || "http://localhost:4000";
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [churches, setChurches] = useState([]);
    const [selectedChurchId, setSelectedChurchId] = useState(null);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() =>{
        if(churches.length > 0){
            setError(false);
            setErrorMessage("");
        }
    }, [churches]);
    
    useEffect(() =>{
        const loadChurches =  async () => {
            const results = await genericGetService(`${BASE_URL}/church`)
            if(results[1]){
                setError(true);
                setErrorMessage("Se ha presentado un error cargando las iglesias.");
              return 
            }
            setChurches(results[0]);
          };
          loadChurches()
    }, []);

    useEffect(() => {
        return () => { 
            setChurches(null)
        }
      }, [])

    useEffect(() =>{
        if(selectedChurchId){
          setError(false);
          setErrorMessage("");
        }else{
            setError(true);
            setErrorMessage("Debe seleccionar una iglesia.");
        }
      },[selectedChurchId]);

    const saveChurch = () => {
        dispatch(
            setSelectedChurch({
                selectedChurchId:  selectedChurchId._id
            })
          );

          return navigate("/main");
    };

    return user && user.selectedChurchId !== "" ?  <Navigate to="/main" replace={true} /> :  churches.length == 0 ? <div>Cargando</div> :  (
        <div>
          <Modal
            open={true}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Seleccione una iglesia
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <AutoCompleteSearch
                            setSelectedChurchId={setSelectedChurchId}
                            error={error}
                            helperText={errorMessage}
                            items={churches}/>
                    </Grid>
  
                    <Grid item xs={12}>
                        <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled = {selectedChurchId == null}
                        onClick={() => saveChurch()}
                    >
                        Continuar
                    </Button>
                    </Grid>
                  </Grid>
                </Box>
            </Box>
          </Modal>
        </div>
      );
}
