import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/Components/ui/pagination"

export default function PaginacaoHome() {
  return (
    <Pagination>
      <PaginationPrevious>
        Anterior
      </PaginationPrevious>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationEllipsis />
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
      </PaginationContent>
      <PaginationNext>
        Próximo
      </PaginationNext>
    </Pagination>
  )
}
