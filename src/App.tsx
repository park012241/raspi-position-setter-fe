import React from 'react';
import './App.css';
import '@material/react-button/dist/button.css';
import {Button} from '@material/react-button';

class App extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="App">
                <Button raised style={{
                    height: '100px',
                    width: '100px',
                }} onClick={() => {
                    console.log('Hello!');
                }} disabled={false}>
                    Hello!
                </Button>
            </div>
        );
    }
}

export default App;
