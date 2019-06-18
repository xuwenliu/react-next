import Head from 'next/head';

export default (props) => {
    const { title = "默认title", children } = props;
    return (
        <div>
            <Head>
                <title>{ title }</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            { children }
        </div>
    )
}