import { motion } from "motion/react";
import { ArrowDown, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Main Focal Point */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
                🚀 Tingkatkan Prestasi Akademik Anda
              </span>
            </motion.div>

            {/* Main Heading - FOCAL POINT */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl lg:text-6xl mb-6"
            >
              Joki Tugas Terpercaya{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                untuk Mahasiswa
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Kami menyediakan pendampingan belajar profesional untuk mahasiswa yang ingin fokus pada pengembangan skill inti sambil menjaga kualitas akademik
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                <Phone className="mr-2 h-5 w-5" />
                Hubungi Konsultan
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2 hover:bg-gray-50">
                <Mail className="mr-2 h-5 w-5" />
                Order Sekarang
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl text-blue-600 mb-1">150+</div>
                <div className="text-sm text-gray-600">Mahasiswa Terbantu</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl text-purple-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">Tingkat Kepuasan</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl text-blue-600 mb-1">95%</div>
                <div className="text-sm text-gray-600">Tepat Waktu</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/images/image1.jpg"
                alt="Professional Service Team"
                className="w-full h-auto"
              />
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-8 bg-white p-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Proyek Selesai</div>
                    <div className="text-xl text-gray-900">150+</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-200 rounded-full blur-2xl opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm">Scroll untuk lebih lanjut</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
