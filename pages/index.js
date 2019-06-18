import React from 'react';
import '../styles/index.css';
import Head from '../components/head';

export default class Index extends React.Component{
    render() {
        return (
            <Head title="我是首页">
                <div className="first">Welcome to next.js!</div>
            </Head>
        )
    }
}