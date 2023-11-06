import Navbar from './Navbar';
import Banner from './Banner';
import Service from './Service';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Banner />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
