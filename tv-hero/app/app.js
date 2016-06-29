import React from "react";
import Header from "./scripts/views/header";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
