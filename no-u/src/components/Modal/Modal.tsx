import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";

import "./styles.css";

type Props = {
  children: React.ReactNode;
  onClose: MouseEventHandler<HTMLDivElement>;
};

const Modal = ({ children, onClose }: Props) => {
  return (
    <div className="modal-container">
      <div className="background" onClick={onClose}></div>
      <div className="children">{children}</div>
    </div>
  );
};

export default Modal;
