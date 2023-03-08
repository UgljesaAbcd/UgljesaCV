const status = {
  success: 'success',
  error: 'error',
  info: 'info',
  warning: 'warning',
  none: undefined
};

const DEFAULT_ERROR_MESSAGE = 'Something went wrong.';

const UPLOAD_TOAST_INITIAL_STATE = {
  open: false,
  message: '',
  status: status.none
};

const UPLOAD_TOAST_SUCCESS_STATE = {
  open: true,
  message: 'Upload done.',
  status: status.success
};

const REPLACE_TOAST_SUCCESS_STATE = {
  open: true,
  message: 'Replace done.',
  status: status.success
};

const UPLOAD_TOAST_ERROR_STATE = {
  open: true,
  message: DEFAULT_ERROR_MESSAGE,
  status: status.error
};

export {
  UPLOAD_TOAST_INITIAL_STATE,
  UPLOAD_TOAST_SUCCESS_STATE,
  REPLACE_TOAST_SUCCESS_STATE,
  UPLOAD_TOAST_ERROR_STATE,
  DEFAULT_ERROR_MESSAGE
};
