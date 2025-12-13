const Product = ({ product, onOpen }) => {
  const { title, price, thumbnail } = product;

  const dolerTotk = Math.round(120 * Number(price));
  return (
    <>
      <div className="card p-0  text-[#000000] w-auto shadow-sm flex flex-col items-center">
        <figure className="bg-[#E8E7EC] rounded-xl flex justify-center items-center max-w-56 max-h-48">
          <img
            src={thumbnail}
            alt={title}
            className="block w-auto h-auto object-contain"
          />
        </figure>

        <div className="card-body py-5 px-2 flex flex-col justify-between items-start text-center">
          <div className="flex items-center gap-4">
            <h2 className="card-title flex-1 text-base text-left">{title}</h2>
            <p
              className="flex-1 text-right 
"
            >
              From Tk : {dolerTotk}
            </p>
          </div>

          <div>
            <button onClick={onOpen} className="relative btn-slide  text-sm  ">
              CHOOSE OPTION
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
