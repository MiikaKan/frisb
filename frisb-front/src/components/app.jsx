import React, { Component } from "react";
import MainMenu from "./mainmenu";
import AppBar from "./appbar/appbar";

class App extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <MainMenu />
            </div>
        );
    }
}

export default App;
