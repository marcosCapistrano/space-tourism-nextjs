import type { AppProps } from 'next/app'
import { Barlow, Barlow_Condensed, Bellefair, Inter } from 'next/font/google'
import Layout from '../components/Layout'
import '@/styles/globals.css'

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--ff-serif"
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--ff-sans-normal"
})

const barlowCond = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--ff-sans-cond"
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --ff-serif: ${bellefair.style.fontFamily};
          --ff-sans-normal: ${barlow.style.fontFamily};
          --ff-sans-cond: ${barlowCond.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
