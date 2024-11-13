import Head from 'next/head';
import Navigation from '../components/Navigation';
import RootLayout from '../layout';

function Contact() {
  return (
    <RootLayout>
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Navigation />
      <h1>Contact Us</h1>
      <p className="text-lg">Get in touch with us.</p>
      <form>
        <label>Name: Syeda Gulzar Bano</label>
        <input type="text" name="name" />
        <br />
        <label>Email: gulzar_bano@yahoo.com</label>
        <input type="email" name="email" />
        <br />
        <label>Message: I am Pakistani and Love my country very much.</label>
        <textarea name="message" />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
    </RootLayout>
  );
}

export default Contact;
