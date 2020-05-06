import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { withStyles } from '@material-ui/core/styles';
import styles from './SideStyles';
import Button from '@material-ui/core/Button';

class SideDrawer extends Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes,addUser,updateUser } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <List>
                   <ListItem>
                   <Button  variant="contained" onClick={addUser}  size="medium" color="primary" className={classes.margin}>
                    Add  User
                   </Button>
                    
                    </ListItem> 
                    <ListItem>
                   <Button   variant="contained" onClick={updateUser}   size="medium" color="primary" className={classes.margin}>
                    UpdateUser
                   </Button>
                    
                    </ListItem> 
                </List>
               
            </div>
        );

        return (
            <div className={classes.root}>
                <CssBaseline />

                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            // anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>

            </div>
        );
    }
}


export default withStyles(styles)(SideDrawer);