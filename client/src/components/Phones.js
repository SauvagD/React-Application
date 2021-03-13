import React from 'react';
import Button from '@material-ui/core/Button';
const Phones = props => {
    return(
        <li
        onClick={()=>props.onSelect(props.phone)}
        className={props.phone === props.selectedPhone ? 'selected' : ''}
        >
           
           <div>
               <div>{props.phone.id}</div>
               <div>{props.phone.name}</div>
               <div>{props.phone.type}</div>
                <div>{props.phone.price}</div>
           </div> 
            <Button variant="contained" color="secondary"
            // onClick={(e)=>props.onDelete(e, props.phone)}
            >Delete</Button>
        </li>
    )
}

export default Phones;