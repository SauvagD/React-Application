import React, {Component} from 'react'
import Phones from '../components/Phones'
import EditPhone from '../components/EditPhone'
import phonesAPI from '../api'
import { List } from '@material-ui/core';
import Button from '@material-ui/core/Button';
class DisplayPhone extends Component {
constructor(){
    super(); 
    this.state = { phones: [], addingPhone:false }; 
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleEnabledAddMode = this.handleEnabledAddMode.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
}

    componentDidMount(){
        phonesAPI.get()
        .then(json=>{
            this.setState({phones:json});
        });
    }

    handleSelect(phone){
        this.setState({selectedPhone: phone})
    }

    handleChange(event){
        let selectedPhone = this.state.selectedPhone;
        selectedPhone[event.target.name] = event.target.value
        this.setState({selectedPhone: selectedPhone})
    }

    handleCancel(){
        this.setState({selectedPhone: null, addingPhone: false})
    }

    handleSave(){
        let phones = this.state.phones;

        if(this.state.addingPhone){
            phonesAPI.create(this.state.selectedPhone).then(phone=>{
                phones.push(phone)

                this.setState({
                    phones: phones,
                    addingPhone: false,
                    selectedPhone: null
                });
            })
        } else {
            phonesAPI.update(this.state.selectedPhone).then(()=>{
                this.setState({selectedPhone: null});
            })
        }
    }

    handleEnabledAddMode(){
       this.setState({
        addingPhone: true,
        selectedPhone: {id:'', name:'', type:'', price:'', rating:'', warranty_years:'', available:''}
       }) 
    }

    // handleDelete(event, phone){
    //     event.stopPropagation();
    //     console.log(phone);
    //     phonesAPI.delete(phone).then(()=>{
    //         let phones = this.state.phones;
    //         phones = phones.filter(p=>p !== phone);
    //         this.setState({heroes: phones})

    //         if (this.selectedPhone === phone){
    //             this.setState({selectedPhone: null})
    //         }
    //     })
    // }
    render(){
        return(
            <div>
                <List href="#simple-list"> 
{this.state.phones.map(phone => {
    return <Phones 
    phone={phone}
    onSelect = {this.handleSelect}
    selectedPhone={this.state.selectedPhone} 
    // onDelete={this.handleDelete}
    />
})}
                
                <div>
                    <Button variant="contained" color="primary" onClick={this.handleEnabledAddMode}>Add New Hero</Button>
            <EditPhone 
            addingPhone={this.state.addingPhone} 
            selectedPhone={this.state.selectedPhone}
            onChange={this.handleChange}
            onSave={this.handleSave}
            onCancel={this.handleCancel}
            />
                </div>
                </List>
            </div>
        );
    }
}

export default DisplayPhone;