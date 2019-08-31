import React from 'react';
import {Button} from '@material/react-button';
import './MiddleButton.css';

interface IMiddleButtonProp {
    text: string,
    onClick: () => void,
}

export const MiddleButton = ({text, onClick}: IMiddleButtonProp) => {
    return (
        <div className={'MiddleButton'}>
            <Button raised className={'MiddleButtonChild'} onClick={onClick}>{text}</Button>
        </div>
    );
};