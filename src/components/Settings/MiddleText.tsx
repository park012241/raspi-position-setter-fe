import React from 'react';
import './MiddleText.css';

interface IMiddleTextProp {
    text: string;
}

export const MiddleText = ({text}: IMiddleTextProp) => {
    return (
        <div className={'MiddleText'}>
            <div className={'MiddleTextChild'}>{text}</div>
        </div>
    );
};