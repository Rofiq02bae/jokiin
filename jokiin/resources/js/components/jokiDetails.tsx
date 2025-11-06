import { useForm as useReactHookForm } from "react-hook-form";
import { useForm } from "@inertiajs/react";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { ControllerRenderProps } from "react-hook-form";
import { FormEventHandler } from "react";

type FormValues = {
    id_matkul: string;
    deadline: string;
    deskripsi: string;
    file?: File | null;
};

type Matkul = {
    id: number;
    nama_matkul: string;
};

type JokiDetailsFormProps = {
    user: {
        id: number;
        nama: string;
        nomor: string;
    };
    matkuls: Matkul[];
};

export function JokiDetailsForm({ user, matkuls }: JokiDetailsFormProps) {
    const { data, setData, post, processing, errors, reset } = useForm<FormValues>({
        id_matkul: '',
        deadline: '',
        deskripsi: '',
        file: null,
    });

    const reactHookForm = useReactHookForm<FormValues>({
        defaultValues: {
            id_matkul: '',
            deadline: '',
            deskripsi: '',
            file: null,
        },
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        console.log('Submitting data:', data);

        post('/jokis', {
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
        <div className="space-y-6">
            {/* User Info */}
            <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Logged in as:</p>
                <p className="font-semibold text-gray-800">{user.nama}</p>
                <p className="text-sm text-gray-600">{user.nomor}</p>
            </div>

            <Form {...reactHookForm}>
                <form onSubmit={submit} className="space-y-4">
                    <FormField
                        name="id_matkul"
                        control={reactHookForm.control}
                        rules={{ required: "Mata Kuliah harus dipilih" }}
                        render={({ field }: { field: ControllerRenderProps<FormValues, "id_matkul"> }) => (
                            <FormItem>
                                <FormLabel>Mata Kuliah</FormLabel>
                                <Select
                                    onValueChange={(value: string) => {
                                        setData('id_matkul', value);
                                        field.onChange(value);
                                    }}
                                    value={data.id_matkul}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih mata kuliah" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {matkuls.map((matkul) => (
                                            <SelectItem key={matkul.id} value={matkul.id.toString()}>
                                                {matkul.nama_matkul}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.id_matkul && <p className="text-sm text-red-500">{errors.id_matkul}</p>}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="deadline"
                        control={reactHookForm.control}
                        rules={{ required: "Deadline harus diisi" }}
                        render={({ field }: { field: ControllerRenderProps<FormValues, "deadline"> }) => (
                            <FormItem>
                                <FormLabel>Deadline</FormLabel>
                                <FormControl>
                                    <Input
                                        type="date"
                                        value={data.deadline}
                                        onChange={(e) => {
                                            setData('deadline', e.target.value);
                                            field.onChange(e);
                                        }}
                                    />
                                </FormControl>
                                {errors.deadline && <p className="text-sm text-red-500">{errors.deadline}</p>}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="deskripsi"
                        control={reactHookForm.control}
                        rules={{ required: "Deskripsi harus diisi" }}
                        render={({ field }: { field: ControllerRenderProps<FormValues, "deskripsi"> }) => (
                            <FormItem>
                                <FormLabel>Deskripsi Tugas</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Jelaskan detail tugas yang perlu dikerjakan..."
                                        className="min-h-[100px]"
                                        value={data.deskripsi}
                                        onChange={(e) => {
                                            setData('deskripsi', e.target.value);
                                            field.onChange(e);
                                        }}
                                    />
                                </FormControl>
                                {errors.deskripsi && <p className="text-sm text-red-500">{errors.deskripsi}</p>}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="file"
                        control={reactHookForm.control}
                        render={({ field }: { field: ControllerRenderProps<FormValues, "file"> }) => (
                            <FormItem>
                                <FormLabel>Upload File (Opsional)</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0] || null;
                                            setData('file', file);
                                            field.onChange(file);
                                        }}
                                        ref={field.ref}
                                        name={field.name}
                                        onBlur={field.onBlur}
                                    />
                                </FormControl>
                                <p className="text-xs text-gray-500">
                                    Format: PNG, JPG, PDF, Word (max 10MB)
                                </p>
                                {errors.file && <p className="text-sm text-red-500">{errors.file}</p>}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={processing}
                    >
                        {processing ? 'Memproses...' : 'Order Now'}
                    </Button>
                </form>
            </Form>
        </div>
    );
}