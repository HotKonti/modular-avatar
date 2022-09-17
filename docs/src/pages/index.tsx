import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import Translate, {translate} from '@docusaurus/Translate'; 

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
            <Translate>Modular Avatar</Translate>
        </h1>
        <p className="hero__subtitle">
            <Translate>Drag-and-Drop Avatar Assembly</Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className={`button button--secondary button--lg ${styles.button}`}
            to="/docs/intro">
            <Translate>Documentation</Translate>
          </Link>
          <Link
              className={`button button--secondary button--lg ${styles.button}`}
              to="https://github.com/bdunderscore/modular-avatar/releases">
              <Translate>Download</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({message: 'Modular Avatar'})}
      description={translate({message: "Drag-and-Drop Avatar Assembly"})}>
      <HomepageHeader />
      <main>
          <HomepageFeatures />
      </main>
    </Layout>
  );
}