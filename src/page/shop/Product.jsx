const Product = ({ product }) => {
  const { title, price, thumbnail } = product;

  const dolerTotk = Math.round(120 * Number(price));
  return (
    <div className="card p-0  text-[#000000] w-auto shadow-sm">
      <figure className=" bg-[#E8E7EC]">
        <img
          src={thumbnail}
          alt={title}
          className="rounded-xl max-w-56 max-h-48"
        />
      </figure>
      <div className="card-body py-5 px-2 flex flex-col justify-between items-start text-center">
        <div className="flex items-center gap-4">
          <h2 className="card-title flex-1 text-base">{title}</h2>
          <p
            className="flex-1 text-right 
"
          >
            From Tk : {dolerTotk}
          </p>
        </div>

        <div>
          <button className="border-gray-900 border-b-2 text-sm  ">
            CHOOSE OPTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
