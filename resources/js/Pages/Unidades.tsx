
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UnidadesTable from '@/Components/UnidadesTable';

export default function Unidades() {
    return (
    <AuthenticatedLayout>
       <UnidadesTable />
    </AuthenticatedLayout>
    );
}
