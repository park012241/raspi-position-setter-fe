import React from 'react';
import './App.css';
import {Keypad} from './components/Keypad';
import {Settings} from './components/Settings';

interface IAppProp {
}

interface IAppConfig {
    speed: number;
    offset: number;
}

interface IAppState {
    config: IAppConfig;
    target?: keyof IAppConfig;
}

class App extends React.Component<IAppProp, IAppState> {
    constructor(prop: IAppProp) {
        super(prop);
        this.state = {
            config: {
                speed: 0,
                offset: 0,
            },
        };
    }

    private setterHandler(target: keyof IAppConfig) {
        this.setState({
            target,
        });
    }

    private valueHandler(value: number) {
        const target: keyof IAppConfig | undefined = this.state.target;
        if (target) {
            this.setState({
                config: Object.assign(this.state.config, {
                    [target]: value,
                }),
            });
        }
    }

    private resolveHandler(value: number) {
        if (this.state.target) {
            console.log(`Resolved ${this.state.target} : ${value}`);
            this.setState({
                target: undefined,
            });
        } else {
            console.log('Resolve Ignored');
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="App">
                <Settings
                    config={this.state.config}
                    target={this.state.target}
                    onConfButton={this.setterHandler.bind(this) as (target: string) => void}
                />
                <Keypad onEnter={this.resolveHandler.bind(this)} onValueEdited={this.valueHandler.bind(this)}/>
            </div>
        );
    }
}

export default App;
