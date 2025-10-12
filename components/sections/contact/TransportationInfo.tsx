import { motion } from 'framer-motion';
import Card from '../../ui/card';

export default function TransportationInfo() {
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
          <h2 className="text-5xl font-heading font-black mb-4 text-primary">Transportation</h2>
          <p className="text-xl text-primary max-w-3xl mx-auto">Safe and convenient transport services for our students</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <Card className="p-8 border-0">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🚐</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold mb-4 text-primary">Bus Transportation Services</h3>
                  <p className="text-primary leading-relaxed mb-4">
                    Our school offers a convenient and efficient bus service, designed to make every student's daily commute safe, comfortable, and stress-free. The transport system reflects our commitment to punctuality, safety, and care. With designated routes and scheduled pick-up and drop-off points, our transport department ensures that students arrive at school and return home comfortably and on time.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-blue-900 mb-2">Service Details:</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li>• Available for students from Kindergarten to P5</li>
                      <li>• Designated routes covering specific areas</li>
                      <li>• Trained staff accompany each bus</li>
                      <li>• Real-time updates for parents</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    For detailed route information, please contact the administrative office. Route lists are available through our parent communication channels.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
