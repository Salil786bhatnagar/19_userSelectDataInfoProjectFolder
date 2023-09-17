import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import {postData,postDataAndImage,getData} from '../component/FetchNodeServices'
import Swal from 'sweetalert2'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    input: {
        display: 'none',
      },
  }));
export default function PoliticesNewsData() {
    const classes = useStyles();
    const [getPid, setPid] = useState("");
    const [getTitle, setTitle]=useState("");
    const [getImg, setImg]=useState({icon:'',file:''});
    const [getDiscription, setDiscription]=useState("");

    /* handle in reset */
    const handleReset = (e) => {
      setTitle("");
      setImg({ icon: "", file: "" });
      setDiscription("")
    }
    
    const handleIcon=(e)=>{
        setImg({icon: URL.createObjectURL(e.target.files[0]),file:e.target.files[0]})
    
       }
    
    const handleClick=async(e)=>{
    
        var formData = new FormData();
             formData.append('pid',getPid)
             formData.append('title',getTitle)
             formData.append('image',getImg.file)
             formData.append('discription',getDiscription)
             var config={header:{'content-type':'multipart/form-data'}}
             var result = await postDataAndImage('sport/insertSportPost',formData,config)
            
             console.log(result); 
             if(result){
              //  setMessage("Record Submitted");
              Swal.fire({
                icon: 'success',
                title: 'Registration Success',
                // text: 'Something went wrong!',
                // footer: '<a href="">Why do I have this issue?</a>'
              })
      
            }else{
              // setMessage("Fail to Submit Record")
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            }
                      

    }




  return (
    <div>
      <div>
          <h5 className='heading-container'>Sport Post</h5>
      </div>
       <br/><br/>
       <div className="div-sport-container">
       <Grid container spacing={3}>

       <Grid item xs={12}>
          <center>
           <Grid item xs={12} sm={6}>
              <span className='span-textfield'>
              <TextField id="standard-basic" label="Title" onChange={(e)=>setTitle(e.target.value)} />
              </span>
            </Grid>
            <br/>
            <div className="div-input-img"> 
            <Grid item xs={12} sm={6}>
               
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={(e)=>handleIcon(e)}
                />
                <label htmlFor="contained-button-file">
                   
                      <Button  variant="contained" color="primary" component="span">
                       Upload
                      </Button>
                  
                </label>
               
               </Grid>
                <Grid item xs={12} sm={6}>
                <Avatar src={getImg.icon} id="user-sport-img" alt="Remy Sharp" variant='rounded' style={{width:80,height:80}} />
                </Grid>
                <br/>
                </div>  

                <Grid item xs={12} sm={6}>
                <TextareaAutosize aria-label="minimum height" minRows={5} cols="50" placeholder="Discription..." onChange={(e)=>setDiscription(e.target.value)}/>
                </Grid>
                
            <Grid item xs={12} sm={6}>
           <span>
             <Button onClick={()=>handleClick()} type="submit" variant="contained" color="primary" >
            Send
            </Button>
           </span>
            <span className="span_reset">
            <Button onClick={()=>handleReset()} variant="contained" color="primary" >
                Reset
                </Button>
                </span> 
            
            </Grid>
          </center>
        </Grid>
       </Grid>
       </div>
    </div>
  )
}
