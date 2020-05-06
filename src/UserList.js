import React, { Component } from 'react';
import FormList from './FormList';
import SideDrawer from './SideDrawer';
import UserTable from './UserTable';
import EditForm from './EditForm';
class UserList extends Component {
   constructor(props){
       super(props)
       this.state={
           users:[
               {id:1,fname:'Mike',lname:'Ross',uname:'Mross',checked:false, boxed:false},
               {id:2,fname:'Sike',lname:'Toss',uname:'Stoss',checked:false, boxed:false},
               {id:3,fname:'Hike',lname:'Koss',uname:'Hkoss',checked:false, boxed:false},
           ],
           toUpdate:false,
           addUser:false,
           isEditing:false,
          
           updateText:{}
       }

   }

   handleCheckbox=(id)=>{
       let users = this.state.users.map(u=> u.id!==id? {...u,checked:!u.checked,boxed:false}:{...u})
      
       this.setState({users,isEditing:!this.state.isEditing},()=>{
           let newU= this.state.users.map(u=> u.id===id?{...u,boxed:!u.boxed}:{...u});
           this.setState({users:newU})
       })
       
       
      
   }
    newUser=(fname,lname,uname)=>{
        let user = {id:4,fname:fname,lname:lname,uname:uname,checked:false,boxed:false}
       this.setState({users:[...this.state.users,user]})
      
    }
    addUser=()=>{

        this.setState({addUser:true,toUpdate:false,isEditing:false},()=>{
            let u=this.state.users.map(u=>({...u,boxed:false ,checked:false}))
            this.setState({users:u})
        })

   }
   updateUser=()=>{
   
       this.setState({addUser:false,toUpdate:true})
   }
 
  updateUserInfo=(id,fname,lname,uname,checked,boxed)=>{
      let uUser = this.state.users.map(u=>u.id===id ?{...u,fname:fname,lname:lname,uname:uname,checked:false,boxed:false}:{...u})
      this.setState({users:uUser,isEditing:!this.state.isEditing}
        ,()=>{
            let u=this.state.users.map(u=>({...u,boxed:false ,checked:false}))
            this.setState({users:u})
      }
      )
      
      
  }
   
  updatetext=(id)=>{
    let utext =this.state.users.filter(u=>u.id===id)[0];
    this.setState({updateText:utext})
    console.log(this.state.updateText)
  }
  deleteUser=(id)=>{
      let uN= this.state.users.filter(u=> u.id!==id)
      this.setState({users:uN,isEditing:false},()=>{
        let u=this.state.users.map(u=>({...u,boxed:false ,checked:false}))
        this.setState({users:u})

      })
  }
    render() { 
        return (  
        
            <div>
            <SideDrawer updateUser={this.updateUser} addUser={this.addUser}/>
            {this.state.addUser && <FormList add={this.newUser}/>}
            {this.state.isEditing && <EditForm deleteUser={this.deleteUser} updateInfo={this.updateUserInfo} upt={this.state.updateText}/>}
            <UserTable isEditing={this.state.isEditing} updatetext={this.updatetext} handleCheckbox={this.handleCheckbox} users={this.state.users} update={this.state.toUpdate}/>
            </div>
        );
    }
}
 
export default UserList;