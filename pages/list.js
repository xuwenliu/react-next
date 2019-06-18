import React, { useState } from "react";
import "../styles/list.scss";
import Head from "../components/head";

export default () => {
    const [list, setList] = useState([1, 2, 3, 4, 5]);

    return (
        <Head>
            <ul>
                {list.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </Head>
    );
};
