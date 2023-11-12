import {
  $modalConfirm,
  setConfirmOpen,
  setConfirmText,
} from "../../store/helpersStore";

let resolveCallback;

function useConfirm() {
  const onConfirm = () => {
    closeConfirm();
    resolveCallback(true);
  };

  const onCancel = () => {
    closeConfirm();
    resolveCallback(false);
  };

  const confirm = async (text) => {
    setConfirmText(text);
    setConfirmOpen(true);
    return new Promise((resolve, reject) => {
      resolveCallback = resolve;
    });
  };

  const closeConfirm = () => {
    setConfirmOpen(false);
  };

  return { confirm, onConfirm, onCancel, $modalConfirm };
}

export default useConfirm;
