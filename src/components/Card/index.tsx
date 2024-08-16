import { Link } from "react-router-dom";
import { Shoe } from "../../types";
import Badge from "./Badge";
import calcDiscount from "../../utils/calcDiscount";

type Props = {
  item: Shoe;
};

const Card = ({ item }: Props) => {
  //indirimli fiyati hesaplama
  const price = calcDiscount(item.price, item.discount);

  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="bg-white rounded-[16px] lg:rounded-[28px] p-[8px]">
          <div className="relative rounded-[12px] lg:rounded-[24px]">
            <Badge discount={item.discount} /> {/*indirim simgesini basar */}
            <img
              className="rounded-[12px] lg:rounded-[24px]"
              src={item.picture[0]}
              alt={item.name}
            />
          </div>
        </div>

        <h2 className="font-bold line-clamp-2 mt-5 mb-4 lg:text-[20px]">
          {item.name}
        </h2>
      </div>

      <Link
        to={`/detail/${item.id}`}
        className="bg-dark text-white font-medium px-4 py-2 rounded-[8px] transition hover:bg-black "
      >
        View Product -{" "}
        <span className={item.discount ? "text-orange-400" : "text-white"}>
          ${price}
        </span>
      </Link>
    </div>
  );
};

export default Card;
