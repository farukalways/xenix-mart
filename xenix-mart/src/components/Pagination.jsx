const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="pt-8 pb-3 flex items-center justify-center gap-5">
      {page > 1 && (
        <button
          onClick={() => setPage((prev) => prev - 1)}
          className="px-4 py-2 text-[#000000] rounded"
        >
          Prev
        </button>
      )}
      {page > 1 && (
        <button className="px-4 py-2 text-[#000000] rounded">{page}</button>
      )}

      {page < totalPages && (
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 text-[#000000] rounded"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
