// LoginForm.js
import React, { useState } from 'react';
import './Signup.css';
import { styled } from '@mui/material/styles';
import { Button, FilledInput, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { lightBlue, blueGrey } from '@mui/material/colors';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(lightBlue[500]),
  backgroundColor: lightBlue[500],
  '&:hover': {
    backgroundColor: blueGrey[700],
  },
}));

const LoginForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  const [pass, setpass] = useState("");
  const [Email, setEmail] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleclick = ()=>{
      axios.post("http://localhost:1000/api/Login", {
        email: Email,
        password: pass,


      }).then((res)=>{
        console.log(res.data);
        localStorage.removeItem("token")
        localStorage.setItem("token", JSON.stringify(res.data.token));
        navigate("/");
      }).catch((res)=>{
        console.log("error"+res);
      })
  }

  return (
    <div className="login-in-container">
      <form color='#ccc'>
    <Stack className='lform'  spacing={5}>
      <Typography color={"HighlightText"} fontSize={40}>Log - In</Typography>
      
      <TextField id="standard-basic" required label="Email" variant="standard" onChange={(e)=> setEmail(e.target.value)}  focused />
      <FilledInput
            id="standard-basic"
            label="password"
            placeholder='Password'
            type={showPassword ? 'text' : 'password'}
            onChange={(e)=> setpass(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                color='warning'
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />


          <ColorButton variant="contained" onClick={handleclick}>Submit</ColorButton>
     </Stack>
      </form>
    </div>
  );
};

export default LoginForm;
