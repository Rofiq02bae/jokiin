import { FormUser } from "../components/formUser";
import { Navbar } from "../components/Navbar";
import { Head } from "@inertiajs/react";
import { motion } from "motion/react";
import { UserPlus } from "lucide-react";

export default function AddJokiPage() {
    return (
        <>
            <Head title="Daftar/Login - Jokiin" />
            <Navbar />

            {/* Mobile & Desktop Responsive Container */}
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-16">
                    <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-md"
                        >
                            {/* Header Icon - Responsive */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="flex justify-center mb-6 sm:mb-8"
                            >
                                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 sm:p-4 rounded-full shadow-lg">
                                    <UserPlus className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                </div>
                            </motion.div>

                            {/* Main Card */}
                            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                                {/* Gradient Bar */}
                                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 sm:h-2" />

                                {/* Content */}
                                <div className="p-6 sm:p-8 md:p-10">
                                    {/* Title - Responsive Text Size */}
                                    <div className="text-center mb-6 sm:mb-8">
                                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                                            Daftar/Login
                                        </h1>
                                        <p className="text-sm sm:text-base text-gray-600">
                                            Masukkan data Anda untuk melanjutkan order
                                        </p>
                                    </div>

                                    {/* Form Component */}
                                    <FormUser />

                                    {/* Info Text - Hidden on Small Mobile */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="hidden sm:block mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100"
                                    >
                                        <p className="text-xs sm:text-sm text-gray-600 text-center">
                                            🔒 Data Anda aman dan hanya digunakan untuk keperluan order
                                        </p>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Bottom Info - Mobile Visible */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="mt-6 text-center"
                            >
                                <p className="text-xs sm:text-sm text-gray-500">
                                    Dengan melanjutkan, Anda menyetujui{" "}
                                    <a href="#" className="text-blue-600 hover:underline">
                                        Syarat & Ketentuan
                                    </a>
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}