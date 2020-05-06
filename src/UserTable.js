import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';



const styles = theme => ({
  root: {
    width: "60%",
    marginTop: 30,
    marginLeft:300
    
    
  }
});



function UserTable(props) {
  const { classes,update,users ,handleCheckbox,updatetext} = props;

  return (
    <div >
      <Table className={classes.root} >
        <TableHead>
          <TableRow>
          <TableCell align="right">Id</TableCell>
           <TableCell align="right">FirstName</TableCell>
            <TableCell align="right">LastName</TableCell>
            <TableCell align="right">UserName</TableCell>
           {update && <TableCell align="right">Active</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody >
          {users.map(u => (
            <TableRow key={u.id}>
                <TableCell align="right">{u.id}</TableCell>
              <TableCell align="right">{u.fname}</TableCell>
              <TableCell align="right">{u.lname}</TableCell>
              <TableCell align="right">{u.uname}</TableCell>
            { update && <TableCell align="right">{<Checkbox 
            onClick={()=>{
                handleCheckbox(u.id)
                updatetext(u.id)
               

            
            }} 
            disabled={u.checked}
            checked={u.boxed} />}
            </TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}


export default withStyles(styles)(UserTable);