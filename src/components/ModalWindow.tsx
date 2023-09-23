import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";
import clsx from "clsx";

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
        <div className={clsx('modal-windows-properties',
                {
                    'show' : show,
                })}>
            <div className={'modal-windows-content'}>
                {children}
                <button onClick={onClose}>
                    Close.
                </button>
            </div>

        </div>
    );
};

export default ModalWindow;