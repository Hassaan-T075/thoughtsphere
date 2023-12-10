import { useState, useEffect } from 'react';
import axios from 'axios';

const usePost = (url, payload) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const storedData = localStorage.getItem('userdata')
    const userdata = storedData ? JSON.parse(storedData) : {};
    const token = userdata.token

    useEffect(() => {
        const source = axios.CancelToken.source();

        const postRequest = async () => {
            try {
                const response = await axios.post(url, payload, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    cancelToken: source.token
                });
                setIsPending(false);
                setData(response.data);
                setError(null);
            } catch (error) {
                if (!axios.isCancel(error)) {
                    setError(error.message);
                    setIsPending(false);
                }
            }
        };

        if (token) {
            postRequest();
        }

        return () => {
            source.cancel("Component unmounted or dependencies changed");
        };
    }, [url, token, payload]);

    return { data, isPending, error };
};

export default usePost;
