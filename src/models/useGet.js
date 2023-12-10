import { useState, useEffect } from 'react';
import axios from 'axios';

const useGet = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const storedData = localStorage.getItem('userdata')
    const userdata = storedData ? JSON.parse(storedData) : {};
    const token = userdata.token

    useEffect(() => {
        const source = axios.CancelToken.source();

        const getRequest = async () => {
            try {
                const response = await axios.get(url, {
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
            getRequest();
        }

        return () => {
            source.cancel("Component unmounted or dependencies changed");
        };
    }, [url, token]);

    return { data, isPending, error };
};



export default useGet;
