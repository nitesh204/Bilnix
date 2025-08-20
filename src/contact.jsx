import { Mail, Phone, MapPin, Clock, Headset, Wrench, GraduationCap, Shield } from "lucide-react";
import { motion } from "framer-motion";

function ContactSection() {
  const services = [
    { icon: Headset, label: "24/7 Technical Support" },
    { icon: Wrench, label: "Custom Development" },
    { icon: GraduationCap, label: "Training & Implementation" },
    { icon: Shield, label: "Data Security" },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 shadow-lg p-6 bg-white rounded-xl">
        {/* Left: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-xl border"
        >
          <h3 className="text-2xl font-bold mb-4">Send us a Message</h3>
          <div className="space-y-4">
            <input type="text" placeholder="Full Name *" required className="bg-slate-100 px-4 py-3 w-full rounded-lg border focus:ring-2 focus:ring-indigo-400" />
            <input type="email" placeholder="Email Address *" required className="bg-slate-100 px-4 py-3 w-full rounded-lg border focus:ring-2 focus:ring-indigo-400" />
            <input type="text" placeholder="Phone Number" className="bg-slate-100 px-4 py-3 w-full rounded-lg border focus:ring-2 focus:ring-indigo-400" />
            <select className="bg-slate-100 px-4 py-3 w-full rounded-lg border focus:ring-2 focus:ring-indigo-400">
              <option>Select your business type</option>
              <option>Salon</option>
              <option>Café</option>
              <option>Mobile Shop</option>
              <option>Other</option>
            </select>
            <select className="bg-slate-100 px-4 py-3 w-full rounded-lg border focus:ring-2 focus:ring-indigo-400">
              <option>Select service</option>
              <option>Billing</option>
              <option>Reporting</option>
              <option>Custom Workflow</option>
            </select>
            <textarea rows={3} placeholder="Tell us about your requirements..." required className="bg-slate-100 px-4 py-3 w-full rounded-lg border focus:ring-2 focus:ring-indigo-400" />
            <button type="submit" className="w-full bg-indigo-600 text-white font-semibold rounded-md py-3 hover:bg-indigo-700 transition">
              Send Message
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-4">Or contact us directly with the details on the right.</p>
        </motion.form>

        {/* Right: Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col justify-between space-y-8"
        >
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Information</h4>
            <div className="flex items-start gap-4 mb-3">
              <Mail className="text-indigo-600 w-6 h-6 mt-1" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-sm text-slate-600">bilnix@gmail.com</div>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-3">
              <Phone className="text-indigo-600 w-6 h-6 mt-1" />
              <div>
                <div className="font-medium">Phone</div>
                <div className="text-sm text-slate-600">+91 9322880059<br />+91 9022035808</div>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-3">
              <MapPin className="text-indigo-600 w-6 h-6 mt-1" />
              <div>
                <div className="font-medium">Address</div>
                <div className="text-sm text-slate-600">Bilnix Technologies<br />Nagpur, Maharashtra<br />India</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-indigo-600 w-6 h-6 mt-1" />
              <div>
                <div className="font-medium">Business Hours</div>
                <div className="text-sm text-slate-600">
                  Mon-Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 10:00 AM - 4:00 PM<br />
                  Sun: Closed
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support & Services</h4>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {services.map((s, idx) => (
                <div key={s.label} className="flex items-center gap-2">
                  <s.icon className="text-indigo-600 w-5 h-5" />
                  <span className="text-sm">{s.label}</span>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-2">
                <a href="#" className="w-8 h-8 grid place-items-center bg-[#0077b5] rounded-full text-white text-lg font-bold">in</a>
                <a href="#" className="w-8 h-8 grid place-items-center bg-[#00acee] rounded-full text-white text-lg font-bold">X</a>
                <a href="#" className="w-8 h-8 grid place-items-center bg-[#4267B2] rounded-full text-white text-lg font-bold">f</a>
                <a href="#" className="w-8 h-8 grid place-items-center bg-[#d946ef] rounded-full text-white text-lg font-bold">ig</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
