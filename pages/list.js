import React, { useState,useEffect } from "react";
import "../styles/list.scss";
import Head from "../components/head";

export default (props) => {
    const [list, setList] = useState([1, 2, 3, 4, 5]);

    const defaultCount = () => {
        return props.defaultCount || 0;
    }

    const defaultSize = () => ({
        width: 0,
        height: 0,
    })

    const [count, setCount] = useState(defaultCount);
    const [name, setName] = useState("小计");
    const [size, setSize] = useState(defaultSize);

    const onResize = () => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        })
    }

    useEffect(() => {
        document.title = count;
    })

    useEffect(() => {
        window.addEventListener('resize', onResize, false);

        return () => {
            window.removeEventListener('resize', onResize, false);
        }
    }, []);
    
    useEffect(() => {
        console.log('count', count);
    },[count]) //1.空数组 只第一次进来会执行 2.不传 每次都执行  3.[count] 只有count改变了才会执行

    return (
        <Head>
            <ul>
                {list.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <button onClick={() => setCount(count + 1)}>
                Click-{count},name-{name}
            </button>
            <h2>{size.width + 'X' + size.height}</h2>
        </Head>
    );
};
