import { motion } from "motion/react";
import { Briefcase, TrendingUp, Users, Lightbulb, Target, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Briefcase,
    title: "Konsultasi Tugas & Projek",
    description: "Bimbingan profesional untuk penyelesaian tugas dengan standar akademik tinggi",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Pendampingan Skripsi",
    description: "Support komprehensif dari proposal hingga sidang akhir",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Users,
    title: "Penyelesaian Tugas Kuliah",
    description: "Assistensi untuk tugas harian, paper, dan proyek akademik",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Lightbulb,
    title: "Development Projek Akhir",
    description: "Guidance untuk proyek programming dan penelitian",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Target,
    title: "Konsultasi Metodologi",
    description: "Pemilihan metode penelitian dan analisis data yang tepat",
    color: "from-green-500 to-green-600"
  }
];

export function Services() {
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
            🎓 Layanan Pendampingan Akademik
          </span>
          <h2 className="text-4xl lg:text-5xl mt-3 mb-4">
            Konsultasi atau Joki{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Tugas
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan pendampingan akademik yang dirancang untuk membantu mahasiswa mencapai kesuksesan akademik mereka dengan lebih mudah dan efisien.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-6 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm">Pelajari lebih lanjut →</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Below Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            Tidak menemukan layanan yang Anda cari?
          </p>
          <button className="text-blue-600 hover:text-blue-700 underline underline-offset-4">
            Hubungi kami untuk solusi custom
          </button>
        </motion.div>
      </div>
    </section>
  );
}
