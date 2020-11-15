import globe from './globe.gif';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

export default class App extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div className="App">
                <header>
                    <br/>
                    <img src={globe} alt="globe"/>
                    <h2>
                        Select a language:
                    </h2>
                   
                </header>
                <ItemMenu>

                </ItemMenu>
            </div>
        );
    }
}

class ItemMenu extends React.Component {

    constructor(props) {
        super(props)

        this.state = { selected: null }


    }

    render() {
        const sayhi = () => {
            if (this.state.selected==="English") {
                alert("Hello world!")
            }
            else if (this.state.selected==="Spanish") {
                alert("¡Hola Mundo!")
            }
            else if (this.state.selected==="German") {
                alert("Hallo Welt!")
            }
            else if (this.state.selected==="Hebrew") {
                alert("שלום עולם!")
            }
            else if (this.state.selected==="Chinese") {
                alert("你好，世界！")
            }
            else {
                alert("Please select a language to continue.")
            }
             
            
            }
        const languages = ["English", "Spanish", "German", "Hebrew", "Chinese"];
        const listitems = languages.map((language) => <ListGroup.Item action onClick={() => { this.state.selected = language }}>{language}</ListGroup.Item>)
        return (
            <ListGroup >
                {listitems}
            <ListGroup.Item action onClick={ sayhi}> <b>Continue {'>'}</b> </ListGroup.Item>

        </ListGroup>)
    }

}
