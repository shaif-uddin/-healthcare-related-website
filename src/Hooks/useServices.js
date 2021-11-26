import { useState, useEffect } from 'react';
export const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./dentalinfo.json')
            .then(response => response.json())
            .then(data => setServices(data.Services))
    }, [])
    return [services, setServices]
}
