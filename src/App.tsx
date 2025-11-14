import { useEffect, useState } from 'react';
import { Menu, X, Shield, Phone, Mail, MapPin, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';

type Service = {
  title: string;
  items: string[];
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [serviceSlide, setServiceSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services: Service[] = [
    {
      title: 'Roadworthy Maintenance',
      items: [
        'Inspection and maintenance of front and rearview lights',
        'Fluid Checks and Replacements',
        'Tire Rotations',
        'Brake Inspections'
      ]
    },
    {
      title: 'Diagnostic Services',
      items: [
        'Advanced tools to identify engine issues',
        'Electrical System Checks',
        'Computerized Vehicle Analysis'
      ]
    },
    {
      title: 'Minor Repairs',
      items: [
        'Brake Repairs',
        'Battery Replacements',
        'Belt and Hose Replacements'
      ]
    },
    {
      title: 'Major Workshop Repairs',
      items: [
        'Engine overhauls',
        'Transmission repairs',
        'Complex electrical system repairs'
      ]
    },
    {
      title: 'Emergency Repairs',
      items: [
        'On-site Assistance for Unexpected Breakdowns',
        'Quick response to emergency breakdowns',
        '24 hour call out service'
      ]
    },
    {
      title: 'Auto Glass Solutions',
      items: [
        'Windscreen Replacement & Repair',
        'Side and Rear Window Replacement',
        'Paint Protection Film',
        'Windscreen Wiper Replacement'
      ]
    },
    {
      title: 'Testing Station',
      items: [
        'Grade A and Grade B testing stations',
        'SANS 10047 compliant',
        'Certificate of roadworthiness',
        'RMI Accredited'
      ]
    }
  ];

  const serviceSlides: Service[][] = [];
  for (let i = 0; i < services.length; i += 3) {
    serviceSlides.push(services.slice(i, i + 3));
  }

  const carouselImages = [
    {
      title: 'Professional Fleet Maintenance',
      description: 'Specialized in commercial and mining fleet maintenance'
    },
    {
      title: 'Expert Mechanical Services',
      description: 'Qualified team of artisans and mechanics'
    },
    {
      title: 'Mobile Service Available',
      description: 'Peace of mind wherever you find yourself on the road'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const nextServiceSlide = () => {
    if (!serviceSlides.length) return;
    setServiceSlide((prev) => (prev + 1) % serviceSlides.length);
  };

  const prevServiceSlide = () => {
    if (!serviceSlides.length) return;
    setServiceSlide((prev) => (prev - 1 + serviceSlides.length) % serviceSlides.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src="/Transparent Logo.png" alt="Apex Auto Repairs" className="h-14 w-auto" />
              <div>
                <h1 className="text-xl font-bold">
                  <span className="text-white">Apex Auto</span>
                  <span className="text-lime-400">Repairs</span>
                </h1>
                <p className="text-xs text-gray-400">& Maintenance</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-lime-400 transition">Home</a>
              <a href="#about" className="text-white hover:text-lime-400 transition">About</a>
              <a href="#services" className="text-white hover:text-lime-400 transition">Services</a>
              <a href="#testing" className="text-white hover:text-lime-400 transition">Testing</a>
              <a href="#contact" className="bg-lime-400 text-black px-6 py-2 rounded hover:bg-lime-500 transition font-semibold">Contact</a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/98 border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block text-white hover:text-lime-400 transition">Home</a>
              <a href="#about" className="block text-white hover:text-lime-400 transition">About</a>
              <a href="#services" className="block text-white hover:text-lime-400 transition">Services</a>
              <a href="#testing" className="block text-white hover:text-lime-400 transition">Testing</a>
              <a href="#contact" className="block bg-lime-400 text-black px-6 py-2 rounded hover:bg-lime-500 transition font-semibold text-center">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-700 to-transparent transform skew-x-12 origin-top-right"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center justify-center gap-4 mb-8 sm:flex-row sm:text-left">
            <img src="/Transparent Logo.png" alt="Apex Auto Repairs" className="h-20 w-auto drop-shadow-2xl" />
            <div className="text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
                <span className="text-white">Apex Auto</span>
                <span className="text-lime-400">Repairs</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300">& Maintenance</p>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 italic mb-12 max-w-2xl mx-auto">
            keeping you and your business moving forward!
          </p>

          <div className="relative max-w-4xl mx-auto mt-12">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-lime-400/30">
              <h3 className="text-2xl font-bold text-lime-400 mb-3">{carouselImages[currentSlide].title}</h3>
              <p className="text-gray-300 text-lg">{carouselImages[currentSlide].description}</p>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 sm:-translate-x-12 bg-lime-400 text-black p-2 sm:p-3 rounded-full hover:bg-lime-500 transition shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-lime-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 sm:translate-x-12 bg-lime-400 text-black p-2 sm:p-3 rounded-full hover:bg-lime-500 transition shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-lime-300"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentSlide ? 'bg-lime-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-6 bg-lime-400 transform skew-x-12"></div>
            <h2 className="text-4xl font-bold text-white">WELCOME</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            At Apex Auto Repairs & Maintenance we understand that in the world of commercial and Mining fleet maintenance, the importance of vehicle and machine repairs & maintenance is often underestimated. Yet, the condition of a vehicle and machine is a critical factor in ensuring safety, compliance, and operational efficiency As you navigate the bustling roads and mining.
          </p>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-lime-400 to-transparent transform -skew-x-12"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-6 bg-lime-400 transform skew-x-12"></div>
            <h2 className="text-4xl font-bold text-white">WHO ARE WE</h2>
          </div>

          <div className="space-y-6 text-gray-300 text-lg">
            <p className="leading-relaxed">
              Apex Auto Repairs & Maintenance provides professional and efficient mechanical and windscreen repair and maintenance, regular inspections, prompt repairs of minor damages, and potentially mobile services for convenience and cost savings for your fleet while Prioritizing your vehicles and TMM to minimize downtime, enhance safety, and reduce overall costs.
            </p>
            <p className="leading-relaxed">
              Based in the industrial heart of Rustenburg in the north west province, we are committed to adding value and giving you the best possible customer experience.
            </p>
            <p className="text-lime-400 font-semibold text-xl">
              We are proudly black owned and managed.
            </p>
            <p className="leading-relaxed">
              Our service offering caters to private clients, small businesses, corporate clients and mining fleets.
            </p>
            <p className="leading-relaxed">
              All repairs and servicing is overseen by our qualified team of artisan's and mechanics as we take great pride in our excellent workmanship.
            </p>
            <p className="leading-relaxed">
              Our Mobile service ensures peace of mind wherever you find yourself on the road, thanks to our onsite road repair services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-0 w-2/3 h-full bg-gradient-to-t from-gray-700 to-transparent transform skew-y-6 origin-bottom-right opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-6 bg-lime-400 transform skew-x-12"></div>
            <h2 className="text-4xl font-bold text-white">OUR VALUE ADD ON</h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-lime-400/30 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              BECAUSE WE KNOW HOW IMPORTANT IT IS FOR OUR CLIENTS TO MEET DEADLINES AND ADHERE TO SCHEDULES, WE MAKE IT OUR BUSINESS TO ENSURE THAT YOUR VEHICLE IS REPAIRED AND SERVICED WITHIN AN OPTIMAL TIMEFRAME. OUR SPACIOUS NEW WORKSHOP IS DESIGNED TO ACCOMMODATE YELLOW FLEET. THIS ENSURES THAT NO MATTER HOW BIG OR SMALL YOUR NEED, WE'LL GET YOU BACK ON THE ROAD QUICKLY – WITHOUT COMPROMISING ON QUALITY!
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-6 bg-lime-400 transform skew-x-12"></div>
            <h2 className="text-4xl font-bold text-white">MECHANICAL SOLUTIONS</h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${serviceSlide * 100}%)` }}
              >
                {serviceSlides.map((slideGroup, slideIndex) => (
                  <div key={slideIndex} className="min-w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {slideGroup.map((service, index) => (
                      <div
                        key={`${service.title}-${index}`}
                        className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-lime-400 transition"
                      >
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-8 h-4 bg-lime-400 transform skew-x-12"></div>
                          <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {service.items.map((item, idx) => (
                            <li key={idx} className="text-gray-400 flex items-start">
                              <span className="text-lime-400 mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevServiceSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-lime-400 text-black p-3 rounded-full hover:bg-lime-500 transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextServiceSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-lime-400 text-black p-3 rounded-full hover:bg-lime-500 transition"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {serviceSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setServiceSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === serviceSlide ? 'bg-lime-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testing" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 right-0 w-1/2 h-full bg-gradient-to-l from-lime-400 to-transparent transform skew-y-12"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-6 bg-lime-400 transform skew-x-12"></div>
            <h2 className="text-4xl font-bold text-white">TESTING STATION</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-lime-400/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-lime-400 mb-4">Our Facilities</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We offer facilities where motor vehicles are assessed for their roadworthiness. These stations ensure vehicles are safe and fit for use on South African public roads and issuing of a certificate of roadworthiness.
              </p>
              <p className="text-gray-300 leading-relaxed">
                AT Ts Mobile Mechanical we offer Grade A and Grade B testing stations. Grade A can test any type of motor vehicle, while Grade B stations are limited to vehicles excluding buses, minibuses, and those exceeding 3,500kg.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-lime-400/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-lime-400 mb-4">Compliance & Certification</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our Testing and examination procedures adhere to SANS 10047, which outlines the guidelines for testing motor vehicles for roadworthiness.
              </p>
              <div className="bg-black/50 border border-lime-400 rounded-lg p-6 text-center">
                <Shield size={48} className="text-lime-400 mx-auto mb-3" />
                <p className="text-white font-bold text-xl">WE ARE RMI ACCREDITED</p>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Our OEM Certified parts include Toyota, Volkswagen, Nissan and Bell
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-gray-700 to-transparent transform -skew-x-12 origin-bottom-left opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-lime-400">Contact us</span>
              <br />
              <span className="text-white">Today</span>
            </h2>
            <p className="text-gray-400 italic text-xl">to keep you and your business moving forward!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-lime-400/30 rounded-lg p-6 text-center hover:border-lime-400 transition">
              <Mail size={48} className="text-lime-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Email</h3>
              <a href="mailto:ngongombasa@gmail.com" className="text-gray-300 hover:text-lime-400 transition break-all">
                ngongombasa@gmail.com
              </a>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-lime-400/30 rounded-lg p-6 text-center hover:border-lime-400 transition">
              <Phone size={48} className="text-lime-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Phone</h3>
              <a href="tel:0665549200" className="text-gray-300 hover:text-lime-400 transition">
                066 554 9200
              </a>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-lime-400/30 rounded-lg p-6 text-center hover:border-lime-400 transition">
              <MapPin size={48} className="text-lime-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Visit us</h3>
              <p className="text-gray-300">
                Korokoro Drive, Waterval East,<br />Rustenburg, 2999
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/Transparent Logo.png" alt="Apex Auto Repairs" className="h-12 w-auto drop-shadow-xl" />
              <div>
                <p className="text-white font-bold text-lg">
                  <span>Apex Auto</span>
                  <span className="text-lime-400">Repairs</span>
                </p>
                <p className="text-sm text-gray-400">& Maintenance</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">© 2024 Apex Auto Repairs & Maintenance. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-lime-400 text-black p-3 md:p-4 rounded-full shadow-2xl hover:bg-lime-500 transition z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-lime-300"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
