import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  total: number;
  page: number;
  perPage: number;
  onChange: (page: number) => void;
}

function Pagination({ total, page, perPage, onChange }: PaginationProps) {
  const pageCount = Math.ceil(total / perPage);

  if (pageCount <= 1) return null;

  return (
    <ReactPaginate
      className={css.pagination}
      pageClassName={css.page}
      activeClassName={css.active}
      previousClassName={css.prev}
      nextClassName={css.next}
      disabledClassName={css.disabled}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      pageCount={pageCount}
      forcePage={page - 1}
      onPageChange={(event) => onChange(event.selected + 1)}
    />
  );
}

export default Pagination;
