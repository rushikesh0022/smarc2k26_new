
import React, { useState, useEffect } from 'react';
import Counter from './components/Counter';
import WorkshopSection from './components/WorkshopSection';
import { SPEAKERS, GALLERY_IMAGES } from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-navy-900 overflow-x-hidden selection:bg-primary selection:text-navy-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-navy-900/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <img src="https://raw.githubusercontent.com/rushikesh0022/medical-smarc-2026/main/pic2.png" alt="SMARC Logo" className="h-12 w-12 object-contain transition-transform group-hover:scale-110" />
            <span className="text-2xl font-extrabold tracking-tighter text-white font-display">SMARC <span className="text-primary">2026</span></span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-300">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#speakers" className="hover:text-primary transition-colors">Speakers</a>
            <a href="#workshops" className="hover:text-primary transition-colors">Workshops</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <a href="#register" className="bg-primary hover:bg-primary-dark text-navy-900 px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-0.5">
            Register Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/80 to-navy-900"></div>
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30"
            alt="Medical background"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeInLeft">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold tracking-widest uppercase mb-6">
                Medical Innovation & Research
              </span>
              <h1 className="text-6xl md:text-8xl font-display font-extrabold text-white leading-tight mb-4">
                Southern Medicos <br/>
                <span className="gradient-text">Annual Research</span> <br/>
                Conference
              </h1>
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-light">
                Join 500+ professionals for a journey of discovery, collaboration, and advancement in clinical excellence at Amalapuram.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-3 text-gray-300">
                 <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                 </div>
                 <div>
                   <p className="text-xs uppercase font-bold tracking-widest text-gray-500">Date</p>
                   <p className="text-sm font-semibold">19-21 June, 2026</p>
                 </div>
               </div>
               <div className="flex items-center gap-3 text-gray-300">
                 <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                 </div>
                 <div>
                   <p className="text-xs uppercase font-bold tracking-widest text-gray-500">Venue</p>
                   <p className="text-sm font-semibold">KIMS, Amalapuram</p>
                 </div>
               </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <button className="bg-primary hover:bg-primary-dark text-navy-900 px-10 py-4 rounded-full font-bold text-lg shadow-2xl shadow-primary/20 transition-all transform hover:scale-105 active:scale-95">
                Secure Your Spot
              </button>
              <button className="flex items-center gap-3 text-white font-bold hover:text-primary transition-colors group">
                <span className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-primary transition-all">
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path></svg>
                </span>
                Watch Promo
              </button>
            </div>
          </div>

          <div className="relative animate-fadeInRight hidden lg:flex items-center justify-center -mt-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/20 blur-[120px] rounded-full z-0 opacity-20"></div>
            <img 
              src="https://raw.githubusercontent.com/rushikesh0022/medical-smarc-2026/main/pic1_bg.png" 
              alt="SMARC 2026 Logo"
              className="relative z-10 w-full max-w-3xl mx-auto drop-shadow-[0_0_50px_rgba(212,175,55,0.3)]"
            />
          </div>
        </div>
      </header>

      {/* Stats Section with Animations */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Counter end={500} suffix="+" label="Participants" />
            <Counter end={15} suffix="+" label="Workshops" />
            <Counter end={20} suffix="+" label="Activities" />
            <Counter end={3} label="Intense Days" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-navy-800/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://picsum.photos/seed/about/800/600" className="w-full object-cover" alt="Conference Hall" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-navy-900 to-transparent">
                  <p className="text-white font-bold">Bridging medical research and clinical excellence since 2018.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">About The Event</h2>
              <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white">Elevating Southern Medical Excellence</h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                The Southern Medicos Annual Research Conference (SMARC) stands as a premier platform for emerging researchers, established clinicians, and medical students to converge. 
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-medical-green text-primary flex items-center justify-center">✓</span>
                  Hands-on skill labs in Ophthalmology & surgery
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-medical-green text-primary flex items-center justify-center">✓</span>
                  State-of-the-art scientific paper presentations
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-medical-green text-primary flex items-center justify-center">✓</span>
                  Elite networking with industry leaders
                </li>
              </ul>
              <button className="px-8 py-3 rounded-full border border-primary text-primary font-bold hover:bg-primary hover:text-navy-900 transition-all">
                Learn More Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Section Component */}
      <WorkshopSection />

      {/* Speakers Section */}
      <section id="speakers" className="py-24 bg-navy-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Distinguished Panel</h2>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">Expert Speakers</h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SPEAKERS.map((speaker) => (
              <div key={speaker.id} className="group relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-4 border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:-translate-y-2">
                  <img src={speaker.image} className="w-full h-full object-cover" alt={speaker.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{speaker.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-1">{speaker.role}</p>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">{speaker.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Recap 2025</h2>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">Previous Highlights</h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className={`relative overflow-hidden rounded-2xl group cursor-pointer ${idx % 3 === 0 ? 'row-span-2' : ''}`}>
              <img src={img.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={img.caption} />
              <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                <p className="text-white font-bold">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-24 bg-navy-800/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Participation</h2>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">Registration Plans</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-navy-800 p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Undergraduates</h3>
                <div className="text-4xl font-display font-extrabold text-primary mb-6">₹1,099</div>
                <ul className="space-y-3 text-sm text-gray-400 mb-8">
                  <li className="flex items-center gap-2">✔ Full access to scientific sessions</li>
                  <li className="flex items-center gap-2">✔ Conference delegate kit</li>
                  <li className="flex items-center gap-2">✔ Participation certificate</li>
                </ul>
              </div>
              <button className="w-full py-3 bg-primary text-navy-900 rounded-xl font-bold hover:bg-primary-dark transition-all">Register Now</button>
            </div>
            
            {/* Plan 2 */}
            <div className="bg-navy-700 p-8 rounded-3xl border-2 border-primary scale-105 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-4 right-4 bg-primary text-navy-900 text-[10px] font-black px-2 py-0.5 rounded uppercase">Bestseller</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Postgraduates/Doctors</h3>
                <div className="text-4xl font-display font-extrabold text-primary mb-6">₹2,499</div>
                <ul className="space-y-3 text-sm text-gray-200 mb-8">
                  <li className="flex items-center gap-2">✔ Premium scientific tracks</li>
                  <li className="flex items-center gap-2">✔ CME points eligibility</li>
                  <li className="flex items-center gap-2">✔ Elite networking dinner</li>
                </ul>
              </div>
              <button className="w-full py-3 bg-primary text-navy-900 rounded-xl font-bold hover:bg-white transition-all">Select Plan</button>
            </div>

            {/* Plan 3 */}
            <div className="bg-navy-800 p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Workshops Only</h3>
                <div className="text-4xl font-display font-extrabold text-primary mb-6">Varied</div>
                <p className="text-sm text-gray-400 mb-6">Registration for specific skill labs only. Ideal for those focusing on manual dexterity training.</p>
              </div>
              <button className="w-full py-3 border border-primary text-primary rounded-xl font-bold hover:bg-primary/10 transition-all">View Workshops</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 bg-navy-900 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <img src="https://raw.githubusercontent.com/rushikesh0022/medical-smarc-2026/main/pic2.png" alt="SMARC Logo" className="h-8 w-8 object-contain" />
                <span className="text-xl font-bold tracking-tighter text-white">SMARC 2026</span>
              </div>
              <p className="text-gray-500 max-w-sm leading-relaxed text-sm">
                Southern Medicos Annual Research Conference is a milestone event for medical advancement, fostering innovation and clinical mastery for the next generation of healers.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Direct Contact</h4>
              <p className="text-gray-400 text-sm">V Pramod Sriram: +91 70752 82828</p>
              <p className="text-gray-400 text-sm">V Vivek: +91 93371 75403</p>
              <p className="text-primary text-sm font-semibold">Smarc2k26@gmail.com</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Address</h4>
              <p className="text-gray-400 text-sm">
                KIMS, Amalapuram, 533201,<br/>
                Andhra Pradesh, India
              </p>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-gray-600 uppercase tracking-widest">
            <p>© 2026 SMARC Organizing Committee. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
