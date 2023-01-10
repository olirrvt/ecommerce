import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [dados, setDados] = useState(null);
    
    useEffect(() => {
        const dadosFetch = async () => {

            const res = await fetch(url);
            const dataJson = await res.json();

            setDados(dataJson);

        };

        dadosFetch();

    }, [url]);

    return { dados };
};