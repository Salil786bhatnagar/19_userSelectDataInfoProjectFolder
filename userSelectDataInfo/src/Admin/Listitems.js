import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

export default function Listitems(props) {

    const handleClick =(showData)=>{
       props.handle_Components(showData) 
    }

  return (
    <div>
        <ListItem button onClick={()=>handleClick(0)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <span className='span-span-list-text'><ListItemText primary="Dashboard" /></span>
        </ListItem>

        <ListItem button onClick={()=>handleClick(1)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <span className='span-span-list-text'><ListItemText primary="Recent Post" /></span> 
        </ListItem>


        <ListItem button onClick={()=>handleClick(2)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <span className='span-span-list-text'><ListItemText primary="Update Post" /></span> 
        </ListItem>


        <ListItem button onClick={()=>handleClick(3)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <span className='span-span-list-text'><ListItemText primary="Current Post" /></span> 
        </ListItem>

        <ListItem button onClick={()=>handleClick(4)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <span className='span-span-list-text'><ListItemText primary="Politices Post" /></span> 
        </ListItem>

        <ListItem button onClick={()=>handleClick(5)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <span className='span-span-list-text'><ListItemText primary="Sport Post" /></span> 
        </ListItem>

        <ListItem button onClick={()=>handleClick(6)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <span className='span-span-list-text'><ListItemText primary="Add Categories" /></span> 
        </ListItem>


        <ListItem button onClick={()=>handleClick(7)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <span className='span-span-list-text'><ListItemText primary="Add Prodcut" /></span> 
        </ListItem>
        
        <ListItem button onClick={()=>handleClick(8)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <span className='span-span-list-text'><ListItemText primary="User Table" /></span>
        </ListItem>

    
        <ListItem button onClick={()=>handleClick(11)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <span className='span-span-list-text'><ListItemText primary="Log Out" /></span>    
        </ListItem>

    </div>
  )
}
