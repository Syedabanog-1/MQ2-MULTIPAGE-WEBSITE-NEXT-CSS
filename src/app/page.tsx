import Head from 'next/head';
import Navigation from './components/Navigation';
import RootLayout from './layout'
function HomePage() {
  return (
    <RootLayout>
    <div>
      <Head>
        <title>My Website</title>
      </Head>
      <Navigation />
      <h1>Welcome to my website!</h1>
      <p className="text-lg">This is the homepage.</p>
    </div>
    </RootLayout>
  
  );
}

export default HomePage;