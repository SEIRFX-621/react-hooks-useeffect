import React, { useState, useEffect } from 'react';
import IntervalTicker from './IntervalTicker';

function Name() {
    const [nameUpdateCount, setNameUpdateCount] = useState(0);
    const [ageUpdateCount, setAgeUpdateCount] = useState(0);
    const [user, setUser] = useState({
        name: 'Tammy',
        age: 35
    });

    useEffect(() => {
        // being run after our render
        document.title = `Hello, ${user.name}!`;
    });

    useEffect(() => {
        // being run after our render
        console.log(`Updated name to ${user.name} with dt count of ${nameUpdateCount}`);
    }, [user]);

    const handleNameUpdate = (e) => {
        e.preventDefault();
        const newName = e.target.value;
        setUser({
            ...user,
            name: newName
        });
        let currentCount = nameUpdateCount + 1;
        setNameUpdateCount(currentCount);
    }

    const handleAgeUpdate = (e) => {
        e.preventDefault();
        const newAge = e.target.value;
        setUser({
            ...user,
            age: newAge
        });
        let currentCount = ageUpdateCount + 1;
        setAgeUpdateCount(currentCount);
    }

    return (
        <div>
            <p>User name update count: {nameUpdateCount}</p>
            <p>User age update count: {ageUpdateCount}</p>
            <label>Add a name:</label>
            <input type="text" value={user.name} onChange={handleNameUpdate}/>
            <label>Update user age:</label>
            <input type="text" value={user.age} onChange={handleAgeUpdate}/>
            <IntervalTicker />
        </div>
    )
}

export default Name;