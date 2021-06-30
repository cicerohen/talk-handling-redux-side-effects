import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import ConfirmModal from "../components/ConfirmModal";
import { processor } from "../redux";

const selectors = createStructuredSelector({
  isOpen: processor.selectors.confirmStartProcessModalIsOpen
});

const ConfirmStartProcessModalContainer = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(selectors);

  const closeModal = React.useCallback(() => {
    dispatch(processor.actions.closeConfirmStartProcessModal());
  }, [dispatch]);

  const startProcess = React.useCallback(() => {
    dispatch(processor.actions.startProcess());
  }, [dispatch]);

  return (
    <ConfirmModal
      title="Confirmar início do processo"
      isOpen={isOpen}
      cancelFn={closeModal}
      confirmFn={startProcess}
    >
      Deseja iniciar um processo ?
    </ConfirmModal>
  );
};

export default ConfirmStartProcessModalContainer;
