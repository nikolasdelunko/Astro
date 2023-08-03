import { useDispatch, useSelector } from "react-redux";
import {
  setConfirmOpen,
  setConfirmText,
} from "../../store/helpers/helpersSlice";

let resolveCallback;

function useConfirm() {
  const dispatch = useDispatch();
  const modalConfirm = useSelector((state) => state.helpers.modalConfirm);

  const onConfirm = () => {
    closeConfirm();
    resolveCallback(true);
  };

  const onCancel = () => {
    closeConfirm();
    resolveCallback(false);
  };

  const confirm = async (text) => {
    dispatch(setConfirmText(text));
    dispatch(setConfirmOpen(true));
    return new Promise((resolve, reject) => {
      resolveCallback = resolve;
    });
  };

  const closeConfirm = () => {
    dispatch(setConfirmOpen(false));
  };

  return { confirm, onConfirm,  onCancel, modalConfirm};
}

export default useConfirm;
