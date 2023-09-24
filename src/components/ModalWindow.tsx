import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";
import clsx from "clsx";
import {ReactComponent as Cross} from "../assets/closeSign.svg";
interface ModalProps {
    show: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    children: React.ReactNode;
    confirmButtonText?: string;
    cancelButtonText?: string;
}

const ModalWindow = ({show, onClose, onConfirm, children, confirmButtonText, cancelButtonText} :ModalProps) => {

    return (
        <div className={clsx('modal-window-properties',
                {
                    'show' : show,
                })}>
            <div className={'modal-window-content'}>
                {children}
                <button className={'modal-window-closeButton'} onClick={onClose}>
                    <Cross
                        className={''}
                        width={25}
                        height={25}
                    />
                </button>
            </div>

        </div>
    );
};

export default ModalWindow;