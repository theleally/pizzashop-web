import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
     </TableCell>
     <TableCell className="font-mono text-xs font-medium">788686fsfs1212d</TableCell>
     <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
     <TableCell>
      <div>
        <span className="h-2 w-2 rounded-full bg-slate-400" />
        <span className="font-mediumtext-muted-foreground">Pendente</span>
      </div>
     </TableCell>
     <TableCell className="font-medium">Leandro Joo</TableCell>
     <TableCell className="font-medium">
        R$ 149,90
     </TableCell>
     <TableCell>
      <Button variant="outline" size="xs">
        <ArrowRight className="mr-2 h-3 w-3" />
        Aprovar
      </Button>
     </TableCell>
     <TableCell>
      <Button variant="ghost" size="xs">
        <X className="h-3 w-3 mr-2" />
        Cancelar
      </Button>
     </TableCell>
    </TableRow>
  )
}