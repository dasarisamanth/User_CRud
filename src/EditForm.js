import React, { Component } from 'react';

import TextFeild from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import {styles} from './FormListStyles';
import Button from '@material-ui/core/Button';
class EditForm extends Component {
constructor(props){
    super(props)
    this.state = { 
        fname:this.props.upt.fname,
        lname:this.props.upt.lname,
        uname:this.props.upt.uname
       }
}

handlChange=e=>{
    this.setState({[e.target.name]:e.target.value})
}
    
    render() { 
        const {classes,updateInfo,upt,deleteUser}=this.props;
        const{fname,lname,uname}=this.state;
        return ( 
           
            
     
        <>
        <form onSubmit={(e)=>{
            e.preventDefault()
            updateInfo(upt.id,fname,lname,uname,upt.checked,upt.boxed)
            this.setState({fname:"",lname:"",uname:""})
            console.log(upt.checked)
           // handleCheckbox(upt.id)
           

        }} className={classes.formMargin}>
        <TextFeild className={classes.textField} label="FirstName" name="fname" value={fname}  onChange={this.handlChange} margin='dense' autoFocus/>
        <TextFeild className= {classes.textField}  label="LastName" name="lname" value={lname} onChange={this.handlChange} margin='dense' />
        <TextFeild   className={classes.textField} label="UserName" name="uname" value={uname} onChange={this.handlChange}  margin='dense'/>
        <Button type='submit' className={classes.buttonMargin} color='primary' variant='contained'>Update</Button>
        </form>
        <Button onClick={()=>{
            deleteUser(upt.id)
        }} className={classes.buttonMargin} color='primary' variant='contained'>Delete</Button>
       </>
      
    
    
            
             
         );
    }
}

 
export default withStyles(styles)(EditForm);