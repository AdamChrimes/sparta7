import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <>
      <Head>
        <title>Sparta7</title>
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

            <h1 className={styles.title}>Sparta7 - Coaching consultation</h1>

          <form>

            <div className="form-group">
              <label htmlFor="name">What is your name?</label>
              <input type="text" className="form-control" id="name" />
            </div>

            <div className="form-group">
              <label htmlFor="goal">What is your primary fitness goal?</label>
              <input type="text" className="form-control" id="goal" />
            </div>

            <div className="form-group">
              <label htmlFor="ready">Are you ready to commit to your fitness goals right now? </label>
              <select className="form-control" id="ready">
                <option value="">Please select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="excuse">What is the biggest thing holding you back from achieving your goals?</label>
              <textarea className="form-control" id="excuse" rows="3"></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="approach">How are you approaching this application call?</label>
              <select className="form-control" id="approach">
                <option value="">Please select</option>
                <option value="I have less then £250 to spend, I just want something basic">I have less then £250 to spend, I just want something basic</option>
                <option value="My budget is tight but if the programme guarantees results, I’m committed">My budget is tight but if the programme guarantees results, I’m committed</option>
                <option value="I'll do whatever I need to do to accomplish my fitness goals">I'll do whatever I need to do to accomplish my fitness goals</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="time">Pick a time within the next 24 hours for FREE 15 minute consultation</label>
              <select className="form-control" id="time">
                <option value="">Please select</option>
                <option value="10AM">10AM (GMT)</option>
                <option value="11AM">11AM (GMT)</option>
                <option value="12PM">12PM (GMT)</option>
                <option value="1PM">1PM (GMT)</option>
                <option value="2PM">2PM (GMT)</option>
                <option value="3PM">3PM (GMT)</option>
                <option value="4PM">4PM (GMT)</option>
                <option value="5PM">5PM (GMT)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="telephone">What is your phone number for a FREE consultation? (Include area code)</label>
              <input type="text" className="form-control" id="telephone" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

          </form>

        </main>

      </div>

    </>
  )
}
