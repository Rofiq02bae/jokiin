import { motion } from "motion/react";
import { Phone, Mail, MessageCircle, ArrowRight, Users, CheckCircle, Clock } from "lucide-react";
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
                  <a
                    href="https://wa.me/6281568389940"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:underline"
                  >
                    Chat dengan kami
                  </a>
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
              <Button
                size="lg"
                asChild
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-xl"
              >
                <a
                  href="https://wa.me/6281568389940"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Mulai Konsultasi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/images/image1.jpg"
                alt="Customer Support Team"
                className="w-full h-auto"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-2xl shadow-2xl max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Tugas Selesai</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="absolute -top-6 -right-6 bg-white text-gray-900 p-6 rounded-2xl shadow-2xl max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">200+</div>
                  <div className="text-sm text-gray-600">Mahasiswa Puas</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-20 -right-4 bg-gradient-to-br from-purple-500 to-blue-500 text-white p-4 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <div>
                  <div className="text-sm font-semibold">Response Time</div>
                  <div className="text-xl font-bold">&lt; 5 menit</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-300 rounded-full blur-2xl opacity-50" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-300 rounded-full blur-2xl opacity-50" />
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
