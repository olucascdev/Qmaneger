
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UsersTable from '@/Components/UsersTable';

export default function Users() {
    return (
    <AuthenticatedLayout>
       <UsersTable />
    </AuthenticatedLayout>
    );
}
