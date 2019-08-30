import React from 'react';
import './App.css';
import {Keypad} from './components/Keypad';

class App extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="App">
                <Keypad onEnter={console.log}/>
            </div>
        );
    }
}

export default App;
