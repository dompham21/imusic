import { toast } from 'react-toastify';

export const toastError = error => {
    if (error !== null && typeof error !== 'undefined' && error !== '') {
        toast.error(error);
    }
};

export const toastSuccess = message => {
    if (message !== null && typeof message !== 'undefined' && message !== '') {
        toast.success(message);
    }
};
