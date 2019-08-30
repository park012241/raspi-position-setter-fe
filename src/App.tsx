import React from 'react';
import './App.css';
import {Keypad} from './components/Keypad';

interface IAppProp {
}

interface IAppState {
}

class App extends React.Component<IAppProp, IAppState> {
    constructor(prop: IAppProp) {
        super(prop);
        this.state = {};
    }

    private valueHandler(value: number) {
        console.log(`Value: ${value}`);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="App">
                <Keypad onEnter={this.valueHandler}/>
            </div>
        );
    }
}

export default App;
