import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sparta7</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Sparta7!
        </h1>

        <p className={styles.description}>
        A new online personal training and coaching platform coming soon.
        </p>
      </main>
    </div>
  )
}
