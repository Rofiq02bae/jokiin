import { Head } from "@inertiajs/react";
import { Navbar } from "../components/Navbar";
import { motion } from "motion/react";
import {
    UserPlus,
    ClipboardList,
    CheckCircle,
    MessageCircle,
    Clock,
    CreditCard,
    FileCheck,
    ArrowRight
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export default function CaraOrderPage() {
    const steps = [
        {
            number: 1,
            title: "Daftar/Login",
            description: "Masukkan nama dan nomor WhatsApp Anda untuk memulai",
            icon: UserPlus,
            color: "from-blue-500 to-blue-600",
            details: [
                "Isi nama lengkap",
                "Masukkan nomor WhatsApp aktif",
                "Klik tombol 'Login'",
            ]
        },
        {
            number: 2,
            title: "Isi Detail Tugas",
            description: "Berikan informasi lengkap tentang tugas yang ingin dikerjakan",
            icon: ClipboardList,
            color: "from-purple-500 to-purple-600",
            details: [
                "Pilih mata kuliah dari dropdown",
                "Tentukan deadline pengerjaan",
                "Jelaskan deskripsi tugas secara detail",
            ]
        },
        {
            number: 3,
            title: "Konfirmasi Order",
            description: "Kami akan review dan konfirmasi pesanan Anda",
            icon: CheckCircle,
            color: "from-green-500 to-green-600",
            details: [
                "Pesanan akan diproses",
                "Tim kami akan review detail tugas",
                "Anda akan dihubungi via WhatsApp",
            ]
        },
        {
            number: 4,
            title: "Pembayaran",
            description: "Lakukan pembayaran sesuai kesepakatan",
            icon: CreditCard,
            color: "from-yellow-500 to-yellow-600",
            details: [
                "Dapatkan quote harga dari tim",
                "Transfer ke rekening yang diberikan",
                "Kirim bukti pembayaran",
            ]
        },
        {
            number: 5,
            title: "Pengerjaan",
            description: "Tim profesional kami mulai mengerjakan tugas Anda",
            icon: Clock,
            color: "from-orange-500 to-orange-600",
            details: [
                "Tugas dikerjakan oleh ahli",
                "Progress update berkala",
                "Kualitas terjamin",
            ]
        },
        {
            number: 6,
            title: "Selesai & Revisi",
            description: "Terima hasil dan minta revisi jika diperlukan",
            icon: FileCheck,
            color: "from-pink-500 to-pink-600",
            details: [
                "Hasil dikirim sebelum deadline",
                "Revisi gratis (jika ada)",
                "Garansi kepuasan 100%",
            ]
        },
    ];

    const faqs = [
        {
            question: "Berapa lama waktu pengerjaan?",
            answer: "Tergantung tingkat kesulitan dan deadline yang Anda tentukan. Kami bisa mengerjakan tugas dalam waktu 1-7 hari."
        },
        {
            question: "Bagaimana cara pembayaran?",
            answer: "Kami menerima pembayaran via transfer bank (BCA, Mandiri, BNI) atau e-wallet (OVO, GoPay, Dana)."
        },
        {
            question: "Apakah ada garansi revisi?",
            answer: "Ya! Kami memberikan garansi revisi gratis jika hasil tidak sesuai dengan requirement awal."
        },
        {
            question: "Apakah data saya aman?",
            answer: "Sangat aman. Semua data pelanggan dan detail tugas dijaga kerahasiaannya dan tidak akan dibagikan ke pihak ketiga."
        },
    ];

    return (
        <>
            <Head title="Cara Order - Jokiin" />
            <Navbar />

            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
                {/* Hero Section - Mobile Responsive */}
                <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="container mx-auto px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                                Cara Order di Jokiin
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed px-2">
                                Proses pemesanan yang mudah, cepat, dan aman.
                                Ikuti 6 langkah sederhana untuk mendapatkan bantuan tugas kuliah Anda.
                            </p>
                            <Button
                                size="lg"
                                asChild
                                className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
                            >
                                <a href="/add-joki" className="flex items-center justify-center gap-2">
                                    Mulai Order Sekarang
                                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                </a>
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* Steps Section - Mobile Optimized */}
                <section className="py-12 sm:py-16 md:py-20">
                    <div className="container mx-auto px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-10 sm:mb-12 md:mb-16"
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                                Langkah-Langkah Pemesanan
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                                Prosesnya sangat mudah dan hanya membutuhkan beberapa menit
                            </p>
                        </motion.div>

                        {/* Mobile: Single Column, Tablet: 2 columns, Desktop: 3 columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                                        <CardHeader className="pb-4">
                                            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-3 sm:mb-4`}>
                                                <step.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3 mb-2">
                                                <span className="text-3xl sm:text-4xl font-bold text-gray-200">
                                                    {step.number}
                                                </span>
                                                <CardTitle className="text-lg sm:text-xl">
                                                    {step.title}
                                                </CardTitle>
                                            </div>
                                            <CardDescription className="text-sm sm:text-base">
                                                {step.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="pt-0">
                                            <ul className="space-y-2">
                                                {step.details.map((detail, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                                                        <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section - Mobile Touch Friendly */}
                <section className="py-12 sm:py-16 md:py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-10 sm:mb-12 md:mb-16"
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                                Pertanyaan yang Sering Diajukan
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 px-4">
                                Temukan jawaban atas pertanyaan umum seputar layanan kami
                            </p>
                        </motion.div>

                        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="hover:shadow-lg transition-shadow">
                                        <CardHeader className="pb-3 sm:pb-6">
                                            <CardTitle className="text-base sm:text-lg flex items-start gap-2 sm:gap-3">
                                                <MessageCircle className="h-5 w-5 text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                                                <span className="leading-tight">{faq.question}</span>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="pt-0">
                                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section - Mobile Responsive */}
                <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="container mx-auto px-4 sm:px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-2xl mx-auto"
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                                Siap Untuk Memulai?
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed px-2">
                                Jangan biarkan tugas kuliah mengganggu aktivitas Anda.
                                Biarkan kami membantu Anda menyelesaikannya!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto sm:max-w-none">
                                <Button
                                    size="lg"
                                    asChild
                                    className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
                                >
                                    <a href="/add-joki" className="flex items-center justify-center gap-2">
                                        Order Sekarang
                                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    asChild
                                    className="border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
                                >
                                    <a
                                        href="https://wa.me/6281568389940"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2"
                                    >
                                        <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                                        Hubungi Kami
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
}
