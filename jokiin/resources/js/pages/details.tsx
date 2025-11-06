import { JokiDetailsForm } from "../components/jokiDetails";
import { Navbar } from "../components/Navbar";
import { Head } from "@inertiajs/react";

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
            <Head title="Detail Order Joki" />
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Detail Order Joki</h2>
                    <JokiDetailsForm user={user} matkuls={matkuls} />
                </div>
            </div>
        </>
    );
}