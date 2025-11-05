import { motion } from "motion/react";
import { Shield, Clock, Award, HeartHandshake } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const benefits = [
  {
    icon: Shield,
    title: "Originalitas Terjamin",
    description: "Berpengalaman dengan track record yang terbukti"
  },
  {
    icon: Clock,
    title: "Deadline Pasti",
    description: "Komitmen penyelesaian tepat waktu"
  },
  {
    icon: Award,
    title: "Kualitas Akademik Terjamin",
    description: "Standar penulisan sesuai pedoman ilmiah"
  },
  {
    icon: HeartHandshake,
    title: "Kerahasiaan Terjamin",
    description: "Privasi dan kerahasiaan data diutamakan"
  }

];

export function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/images/image2.jpg"
                alt="Business Consulting"
                className="w-full h-auto"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-300 rounded-full blur-2xl opacity-50" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-300 rounded-full blur-2xl opacity-50" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-4xl mb-2">🏆</div>
                <div className="text-sm text-gray-600">Best Service</div>
                <div className="text-xl text-gray-900">2024</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-blue-600 uppercase tracking-wider text-sm">
              Keunggulan Kami
            </span>
            <h2 className="text-4xl lg:text-5xl mt-3 mb-6">
              Mengapa Memilih{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Layanan Kami?
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Kami berkomitmen memberikan yang terbaik untuk setiap klien dengan pendekatan personal dan solusi yang tepat sasaran
            </p>

            {/* Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 p-6 bg-white rounded-2xl shadow-lg border-l-4 border-blue-600"
            >
              <p className="text-gray-700">
                <span className="text-blue-600">💡 Fun Fact:</span> 95% klien kami merekomendasikan layanan kami kepada rekan mereka!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
