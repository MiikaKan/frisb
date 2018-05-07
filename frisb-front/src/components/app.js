import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import ScoreCard from "components/ScoreCard";
import ActionButton from "components/ActionButton";

class App extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" color="default">
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

export default App;
