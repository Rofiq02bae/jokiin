import { useForm as useReactHookForm } from "react-hook-form";
import { useForm } from "@inertiajs/react";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ControllerRenderProps } from "react-hook-form";
import { FormEventHandler } from "react";

type FormValues = {
    nama: string;
    nomor: string;
};

export function FormUser() {
    const { data, setData, post, processing, errors, reset } = useForm<FormValues>({
        nama: '',
        nomor: '',
    });

    const reactHookForm = useReactHookForm<FormValues>({
        defaultValues: {
            nama: '',
            nomor: '',
        },
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post('/users', {
            onSuccess: () => {
                reset();
                reactHookForm.reset();
            },
            onError: (errors) => {
                console.error('Form errors:', errors);
            },
        });
    };

    return (
        <Form {...reactHookForm}>
            <form onSubmit={submit} className="space-y-4">
                <FormField
                    name="nama"
                    control={reactHookForm.control}
                    rules={{ required: "Nama harus diisi" }}
                    render={({ field }: { field: ControllerRenderProps<FormValues, "nama"> }) => (
                        <FormItem>
                            <FormLabel>Nama</FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder="Masukkan nama" 
                                    value={data.nama}
                                    onChange={(e) => {
                                        setData('nama', e.target.value);
                                        field.onChange(e);
                                    }}
                                />
                            </FormControl>
                            {errors.nama && <p className="text-sm text-red-500">{errors.nama}</p>}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="nomor"
                    control={reactHookForm.control}
                    rules={{ required: "Nomor harus diisi" }}
                    render={({ field }: { field: ControllerRenderProps<FormValues, "nomor"> }) => (
                        <FormItem>
                            <FormLabel>Nomor Telepon</FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder="Masukkan nomor telepon" 
                                    value={data.nomor}
                                    onChange={(e) => {
                                        setData('nomor', e.target.value);
                                        field.onChange(e);
                                    }}
                                />
                            </FormControl>
                            {errors.nomor && <p className="text-sm text-red-500">{errors.nomor}</p>}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button 
                    type="submit" 
                    className="w-full"
                    disabled={processing}
                >
                    {processing ? "Menyimpan..." : "Login"}
                </Button>
            </form>
        </Form>
    );
}
