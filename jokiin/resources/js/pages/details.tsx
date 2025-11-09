import { JokiDetailsForm } from "../components/jokiDetails";
import { Navbar } from "../components/Navbar";
import { Head } from "@inertiajs/react";
import { motion } from "motion/react";
import { ClipboardList, User as UserIcon } from "lucide-react";
import { Card } from "../components/ui/card";

type Matkul = {
    id: number;
    nama_matkul: string;
};

type User = {
    id: number;
    nama: string;
    nomor: string;
};

type Props = {
    user: User;
    matkuls: Matkul[];
};

export default function JokiDetailsPage({ user, matkuls }: Props) {
    return (
        <>
            <Head title="Detail Order - Jokiin" />
            <Navbar />
            
            {/* Mobile & Desktop Responsive Container */}
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
                <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-16">
                    <div className="flex items-start justify-center min-h-[calc(100vh-120px)]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-2xl"
                        >
                            {/* Header Icon - Responsive */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="flex justify-center mb-6 sm:mb-8"
                            >
                                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 sm:p-4 rounded-full shadow-lg">
                                    <ClipboardList className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                </div>
                            </motion.div>

                            {/* User Info Card - Responsive */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mb-6"
                            >
                                <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                                    <div className="p-4 sm:p-5">
                                        <div className="flex items-center space-x-3">
                                            <div className="bg-white p-2 rounded-full">
                                                <UserIcon className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-xs sm:text-sm text-gray-600">Logged in as:</p>
                                                <p className="font-semibold text-base sm:text-lg text-gray-900 truncate">
                                                    {user.nama}
                                                </p>
                                                <p className="text-xs sm:text-sm text-gray-600">{user.nomor}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>

                            {/* Main Form Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                                    {/* Gradient Bar */}
                                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-1.5 sm:h-2" />
                                    
                                    {/* Content */}
                                    <div className="p-6 sm:p-8 md:p-10">
                                        {/* Title - Responsive Text Size */}
                                        <div className="text-center mb-6 sm:mb-8">
                                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                                                Detail Order Joki
                                            </h1>
                                            <p className="text-sm sm:text-base text-gray-600">
                                                Lengkapi informasi tugas yang ingin dikerjakan
                                            </p>
                                        </div>

                                        {/* Form Component */}
                                        <JokiDetailsForm user={user} matkuls={matkuls} />

                                        {/* Info Text - Hidden on Small Mobile */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.6 }}
                                            className="hidden sm:block mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100"
                                        >
                                            <p className="text-xs sm:text-sm text-gray-600 text-center">
                                                💡 Berikan deskripsi yang detail untuk hasil yang maksimal
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Bottom Steps - Mobile Compact */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="mt-6 text-center"
                            >
                                <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-500">
                                    <span className="bg-green-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs">✓</span>
                                    <span>Langkah 2 dari 3</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}