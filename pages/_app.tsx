import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import ym from 'react-yandex-metrika';
import {YMInitializer} from "react-yandex-metrika";

export default function App({ Component, pageProps, router }: AppProps): JSX.Element {
  
  // router.events.on('routeChangeComplete',(url:string)=>{
  //   if(typeof window !== 'undefined'){
  //     ym('hit',url);
  //   }
  // })

  return (
		<>
			<Head>
				<title>MyTop</title>
				<meta
					property="og:url"
					content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
				/>
				<meta property="og:locale" content="ru_RU" />
				<link rel="preconnect" href="https://mc.yandex.ru" />
			</Head>
			<YMInitializer
				accounts={[]}
				options={{ defer: true, webvisor: true }}
				version="2"
			/>
			<Component {...pageProps} />
		</>
  );
}
