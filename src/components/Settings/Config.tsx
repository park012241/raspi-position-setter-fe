import React from 'react';
import './Config.css';
import {MiddleText} from './MiddleText';
import {MiddleButton} from './MiddleButton';

export interface IConfigProp<T> {
    name: {
        origin: keyof T;
        userFriend: string;
    };
    unit: string;
    onClick: (name: keyof T) => void;
    value?: number | string,
    highlighted: boolean,
}

export function Config<T>(props: IConfigProp<T>) {
    return (
        <div className={'Config'} style={{
            background: props.highlighted ? 'Highlight' : 'none',
        }}>
            <MiddleText text={props.name.userFriend}/>
            <MiddleText text={`${props.value}${props.unit}`}/>
            <MiddleButton text={'설정하기'} onClick={() => {
                props.onClick(props.name.origin);
            }}/>
        </div>
    );
}