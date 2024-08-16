import { Link } from "react-router-dom";

const index = () => {
  return (
    <header className="bg-fa_white flex justify-between max-w-[1320px] rounded-[12px] md:rounded-[24px] items-center">
      <div
        className="max-md:hidden  text-dark font-semibold flex gap-[40px] item center p-6
      "
      >
        <Link to="/">New Drops 🔥</Link>
        <Link to="/">Men</Link>
        <Link to="/">Women</Link>
      </div>
      <button className="md:hidden ml-10">
        <img className="w-7" src="/bar.svg" />
      </button>

      <Link to={"/"}>
        <img src="/header-logo.svg" />
      </Link>

      <div className="flex items-center gap-[9px] md:gap-[40px]">
        <button className="max-md:hidden">
          <img src="/Search.svg" />
        </button>
        <button>
          <img src="/User.svg" />
        </button>
        <button className="w-[25px] h-[25px]   bg-yellow rounded-full font-semibold grid place-items-center mr-3">
          <span>0</span>
        </button>
      </div>
    </header>
  );
};

export default index;
