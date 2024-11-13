import Head from 'next/head';
import Navigation from '../components/Navigation';

function AboutPage() {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <Navigation />
      <h1>About Us</h1>
      <p className="text-lg">This is the about page.</p>
    </div>
  );
}

export default AboutPage;