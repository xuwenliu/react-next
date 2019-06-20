import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

Router.events.on('routeChangeStart', (url) => {
    if (url == '/list' || url == '/l') {
        window.location.href = './nopermission';
    }
})

export default (props) => {
    const { title = "默认title", children } = props;
    return (
        <div>
            <Head>
                <title>{ title }</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <div>
                <ul>
                    <li><Link href="/" prefetch>首页</Link></li>
                    <li><Link as="l" href="/list" prefetch>列表</Link></li>
                    <li><Link as='f' href="/films" prefetch>电影</Link></li>
                </ul>
            </div>
            { children }
        </div>
    )
}