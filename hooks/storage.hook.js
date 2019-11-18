import { useState, useEffect } from 'react';

export default function useLocalStorage(databaseName) {

    const [data, setData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!isLoaded) {
            let rawData = localStorage.getItem(databaseName);
            console.log(rawData);
            if (rawData != null) {
                try {
                    setData(JSON.parse(rawData));
                }
                catch{
                    setData({});
                }
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