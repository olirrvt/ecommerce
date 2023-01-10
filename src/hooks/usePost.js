import { useEffect, useState } from "react";

export const usePost = (url, body) => {

    const [ insert, setInsert ] = useState(null);

    useEffect(() => {

        const httpPost = async () => {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(body),
            });

            const dataJson = await res.json();

            setInsert(dataJson);
        };

        httpPost();

    }, [url, body]);

    return { insert };
};