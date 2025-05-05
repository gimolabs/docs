import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/discord'



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div>
          <img style={{margin: '0 auto', display: 'block'}} src="/img/landing/img2.svg" />
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
          <SocialIcon style={{width: '21px', 'height': '21px' }} network="github" url="https://github.com/gimofinance" />
          <div style={{width: '1px', margin: '0 10px', backgroundColor: 'rgb(236,236,236)', height: '21px'}}></div>
          <SocialIcon style={{width: '21px', 'height': '21px'}} network="discord" url="https://discord.gg/" />
        </div>
      </main>
    </Layout>
  );
}