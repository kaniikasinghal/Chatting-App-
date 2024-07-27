import React, {useState} from 'react';
import { Container, Paper, TextField, Typography, Button, Stack, Avatar, IconButton } from '@mui/material';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import {useFileHandler, useInputValidation, useStrongPassword } from '6pp';
import {usernameValidator} from "../utils/validators"
``

const Login = () => {
  const [ isLogin, setIsLogin ] = useState ( true );
  const toggleLogin = () => setIsLogin((jsRK) => !jsRK);

  const name = useInputValidation();
  const username= useInputValidation("" ,usernameValidator);
  const password = useStrongPassword();
  const bio = useInputValidation();
  
  const avatar = useFileHandler("single");

  const handleLogin = (e) => {
    e.preventDefault();
  }

  const handleSignUp = (e) => {
    e.preventDefault();
  }

  return ( 
    <>
    {/* <div>Login</div> */}
    <div
    style={{
      backgroundImage:
      "linear-gradient(rgba(200, 200, 200, 0.5), rgb(43 143 106 / 69%))"
    }}>
    <Container component = {"main"} maxWidth ="xs"
    sx = {{
      height:"100vh",
      display:"flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      {/* Jai Shree SiyaRam */}
      <Paper
      elevation = {3}
      sx = {{
      padding: 4, 
      display: "flex",
      flexDirection: "column",
      alignItems: "center" 
      }}
      >
        {isLogin?

        <>

        <Typography>
          Login
        </Typography>
        <form style = {{
        width:"100%",
        marginTop:"1rem"
        }}
        onSubmit={handleLogin}
        >

        <TextField
        required 
        fullWidth 
        label = "Username"  
        margin = "normal" 
        variant = "outlined"
        />

        <TextField
        required 
        fullWidth 
        label = "Password"
        type = "Password" 
        margin = "normal" 
        variant = "outlined"
        />

        <Button
        sx = {{
          marginTop:"1rem",
          variant:"contained",
          color:"primary",
          type:"submit",
        }} 
        variant="contained" 
        color="primary" 
        type="submit"
        fullWidth
        >

        Login

        </Button>

        <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
        
        <Button
        // sx = {{
        //   marginTop:"1rem",
        //   variant:"text",
        //   type:"submit",
        // }} 
        // variant="contained" 
        color="primary" 
        type="submit"
        fullWidth
        onClick={toggleLogin}
        >
        Sign Up Instead
        </Button>
        </form>
        </>
        :
        <>

        <Typography>
          Register
        </Typography>
        <form style = {{
        width:"100%",
        marginTop:"1rem"
        }}
        onSubmit={handleSignUp}
        >
          
        <Stack
        position={"relative"}
        width={"10rem"}
        margin={"auto"}
        >
          <Avatar
          sx = {{
            width:"10rem",
            height:"10rem",
            objectFit:"contain"
          }}
          src={avatar.preview}
          />

          <IconButton
          sx={{
            position:"absolute",
            bottom:"0",
            right:"0",
            backgroundcolor:"white",
            color:"white",
            bgcolor:"rgba(0,0,0,0.5)",
            ":hover":{
              bgcolor:"rgba(0,0,0,0.7)",
            }
          }}
          component="label"
          >
            <>
            <CameraAltIcon/>
            <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
            </>
          </IconButton>
        </Stack>

        { avatar.error && (
          <Typography
          m={"1rem"}
          width={"fit-content"}
          display={"block"}
          color="error" 
          variant="caption">
            {avatar.error}
          </Typography>
        )}

        <TextField
        required 
        fullWidth 
        label = "Name" 
        margin = "normal" 
        variant = "outlined"
        value = {name.value}
        onChange = {name.changeHandler}
        />

        <TextField
        required 
        fullWidth 
        label = "Username" 
        margin = "normal" 
        variant = "outlined"
        value = {username.value}
        onChange = {username.changeHandler}
        />

        { username.error && (
          <Typography color="error" variant="caption">
            {username.error}
          </Typography>
        )}

        <TextField
        required 
        fullWidth 
        label = "Password"
        type = "Password" 
        margin = "normal" 
        variant = "outlined"
        value = {password.value}
        onChange = {password.changeHandler}
        />

        { password.error && (
          <Typography color="error" variant="caption">
            {password.error}
          </Typography>
        )}

        <TextField
        required 
        fullWidth 
        label = "Bio"
        margin = "normal" 
        variant = "outlined"
        value = {bio.value}
        onChange = {bio.changeHandler}
        />

        <Button
        sx = {{
          marginTop:"1rem",
          variant:"contained",
          color:"primary",
          type:"submit",
        }} 
        variant="contained" 
        color="primary" 
        type="submit"
        fullWidth
        >

        Login

        </Button>

        <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
        
        <Button
        // sx = {{
        //   marginTop:"1rem",
        //   variant:"text",
        //   type:"submit",
        // }} 
        // variant="contained" 
        color="primary" 
        type="submit"
        fullWidth
        onClick={toggleLogin}
        >
        Login Instead
        </Button>
        </form>
        </>
        }
      </Paper>
    </Container>
    </div>
    </>
  )
}

export default Login;