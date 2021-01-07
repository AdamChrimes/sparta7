import { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);

  return (
      <>
      <Head>
        <title>Sparta7</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SLWD7G5FMK"></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-SLWD7G5FMK');
              `,
          }}
        />
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

          <h1 className={styles.title}>Sparta7</h1>
          <p className={styles.description}>A new online training and boxing coach platform.</p>

          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Free personal coaching consultation</h5>
                  <Link href="/coaching-consultation">
                    <a href="#" class="btn btn-primary">Get a free personal coaching consultation</a>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">14 day challenge</h5>
                  <Link href="/14-day-challenge">
                    <a href="#" class="btn btn-primary">Sign up for the 14 day challenge</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </main>

      </div>

    </>
  )
}
