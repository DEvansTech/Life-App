import React, { useState } from "react";
import Modal from "react-native-modal";
import { ZedPayPage, AddBalancePage } from "./pages";

interface Props {
  isShow: boolean;
  onClose: () => void;
}

const ZedpayModal: React.FC<Props> = ({ isShow, onClose }) => {
  const [page, setPage] = useState("main");
  return (
    <Modal
      isVisible={isShow}
      avoidKeyboard
      onBackdropPress={onClose}
      className="justify-end m-0"
    >
      {page === "main" ? (
        <ZedPayPage onClose={onClose} onPageReplace={setPage} />
      ) : (
        <AddBalancePage onClose={onClose} onPageReplace={setPage}/>
      )}
    </Modal>
  );
};

export default ZedpayModal;
