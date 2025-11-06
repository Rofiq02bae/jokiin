import { Head, router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Download, LogOut, Users, ClipboardList, CheckCircle, Clock } from "lucide-react";
import { motion } from "motion/react";

type Joki = {
    id: number;
    user_nama: string;
    user_nomor: string;
    matkul: string;
    deadline: string;
    deskripsi: string;
    file_path: string | null;
    file_url: string | null;
    harga: number;
    status: string;
    created_at: string;
};

type Stats = {
    total_orders: number;
    pending_orders: number;
    completed_orders: number;
    total_users: number;
};

type Props = {
    jokis: Joki[];
    stats: Stats;
};

export default function AdminDashboard({ jokis, stats }: Props) {
    const handleStatusChange = (id: number, status: string) => {
        router.post(`/admin/joki/${id}/update-status`, {
            status,
        }, {
            preserveScroll: true,
        });
    };

    const handleLogout = () => {
        router.post('/admin/logout');
    };

    const getStatusBadge = (status: string) => {
        const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline", className: string }> = {
            pending: { variant: "outline", className: "bg-yellow-100 text-yellow-800 border-yellow-300" },
            proses: { variant: "default", className: "bg-blue-100 text-blue-800 border-blue-300" },
            selesai: { variant: "secondary", className: "bg-green-100 text-green-800 border-green-300" },
            dibatalkan: { variant: "destructive", className: "bg-red-100 text-red-800 border-red-300" },
        };
        const config = variants[status] || variants.pending;
        return <Badge variant={config.variant} className={config.className}>{status.toUpperCase()}</Badge>;
    };

    return (
        <>
            <Head title="Admin Dashboard - Jokiin" />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Header */}
                <header className="bg-white shadow-sm border-b">
                    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Dashboard Admin</h1>
                            <p className="text-sm text-gray-600">Selamat datang, Anggun</p>
                        </div>
                        <Button variant="outline" onClick={handleLogout}>
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </header>

                <main className="container mx-auto px-4 py-8">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium text-gray-600">
                                        Total Orders
                                    </CardTitle>
                                    <ClipboardList className="w-5 h-5 text-blue-600" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold text-gray-900">{stats.total_orders}</div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium text-gray-600">
                                        Pending
                                    </CardTitle>
                                    <Clock className="w-5 h-5 text-yellow-600" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold text-gray-900">{stats.pending_orders}</div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium text-gray-600">
                                        Selesai
                                    </CardTitle>
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold text-gray-900">{stats.completed_orders}</div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium text-gray-600">
                                        Total Users
                                    </CardTitle>
                                    <Users className="w-5 h-5 text-purple-600" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold text-gray-900">{stats.total_users}</div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Orders Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Daftar Orders</CardTitle>
                                <CardDescription>Kelola semua order joki dari user</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-[80px]">ID</TableHead>
                                                <TableHead>User</TableHead>
                                                <TableHead>Matkul</TableHead>
                                                <TableHead>Deadline</TableHead>
                                                <TableHead>Harga</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead>File</TableHead>
                                                <TableHead className="text-right">Aksi</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {jokis.length === 0 ? (
                                                <TableRow>
                                                    <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                                                        Belum ada order
                                                    </TableCell>
                                                </TableRow>
                                            ) : (
                                                jokis.map((joki) => (
                                                    <TableRow key={joki.id}>
                                                        <TableCell className="font-medium">#{joki.id}</TableCell>
                                                        <TableCell>
                                                            <div>
                                                                <div className="font-medium">{joki.user_nama}</div>
                                                                <div className="text-sm text-gray-500">{joki.user_nomor}</div>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>{joki.matkul}</TableCell>
                                                        <TableCell>
                                                            <div className="text-sm">{joki.deadline}</div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className="font-medium">
                                                                Rp {joki.harga.toLocaleString('id-ID')}
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Select
                                                                value={joki.status}
                                                                onValueChange={(value: string) => handleStatusChange(joki.id, value)}
                                                            >
                                                                <SelectTrigger className="w-[140px]">
                                                                    <SelectValue>{getStatusBadge(joki.status)}</SelectValue>
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="pending">Pending</SelectItem>
                                                                    <SelectItem value="proses">Proses</SelectItem>
                                                                    <SelectItem value="selesai">Selesai</SelectItem>
                                                                    <SelectItem value="dibatalkan">Dibatalkan</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </TableCell>
                                                        <TableCell>
                                                            {joki.file_url ? (
                                                                <a
                                                                    href={`/admin/joki/${joki.id}/download`}
                                                                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                                                                >
                                                                    <Download className="w-4 h-4 mr-1" />
                                                                    Download
                                                                </a>
                                                            ) : (
                                                                <span className="text-sm text-gray-400">-</span>
                                                            )}
                                                        </TableCell>
                                                        <TableCell className="text-right">
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                onClick={() => {
                                                                    alert(`Detail Order #${joki.id}\n\nUser: ${joki.user_nama}\nMatkul: ${joki.matkul}\nDeadline: ${joki.deadline}\n\nDeskripsi:\n${joki.deskripsi}`);
                                                                }}
                                                            >
                                                                Detail
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                ))
                                            )}
                                        </TableBody>
                                    </Table>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </main>
            </div>
        </>
    );
}
