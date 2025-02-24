import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { Checkbox } from "@/Components/ui/checkbox";
import { Button } from "@/Components/ui/button";
import { Card } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Copy, Trash, FolderPlus, Download, Filter } from "lucide-react";
import PaginacaoHome from "./PaginacaoHome";

export default function QrCodeTable() {
  const [data, setData] = useState([
    { id: 1, qrCode: "https://via.placeholder.com/50", modelo: "Modelo A", data: "21/02/2025", pasta: "Projetos", scans: 42 },
    { id: 2, qrCode: "https://via.placeholder.com/50", modelo: "Modelo B", data: "18/02/2025", pasta: "Documentos", scans: 15 },
    { id: 3, qrCode: "https://via.placeholder.com/50", modelo: "Modelo C", data: "10/02/2025", pasta: "Relatórios", scans: 67 },
  ]);

  return (
    <div className="flex flex-1 flex-col gap-4 p-2 pt-0 mt-8">
      {/* Seção de Cabeçalho */}
      <div className="flex gap-4 items-center ">
        {/* Título */}
        <h1 className="text-6xl font-bold w-2/4">Meus QrCodes</h1>

        {/* Card da Barra de Ações */}
        <Card className="p-4 rounded-xl bg-muted/30 flex-1 w-2/4 flex items-center gap-4">
          <Checkbox />{/* Check de selecionar tudo */}
          <Button variant="ghost" size="icon">
            <Copy className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <FolderPlus className="w-4 h-4" />
          </Button>
          <Button className="ml-auto">Criar um QRCODE</Button>
        </Card>

        {/* Card do Input de Busca */}
        <Card className="p-4 rounded-xl bg-muted/30 w-1/4 flex items-center justify-between">
          <Input placeholder="Buscar..." className="w-full" />
          <Button variant="ghost" size="icon">
            <Filter className="w-5 h-5" />
          </Button>
        </Card>
      </div>

      {/* Card da Tabela */}
      <Card className="min-h-[100vh] flex-1 rounded-xl bg-muted/30 md:min-h-min p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10"></TableHead> {/* Checkbox */}
              <TableHead>QR Code</TableHead>
              <TableHead>Modelo</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Nome da Pasta</TableHead>
              <TableHead>Scans</TableHead>
              <TableHead className="w-16 text-center">Download</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell><Checkbox /></TableCell>
                <TableCell><img src={item.qrCode} alt="QR Code" className="w-12 h-12 rounded-md" /></TableCell>
                <TableCell>{item.modelo}</TableCell>
                <TableCell>{item.data}</TableCell>
                <TableCell>{item.pasta}</TableCell>
                <TableCell className="text-center">{item.scans}</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <PaginacaoHome />
      </Card>
    </div>
  );
}
