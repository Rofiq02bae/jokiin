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
                {/* Header - Mobile Responsive */}
                <header className="bg-white shadow-sm border-b sticky top-0 z-10">
                    <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-3">
                        <div className="min-w-0 flex-1">
                            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 truncate">
                                Dashboard Admin
                            </h1>
                            <p className="text-xs sm:text-sm text-gray-600 truncate">
                                Selamat datang, Anggun
                            </p>
                        </div>
                        <Button
                            variant="outline"
                            onClick={handleLogout}
                            size="sm"
                            className="flex-shrink-0 h-9 sm:h-10"
                        >
                            <LogOut className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-0 sm:mr-2" />
                            <span className="hidden sm:inline">Logout</span>
                        </Button>
                    </div>
                </header>

                <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
                    {/* Stats Cards - Mobile Responsive */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2 px-3 sm:px-6 pt-3 sm:pt-6">
                                    <CardTitle className="text-xs sm:text-sm font-medium text-gray-600">
                                        Total Orders
                                    </CardTitle>
                                    <ClipboardList className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                                </CardHeader>
                                <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
                                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stats.total_orders}</div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2 px-3 sm:px-6 pt-3 sm:pt-6">
                                    <CardTitle className="text-xs sm:text-sm font-medium text-gray-600">
                                        Pending
                                    </CardTitle>
                                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
                                </CardHeader>
                                <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
                                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stats.pending_orders}</div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2 px-3 sm:px-6 pt-3 sm:pt-6">
                                    <CardTitle className="text-xs sm:text-sm font-medium text-gray-600">
                                        Selesai
                                    </CardTitle>
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                                </CardHeader>
                                <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
                                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stats.completed_orders}</div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2 px-3 sm:px-6 pt-3 sm:pt-6">
                                    <CardTitle className="text-xs sm:text-sm font-medium text-gray-600">
                                        Total Users
                                    </CardTitle>
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                                </CardHeader>
                                <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
                                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stats.total_users}</div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Orders Table - Mobile Responsive with Horizontal Scroll */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Card>
                            <CardHeader className="px-4 sm:px-6">
                                <CardTitle className="text-lg sm:text-xl">Daftar Orders</CardTitle>
                                <CardDescription className="text-xs sm:text-sm">
                                    Kelola semua order joki dari user
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="px-0 sm:px-6">
                                {/* Mobile: Horizontal scroll wrapper */}
                                <div className="overflow-x-auto -mx-4 sm:mx-0">
                                    <div className="inline-block min-w-full align-middle">
                                        <div className="overflow-hidden">
                                            <Table className="min-w-[800px]">
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead className="w-[60px] sm:w-[80px] text-xs sm:text-sm px-2 sm:px-4">ID</TableHead>
                                                        <TableHead className="text-xs sm:text-sm px-2 sm:px-4">User</TableHead>
                                                        <TableHead className="text-xs sm:text-sm px-2 sm:px-4">Matkul</TableHead>
                                                        <TableHead className="text-xs sm:text-sm px-2 sm:px-4">Deadline</TableHead>
                                                        <TableHead className="text-xs sm:text-sm px-2 sm:px-4">Harga</TableHead>
                                                        <TableHead className="text-xs sm:text-sm px-2 sm:px-4">Status</TableHead>
                                                        <TableHead className="text-xs sm:text-sm px-2 sm:px-4">File</TableHead>
                                                        <TableHead className="text-right text-xs sm:text-sm px-2 sm:px-4">Aksi</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {jokis.length === 0 ? (
                                                        <TableRow>
                                                            <TableCell colSpan={8} className="text-center py-8 text-xs sm:text-sm text-gray-500">
                                                                Belum ada order
                                                            </TableCell>
                                                        </TableRow>
                                                    ) : (
                                                        jokis.map((joki) => (
                                                            <TableRow key={joki.id}>
                                                                <TableCell className="font-medium text-xs sm:text-sm px-2 sm:px-4">
                                                                    #{joki.id}
                                                                </TableCell>
                                                                <TableCell className="px-2 sm:px-4">
                                                                    <div>
                                                                        <div className="font-medium text-xs sm:text-sm">{joki.user_nama}</div>
                                                                        <div className="text-[10px] sm:text-xs text-gray-500">{joki.user_nomor}</div>
                                                                    </div>
                                                                </TableCell>
                                                                <TableCell className="text-xs sm:text-sm px-2 sm:px-4">
                                                                    {joki.matkul}
                                                                </TableCell>
                                                                <TableCell className="px-2 sm:px-4">
                                                                    <div className="text-xs sm:text-sm">{joki.deadline}</div>
                                                                </TableCell>
                                                                <TableCell className="px-2 sm:px-4">
                                                                    <div className="font-medium text-xs sm:text-sm whitespace-nowrap">
                                                                        Rp {joki.harga.toLocaleString('id-ID')}
                                                                    </div>
                                                                </TableCell>
                                                                <TableCell className="px-2 sm:px-4">
                                                                    <Select
                                                                        value={joki.status}
                                                                        onValueChange={(value: string) => handleStatusChange(joki.id, value)}
                                                                    >
                                                                        <SelectTrigger className="w-[120px] sm:w-[140px] h-8 sm:h-9 text-xs">
                                                                            <SelectValue>{getStatusBadge(joki.status)}</SelectValue>
                                                                        </SelectTrigger>
                                                                        <SelectContent>
                                                                            <SelectItem value="pending" className="text-xs sm:text-sm">Pending</SelectItem>
                                                                            <SelectItem value="proses" className="text-xs sm:text-sm">Proses</SelectItem>
                                                                            <SelectItem value="selesai" className="text-xs sm:text-sm">Selesai</SelectItem>
                                                                            <SelectItem value="dibatalkan" className="text-xs sm:text-sm">Dibatalkan</SelectItem>
                                                                        </SelectContent>
                                                                    </Select>
                                                                </TableCell>
                                                                <TableCell className="px-2 sm:px-4">
                                                                    {joki.file_url ? (
                                                                        <a
                                                                            href={`/admin/joki/${joki.id}/download`}
                                                                            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-xs sm:text-sm"
                                                                        >
                                                                            <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                                                            <span className="hidden sm:inline">Download</span>
                                                                        </a>
                                                                    ) : (
                                                                        <span className="text-xs sm:text-sm text-gray-400">-</span>
                                                                    )}
                                                                </TableCell>
                                                                <TableCell className="text-right px-2 sm:px-4">
                                                                    <Button
                                                                        variant="outline"
                                                                        size="sm"
                                                                        className="h-8 text-xs px-2 sm:px-3"
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
                                    </div>
                                </div>
                                {/* Mobile Scroll Hint */}
                                <div className="sm:hidden mt-3 px-4 text-center">
                                    <p className="text-xs text-gray-500">
                                        ← Geser untuk melihat semua kolom →
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </main>
            </div>
        </>
    );
}
