import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { getData } from '../FetchNodeServices';
import { getData } from '../../../component/FetchNodeServices'
import { Link } from 'react-router-dom';

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const[getCategoriesList, setCategoriesList]=useState([])

  useEffect(()=>{
    fetchCategoriesId()
  },[])

  /* fetch all state data */
    const fetchCategoriesId = async () => {
    let list = await getData("categories/displayaId");
    console.log(list)
    setCategoriesList(list);
   
  };

  // const listData=()=>{
  //   getCategoriesList.map((item)=>{
  //     return(
  //       <>
  //         {item.name}
  //       </>
  //     )
  //   })
  // }



  return (
    <> 
    <div>
      {
        getCategoriesList.map((item)=>{
      return(
        <>
           <div className='div-navbar'>
              <ul>
              <Link to={"/Categories_Data/"+item.c_id+"/"+item.name
              }
             >
                  <li>
                 
                    {item.name}
                 

                   {/* <br/> */}
                   {/* <img src={item.img} width='80px' height='80'/> */}

                 </li>
              </Link>
                 
              </ul>
           </div>
        </>
      )
    })
      }
    </div>
    
    </>
  
  );
}