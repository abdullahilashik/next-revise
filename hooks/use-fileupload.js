import { useState, useCallback } from 'react';
import axios from 'axios';

/**
 * Custom hook for uploading files with status updates.
 * @param {string} apiUrl - The API endpoint to upload the file.
 * @returns {object} - An object containing the upload state and functions.
 */
const useFileUpload = (apiUrl) => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    const uploadFile = useCallback(
        async (file) => {
            setIsUploading(true);
            setUploadProgress(0);
            setIsSuccess(false);
            setError(null);

            try {
                const formData = new FormData();
                formData.append('file', file);

                await axios.post(apiUrl, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    onUploadProgress: (progressEvent) => {
                        const percentCompleted = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        setUploadProgress(percentCompleted);
                    },
                });

                setIsSuccess(true);
            } catch (err) {
                setError(err.response?.data?.message || 'An error occurred during file upload.');
            } finally {
                setIsUploading(false);
            }
        },
        [apiUrl]
    );

    return {
        uploadProgress,
        isUploading,
        isSuccess,
        error,
        uploadFile,
    };
};

export default useFileUpload;
