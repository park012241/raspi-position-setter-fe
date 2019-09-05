import React from 'react';
import './MiddleText.css';

interface IMiddleTextProp {
    text: string;
    width?: string;
}

export const MiddleText = ({text, width}: IMiddleTextProp) => {
    return (
        <div className={'MiddleText'}
             style={width ? {
                 width: width,
             } : {
                 flex: 'auto',
             }}
        >
            <div className={'MiddleTextChild'}>{text}</div>
        </div>
    );
};