import React,{useState,useEffect} from 'react';
import { getData, ServerURL} from './FetchNodeServices';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UserHeader from './Head/UserHeader';
import Avatar from '@material-ui/core/Avatar';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  inline: {
    display: 'inline',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function UserInformation(props) {
  const [value, setValue] = React.useState(0);
  const [timeDate, setTimeDate] = useState('')
  const [updatePostData, setUpdatePostData] = useState([])
  const [admin,setAdmin]=useState([])
  const UserCheckSession=async()=>{
      var result=await getData('login/chktoken')
      if(!result)
      {
       props.history.replace({pathname:'/Login'})
      }
      else{
        var userName=JSON.parse(localStorage.getItem('login'))
       console.log("User name",userName)
       setAdmin(userName)
      }
     }
   
      useEffect(()=>{
        UserCheckSession();
        handleUpdatePost();
      },[])


      // update post fetch data
      const handleUpdatePost=async()=>{
         let showData = await getData("update/displayUpdatePost");
         setUpdatePostData(showData);
      }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  const [showData, setShowData] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Current time and date
  const handleTimeData=()=>{
    //  let updataTimeData = new Date().toLocaleDateString();
    let updataTimeData = Date();
     setTimeDate(updataTimeData)
  }

   setInterval(handleTimeData)



  return (
    <div className='div-body'>
       <div>
          <UserHeader/>
       </div>
       {/* {admin.email} &nbsp; {admin.name} &nbsp; {admin.lname} &nbsp; {admin.contact} 
       &nbsp; {admin.address} */}
       {/* <img src={admin.img} width="50px" height="50px" /> */}
       {/* <img src={`${ServerURL}/images/${admin.img}`} width="50px" height="50px" /> */}
          <div className={classes.root}>
            <Grid container spacing={0}>
              <Grid item xs={3}>
                <div className='main-div1'>
                     
                      <Card className={classes.root}>
                            <CardHeader
                              avatar={
                                <StyledBadge
                                      overlap="circular"
                                      anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                      }}
                                      variant="dot"
                                    >
                                      <Avatar alt="Remy Sharp" src={`${ServerURL}/images/${admin.img}`} />
                                      {/* <img src={`${ServerURL}/images/${admin.img}`} width="50px" height="50px" /> */}
                                    </StyledBadge>

                              }
                              action={
                                <IconButton aria-label="settings">
                                  <MoreVertIcon />
                                </IconButton>
                              }
                              title=<span className='span-fullName'>{admin.name+" "+admin.lname}</span>
                              
                              subheader={<span className='span-timeDate'>{timeDate}</span>}
                              // {timeDate}
                            />
                            
                            <CardMedia
                              className={classes.media}
                              image="/static/images/cards/paella.jpg"
                              title="Paella dish"
                            />
                            <hr/>
                           
                            <CardActions disableSpacing>
                              {/* <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                              </IconButton>
                              <IconButton aria-label="share">
                                <ShareIcon />
                              </IconButton> */}
                              <IconButton
                                className={clsx(classes.expand, {
                                  [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                              >
                                <ExpandMoreIcon />
                              </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                              <CardContent>
                                <Typography paragraph><span className='span-info-heading'>Information</span>:</Typography>
                                <Typography paragraph>
                                <span className='span-sapn1'>Email:</span>
                                <span className='span-span1-email'>{admin.email}</span>
                                </Typography>
                                <Typography paragraph>
                                <span className='span-sapn2'>Contact:</span>
                                <span className='span-span1-contact'>{admin.contact}</span> 
                                </Typography>
                                <Typography paragraph>
                                <span className='span-sapn3'>Address:</span>
                                <span className='span-sapn3-address'>{admin.address}</span>
                                </Typography>
                                {/* <Typography paragraph>
                                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                  medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                  again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                  minutes more. (Discard any mussels that don’t open.)
                                </Typography>
                                <Typography>
                                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>  */}
                              </CardContent>
                            </Collapse>
                          </Card>

                   <br/>
                    <Paper className={classes.paper}>
                     <center>
                     <div className='div-recent-post'>Recent Post</div>
                     </center>
                     <hr/>
                      <div>
                      oin the forefront of the cutting-edge language processing and AI industry by gaining a thorough understanding of OpenAI ChatGPT. You also get hands-on experience on GPT API, GPT-4 and ChatGPT Plus.
                      oin the forefront of the cutting-edge language processing and AI industry by gaining a thorough understanding of OpenAI ChatGPT. You also get hands-on experience on GPT API, GPT-4 and ChatGPT Plus.
                      oin the forefront of the cutting-edge language processing and AI industry by gaining a thorough understanding of OpenAI ChatGPT. You also get hands-on experience on GPT API, GPT-4 and ChatGPT Plus.
                      oin the forefront of the cutting-edge language processing and AI industry by gaining a thorough understanding of OpenAI ChatGPT. You also get hands-on experience on GPT API, GPT-4 and ChatGPT Plus.
                      oin the forefront of the cutting-edge language processing and AI industry by gaining a thorough understanding of OpenAI ChatGPT. You also get hands-on experience on GPT API, GPT-4 and ChatGPT Plus.
                      </div>
                    </Paper>

                </div>
              </Grid>
              <Grid item xs={6}>
               <div className='main-div2'>
                <Paper className={classes.paper}>
                <center><div className='div-update-post'>Update Post</div></center>
                <hr/>

               {
                updatePostData.map((item,i)=>{
                  return(
                     <>
                        <Card className={classes.root}>
                          <CardHeader
                            avatar={
                              <Avatar aria-label="recipe"
                               className={classes.avatar}
                              
                               >
                                R
                              </Avatar>
                            }
                            action={
                              <IconButton aria-label="settings">
                                <MoreVertIcon />
                              </IconButton>
                            }
                            title={item.title}
                            subheader="September 14, 2016"
                          />
                          <CardMedia
                            className={classes.media}
                            image={`${ServerURL}/images/${item.image}`}
                            title="Paella dish"
                          />
                          <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                              {item.discription}
                            </Typography>
                          </CardContent>
                          <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                              <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                              <ShareIcon />
                            </IconButton>
                          </CardActions>
                      </Card>
                     </>
                  )
                })
                  
               }
            
                </Paper>
                </div> 
              </Grid>
              <Grid item xs={3}>
                <div className='main-div3'>
                <Paper className={classes.paper}>
                   <div className='div-current-post'>Current Post</div>
                   <hr/>
                  <List className={classes.root}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Brunch this weekend?"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Ali Connors
                          </Typography>
                          {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                    <Divider variant="inset" component="li" />

                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Summer BBQ"
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textPrimary"
                            >
                              to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                          </React.Fragment>
                        }
                      />
                    </ListItem>

                    <Divider variant="inset" component="li" />

                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Oui Oui"
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textPrimary"
                            >
                              Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                          </React.Fragment>
                        }
                      />
                    </ListItem>

                  </List>
                     
                </Paper>
                <br/>
                   <Paper className={classes.paper}>
                     <center> 
                          <div className='span-sport-politics'>Politics &nbsp;/&nbsp; Sport's News</div>   
                     </center>
                     <hr/>
                      <div>
                      <span className='span-tab-bar'>
                        <Tabs
                          value={value}
                          indicatorColor="primary"
                          textColor="primary"
                          onChange={handleChange}
                          aria-label="disabled tabs example"
                         >
                          <Tab label="Sport's" {...a11yProps(0)} />
                          <Tab label="Politics " {...a11yProps(1)} />
                          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                        </Tabs>
                      </span>
                      <TabPanel value={value} index={0}>
                        Sport's Post
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                      Politics Post
                      </TabPanel>
                      {/* <TabPanel value={value} index={2}>
                        Item Three
                      </TabPanel> */}
                      </div>
                    </Paper>

                </div>
              </Grid>
    
            </Grid>
          </div>
       </div>
  )
}
