'use client'

import React, { useEffect, useState } from 'react';

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/example/')  // Ваш Django API endpoint
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Ошибка:', error));
    }, []);

    return (
        <div>
            {data ? <p>{data.message}</p> : <p>Загрузка...</p>}
        </div>
    );
}