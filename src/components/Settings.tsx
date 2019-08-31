import {Config, IConfigProp} from './Settings/Config';
import React from 'react';
import './Settings.css';

interface ISettingsProp {
}

interface ISettingsState {
    target: keyof ISettingsState;
    speed: number;
    offset: number;
}

export class Settings extends React.Component<ISettingsProp, ISettingsState> {
    private readonly settings: IConfigProp<ISettingsState>[];

    constructor(props: ISettingsProp) {
        super(props);
        this.state = {
            target: 'target',
            speed: 0,
            offset: 0,
        };
        this.settings = [
            {
                name: {
                    origin: 'speed',
                    userFriend: '속도',
                },
                unit: 'Hz',
                onClick: this.configButtonHandler,
                value: 0,
                highlighted: false,
            }, {
                name: {
                    origin: 'offset',
                    userFriend: '오프셋',
                },
                unit: 'Bd',
                onClick: this.configButtonHandler,
                value: 0,
                highlighted: false,
            },
        ];
    }

    private configButtonHandler(name: keyof ISettingsState) {
        this.setState({
            target: name,
        });
    }

    render() {
        return (
            <div className={'Settings'}>
                <div className={'Configs'}>
                    {this.settings.map((e) => {
                        return (
                            <Config value={this.state[e.name.origin]} unit={e.unit} name={{
                                origin: e.name.origin,
                                userFriend: e.name.userFriend,
                            }} highlighted={this.state.target === e.name.origin}
                                    onClick={this.configButtonHandler.bind(this)}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}