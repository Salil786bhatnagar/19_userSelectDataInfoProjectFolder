import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'
import { postDataAndImage, postData, getData } from './FetchNodeServices'
import Avatar from '@material-ui/core/Avatar';
import Swal from 'sweetalert2';
import loginBg from './Images/signbg.png';
import { useHistory } from "react-router-dom";
import IndexHeaderSignup from './Head/Header';
import 'react-toastify/dist/ReactToastify.css';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const history = useHistory();
  const classes = useStyles();

  const [getName, setName]=useState('')
  const [getLname, setLname] = useState('');
  const [getContact, setContact] = useState('');
  const [getAddress, setAddress] = useState('');
  const [getEmail, setEmail] = useState('');
  const [getImg, setImg] = useState({ icon: '', file: '' });
  const [getPassword, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

   // Your logic to enable/disable the button based on user input
   const isButtonDisabled = getEmail === "" || getPassword === "";
 
  const [ErrEmail, setErrEmail] = useState('');
  const [ErrPassword, setErrPassword] = useState('');
  

   /* use to useEffect function */
  useEffect(function () {

  }, []);


  const hadleSubmit = async (e) => {

    // Your button click logic goes here
    console.log("Button clicked!");
    setIsLoading(true);
    setTimeout(() => {
      // After the operation is done, set loading to false to stop the loading indicator
      setIsLoading(false);
    }, 2000); 

    var err = false;

    var mailformat = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); /*regular expration in email*/

    var pass = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')

    
    
    /*regular expration in only*/

    var dateformat = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);

    var imgpattern = new RegExp("[^\\s]+(.*?)\\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$");

    // email validation
    if (getEmail == "") {
      setErrEmail(<p style={{ color: 'red' }}>Email field required</p>);
      err = true
    }
    else if (!mailformat.test(getEmail)) {
      setErrEmail(<p style={{ color: 'red' }}>Email invalied</p>);
      err = true
    }

    else {
      setErrEmail(<p style={{color: ErrEmail ? null : ""}}></p>)
    }


    // password validation 
    if (getPassword == "") {
      setErrPassword(<p style={{ color: 'red' }}>Password field required</p>);
      err = true
    }
    else if (!pass.test(getPassword)) {
      setErrPassword(<p style={{ color: 'red' }}>Uppercase later, number and special char only.</p>);
      err = true
    }
    else {
      setErrPassword(<p style={{color: ErrPassword ? null : ""}}></p>)
    }


    if (!err) {

      let body={email:getEmail,password:getPassword,name:getName,lname:getLname,contact:getContact,address:getAddress,img:getImg}
      let list = await postData('login/userLogin',body); 
      console.log("userInformation:----",list)
   if(list.length==1){
    Swal.fire(
      'Login Successfully...',
      'You clicked the button!',
      'success'
    )
     localStorage.setItem('login',JSON.stringify({email:list[0].email, name:list[0].name,lname:list[0].lname,contact:list[0].contact,address:list[0].address,img:list[0].img}))
     history.replace({pathname:`/UserInformation`});
    }
     else
     {
      // alert("Email & password incorect please try again...")
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email & password incorect please try again...',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      }
    }
  }

  return (
    <>
   
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
             <IndexHeaderSignup/>
          </Grid>
        </Grid>
      </Box>

      {/* <img className='reg-bg' src={loginBg} /> */}
      <div className='div-reg-container'>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography><br />
            <div>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    placeholder='Enter you email'
                    variant="outlined"
                    required
                    fullWidth
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <h6 style={{ textAlign: 'center' }} >{ErrEmail}</h6>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    placeholder='Enter you password'
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <h6 style={{ textAlign: 'center' }} >{ErrPassword}</h6>
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={(e) => hadleSubmit(e)}
                disabled={isButtonDisabled}
              >
              {/* {isLoading ?<img src={LoadingImg} width="38px" height="30px"/> : 'Sign Up'} */}
              {isLoading ? "LoadingImg..." : 'Sign Up'}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to='/RegForm' variant="body2">
                        Already have an account? Sign up
                      </Link>
                  {/* <Link to="/Signin">
                    <a >Sign In Here</a>
                  </Link> */}
                </Grid>
              </Grid>
            </div>
          </div>
          {/* <Box mt={5}>
            <Copyright />
          </Box> */}
        </Container>
      </div>
    </>
  );
}


