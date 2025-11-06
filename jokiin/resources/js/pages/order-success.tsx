import { Navbar } from "../components/Navbar";
import { Head, Link } from "@inertiajs/react";
import { Button } from "../components/ui/button";
import { CheckCircle } from "lucide-react";

export default function OrderSuccessPage() {
    return (
        <>
            <Head title="Order Berhasil" />
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
                    <div className="mb-6">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            Order Berhasil!
                        </h2>
                        <p className="text-gray-600">
                            Terima kasih! Order joki Anda telah berhasil dibuat dan sedang diproses.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <Link href="/">
                            <Button className="w-full">
                                Kembali ke Beranda
                            </Button>
                        </Link>
                        <Link href="/add-joki">
                            <Button variant="outline" className="w-full">
                                Buat Order Baru
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
