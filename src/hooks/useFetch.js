import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [dados, setDados] = useState(null);

    // method POST
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // Config POST
    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data),
            });
        };
    };
    
    // method GET
    useEffect(() => {
        const dadosFetch = async () => {

            const res = await fetch(url);
            const dataJson = await res.json();

            setDados(dataJson);

        };

        dadosFetch();

    }, [url, callFetch]);

    // Hook POST

    useEffect(() => {

        const httpRequest = async () => {
            if(method === "POST") {

                let fecthOptions = [ url, config ];
                const res = await fetch(...fecthOptions);
                const json = await res.json();
                setCallFetch(json);
                }
        }

        httpRequest();

    }, [config]);

    return { dados, httpConfig };
};