import React, { useState } from 'react';
import '../styles/list.scss';

export default () => {
    const [list, setList] = useState([1, 2, 3, 4, 5]);

    return (
        <ul>
            {
                list.map(item => (
                    <li key={item}>{item}</li>
                ))
            }
        </ul>
    )
}