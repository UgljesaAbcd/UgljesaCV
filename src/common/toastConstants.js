const status = {
  success: 'success',
  error: 'error',
  info: 'info',
  warning: 'warning',
  none: undefined
};

const DEFAULT_ERROR_MESSAGE = 'Something went wrong.';

const TOAST_INITIAL_STATE = {
  open: false,
  message: '',
  status: status.none
};

const TOAST_ERROR_STATE = {
  open: true,
  message: DEFAULT_ERROR_MESSAGE,
  status: status.error
};

const TOAST_WARNING_STATE = {
  open: true,
  message: DEFAULT_ERROR_MESSAGE,
  status: status.warning
};

const TOAST_SUCCESS_STATE = {
  open: true,
  message: 'Done successfully.',
  status: status.success
};

const TOAST_INFO_STATE = {
  open: true,
  message: '',
  status: status.info
};

export {
  TOAST_INITIAL_STATE,
  TOAST_ERROR_STATE,
  TOAST_WARNING_STATE,
  TOAST_SUCCESS_STATE,
  TOAST_INFO_STATE
};
