import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'
import { postData, postDataAndImage} from '../component/FetchNodeServices';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Avatar from '@material-ui/core/Avatar';
import Swal from 'sweetalert2';
// import loginBg from '../NewCompoment/Images/signbg.png';
import { useHistory } from "react-router-dom";
// import IndexHeaderSignup from '../NewCompoment/Head/IndexHeaderSignup';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { ToastContainer, toast } from 'react-toastify';
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

export default function SignUp() {
  const notify = () => toast("Wow so easy!");
  const history = useHistory();
  const classes = useStyles();

  const [getid, setId] = useState('');
  const [getName, setName] = useState('');
  const [getImg, setImg] = useState({ icon: '', file: '' });


  const [ErrName, setErrName] = useState('');
  const [ErrImg, setErrImg] = useState("");

   /* use to useEffect function */
  useEffect(function () {
  
  }, []);

  // /* fetch all state data */
  // const fetchStatCity = async () => {
  //   let list = await getData("state_city/displayallstates");
  //   setStateList(list);
  // };

  /* menuitem fetch state data */
  // const fillStateItem = () => {
  //   return getStateList.map((item, key) => {
  //     return <MenuItem value={item.stateid}>{item.statename}</MenuItem>;
  //   });
  // };

  /* handle in state */
  // const handleStateChange = (event) => {
  //   setState(event.target.value);
  //   fetchCity(event.target.value);
  // };

  /* fetch all city data */
  // const fetchCity = async (stateid) => {
  //   var body = { stateid: stateid };
  //   var list = await postData("state_city/displayallcity", body);
  //   setCityList(list);
  // };

  /* menu item fetch city data */
  // const fillCityItem = () => {
  //   return getCityList.map((item, key) => {
  //     return <MenuItem value={item.citiesid}>{item.citiesname}</MenuItem>;
  //   });
  // };

  /* handle in city */
  // const handleCityChange = (event) => {
  //   setCity(event.target.value);
  // };


  // /* handle in icon*/
  // const handleIcon=(e)=>{
  //   // setImg({icon: URL.createObjectURL(e.target.files[0]),file:e.target.files[0]})
  //   setImg({icon: URL.createObjectURL(e.target.files[0])})

  //  }

  /* handle in image*/
  const handleIcon = (e) => {
    setImg({ icon: URL.createObjectURL(e.target.files[0]), file: e.target.files[0] })
  }


  const hadleSubmit = async (e) => {

  
    var err = false;
    var fname = new RegExp(/^[A-Za-z ]+$/);/*regular expration in only character name*/
    var lname = new RegExp(/^[A-Za-z ]+$/);/*regular expration in only character name*/

    var contact = new RegExp(/^[6789]\d{9}$/);/*regular expration in only number  /^[0-9]+$/ */
    // indian number start digit /^[6789]\d{9}$/

    var address = new RegExp(/^[A-Za-z ]+$/);/*regular expration in only character name*/


    var mailformat = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); /*regular expration in email*/

    var pass = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    /*regular expration in only*/

    var dateformat = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);

    var imgpattern = new RegExp("[^\\s]+(.*?)\\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$");




    


    //  name validation 
    if (getName == "") {

      setErrName(<p style={{ color: 'red' }}>Name field required</p>);

    }
    else if (!fname.test(getName)) {

      setErrName(<p style={{ color: 'red' }}>Only Character</p>);
    }
    else {
      setErrName(true)
    }

    // Image validation  
    var inputElement = document.getElementById('contained-button-file');
    var files = inputElement.files;

    if (files.length == 0) {
      setErrImg(<p style={{ color: 'red' }}>"Please choose a file first..."</p>);
      return false;
    } else {
      var filename = files[0].name;
      var extension = filename.substr(filename.lastIndexOf("."));
      // var allowedExtensionsRegx = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      var allowedExtensionsRegx = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      console.log(extension)
      var isAllowed = allowedExtensionsRegx.test(extension);

      if (!isAllowed) {
        setErrImg(<p style={{ color: 'red' }}>"File type is valid for the upload"</p>);
        /* file upload logic goes here... */
      } else {
        setErrImg(false);
        // return false; 
      }
    }

    if (!err) {

      var formData = new FormData()
      formData.append('name', getName)
      formData.append('img', getImg.file)
     
      var config = { header: { 'content-type': 'multipart/form-data' } }
      var result = await postDataAndImage('categories/categoriesData', formData, config);
      console.log("show-data...>", result);
      if (result) {
        //  setMessage("Record Submitted");
        Swal.fire({
          icon: 'success',
          title: 'Registration Success',
          // text: 'Something went wrong!',
          // footer: '<a href="">Why do I have this issue?</a>'
        })
        //  history.push("/AddCate")

      } else {
        // setMessage("Fail to Submit Record")
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    }
  }

  return (
    <>
       <div>
            <h5 className='heading-container's>Add Categories</h5>
        </div>
      <br/><br/>
      {/* <img className='reg-bg' src={loginBg} /> */}
      <div className='div-reg-container'>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            {/* <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar> */}
            {/* {getSetmessage} */}
            <Typography component="h1" variant="h5">
              {/* Add Categories */}
            </Typography><br /><br/>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>

                  <TextField
                    autoComplete="fname"
                    name="name"
                    variant="outlined"
                    placeholder='Enter you name'
                    required
                    fullWidth
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                  />
                  <h6 style={{ textAlign: 'center' }} >{ErrName}</h6>
                </Grid><br/>

                <Grid item xs={6} sm={6} md={6} lg={6}>
                <div className='div-img-div'>
                  <img src="" width='12' height='12' className={classes.valImgicon} />
                  <input
                    // id="file-upload"
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={(e) => handleIcon(e)}
                    style={{ display: 'none' }}
                  />
                   <h6 style={{ textLign: "center" }} >{ErrImg}</h6>
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span" className={classes.uploadbtn1} startIcon={<CloudUploadIcon />}>
                      Upload Icon
                    </Button>
                  </label>
                 
                  <Grid item xs={6} className={classes.container}>
                    <Avatar id="user-icon" alt="Remy Sharp" variant='rounded'
                      style={{ width: 70, height: 50 }} src={getImg.icon} />
                      
                  </Grid>
                 </div> 
                </Grid>
             {/*  */}

              </Grid>
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={(e) => hadleSubmit(e)}
              >
                Sign Up
              </Button>
 
              <Grid container justifyContent="flex-end">
                {/* <Grid item>
                  <Link href='/Signin' variant="body2">
                        111Already have an account? Sign in
                      </Link>
                  <Link to="/Signin">
                    <a >Sign In Here</a>
                  </Link>
                </Grid> */}
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


