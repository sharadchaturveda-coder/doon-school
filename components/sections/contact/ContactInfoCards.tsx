import { motion } from 'framer-motion';
import Card from '../../ui/card';
import siteData from '../../../data/site.json';

export default function ContactInfoCards() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-heading font-black mb-4 text-primary">Get In Touch</h2>
          <p className="text-xl text-primary max-w-3xl mx-auto">Multiple ways to reach us - we're always here to help!</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              icon: "📍",
              title: "Visit Us",
              content: siteData.contact.address,
              bgColor: "bg-brand-primary/5",
              delay: 0
            },
            {
              icon: "📞",
              title: "Call Us",
              content: siteData.contact.phone,
              subtitle: "Mon-Fri: 8:00 AM - 4:00 PM",
              bgColor: "bg-brand-primary/10",
              delay: 0.1
            },
            {
              icon: "✉️",
              title: "Email Us",
              content: siteData.contact.email,
              bgColor: "bg-brand-primary/15",
              delay: 0.2
            }
          ].map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: contact.delay, ease: "easeOut" }}
              whileHover={{
                scale: 1.03,
                y: -4,
                transition: { duration: 0.15 }
              }}
            >
              <Card className={`p-8 text-center h-full ${contact.bgColor} text-primary border border-brand-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                <div className="mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto backdrop-blur-sm">
                    <span className="text-4xl">{contact.icon}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{contact.title}</h3>
                <p className="text-lg leading-relaxed opacity-90 mb-2">
                  {contact.content}
                </p>
                {contact.subtitle && (
                  <p className="text-sm opacity-80">{contact.subtitle}</p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
