import { toast } from 'react-toastify';

export const errorHandler = (error: { message: string }) => {
  toast(error.message, {
    type: 'error',
  });
};
