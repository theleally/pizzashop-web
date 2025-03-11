import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          Pedido: 1872fy2345d6h
        </DialogTitle>
        <DialogDescription>
          Detalhes do pedido
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Status
              </TableCell>
              <TableCell className="flex justify-end">
                <div>
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-mediumtext-muted-foreground">Pendente</span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Cliente
              </TableCell>
              <TableCell className="flex justify-end">
                <div>
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-mediumtext-muted-foreground">Leandro Allysson Joo</span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Telefone
              </TableCell>
              <TableCell className="flex justify-end">
                <div>
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-mediumtext-muted-foreground">
                    (43) 99999-9999
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                E-mail
              </TableCell>
              <TableCell className="flex justify-end">
                <div>
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-mediumtext-muted-foreground">
                    leandro@gmail.com
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">
                <div>
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-mediumtext-muted-foreground">
                    há 4 minutos
                  </span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>
                Pizza Pepperoni Família
              </TableCell>

              <TableCell className="text-right">
                2
              </TableCell>

              <TableCell className="text-right">
                R$ 89,90
              </TableCell>

              <TableCell className="text-right">
                R$ 179,80
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                Pizza Mussarela Família
              </TableCell>

              <TableCell className="text-right">
                2
              </TableCell>

              <TableCell className="text-right">
                R$ 79,90
              </TableCell>

              <TableCell className="text-right">
                R$ 159,80
              </TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>
                Total do pedido
              </TableCell>
              <TableCell className="text-right">
                R$ 339,60
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}