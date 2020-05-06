import React, { Component } from 'react';

import TextFeild from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import {styles} from './FormListStyles';
import Button from '@material-ui/core/Button';
class FormList extends Component {
constructor(props){
    super(props)
    this.state = { 
        fname:"",
        lname:"",
        uname:""
       }
}

handlChange=e=>{
    this.setState({[e.target.name]:e.target.value})
}
    
    render() { 
        const {classes,add}=this.props;
        const{fname,lname,uname}=this.state;
        return ( 
           
            
     
        <>
        <form onSubmit={(e)=>{
            e.preventDefault()
            add(fname,lname,uname)
            this.setState({fname:"",lname:"",uname:""})

        }} className={classes.formMargin}>
        <TextFeild className={classes.textField} label="FirstName" name="fname" value={fname}  onChange={this.handlChange} margin='dense' autoFocus/>
        <TextFeild className= {classes.textField}  label="LastName" name="lname" value={lname} onChange={this.handlChange} margin='dense' />
        <TextFeild   className={classes.textField} label="UserName" name="uname" value={uname} onChange={this.handlChange}  margin='dense'/>
        <Button type='submit' className={classes.buttonMargin} color='primary' variant='contained'>Add</Button>
        </form>
       </>
      
    
    
            
             
         );
    }
}

 
export default withStyles(styles)(FormList);