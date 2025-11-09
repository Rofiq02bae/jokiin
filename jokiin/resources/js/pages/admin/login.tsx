import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FormEventHandler } from "react";
import { motion } from "motion/react";
import { Shield, Lock } from "lucide-react";

export default function AdminLogin() {
    const { data, setData, post, processing, errors } = useForm({
        nomor: '',
        password: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/admin/login');
    };

    return (
        <>
            <Head title="Admin Login - Jokiin" />
            
            {/* Mobile & Desktop Responsive Container */}
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 sm:px-6 py-8 sm:py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md"
                >
                    {/* Shield Icon Header */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="flex justify-center mb-6 sm:mb-8"
                    >
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 sm:p-4 rounded-full shadow-lg">
                            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                    </motion.div>

                    <Card className="shadow-xl border-gray-200">
                        {/* Gradient Bar */}
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 sm:h-2" />
                        
                        <CardHeader className="space-y-2 sm:space-y-3 px-6 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6">
                            <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
                                Admin Login
                            </CardTitle>
                            <CardDescription className="text-center text-sm sm:text-base text-gray-600">
                                Masuk ke dashboard admin Jokiin
                            </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
                            <form onSubmit={submit} className="space-y-4 sm:space-y-5">
                                {/* Nomor WhatsApp Field */}
                                <div className="space-y-2">
                                    <Label htmlFor="nomor" className="text-sm sm:text-base">
                                        Nomor WhatsApp
                                    </Label>
                                    <Input
                                        id="nomor"
                                        type="text"
                                        value={data.nomor}
                                        onChange={(e) => setData('nomor', e.target.value)}
                                        placeholder="081234567890"
                                        className={`h-11 sm:h-12 text-base ${errors.nomor ? 'border-red-500' : ''}`}
                                        required
                                    />
                                    {errors.nomor && (
                                        <p className="text-xs sm:text-sm text-red-500">{errors.nomor}</p>
                                    )}
                                </div>

                                {/* Password Field */}
                                <div className="space-y-2">
                                    <Label htmlFor="password" className="text-sm sm:text-base flex items-center gap-2">
                                        <Lock className="h-4 w-4" />
                                        Password
                                    </Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="••••••••"
                                        className={`h-11 sm:h-12 text-base ${errors.password ? 'border-red-500' : ''}`}
                                        required
                                    />
                                    {errors.password && (
                                        <p className="text-xs sm:text-sm text-red-500">{errors.password}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-11 sm:h-12 text-base sm:text-lg mt-6"
                                    disabled={processing}
                                >
                                    {processing ? 'Memproses...' : 'Login'}
                                </Button>

                                {/* Back to Home Link */}
                                <div className="text-center pt-2">
                                    <a 
                                        href="/" 
                                        className="text-sm sm:text-base text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center gap-1"
                                    >
                                        ← Kembali ke Home
                                    </a>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Security Notice */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 text-center"
                    >
                        <p className="text-xs sm:text-sm text-gray-500">
                            🔒 Halaman ini dilindungi dengan enkripsi SSL
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}
