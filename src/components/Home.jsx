import React from 'react';
import "../styles/app.scss";
import { withStyles } from "@mui/styles";
import {
    Typography
} from "@mui/material";

const styles = (theme) => ({
    h1: {
        color: "red !important",
    }
});

const Home = (props) => {
    const {classes} = props;
    return (
        <div className="container">
            <div className="header">
                <Typography variant="h1" component="h1" className={classes.h1}>Welcome to React application</Typography>
            </div>
        </div>
    )
}

export default withStyles(styles, {withTheme: true})(Home);
