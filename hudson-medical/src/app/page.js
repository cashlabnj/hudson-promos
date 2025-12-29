"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ShoppingCart, Truck, DollarSign, ShieldCheck, Package, CheckCircle, ArrowRight, ChevronDown, Building2, Users, Clock, Mail, MapPin } from "lucide-react";

const categories = [
  { id: "gloves", name: "Gloves & Hand Protection", desc: "Nitrile, latex, vinyl gloves", icon: "🧤", slug: "gloves" },
  { id: "first-aid", name: "First Aid & Wound Care", desc: "Bandages, kits, essentials", icon: "🩹", slug: "first-aid" },
  { id: "ppe", name: "PPE & Protective Wear", desc: "Masks, gowns, equipment", icon: "😷", slug: "ppe" },
  { id: "mobility", name: "Mobility & Daily Living", desc: "Canes, walkers, safety", icon: "🦯", slug: "mobility" },
  { id: "incontinence", name: "Incontinence & Personal Care", desc: "Briefs, underpads, care", icon: "🛁", slug: "incontinence" },
  { id: "wellness", name: "Health & Wellness", desc: "Organizers, braces, tools", icon: "💊", slug: "wellness" },
  { id: "facility", name: "Facility & Clinic Supplies", desc: "Exam paper, sharps, more", icon: "🏥", slug: "facility" },
  { id: "bulk", name: "Bulk & Clearance", desc: "Volume discounts, deals", icon: "📦", slug: "bulk" },
];

const products = [
  { id: 1, name: "Nitrile Exam Gloves - Box of 100", desc: "Powder-free, latex-free", price: 12.99, low: 8.99, icon: "🧤", featured: true },
  { id: 2, name: "Disposable Face Masks - 50 Pack", desc: "3-ply with ear loops", price: 9.99, low: 5.99, icon: "😷", featured: true },
  { id: 3, name: "First Aid Kit - 100 Piece", desc: "Complete for home/workplace", price: 29.99, low: 19.99, icon: "🩹", featured: true },
  { id: 4, name: "Disposable Underpads - 50 Pack", desc: "23x36 inches, absorbent", price: 24.99, low: 17.99, icon: "🛏️", featured: true },
];

const testimonials = [
  { name: "Karen M.", loc: "Ohio", text: "Fast shipping, great prices, exactly what we needed for our assisted living facility.", role: "Facility Manager" },
  { name: "David R.", loc: "Texas", text: "We switched from our old supplier and saved 30% on gloves. Quality is just as good.", role: "Home Care Provider" },
  { name: "Lisa T.", loc: "Florida", text: "The bulk pricing made it affordable to stock up. Customer service was very helpful.", role: "Clinic Administrator" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-primary-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2"><Phone className="w-4 h-4" /><span>(800) 555-0199</span></div>
          <div className="hidden sm:block">Free Shipping on Orders Over $99</div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-gray-900 leading-tight">Hudson Medical</div>
              <div className="text-xs text-gray-500">Suppliers</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="#shop" className="text-gray-700 hover:text-primary-500 font-medium">Shop</Link>
            <Link href="#quote" className="text-gray-700 hover:text-primary-500 font-medium">Bulk Orders</Link>
            <Link href="#about" className="text-gray-700 hover:text-primary-500 font-medium">About</Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary-500 font-medium">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#quote" className="hidden md:block btn-primary text-sm py-2 px-4">Request Quote</Link>
            <button className="lg:hidden text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-4">
          <Link href="#shop" className="block text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="#quote" className="block text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Bulk Orders</Link>
          <Link href="#about" className="block text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#contact" className="block text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="#quote" className="block btn-primary text-center" onClick={() => setMenuOpen(false)}>Request Quote</Link>
        </div>
      )}
    </header>
  );
}

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
      <div className="aspect-square bg-gray-50 flex items-center justify-center text-6xl group-hover:bg-gray-100 transition-colors">{product.icon}</div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-primary-500 transition-colors">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.desc}</p>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <span className="text-sm text-accent-500">As low as ${product.low.toFixed(2)}</span>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors">Add to Cart</button>
          <Link href="#quote" className="px-3 py-2 border border-gray-200 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-500 transition-colors text-sm">Quote</Link>
        </div>
      </div>
    </div>
  );
}

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", products: "", quantity: "", zip: "", notes: "" });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  if (submitted) {
    return (
      <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
        <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Quote Request Received!</h3>
        <p className="text-gray-600 mb-6">We will get back to you within 1 business day.</p>
        <p className="text-gray-600">For urgent inquiries: <span className="font-semibold">(800) 555-0199</span></p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input type="text" name="name" required value={form.name} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" placeholder="John Smith" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
          <input type="text" name="company" value={form.company} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" placeholder="ABC Healthcare" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input type="email" name="email" required value={form.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" placeholder="john@company.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
          <input type="tel" name="phone" required value={form.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" placeholder="(555) 123-4567" />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Products Needed *</label>
        <textarea name="products" required rows={3} value={form.products} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" placeholder="e.g., Nitrile gloves (M, L), Face masks, First aid kits..." />
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Est. Quantity *</label>
          <select name="quantity" required value={form.quantity} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none">
            <option value="">Select...</option>
            <option value="10-50">10-50 units</option>
            <option value="50-100">50-100 units</option>
            <option value="100-500">100-500 units</option>
            <option value="500-1000">500-1,000 units</option>
            <option value="1000+">1,000+ units</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Zip *</label>
          <input type="text" name="zip" required value={form.zip} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" placeholder="12345" />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
        <textarea name="notes" rows={2} value={form.notes} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" placeholder="Any special requirements..." />
      </div>
      <button type="submit" className="w-full btn-primary text-lg py-4">Submit Quote Request</button>
    </form>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center"><span className="text-white font-bold text-xl">H</span></div>
              <div><div className="font-bold text-white">Hudson Medical</div><div className="text-xs text-gray-400">Suppliers</div></div>
            </div>
            <p className="text-sm mb-4">Quality medical supplies at direct pricing.</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary-400" />(800) 555-0199</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary-400" />info@hudsonmedicalsuppliers.com</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary-400" />Mahwah, NJ</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 5).map((c) => (<li key={c.id}><Link href="#shop" className="hover:text-primary-400">{c.name}</Link></li>))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#contact" className="hover:text-primary-400">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-primary-400">Shipping & Returns</Link></li>
              <li><Link href="#quote" className="hover:text-primary-400">Request a Quote</Link></li>
              <li><Link href="#" className="hover:text-primary-400">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary-400">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary-400">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-primary-400">Medical Disclaimer</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Hudson Medical Suppliers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Quality Medical Supplies, Direct Pricing</h1>
              <p className="mt-6 text-xl md:text-2xl text-primary-100">From exam gloves to mobility aids—get the supplies you need without the markup. Fast shipping, bulk discounts, no hassle.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="#shop" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-center">Shop Supplies</Link>
                <Link href="#quote" className="btn-secondary border-white text-white hover:bg-white/10 text-center">Request Bulk Quote</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="bg-gray-50 py-8 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0"><Truck className="w-6 h-6 text-primary-600" /></div>
                <div><div className="font-semibold text-gray-900">Fast Shipping</div><div className="text-sm text-gray-500">Nationwide</div></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0"><DollarSign className="w-6 h-6 text-primary-600" /></div>
                <div><div className="font-semibold text-gray-900">Direct Pricing</div><div className="text-sm text-gray-500">No middlemen</div></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0"><ShieldCheck className="w-6 h-6 text-primary-600" /></div>
                <div><div className="font-semibold text-gray-900">Quality Trust</div><div className="text-sm text-gray-500">Reliable products</div></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0"><Package className="w-6 h-6 text-primary-600" /></div>
                <div><div className="font-semibold text-gray-900">Bulk Discounts</div><div className="text-sm text-gray-500">Save on volume</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="shop" className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Shop by Category</h2>
              <p className="mt-3 text-lg text-gray-600">Everything you need to keep your home, clinic, or facility stocked.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {categories.map((cat) => (
                <div key={cat.id} className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-primary-200 transition-all cursor-pointer">
                  <div className="text-5xl mb-4">{cat.icon}</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-500 transition-colors">{cat.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Customer Favorites</h2>
                <p className="mt-2 text-gray-600">Our most-ordered supplies—restocked and ready to ship.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.filter(p => p.featured).map((product) => (<ProductCard key={product.id} product={product} />))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Simple Ordering, Fast Delivery</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Browse & Select</h3>
                <p className="text-gray-600">Find what you need across our full catalog.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Order Any Quantity</h3>
                <p className="text-gray-600">Single units or bulk—your choice.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">We Ship Fast</h3>
                <p className="text-gray-600">Reliable delivery straight to your door.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section id="quote" className="py-12 md:py-16 bg-secondary-500 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Request a Bulk Quote</h2>
                <p className="mt-4 text-xl text-primary-100">Get custom pricing for large orders. We respond within 1 business day.</p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3"><Package className="w-5 h-5 text-primary-200 flex-shrink-0 mt-1" /><span>Custom volume pricing</span></div>
                  <div className="flex items-start gap-3"><Users className="w-5 h-5 text-primary-200 flex-shrink-0 mt-1" /><span>Dedicated account support</span></div>
                  <div className="flex items-start gap-3"><Building2 className="w-5 h-5 text-primary-200 flex-shrink-0 mt-1" /><span>NET terms for qualified businesses</span></div>
                  <div className="flex items-start gap-3"><Clock className="w-5 h-5 text-primary-200 flex-shrink-0 mt-1" /><span>Fast response within 1 day</span></div>
                </div>
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section id="about" className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Hudson Medical</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="space-y-4">
                <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0" /><span className="text-gray-700">Thousands of orders shipped nationwide</span></div>
                <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0" /><span className="text-gray-700">Trusted by caregivers, clinics, and practices</span></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0" /><span className="text-gray-700">Responsive support team</span></div>
                <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0" /><span className="text-gray-700">Hassle-free returns</span></div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-700 italic mb-4">"{t.text}"</p>
                  <div><div className="font-semibold text-gray-900">{t.name}</div><div className="text-sm text-gray-500">{t.role} • {t.loc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-12 md:py-16 bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Need Help Finding the Right Supplies?</h2>
            <p className="mt-3 text-lg text-gray-600">Our team is here to help—whether you need one box or one hundred.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8005550199" className="btn-primary inline-flex items-center justify-center gap-2"><Phone className="w-5 h-5" /> (800) 555-0199</a>
              <a href="mailto:info@hudsonmedicalsuppliers.com" className="btn-secondary inline-flex items-center justify-center gap-2"><Mail className="w-5 h-5" /> Email Us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
