
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import QrCodeTable from '@/Components/QrCodeTable';


export default function Home() {
    return (
    <AuthenticatedLayout>
       <QrCodeTable />
    </AuthenticatedLayout>
    );
}
