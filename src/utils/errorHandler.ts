import { toast } from 'react-toastify';

export const errorHandler = (error: any) => {
  toast(error.response?.data?.message || error.message, {
    type: 'error',
  });
};
