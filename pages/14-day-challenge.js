import { useState, useEffect } from 'react';
import Head from 'next/head'
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
        <title>14 day challenge - Sparta7</title>
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

          <h1 className={styles.title}>Sparta7 - 14 day challenge</h1>

          {success && (
            <div className="alert alert-success" role="alert">
              Thanks for getting in touch - your Sparta7 journey starts here!
            </div>
          )}

          <form name="challenge" method="POST" action="/?success=true" data-netlify="true">
            <input type="hidden" name="form-name" value="challenge" />

            <div className="form-group">
              <label htmlFor="facebook-name">What is your name on Facebook?</label>
              <input type="text" className="form-control" id="facebook-name" name="facebook-name" required />
            </div>

            <div className="form-group">
              <label htmlFor="name">What is your email address?</label>
              <input type="email" className="form-control" id="email" name="email" />
            </div>

            <div className="form-group">
              <label htmlFor="telephone">What is your phone number? (Include area code)</label>
              <input type="text" className="form-control" id="telephone" name="telephone" />
            </div>

            <div className="form-group">
              <label htmlFor="goal">What is your fitness goal?</label>
              <textarea className="form-control" id="goal" name="goal" rows="3"></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="excuse">What is the biggest thing holding you back from achieving your goals?</label>
              <textarea className="form-control" id="excuse" name="excuse" rows="3"></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="gym">Will you be working out at a gym?</label>
              <select className="form-control" id="gym" name="gym">
                <option value="">Please select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="equipment">What exercise equipment do you have at home?</label>
              <textarea className="form-control" id="equipment" name="equipment" rows="3"></textarea>
            </div>

            <button type="submit" className="btn btn-success">Sign up</button>

          </form>

        </main>

      </div>

    </>
  )
}
