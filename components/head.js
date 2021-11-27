import Head from "next/head"
export default function NHead(title) {
    return (
        <Head>
        <title>{ title.name }</title>
        <link rel = "icon" href="/favicon.ico" />
        <link rel = "preload"
              href = "/fdragon-quest-ds.ttf"
              as = "font"
              crossOrigin = ""/>
        </Head>
    )
}