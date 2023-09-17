import React,{useState,useEffect} from 'react'
import Listitems from './Listitems'
import Index from './Index';
import AddCategories from './AddCategories';
import AddProduct from './AddProduct';
import UserTableInfo from './UserTableInfo';

import RecentPost from './1_RecentPost';
import UpdatePost from './2_UpdatePost';
import CurrentPost from './3_CurrentPost';
import PoliticesPost from './4_PoliticesPost';
import SportPost from './5_SportPost';
import AdminIcon from './admin_img/admin.png'
import {getData,postData,postDataAndImage} from '../component/FetchNodeServices'


export default function Dashboard(props) {
  let currentTime = new Date().toLocaleTimeString();
  const [showdate, setShowDate]=useState(currentTime);
  const handleDate=()=>{
      let updateTime = new Date().toLocaleTimeString();
      setShowDate(updateTime)
  }
  
  setInterval(handleDate);

    const [ShowComponents, setComponet]=useState(<Index/>);
     const [getadmin,setAdmin]=useState([])

    //  const CheckSession=async()=>{
    //   var result=await getData('adminLog/chktoken')
    //   if(!result)
    //   {
    //    props.history.replace({pathname:'/SignupPage'})
    //   }
    //   else{
    //     var admin=JSON.parse(localStorage.getItem('admin'))
    //    console.log("ADMIN",getadmin)
    //    setAdmin(admin)
    //   }
    // }
  
    // useEffect(function(){
    //   CheckSession();
    // },[])  
    

    const handleComponents=(ShowData)=>{

    switch(ShowData){
          case 0 :
          setComponet(<Index/>)
          break;

           case 1:
            setComponet(<RecentPost/>)
           break; 

           case 2:
            setComponet(<UpdatePost/>)
            break;

           case 3:
            setComponet(<CurrentPost/>)
             break;     
        
           case 4:
            setComponet(<PoliticesPost/>)
            break;

            case 5:
              setComponet(<SportPost/>)
              break;

            case 6 :
              setComponet(<AddCategories/>)
               break;
           
             case 7:
               setComponet(<AddProduct/>)
              break;
       
              case 8:
                setComponet(<UserTableInfo/>)
                break;   
             
        default:
     }

    }



  return (
    <div>
       <h3 className='div-dashbord' style={{textAlign:'left'}}>
        {/* Dashboard  */} 
        <span className='span-admin-icon'>
         <img src={AdminIcon} width="50px" height="50px" />
         </span>
        <span className='span-clock' style={{color:'#fff'}}>
        {showdate}
        </span>
       </h3>
     <div className='div-maincontainer'>
     <div className='div-left'>
         <Listitems handle_Components={handleComponents}/>
     </div>
     <div className='div-right'>
       {ShowComponents}
     </div>
     </div>
     

    </div>
  )
}
