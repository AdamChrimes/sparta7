import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <>
      <Head>
        <title>Thanks - Sparta7</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/logo-300x300.png" width="140" height="43" alt="" />
          </a>
        </div>
      </nav>

      <div className="container">

        <main className="main">

            <h1 className={styles.title}>Your Sparta7 journey begins now</h1>
            <p className={styles.description}>
              Thanks for getting touch, we'll get back to you soon.
            </p>
            <p className={styles.description}>
              <Link href="/">
                <a>Return to the consultation form</a>
              </Link>
            </p>

        </main>

      </div>

    </>
  )
}
