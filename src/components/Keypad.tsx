import React from 'react';
import '@material/react-button/dist/button.css';
import './Keypad.css';
import {Button} from '@material/react-button';
import {Backspace, Clear, Done} from '@material-ui/icons';

interface IKeypadProp {
    onEnter: (value: number) => void,
    onValueEdited?: (value: number) => void,
}

interface IKeypadState {
    value: number,
}

export class Keypad extends React.Component<IKeypadProp, IKeypadState> {
    private readonly text = [
        <Clear/>,
        '',
        '',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        <Backspace/>,
        '0',
        <Done/>,
    ];

    constructor(prop: IKeypadProp) {
        super(prop);
        this.state = {
            value: 0,
        };
    }

    private clear() {
        console.log('Clear');
        this.setState({value: 0});
    }

    private backspace() {
        console.log('Backspace');
        this.setState((state)=>({value: Math.floor(state.value / 10)}));
    }

    private number(n: number) {
        console.log(`Number: ${n}`);
        this.setState((state)=>({value: state.value * 10 + n}));
        if (this.props.onValueEdited) {
            this.props.onValueEdited(this.state.value);
        }
    }

    private enter() {
        this.props.onEnter(this.state.value);
    }

    private handler(id: number) {
        switch (id) {
            case 0:
                this.clear();
                break;
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                this.number(id - 2);
                break;
            case 13:
                this.number(0);
                break;
            case 12:
                this.backspace();
                break;
            case 14:
                this.enter();
                break;
        }
    }

    render() {
        return (
            <div className={'keypad'}>
                <div className={'keypad-value'}>{this.state.value !== 0 ? this.state.value : 0}</div>
                <div className={'keypad-wrap'}>
                    {this.text.map((e, i) => {
                        return (
                            <Button raised className={'keypad-key'} style={{
                                gridArea: `${Math.floor((i / 3) + 2).toString()} / ${i % 3 + 1}`,
                            }} onClick={() => {
                                this.handler(i);
                            }} key={i}>{e}</Button>
                        );
                    })}
                </div>
            </div>
        );
    }
}