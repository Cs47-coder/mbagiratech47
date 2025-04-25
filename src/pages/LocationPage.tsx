
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Location from '../components/Location';

const LocationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Location</h1>
            <p className="text-xl text-slate-300">
              While based in Tanzania, I provide services globally
            </p>
          </div>
        </div>
      </section>
      
      <Location />
      
      <Footer />
    </div>
  );
};

export default LocationPage;