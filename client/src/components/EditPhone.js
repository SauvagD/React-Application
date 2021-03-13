import React from 'react';
import Input from '@material-ui/core/Input';
const EditPhone = props => {
    if(props.selectedPhone){

    
    return (
     <div>
         <div>
             <div>
                 <label>ID: </label>
                 {props.addingPhone?
                        <Input inputProps={{ 'aria-label': 'description' }} 
                 type="number"
                 name="id"
                 placeholder="id"
                 value={props.selectedPhone.id}
                 onChange={props.onChange}
                 />
                 : <label>
                     {props.selectedPhone.id}
                 </label>}
             </div>
             <div>
                 <label>Name: </label>
                    <Input inputProps={{ 'aria-label': 'description' }}
                 name="name"
                 value={props.selectedPhone.name}
                 placeholder="name"
                 onChange={props.onChange}
                 />
                 <div>
                     <label>Type: </label>
                        <Input inputProps={{ 'aria-label': 'description' }}
                     name="type"
                     value={props.selectedPhone.type}
                     placeholder="type"
                     onChange={props.onChange}
                     />
                 </div>
                    <div>
                        <label>Price: </label>
                            <Input inputProps={{ 'aria-label': 'description' }}                  
                            name="price"
                            value={props.selectedPhone.price}
                            placeholder="price"
                            onChange={props.onChange}
                        />
                    </div>
                    <div>
                        <label>Rating: </label>
                        <Input inputProps={{ 'aria-label': 'description' }}
                            name="rating"
                            value={props.selectedPhone.rating}
                            placeholder="rating"
                            onChange={props.onChange}
                        />
                    </div>
                    <div>
                        <label>Warrantly Years: </label>
                        <Input inputProps={{ 'aria-label': 'description' }}
                            name="warranty_years"
                            value={props.selectedPhone.warranty_years}
                            placeholder="warranty_years"
                            onChange={props.onChange}
                        />
                    </div>
                    <div>
                        <label>Available: </label>
                        <Input inputProps={{ 'aria-label': 'description' }}
                            name="available"
                            value={props.selectedPhone.available}
                            placeholder="available"
                            onChange={props.onChange}
                        />
                    </div>
             </div>
         </div>
         <button onClick={props.onCancel}>Cancel</button>
         <button onClick={props.onSave}>Save</button>
     </div> 
    );
    } else {
        return <div/>
    }
}

export default EditPhone;