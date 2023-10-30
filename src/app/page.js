'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { getAllCases, getBanner } from '@/api';
import Banner from './components/_sections/Banner/Banner';
import { useEffect, useState } from 'react';
import Cases from './components/_sections/Cases/Cases';
import Abstract from './components/_sections/Abstract/Abstract';
import VerticalParallax from './components/_sections/VerticalParallax/VerticalParallax';
import StickyParallax from './components/_sections/StickyParallax/StickyParallax';

export default function Home() {
  const [banner, setBaner] = useState();
  const [cases, setCases] = useState([]);

  useEffect(() => {
    (async () => {
      const bannerData = await getBanner();
      const casesData = await getAllCases();

      setBaner(bannerData.data);
      setCases(casesData.data);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
          textAlign: 'center',
          marginBottom: 40,
        }}
      >
        <h2>{banner?.attributes.title}</h2>
        <p>{banner?.attributes.desc}</p>
      </div>
      <Banner path={banner?.attributes.promoURL} />

      <Cases cases={cases} />

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
      <Abstract />
      <div style={{ width: '1024px', height: '720px' }}>
        <StickyParallax />
      </div>

      <VerticalParallax />
      <div className={styles.description}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
