import {Config, IConfigProp} from './Settings/Config';
import React from 'react';
import './Settings.css';

interface ISettingsProp {
    target?: keyof ISettingsState;
    onConfButton: (target: string) => void,
    config: ISettingsState;
}

interface ISettingsState {
    speed: number;
    offset: number;
}

export class Settings extends React.Component<ISettingsProp> {
    private readonly settings: IConfigProp<ISettingsState>[];

    constructor(props: ISettingsProp) {
        super(props);
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
        this.props.onConfButton(name);
    }

    render() {
        return (
            <div className={'Settings'}>
                <div className={'Configs'}>
                    {this.settings.map((e) => {
                        return (
                            <Config
                                key={e.name.origin}
                                value={this.props.config[e.name.origin] || 0}
                                unit={e.unit}
                                name={{
                                    origin: e.name.origin,
                                    userFriend: e.name.userFriend,
                                }}
                                highlighted={this.props.target === e.name.origin}
                                onClick={this.configButtonHandler.bind(this)}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}