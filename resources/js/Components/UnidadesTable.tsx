import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table"
import { Card } from "@/Components/ui/card";
import PaginacaoHome from "./PaginacaoHome"
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Copy, Filter, FolderPlus, Trash } from "lucide-react";
import { Input } from "./ui/input";


export default function UsersTable() {

  return(
    <div className="flex flex-1 flex-col gap-4 p-2 pt-0 mt-8">
      <div className="flex gap-4 items-center ">
        <h1 className="text-6xl font-bold w-2/4">Unidades</h1>
        
        {/* Card do Input de Busca */}
        <Card className="p-4 rounded-xl bg-muted/30 w-2/4 flex items-center justify-between">
        <Button className="mr-6">Criar nova Unidade</Button>
          <Input placeholder="Buscar..." className="w-full" />
          <Button variant="ghost" size="icon">
            <Filter className="w-5 h-5" />
          </Button>
        </Card>
      </div>
      <Card className="min-h-[100vh] flex-1 rounded-xl bg-muted/30 md:min-h-min p-4">
<Table>
  <TableCaption></TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Código</TableHead>
      <TableHead>Nome da Unidade</TableHead>
      <TableHead>Sigla</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Ações</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
     {/* Informações colocar o banco de dados aqui*/}
      <TableCell>1</TableCell>
      <TableCell>	SONDA PRODUÇÃO TERRESTRE 25</TableCell>
      <TableCell>SPT-25</TableCell>
      <TableCell>Ativo</TableCell>

      <TableCell>            
      <Button variant="ghost" size="icon"> {/* Botões de ação, mudar depois os icons */} 
            <Filter className="w-5 h-5" />
      </Button> 
      <Button variant="ghost" size="icon">
            <Filter className="w-5 h-5" />
        </Button>

      </TableCell>



    </TableRow>
  </TableBody>
  </Table>
<PaginacaoHome />
</Card>

    </div>
    

    


  )
}
