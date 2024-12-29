import Head from 'next/head';
import styles from '../app/styles/home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>My Next.js First Page</h1>
      </header>
      <Head>
        <title>Hello World</title>
        <meta name="description" content="A simple Hello World application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello, <span className={styles.highlight}>World!</span>
        </h1>
        <p className={styles.description}>
          Welcome to my first Next.js application!
        </p>
      </main>

      <footer className={styles.footer}>
      <p>© 2023 My Next.js App. All rights reserved.</p>
    </footer>
    </div>
  );
}