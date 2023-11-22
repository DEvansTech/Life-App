import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import {
  ZedPayPage,
  AddBalancePage,
  TransactionDetailsPage,
  SendMoneyPage,
} from "./pages";

interface Props {
  isShow: boolean;
  onClose: () => void;
}

const ZedpayModal: React.FC<Props> = ({ isShow, onClose }) => {
  const [page, setPage] = useState("main");

  useEffect(() => {
    setPage("main");
  }, [isShow]);

  return (
    <Modal
      isVisible={isShow}
      avoidKeyboard
      onBackdropPress={onClose}
      className="justify-end m-0"
    >
      {page === "main" ? (
        <ZedPayPage onClose={onClose} onPageReplace={(page) => setPage(page)} />
      ) : page === "add_balance" ? (
        <AddBalancePage
          onClose={onClose}
          onPageReplace={(page) => setPage(page)}
        />
      ) : page === "transaction_details" ? (
        <TransactionDetailsPage onClose={onClose} type="receive" />
      ) : page === "send_money" ? (
        <SendMoneyPage
          onClose={onClose}
          onPageReplace={(page) => setPage(page)}
        />
      ) : null}
    </Modal>
  );
};

export default ZedpayModal;
