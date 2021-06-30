import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import ConfirmModal from "../components/ConfirmModal";
import { processor } from "../redux";

const selectors = createStructuredSelector({
  isOpen: processor.selectors.confirmFinishProcessModalIsOpen
});

const ConfirmFinishProcessModalContainer = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(selectors);

  const closeModal = React.useCallback(() => {
    dispatch(processor.actions.closeConfirmFinishProcessModal());
  }, [dispatch]);

  const startProcess = React.useCallback(() => {
    dispatch(processor.actions.startProcess());
  }, [dispatch]);

  return (
    <ConfirmModal
      title="O processo foi concluído"
      isOpen={isOpen}
      cancelFn={closeModal}
      confirmFn={startProcess}
    >
      Deseja iniciar um novo processo?
    </ConfirmModal>
  );
};

export default ConfirmFinishProcessModalContainer;
