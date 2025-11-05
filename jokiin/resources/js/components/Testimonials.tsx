import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

const testimonials = [
  {
    name: "Rina Marlina",
    role: "Mahasiswa Keperawatan",
    content: "Berkat bantuan mereka, saya bisa fokus magang sambil menjaga IPK. Skripsi selesai tepat waktu dengan nilai A!",
    rating: 5,
    initial: "RM"
  },
  {
    name: "Ahmad Fauzi",
    role: "Mahasiswa Teknik Informatika",
    content: "Pendampingan yang sangat profesional untuk tugas-tugas programming. Kodenya rapi dan dokumentasi lengkap!",
    rating: 5,
    initial: "AF"
  },
  {
    name: "Dewi Sartika",
    role: "Mahasiswa Psikologi",
    content: "Layanan konsultasi metodologi sangat membantu penelitian saya. Analisis data menjadi lebih terstruktur dan akurat.",
    rating: 5,
    initial: "DS"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 uppercase tracking-wider text-sm">
            Testimoni
          </span>
          <h2 className="text-4xl lg:text-5xl mt-3 mb-4">
            Cerita Sukses{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Klien Kami?
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Berikut cerita sukses dari mereka yang telah bekerja sama dengan kami
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="h-10 w-10 text-blue-200 group-hover:text-blue-300 transition-colors" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        {testimonial.initial}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full">
            <div className="flex -space-x-2">
              {["BS", "SN", "AW", "DP", "MR"].map((initial, i) => (
                <Avatar key={i} className="h-8 w-8 border-2 border-white">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs">
                    {initial}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p className="text-sm text-gray-700">
              <span className="text-blue-600">150+</span> Mahasiswa telah mempercayai kami
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
