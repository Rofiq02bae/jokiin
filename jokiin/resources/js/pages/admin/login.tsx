import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FormEventHandler } from "react";

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
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
                <Card className="w-full max-w-md shadow-xl">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-3xl font-bold text-center">Admin Login</CardTitle>
                        <CardDescription className="text-center">
                            Masuk ke dashboard admin Jokiin
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="nomor">Nomor WhatsApp</Label>
                                <Input
                                    id="nomor"
                                    type="text"
                                    value={data.nomor}
                                    onChange={(e) => setData('nomor', e.target.value)}
                                    placeholder="081234567890"
                                    className={errors.nomor ? 'border-red-500' : ''}
                                    required
                                />
                                {errors.nomor && (
                                    <p className="text-sm text-red-500">{errors.nomor}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="••••••••"
                                    className={errors.password ? 'border-red-500' : ''}
                                    required
                                />
                                {errors.password && (
                                    <p className="text-sm text-red-500">{errors.password}</p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={processing}
                            >
                                {processing ? 'Memproses...' : 'Login'}
                            </Button>

                            <div className="text-center">
                                <a href="/" className="text-sm text-blue-600 hover:underline">
                                    ← Kembali ke Home
                                </a>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
