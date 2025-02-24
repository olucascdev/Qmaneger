
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { AppSidebar } from "@/Components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/Components/ui/sidebar"
import { Button } from '@/Components/ui/button';
import QrCodeTable from '@/Components/QrCodeTable';
import PaginacaoHome from '@/Components/PaginacaoHome';
import UsersTable from '@/Components/UsersTable';

export default function Users() {
    return (
    <AuthenticatedLayout>
       <UsersTable />
    </AuthenticatedLayout>
    );
}
