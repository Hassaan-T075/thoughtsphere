import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const usePost = (url, body) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const token = useSelector((state) => state.active.token);

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
                console.log(response.data)
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



export default usePost;
