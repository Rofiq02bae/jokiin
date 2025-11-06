import { FormUser } from "../components/formUser";
import { Navbar } from "../components/Navbar";
import { Head } from "@inertiajs/react";

export default function AddJokiPage() {
    return (
        <>
            <Head title="Tambah User Joki" />
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Tambah Joki Baru</h2>
                    <FormUser />
                </div>
            </div>
        </>
    );
}