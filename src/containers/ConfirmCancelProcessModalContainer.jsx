import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import ConfirmModal from "../components/ConfirmModal";
import { processor } from "../redux";

const selectors = createStructuredSelector({
  isOpen: processor.selectors.confirmCancelProcessModalIsOpen
});

const ConfirmCancelProcessModalContainer = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(selectors);

  const closeModal = React.useCallback(() => {
    dispatch(processor.actions.closeConfirmCancelProcessModal());
  }, [dispatch]);

  const cancelProcess = React.useCallback(() => {
    dispatch(processor.actions.cancelProcess());
  }, [dispatch]);

  return (
    <ConfirmModal
      title="Confirmar cancelamento do processo"
      isOpen={isOpen}
      cancelFn={closeModal}
      confirmFn={cancelProcess}
    >
      Deseja realmente cancelar este processo?
    </ConfirmModal>
  );
};

export default ConfirmCancelProcessModalContainer;
