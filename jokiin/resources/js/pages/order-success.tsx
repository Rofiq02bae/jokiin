import { Navbar } from "../components/Navbar";
import { Head, Link } from "@inertiajs/react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { CheckCircle, Home, PlusCircle, MessageCircle, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function OrderSuccessPage() {
    return (
        <>
            <Head title="Order Berhasil - Jokiin" />
            <Navbar />

            {/* Mobile & Desktop Responsive Container */}
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
                <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
                    <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="w-full max-w-2xl"
                        >
                            {/* Success Icon - Responsive Size */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                className="flex justify-center mb-6 sm:mb-8"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-50 animate-pulse" />
                                    <CheckCircle className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-green-500" strokeWidth={1.5} />
                                </div>
                            </motion.div>

                            {/* Main Card */}
                            <Card className="shadow-2xl border-0 overflow-hidden">
                                <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2" />

                                <CardHeader className="text-center pb-4 px-4 sm:px-6 md:px-8 pt-6 sm:pt-8">
                                    <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                                        Order Berhasil! 🎉
                                    </CardTitle>
                                    <CardDescription className="text-base sm:text-lg text-gray-600">
                                        Terima kasih! Order joki Anda telah berhasil dibuat dan sedang diproses oleh tim kami.
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 space-y-6">
                                    {/* Info Cards - Mobile Stack, Desktop Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-100"
                                        >
                                            <div className="flex items-start space-x-3">
                                                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">
                                                        Sedang Diproses
                                                    </h3>
                                                    <p className="text-xs sm:text-sm text-gray-600">
                                                        Tim kami akan segera menghubungi Anda
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-100"
                                        >
                                            <div className="flex items-start space-x-3">
                                                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-0.5 flex-shrink-0" />
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">
                                                        Cek WhatsApp
                                                    </h3>
                                                    <p className="text-xs sm:text-sm text-gray-600">
                                                        Konfirmasi akan dikirim via WhatsApp
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Next Steps */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="bg-gray-50 p-4 sm:p-5 rounded-lg border border-gray-200"
                                    >
                                        <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-3">
                                            Langkah Selanjutnya:
                                        </h3>
                                        <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</span>
                                                <span>Order Anda sudah tercatat dalam sistem</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</span>
                                                <span>Admin akan menghubungi via WhatsApp untuk konfirmasi</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</span>
                                                <span>Setelah pembayaran, tugas akan segera dikerjakan</span>
                                            </li>
                                        </ul>
                                    </motion.div>

                                    {/* Action Buttons - Stack on Mobile, Row on Desktop */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
                                    >
                                        <Link href="/" className="flex-1">
                                            <Button
                                                className="w-full h-11 sm:h-12 text-sm sm:text-base"
                                                size="lg"
                                            >
                                                <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                                Kembali ke Beranda
                                            </Button>
                                        </Link>
                                        <Link href="/add-joki" className="flex-1">
                                            <Button
                                                variant="outline"
                                                className="w-full h-11 sm:h-12 text-sm sm:text-base border-2"
                                                size="lg"
                                            >
                                                <PlusCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                                Buat Order Baru
                                            </Button>
                                        </Link>
                                    </motion.div>

                                    {/* Contact Support - Mobile Optimized */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.7 }}
                                        className="text-center pt-4 border-t border-gray-200"
                                    >
                                        <p className="text-xs sm:text-sm text-gray-500 mb-2">
                                            Ada pertanyaan atau kendala?
                                        </p>
                                        <a
                                            href="https://wa.me/6281234567890"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm sm:text-base text-green-600 hover:text-green-700 font-medium"
                                        >
                                            <MessageCircle className="w-4 h-4 mr-2" />
                                            Hubungi Customer Service
                                        </a>
                                    </motion.div>
                                </CardContent>
                            </Card>

                            {/* Additional Info - Hidden on Small Mobile, Visible on Larger Screens */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="hidden sm:block text-center mt-6 text-sm text-gray-600"
                            >
                                <p>Nomor order dan detail lengkap telah dikirim ke WhatsApp Anda</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
