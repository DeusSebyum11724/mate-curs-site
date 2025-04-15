import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { JSX } from 'react/jsx-runtime';

export default function Home(): JSX.Element {
  return (
    <Layout title="Acasă" description="Site de matematică pentru elevi și profesori">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">Bine ai venit la Math Academy</h1>
          <p className="hero__subtitle">Învață matematică într-un mod clar și interactiv.</p>
          <a className="button button--primary button--lg" href="/docs/intro">
            Începe să înveți
          </a>
        </div>
      </header>
    </Layout>
  );
}
