// Attention, 👨‍💻 
// I'm using Axios and Fetch in the same application for studies.
import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [dados, setDados] = useState(null);
    const [ loading, setLoading ] = useState(false);

    // method GET
    useEffect(() => {
        const dadosFetch = async () => {

            setLoading(true);

            const res = await fetch(url);
            const dataJson = await res.json();

            setDados(dataJson);

            setLoading(false);
        };

        dadosFetch();

    }, [url]);

    return { dados, loading };
};