import { motion } from "motion/react";
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Animated Circles */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-200 uppercase tracking-wider text-sm">
              Anda perlu bantuan?
            </span>
            <h2 className="text-4xl lg:text-5xl mt-3 mb-6">
              Langsung saja konsultasi dengan kami!
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Konsultasi jika anda memiliki pertanyaan atau butuh informasi lebih lanjut mengenai layanan kami.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-blue-200">Telepon</div>
                  <div className="text-lg">+62 815-6838-9940</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-blue-200">Email</div>
                  <div className="text-lg">info@jasaumkm.com</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-blue-200">WhatsApp</div>
                  <div className="text-lg"><a href="https://wa.me/+6281568389940">Chat dengan kami</a></div>
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" href="https://wa.me/+6281568389940" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-xl">
                Mulai Konsultasi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBoYXBweXxlbnwxfHx8fDE3NjIyNTk2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy Customer Service"
                className="w-full h-auto"
              />
            </div> */}

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-2xl shadow-xl"
            >
              {/* <div className="text-center">
                <div className="text-3xl text-blue-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Dukungan Penuh</div>
              </div> */}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl"
        >
          <p className="text-lg">
            🎁 <span className="text-blue-200">Promo Spesial:</span> Konsultasi gratis untuk 10 pendaftar pertama bulan ini!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
