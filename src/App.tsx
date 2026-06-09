import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

const menuItems = [
  {
    category: 'Espresso',
    name: 'Golden Crema Espresso',
    description: 'Rich, silky espresso pulled from our signature roast.',
    price: '$6.50',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Cappuccino',
    name: 'Velvet Caramel Cappuccino',
    description: 'Perfectly layered foam with a drizzle of caramel gold.',
    price: '$8.00',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Latte',
    name: 'Truffle Vanilla Latte',
    description: 'Smooth latte with fragrant vanilla and artisanal truffle notes.',
    price: '$9.20',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Mocha',
    name: 'Velvet Mocha Dream',
    description: 'Decadent chocolate fused with bold espresso and toasted cocoa.',
    price: '$9.80',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Cold Brew',
    name: 'Midnight Cold Brew',
    description: 'Slow-steeped and chilled for a crisp, luminous finish.',
    price: '$7.50',
    image: 'https://images.unsplash.com/photo-1510627498534-cf7e9002facc?auto=format&fit=crop&w=800&q=80'
  },
  {
    category: 'Signature Coffee',
    name: 'Brew Haven Reserve',
    description: 'Our signature blend served with a hint of smoked cinnamon.',
    price: '$10.50',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80'
  }
];

const galleryImages = [
  'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1510627498534-cf7e9002facc?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=900&q=80'
];

const features = [
  { title: 'Freshly Roasted Beans', subtitle: 'Roasted daily for a rich aroma.', icon: '☕' },
  { title: 'Skilled Baristas', subtitle: 'Meet the artists behind each cup.', icon: '🎓' },
  { title: 'Cozy Atmosphere', subtitle: 'Designed for conversation and calm.', icon: '🪵' },
  { title: 'Free WiFi', subtitle: 'Stay connected while you savor.', icon: '📶' },
  { title: 'Premium Desserts', subtitle: 'Decadent pastries and handcrafted snacks.', icon: '🍰' },
  { title: 'Fast Service', subtitle: 'Effortless luxury, every visit.', icon: '⚡' }
];

const testimonials = [
  {
    name: 'Maya Reynolds',
    role: 'Creative Director',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'Brew Haven is sensory elegance. The espresso is unforgettable and every detail feels luxurious.'
  },
  {
    name: 'Luca Bennett',
    role: 'Architect',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'A cinematic destination for coffee lovers. The atmosphere is the perfect blend of warmth and luxe.'
  },
  {
    name: 'Ariel Chen',
    role: 'Photographer',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'Service feels personal, and their signature drinks are a masterpiece in every sip.'
  }
];

const offers = [
  { title: 'Buy 1 Get 1 Free Coffee', label: 'Weekday Special', description: 'Enjoy two premium coffees for the price of one from Monday to Thursday.' },
  { title: 'Weekend Brunch Special', label: 'Brunch Menu', description: 'Pair a latte and pastry at an exclusive combo price every weekend.' },
  { title: 'Student Discounts', label: 'Student Offer', description: 'Show your student ID and receive 15% off all drinks before 4pm.' }
];

function App() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const activeSlide = useMemo(() => testimonials[0], []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-950 text-brand-200">
      <header className="pointer-events-none absolute inset-x-0 top-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <div className="text-xl font-semibold tracking-[0.32em] text-brand-200">BREW HAVEN</div>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-brand-300 lg:flex">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="relative isolate overflow-hidden"
      >
        <div className="absolute inset-0 bg-brand-950/80" />

        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://assets.mixkit.co/videos/preview/mixkit-barista-serving-coffee-4367-large.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/30 to-brand-950/20" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 sm:px-10 lg:py-32">
          <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-brand-400/20 bg-brand-900/50 px-5 py-2 text-xs uppercase tracking-[0.28em] text-brand-200 backdrop-blur-xl">
            premium coffee lounge
          </div>
          <div className="max-w-xl">
            <h1 className="text-5xl font-black uppercase leading-tight text-brand-100 sm:text-6xl lg:text-7xl">
              Every Cup Tells a Story
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-brand-200 sm:text-lg">
              Handcrafted coffee, freshly baked delights, and unforgettable moments in every visit.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-950 transition hover:-translate-y-0.5 hover:bg-opacity-90">
                View Menu
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-brand-400/40 bg-black/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-200 transition hover:-translate-y-0.5 hover:border-brand-gold hover:text-brand-gold">
                Book a Table
              </a>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-12 sm:flex-row sm:items-end sm:gap-6">
            <div className="relative w-full max-w-sm rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl">
              <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-brand-gold/20 blur-2xl" />
              <div className="absolute -right-10 bottom-8 h-28 w-28 rounded-full bg-brand-300/10 blur-2xl" />
              <div className="mb-6 text-xs uppercase tracking-[0.3em] text-brand-400">Signature</div>
              <div className="space-y-3">
                <p className="text-2xl font-semibold text-brand-100">Steam & spice in every pour.</p>
                <p className="text-sm leading-7 text-brand-200/90">Experience the subtle floating steam and artful coffee service that defines Brew Haven.</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-brand-700/60 p-3 text-center text-2xl">☕</div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-brand-400">Barista</p>
                  <p className="text-base font-semibold text-brand-100">Expert craft every visit</p>
                </div>
              </div>
            </div>
            <div className="relative flex-1 rounded-[32px] border border-white/10 bg-brand-900/50 p-8 shadow-glass backdrop-blur-xl">
              <div className="absolute inset-x-4 top-4 h-24 rounded-3xl bg-gradient-to-r from-brand-gold/20 via-transparent to-brand-200/10 blur-3xl" />
              <div className="pointer-events-none absolute right-8 top-8 h-20 w-20 rounded-full bg-brand-600/10 blur-3xl" />
              <div className="relative text-sm uppercase tracking-[0.24em] text-brand-400">Featured aroma</div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-brand-800/70 p-5">
                  <p className="text-2xl font-semibold text-brand-100">Steam</p>
                  <p className="mt-2 text-sm leading-6 text-brand-300">Delicate vapor motions drift above each crafted beverage.</p>
                </div>
                <div className="rounded-3xl bg-brand-800/70 p-5">
                  <p className="text-2xl font-semibold text-brand-100">Bean legacy</p>
                  <p className="mt-2 text-sm leading-6 text-brand-300">Sourced from elite estates across the world.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-sm uppercase tracking-[0.24em] text-brand-200 sm:flex">
          <span className="block h-20 w-1 rounded-full bg-brand-200/20" />
          <span>Scroll to explore</span>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-brand-950" />
      </motion.section>

      <main className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <section id="menu" className="space-y-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Featured Menu</p>
            <h2 className="mt-4 text-4xl font-black text-brand-100 sm:text-5xl">Curated menu for the modern coffee connoisseur</h2>
            <p className="mt-5 text-sm leading-7 text-brand-300 sm:text-base">Explore our signature espresso creations, mocha delights, and premium cold brews crafted to elevate every moment.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {menuItems.map((item, index) => (
              <motion.article
                key={item.name}
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-brand-900/80 p-6 shadow-soft backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-900/70 via-transparent to-brand-950/30 opacity-70" />
                <img
                  src={item.image}
                  alt={item.name}
                  className="relative mb-5 h-56 w-full rounded-3xl object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="relative space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">{item.category}</p>
                  <h3 className="text-2xl font-semibold text-brand-100">{item.name}</h3>
                  <p className="text-sm leading-7 text-brand-300">{item.description}</p>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-lg font-semibold text-brand-gold">{item.price}</span>
                    <button className="rounded-full border border-brand-400/20 bg-brand-800/70 px-5 py-2 text-sm uppercase tracking-[0.18em] text-brand-200 transition hover:border-brand-gold hover:text-brand-gold">
                      Order
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-32 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Our Passion for Coffee</p>
            <h2 className="text-4xl font-black text-brand-100 sm:text-5xl">Where premium beans and memorable moments meet.</h2>
            <p className="max-w-xl text-sm leading-8 text-brand-300 sm:text-base">
              Brew Haven was born from a love of exceptional coffee, immersive atmosphere, and design-forward hospitality. We source elite beans, train baristas to perfect every extraction, and craft each space so guests feel cocooned in warmth and luxury.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[28px] border border-white/10 bg-brand-900/70 p-6 text-center">
                <p className="text-3xl font-semibold text-brand-gold">10+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-brand-300">Years Experience</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-brand-900/70 p-6 text-center">
                <p className="text-3xl font-semibold text-brand-gold">5000+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-brand-300">Happy Customers</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-brand-900/70 p-6 text-center">
                <p className="text-3xl font-semibold text-brand-gold">25</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-brand-300">Signature Drinks</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative overflow-hidden rounded-[48px] border border-white/10 bg-brand-950/90 p-8 shadow-glass backdrop-blur-xl"
          >
            <div className="absolute -left-10 top-8 h-20 w-20 rounded-full bg-brand-gold/10 blur-3xl" />
            <div className="absolute right-6 bottom-10 h-28 w-28 rounded-full bg-brand-400/5 blur-3xl" />
            <div className="grid gap-6">
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-brand-900/70 p-5 shadow-soft">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-gold/10 text-3xl">☕</div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-brand-400">Roasted beans</p>
                  <p className="mt-1 text-lg font-semibold text-brand-100">Estate-sourced selections</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-brand-900/70 p-5 shadow-soft">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-400/10 text-3xl">✨</div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-brand-400">Barista craft</p>
                  <p className="mt-1 text-lg font-semibold text-brand-100">Precision in every pull</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-brand-800/60 p-6">
                <div className="absolute right-6 top-8 h-24 w-24 rounded-full bg-brand-gold/10 blur-3xl" />
                <p className="text-sm uppercase tracking-[0.24em] text-brand-gold">Bean illustration</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-black/20 p-5 text-center backdrop-blur-xl">
                    <p className="text-3xl">☕</p>
                    <p className="mt-3 text-sm text-brand-300">Arabica selection</p>
                  </div>
                  <div className="rounded-3xl bg-black/20 p-5 text-center backdrop-blur-xl">
                    <p className="text-3xl">🌿</p>
                    <p className="mt-3 text-sm text-brand-300">Sustainably sourced</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="gallery" className="mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Gallery</p>
            <h2 className="mt-4 text-4xl font-black text-brand-100 sm:text-5xl">Coffee preparation as art.</h2>
            <p className="mt-5 text-sm leading-7 text-brand-300 sm:text-base">Explore our gallery of poured espresso, latte art, and ambient lounge moments.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {galleryImages.map((src, index) => (
              <motion.button
                key={src}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setLightbox(src)}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-brand-900/60 p-0 shadow-soft transition hover:shadow-glass"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-transparent to-brand-950/10 opacity-0 transition group-hover:opacity-100" />
              </motion.button>
            ))}
          </div>
        </section>

        <section id="why" className="mt-32">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Why Choose Us</p>
              <h2 className="text-4xl font-black text-brand-100 sm:text-5xl">Exceptional ingredients, immersive service, and unforgettable lounge vibes.</h2>
              <p className="max-w-xl text-sm leading-8 text-brand-300 sm:text-base">
                Every detail at Brew Haven is created intentionally: from premium beans and bespoke desserts to comfortable seating and lightning-fast hospitality.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-[32px] border border-white/10 bg-brand-900/70 p-6 shadow-soft backdrop-blur-xl"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-gold/10 text-3xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-100">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-brand-300">{feature.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Customer Reviews</p>
            <h2 className="mt-4 text-4xl font-black text-brand-100 sm:text-5xl">What our patrons are saying.</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-[32px] border border-white/10 bg-brand-900/70 p-8 shadow-soft backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <img src={item.photo} alt={item.name} className="h-16 w-16 rounded-full object-cover" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-100">{item.name}</h3>
                    <p className="text-sm text-brand-300">{item.role}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex gap-1 text-brand-gold">
                    {Array.from({ length: item.rating }, (_, idx) => (
                      <span key={idx}>★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-brand-300">"{item.text}"</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="offers" className="mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Special Offers</p>
            <h2 className="mt-4 text-4xl font-black text-brand-100 sm:text-5xl">Seasonal promotions crafted for every coffee moment.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-[32px] border border-white/10 bg-brand-900/80 p-8 shadow-soft backdrop-blur-xl"
              >
                <div className="mb-4 inline-flex rounded-full bg-brand-gold/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand-gold">
                  {offer.label}
                </div>
                <h3 className="text-2xl font-semibold text-brand-100">{offer.title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-300">{offer.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-32 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6 rounded-[40px] border border-white/10 bg-brand-900/80 p-8 shadow-glass backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Contact & Location</p>
            <h2 className="text-4xl font-black text-brand-100 sm:text-5xl">Visit Brew Haven or get in touch.</h2>
            <div className="grid gap-6 text-sm leading-7 text-brand-300">
              <div>
                <p className="text-base font-semibold text-brand-100">Address</p>
                <p>362 Velvet Lane, Downtown, Seattle, WA</p>
              </div>
              <div>
                <p className="text-base font-semibold text-brand-100">Phone</p>
                <p>(206) 555-0127</p>
              </div>
              <div>
                <p className="text-base font-semibold text-brand-100">Email</p>
                <p>hello@brewhaven.com</p>
              </div>
              <div>
                <p className="text-base font-semibold text-brand-100">Opening Hours</p>
                <p>Mon – Fri: 7am – 9pm</p>
                <p>Sat – Sun: 8am – 10pm</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[32px] border border-white/10">
              <iframe
                className="h-72 w-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.6440491898!2d-122.35639468433062!3d47.606209879183236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015517b4c4fa9%3A0x8d4a71bb92a1bb58!2sSeattle%2C%20WA%2C%20USA!5e0!3m2!1sen!2sus!4v1719785592344!5m2!1sen!2sus"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brew Haven location"
              />
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[40px] border border-white/10 bg-brand-900/80 p-8 shadow-glass backdrop-blur-xl"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-brand-100">Name</label>
                <input type="text" placeholder="Your name" className="mt-3 w-full rounded-3xl border border-white/10 bg-brand-950/70 px-5 py-4 text-sm text-brand-100 outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-brand-100">Email</label>
                  <input type="email" placeholder="you@example.com" className="mt-3 w-full rounded-3xl border border-white/10 bg-brand-950/70 px-5 py-4 text-sm text-brand-100 outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-100">Phone</label>
                  <input type="tel" placeholder="(206) 555-0127" className="mt-3 w-full rounded-3xl border border-white/10 bg-brand-950/70 px-5 py-4 text-sm text-brand-100 outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-100">Message</label>
                <textarea rows={5} placeholder="How can we help you?" className="mt-3 w-full rounded-3xl border border-white/10 bg-brand-950/70 px-5 py-4 text-sm text-brand-100 outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20" />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button type="submit" className="inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-950 transition hover:-translate-y-0.5 hover:bg-opacity-90">
                  Contact Us
                </button>
                <a href="https://www.google.com/maps/dir//Seattle+WA" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-200 transition hover:border-brand-gold hover:text-brand-gold">
                  Get Directions
                </a>
              </div>
            </div>
          </motion.form>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-brand-950/95 px-6 py-12 text-brand-300 sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <h2 className="text-2xl font-black uppercase tracking-[0.3em] text-brand-100">Brew Haven</h2>
            <p className="max-w-md text-sm leading-7 text-brand-400">Luxury coffee experiences, premium beans, and unforgettable lounge moments designed for the modern urban guest.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-brand-gold">Quick Links</p>
              <ul className="mt-4 space-y-3 text-sm text-brand-300">
                <li><a href="#menu" className="hover:text-brand-gold">Menu</a></li>
                <li><a href="#about" className="hover:text-brand-gold">About</a></li>
                <li><a href="#gallery" className="hover:text-brand-gold">Gallery</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-brand-gold">Social</p>
              <ul className="mt-4 space-y-3 text-sm text-brand-300">
                <li><a href="#" className="hover:text-brand-gold">Instagram</a></li>
                <li><a href="#" className="hover:text-brand-gold">Facebook</a></li>
                <li><a href="#" className="hover:text-brand-gold">TikTok</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-brand-gold">Newsletter</p>
              <div className="mt-4 flex flex-col gap-3">
                <input type="email" placeholder="Email address" className="rounded-3xl border border-white/10 bg-brand-950/70 px-5 py-3 text-sm text-brand-100 outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20" />
                <button className="rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-950 transition hover:bg-opacity-90">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
          <button className="absolute right-6 top-6 text-3xl text-white/80 transition hover:text-white" onClick={() => setLightbox(null)}>
            ×
          </button>
          <img src={lightbox} alt="Gallery preview" className="max-h-[90vh] max-w-[90vw] rounded-[32px] object-cover shadow-glass" />
        </div>
      )}
    </div>
  );
}

export default App;
