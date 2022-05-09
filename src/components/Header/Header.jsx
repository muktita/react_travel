import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box, Input } from "@material-ui/core";
import searchIcon from "@material-ui/icons/Search";
import useStyle from "./style.js"

const Header = () => {
    const classes = useStyle();
    return (
        <AppBar position = "relaive" style={{background: "#2E3B55"}}>
            <Toolbar className = {classes.toolbar}>
                <Typography variant ="h5" className="classes.title">
                    Travel Adivsor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore New Places
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <searchIcon/>
                            </div>
                            <Input placeholder="Search..." classes={{root: classes.inputRoot, input: classes.input}}  />
                        </div>
                    {/*</Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default Header;