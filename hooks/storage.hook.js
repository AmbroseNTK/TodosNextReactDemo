import { useState, useEffect } from 'react';

export default function useLocalStorage(databaseName) {

    const [data, setData] = useState({ data: undefined });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!isLoaded) {
            let rawData = localStorage.getItem(databaseName);
            console.log(rawData);
            if (rawData != null) {
                try {
                    setData(JSON.parse(rawData));
                }
                catch (ex) {
                    console.log(ex);
                    setData({});
                }
                setIsLoaded(true);
            }
            else {
                // Init new data in localstorage
                saveChanged({ data: {} });
                setIsLoaded(true);
            }
        }

    }, [data]);

    function saveChanged(data) {
        localStorage.setItem(databaseName, JSON.stringify(data));
        setData(data);
    }

    return [data, saveChanged, isLoaded];

}