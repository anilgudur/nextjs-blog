import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Launching soon...'
export const siteTitle =
  "Wooden Pressed Oil | Cold Pressed Oil Near Me - Amulya Organic";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Buy cold pressed oil or wooden pressed oil (lakdi ghana, mara chekkuennai) at best prices. Pure and chemical-free cold pressed groundnut, safflower, coconut, almond, sesame, flaxseed, and mustard oil."
        />
        <meta
          name="keywords"
          content="
          cold pressed oil,
          wooden pressed oil,
          wood pressed oil,
          organic oil,

          cold pressed oil near me,

          cold pressed groundnut oil,
          wooden pressed groundnut oil,
          wood pressed groundnut oil,
          organic groundnut oil,

          cold pressed safflower oil,
          wooden pressed safflower oil,
          wood pressed safflower oil,
          organic safflower oil,

          lakdi ghana oil,

          cold pressed oil in pune,
          wooden pressed oil in pune,
          wood pressed oil in pune,
          cold pressed oil in mumbai,
          wooden pressed oil in mumbai,
          wood pressed oil in mumbai,
          cold pressed oil in solapur,
          wooden pressed oil in mumbai,
          wood pressed oil in mumbai,

          cold pressed oil mill near me,
          wooden pressed oil mill near me,
          wood pressed oil mill near me,
          organic oil mill near me,

          cold pressed oil shop near me,
          wooden pressed oil shop near me,
          wood pressed oil shop near me,
          organic oil shop near me,

          cold press oil,
          wooden press oil,
          wood press oil,

          kachi ghani oil,

          wooden pressed oil near me,
          wood pressed oil near me,
          organic oil near me,
          cold pressed oils,
          wooden pressed oils,
          wood pressed oils,
          cold press oils,
          wooden press oils,
          wood press oils"
        />

        {/* https://www.amulyaorganic.co.in/_next/image?url=%2Fimages%2Famulyaorganic.png&w=640&q=75
        https%3A%2F%2Fwww.amulyaorganic.co.in%2F_next%2Fimage?url=%2Fimages%2Famulyaorganic.png&w=640&q=75 */}
        {/* content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} */}
        <meta
          property="og:image"
          content={`https://www.amulyaorganic.co.in/_next/image?url=%2Fimages%2Famulya-white-257x257.png&w=384&q=75`}
        />
        <meta property="og:site_name" content="Amulya Organic" />
        <meta property="og:url" content="https://www.amulyaorganic.co.in" />
        <meta property="og:title" content="Wooden Pressed Oils" />
        <meta property="og:type" content="product.group" />
        <meta
          property="og:description"
          content="Buy cold pressed oil i.e. wooden churned (lakdi ghana) at best prices. Pure and chemical-free groundnut, safflower, coconut, almond, sesame, & many"
        />

        <meta name="twitter:site" content="@" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wooden Pressed Oils" />
        <meta
          name="twitter:description"
          content="Buy cold pressed oil i.e. wooden churned (lakdi ghana) at best prices. Pure and chemical-free groundnut, safflower, coconut, almond, sesame, & many"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/amulyaorganic.png"
              className={utilStyles.borderCircle}
              width={514}
              height={260}
              alt={name}
            />
            <h1 className={utilStyles.headingLg} style={{ color: "#AAAAAA" }}>
              {name}
            </h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  width={108}
                  height={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}