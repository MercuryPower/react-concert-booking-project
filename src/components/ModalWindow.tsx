import React, {useEffect, useMemo, useRef} from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from "react-bootstrap";
import clsx from "clsx";
import {ReactComponent as Cross} from "../assets/closeSign.svg";
import {createPortal} from "react-dom";
import {modalRootElement} from "../index";

interface ModalProps {
    show: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    children: React.ReactNode;
    confirmButtonText?: string;
    cancelButtonText?: string;
}


const ModalWindow = (({show, onClose, onConfirm, children, confirmButtonText, cancelButtonText} :ModalProps) => {
        const element = useMemo(() => document.createElement('div'), [])

    useEffect(() => {
        if(show && modalRootElement){
            modalRootElement.appendChild(element);
        }
        return () => {
            if(show && modalRootElement){
                modalRootElement.removeChild(element);
            }
        }
    }, [show, element])
    if(show){
        return createPortal(
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
            </div>,
            element)
    }
    return null;
});

export default ModalWindow;