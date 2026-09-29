import { FormEvent, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

const galleryImages = [
  { src: '/images/1.jpg', alt: 'Tartan Masonry finished stone wall' },
  { src: '/images/2.jpg', alt: 'Custom sandstone wall detail' },
  { src: '/images/3.jpg', alt: 'Precision stone tile installation' },
  { src: '/images/4.jpg', alt: 'Detailed blockwork finish' },
  { src: '/images/5.jpg', alt: 'Statement paving pathway' },
  { src: '/images/6.jpg', alt: 'Hand-laid mixed stonework' },
  { src: '/images/7.jpg', alt: 'Residential brickwork project' },
  { src: '/images/8.jpg', alt: 'Natural stone wall craftsmanship' },
  { src: '/images/image-1075987278171348.webp', alt: 'Sandstone paving and garden retaining wall' },
  { src: '/images/image-1680974903368717.webp', alt: 'Natural stone paving beside a garden' },
  { src: '/images/image-1736222087668415.webp', alt: 'Architectural sandstone stone cladding' },
  { src: '/images/image-1740482683903964.webp', alt: 'Natural stone outdoor shower feature' },
  { src: '/images/image-1820263212496352.webp', alt: 'Residential brick paving courtyard' },
  { src: '/images/image-2307489786671825.webp', alt: 'Detailed brickwork and repointing' },
  { src: '/images/image-2654168861684698.webp', alt: 'Stone cladding on a residential facade' },
  { src: '/images/image-1767894254440402.webp', alt: 'Structural stone retaining wall' },
  { src: '/images/image-3707897266058271.webp', alt: 'Hand-crafted natural stone wall' },
  { src: '/images/image-1080212461386210.webp', alt: 'Hand-built natural stone garden steps' },
  { src: '/images/image-1407926387994218.webp', alt: 'Curved sandstone paving pathway' },
  { src: '/images/image-2209207489652899.webp', alt: 'Natural stone feature wall' },
];

const services = ['Stonework', 'Brickwork', 'Blockwork', 'Paving', 'Pointing & Repointing', 'Stone Cladding'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', '0f4fcaa9-2a97-4dff-b707-a2e8e938d5dd');
    formData.append('subject', 'New quote enquiry from Tartan Masonry website');
    formData.append('from_name', 'Tartan Masonry website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) {
        throw new Error('Unable to send enquiry');
      }
      form.reset();
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please call Scott directly on 0492 451 543.');
    }
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Tartan Masonry home">
            <img src="/logo.png" alt="Tartan Masonry" />
            <span className="brand-copy"><strong>TARTAN</strong><small>MASONRY</small></span>
          </a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Our work</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a className="nav-call" href="tel:0492451543"><Phone size={16} /> 0492 451 543</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grain" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow light"><span className="eyebrow-line" /> Sydney masonry specialists</div>
              <h1>Built with<br /><em>character.</em><br />Made to last.</h1>
              <p className="hero-intro">Quality stonework, brickwork, blockwork and paving, delivered with attention to detail and built to stand the test of time.</p>
              <div className="hero-actions">
                <a className="button button-red" href="#contact">Get a free quote <ArrowUpRight size={18} /></a>
                <a className="text-link light-link" href="#work">View our work <span>↘</span></a>
              </div>
              <div className="hero-proof"><span><Check size={15} /> 15+ years experience</span><span><Check size={15} /> Residential &amp; commercial</span></div>
            </div>
            <div className="hero-form-wrap" id="contact">
              <div className="form-card">
                <div className="form-heading">
                  <div><span className="form-kicker">Let&apos;s talk</span><h2>Start your project.</h2></div>
                  <Sparkles className="form-spark" size={25} />
                </div>
                <p>Tell us a little about what you need and we&apos;ll get back to you shortly.</p>
                {submitted ? (
                  <div className="success-message"><Check size={22} /><strong>Thanks, your enquiry is on its way.</strong><span>Scott will be in touch soon.</span><button type="button" className="reset-button" onClick={() => setSubmitted(false)}>Send another enquiry</button></div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-row"><label><span>Name</span><input required name="name" type="text" placeholder="Your name" /></label><label><span>Phone</span><input required name="phone" type="tel" placeholder="0492 451 543" /></label></div>
                    <label><span>Email</span><input required name="email" type="email" placeholder="you@example.com" /></label>
                    <label><span>How can we help?</span><textarea required name="message" rows={3} placeholder="Tell us about your project..." /></label>
                    {error && <p className="form-error" role="alert">{error}</p>}
                    <button className="button button-dark form-submit" type="submit">Request a free quote <ArrowUpRight size={18} /></button>
                    <small className="form-note">Your details stay between us. No obligation.</small>
                  </form>
                )}
              </div>
            </div>
          </div>
          <div className="hero-scroll"><span>Scroll to explore</span><ChevronDown size={16} /></div>
        </section>

        <section className="intro-section" id="about">
          <div className="container">
            <img className="intro-strip" src="/images/image-1416567427298403.jpg" alt="Tartan pattern detail" />
          </div>
          <div className="container intro-grid">
            <div className="section-label"><span>01</span><span className="label-rule" /><span>The Tartan standard</span></div>
            <div className="intro-content"><h2>Old-world craft.<br /><span>Australian grit.</span></h2><p>Tartan Masonry brings over 15 years of hands-on masonry experience across Scotland and Australia. We specialise in quality stonework, brickwork, blockwork, paving and pointing, with a focus on skilled workmanship, reliability and attention to detail.</p><a className="text-link dark-link" href="#meet">Meet Tartan Masonry <ArrowUpRight size={16} /></a></div>
            <div className="intro-stat"><strong>15<span>+</span></strong><small>Years of<br />craftsmanship</small></div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="container">
            <div className="section-topline"><div className="eyebrow"><span className="eyebrow-line" /> What we do</div><span className="section-index">02 / 05</span></div>
            <div className="services-heading"><h2>Masonry,<br /><em>properly done.</em></h2><p>From detailed stonework and paving to structural brick and blockwork, Tartan Masonry delivers quality workmanship across projects of all sizes.</p></div>
            <div className="services-list">{services.map((service, index) => <a href="#contact" className="service-item" key={service}><span className="service-number">0{index + 1}</span><span>{service}</span><ArrowUpRight size={20} /></a>)}</div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="container"><div className="section-topline"><div className="eyebrow"><span className="eyebrow-line" /> Recent work</div><span className="section-index">03 / 05</span></div><div className="work-heading"><h2>Built by hand.<br /><em>Crafted to endure.</em></h2><p>A selection of completed masonry projects across Sydney, including natural stone, paving, brickwork, blockwork and architectural cladding.</p></div><div className="gallery-grid">{galleryImages.map((image, index) => <a className="gallery-item" href={image.src} target="_blank" rel="noreferrer" key={image.src}><img src={image.src} alt={image.alt} loading={index > 1 ? 'lazy' : 'eager'} /><span className="gallery-overlay"><span>View project</span><ArrowUpRight size={18} /></span></a>)}</div></div>
        </section>

        <section className="meet-section" id="meet">
          <div className="container">
            <div className="section-topline"><div className="eyebrow"><span className="eyebrow-line" /> Meet the team</div><span className="section-index">04 / 05</span></div>
            <div className="meet-grid">
              <div className="meet-heading"><h2>Meet Tartan<br /><em>Masonry.</em></h2><div className="meet-credential"><span>Scott Cowe</span><small>Founder &amp; Mason</small></div></div>
              <div className="meet-content">
                <p>Tartan Masonry is a Sydney-based masonry company specialising in stonework, brickwork, blockwork, paving and pointing. Scott Cowe has over 15 years of hands-on experience across both Aberdeenshire, Scotland and Sydney, Australia. We bring traditional craftsmanship together with a high standard of finish on every project.</p>
                <p>From detailed natural stonework and feature walls to structural blockwork, paving and restoration work, we approach every job with the same attention to detail. Our focus is simple: quality workmanship, clear communication and a finished product built to last.</p>
                <p>We work with homeowners, builders and landscapers across Sydney, taking on everything from smaller residential projects to larger masonry packages. We pride ourselves on being reliable, keeping our sites organised and delivering work we&rsquo;re proud to put the Tartan Masonry name to.</p>
              </div>
            </div>
            <div className="meet-service-area"><MapPin size={16} /> Servicing Sydney &amp; surrounding areas</div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-grid"><div><div className="eyebrow light"><span className="eyebrow-line" /> Ready when you are</div><h2>Let&apos;s build<br /><em>something solid.</em></h2><p className="cta-copy">Planning a masonry project? Get in touch to discuss your plans and request a quote.</p></div><a className="button button-red" href="#contact">Request a quote <ArrowUpRight size={18} /></a></div>
        </section>

        <section className="details-section"><div className="container details-grid"><div className="detail-card"><MapPin size={20} /><div><span>Based in</span><strong>Sydney, NSW</strong><small>Servicing Sydney and surrounding areas</small></div></div><div className="detail-card"><Clock3 size={20} /><div><span>Availability</span><strong>Residential &amp; commercial projects</strong></div></div><div className="detail-card"><ShieldCheck size={20} /><div><span>Quoting</span><strong>Free, no-obligation quotes</strong></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><a className="brand footer-brand" href="#top"><img src="/logo.png" alt="Tartan Masonry" /><span className="brand-copy"><strong>TARTAN</strong><small>MASONRY</small></span></a><div className="footer-contact"><a href="tel:0492451543">0492 451 543</a><a href="mailto:info@tartanmasonry.com.au">info@tartanmasonry.com.au</a></div><div className="footer-meta"><span>© {new Date().getFullYear()} Tartan Masonry</span><span className="footer-licensed"><ShieldCheck size={12} /> Licensed &amp; Insured</span><a href="https://www.itscold.com.au" target="_blank" rel="noreferrer">Website by Go Polar</a></div></div></footer>
    </div>
  );
}

export default App;
