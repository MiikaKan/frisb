import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import ScoreCard from "components/ScoreCard";
import ActionButton from "components/ActionButton";
import { withStyles } from "material-ui";
import purple from "material-ui/colors/purple";

const styles = theme => ({
    bg: {
        backgroundColor: theme.palette.secondary.light
    }
});

class App extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.bg}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Title
                        </Typography>
                    </Toolbar>
                </AppBar>
                <ScoreCard />
                <ActionButton />
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(App);
