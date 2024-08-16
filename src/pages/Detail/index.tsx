import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../utils/api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Shoe } from "../../types";
import Head from "./Head";
import Color from "./Color";
import Size from "./Size";

const Detail = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery<Shoe>({
    queryKey: ["shoe"],
    queryFn: () => api.get(`/shoes/${id}`).then((res) => res.data),
  });

  const navigate = useNavigate();
  return (
    <div className="mt-8">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error.message} />
      ) : (
        data && (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
            <div className="lg:col-span-2 h-fit grid grid-cols-2 gap-4 rounded-[48px] overflow-hidden">
              {data?.picture.map((url, i) => (
                <img key={i} src={url} />
              ))}
            </div>
            <div className="flex flex-col gap-8">
              <Head data={data} />
              <Color data={data.color} />
              <Size data={data.size} />

              <p>
                <h2 className="font-semibold">About this product</h2>

                <p dangerouslySetInnerHTML={{ __html: data.description }} />
              </p>
              <button
                onClick={() => navigate(-1)}
                className="font-semibold  text-2xl mt-[100px] w-25 h-10 border p-2 rounded-lg hover:bg-dark hover:text-white transition flex items-center justify-center gap-2 cursor-pointer"
              >
                Back
              </button>
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default Detail;
