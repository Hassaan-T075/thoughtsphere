import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)
    const token = useSelector((state) => state.active.token);

    useEffect(() => {
        const abortCont = new AbortController();
        console.log(token)

        fetch(url, {
            signal: abortCont.signal,
            headers: { 'Authorization': `Bearer ${token}` }
        }).then(res => {
            if (!res.ok) {
                throw Error('could not fetch data')
            }
            return res.json(); //.json() parses the res json object into javascript object 
        })
            .then(data => {
                setIsPending(false)
                console.log(data)
                setData(data)
                setError(null)
            })
            .catch(err => {
                if (err.name === 'AbortError') { // if error is abort error
                    console.log('fetch aborted')
                }
                else { // if error is network / connection error
                    setError(err.message)
                    setIsPending(false)
                }
            })
        return () => abortCont.abort() //to counter react state update on un-mounted component, abort controller is used 
    }, [url,token])

    return { data, isPending, error }
}

export default useFetch