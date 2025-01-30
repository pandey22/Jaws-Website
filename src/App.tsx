import React, { useState } from 'react';
import { Heart, PawPrint, Phone, Mail, MapPin, ChevronUp, Menu, X, Instagram, CreditCard, Linkedin, MessageCircle, Link } from 'lucide-react';
import NewsCard from './components/NewsCard';
import { news } from './data/news';
import { testimonials } from './data/testimonials';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <PawPrint className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">JAWS</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'news', 'donate', 'testimonials', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setActiveSection(item)}
                  className={`${
                    activeSection === item
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-500'
                  } transition-colors duration-200 capitalize`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {['home', 'about', 'news', 'donate', 'testimonials', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => {
                    setActiveSection(item);
                    setIsMenuOpen(false);
                  }}
                  className={`${
                    activeSection === item
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-500'
                  } block px-3 py-2 text-base capitalize`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <div className="relative h-[600px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80" />
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Protecting Those Who Cannot Speak
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              JAWS (Jharkhand Animal Welfare Society) is a non-profit organization committed to protecting and improving the lives of animals across Jharkhand. Since our establishment, we have been at the forefront of animal rescue, rehabilitation, and advocacy.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"   onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfh6U4HQwjeOnKGpHFfzLZYdOzTfty19y4DUuSw6SM_q25cTg/viewform", "_blank")} >
                Join as Volunteer 
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 text-blue-600">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
    <h2 className="text-3xl font-bold text-center mb-12 ">About JAWS</h2>
    <div className="grid md:grid-cols-3 gap-8 text-center">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex justify-center">
          <Heart className="h-12 w-12 text-blue-600 mb-4" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="text-gray-600">
          To protect and improve the lives of animals in Jharkhand through rescue,
          rehabilitation, and education.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex justify-center">
          <PawPrint className="h-12 w-12 text-blue-600 mb-4" />
        </div>
        <h3 className="text-xl font-semibold mb-2">What We Do</h3>
        <p className="text-gray-600">
          We conduct rescue operations, provide medical care, and find loving homes
          for abandoned animals.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex justify-center">
          <Heart className="h-12 w-12 text-blue-600 mb-4" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Our Impact</h3>
        <p className="text-gray-600">
          Over 1000+ animals rescued and rehabilitated, with continuous efforts to
          create a better world for them.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Support Our Cause</h2>
            <p className="text-xl max-w-2xl mx-auto">Your donation helps us rescue and care for more animals in need.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">₹500</h3>
              <p className="mb-4">Provides food for one animal for a week</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors duration-300" onClick={() => window.open("https://d1fdloi71mui9q.cloudfront.net/zTsAk3wRn2cDm9Wsvm3a_JAWS_donationlink.pdf", "_blank")} >
                Donate Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">₹2000</h3>
              <p className="mb-4">Covers medical treatment for one animal</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors duration-300" onClick={() => window.open("https://d1fdloi71mui9q.cloudfront.net/zTsAk3wRn2cDm9Wsvm3a_JAWS_donationlink.pdf", "_blank")} >
                Donate Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">₹5000</h3>
              <p className="mb-4">Sponsors complete care for one animal</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors duration-300" onClick={() => window.open("https://d1fdloi71mui9q.cloudfront.net/zTsAk3wRn2cDm9Wsvm3a_JAWS_donationlink.pdf", "_blank")} >
                Donate Now
              </button>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors duration-300 flex items-center mx-auto" onClick={() => window.open("https://d1fdloi71mui9q.cloudfront.net/zTsAk3wRn2cDm9Wsvm3a_JAWS_donationlink.pdf", "_blank")} >
              <CreditCard className="mr-2 h-5 w-5" />
              Custom Amount
            </button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 text-blue-600 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Updates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-blue-50 text-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 flex flex-col items-center bg-gray-50">
          <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12 text-blue-600 ml-5">Contact Us</h2>
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-600 ml-8" />
                <span>+91 0657-432480 / 2432480</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <span>jawsindia@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-600 " />
                <span>92-H6, Straight Mile Road, Sakchi Jamshedpur – 831001, Jharkhand, India.</span>
              </div>
            </div>
          </div>
        </section>

      {/* Footer */}
  {/* Footer */}
<footer className="bg-gray-900 text-white py-12 flex flex-col items-center">
          <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-6">
              <a href="https://linktr.ee/jharkhandanimalwelfaresociety" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <Link className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/jharkhand-animal-welfare-society/" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/j.a.w.s_jharkhand/" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://chat.whatsapp.com/ItfY5fiHOKg699iXQNGXXz" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400">
              <p>&copy; {new Date().getFullYear()} JAWS. All rights reserved</p><br />
               <a href="https://portfolio-website-kshitij-pandeys-projects.vercel.app/">Created by : Kshitij Pandey</a>
            </div>
            
          </div>
        </footer>


      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  );
}

export default App;