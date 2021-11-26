import { useState, useEffect } from 'react';

// Get Team Information From JSON 
export const useDoctors = () => {
    const [getDoctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch("./dentalinfo.json")
            .then(response => response.json()
                .then(data => {
                    setDoctors(data.Doctors)
                }))
    }, [])
    return [getDoctors, setDoctors]
}