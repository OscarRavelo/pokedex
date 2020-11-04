import  {useState, useEffect, useCallback} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const setingLoading = useCallback( () => {
    setLoading( !loading)
    }, [ loading] )
    useEffect(() => {
        const fetching = async () => {
            await fetch(url).then( json => json.json()).then(d => setData(  d)).then(a => setingLoading() )
            
        }

        fetching();
    }, [url ])

    return {
        data,
        loading,
    }

}

export default useFetch