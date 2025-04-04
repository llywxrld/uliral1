import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Lily8() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true); // start loading state as true
  const [grid, setGrid] = useState(true); // default to grid view

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mongol-api-rest.vercel.app/touristAttractions"
        );
        const response1 = await fetch(
          "https://mongol-api-rest.vercel.app/clothes"
        );
        const response2 = await fetch(
          "https://mongol-api-rest.vercel.app/instruments"
        );
        const response3 = await fetch(
          "https://mongol-api-rest.vercel.app/historicaltools"
        );
        const response4 = await fetch(
          "https://mongol-api-rest.vercel.app/ethnicGroups"
        );
        const response5 = await fetch(
          "https://mongol-api-rest.vercel.app/provinces"
        );
        const response6 = await fetch(
          "https://mongol-api-rest.vercel.app/historicalfigures"
        );

        const result = await response.json();
        const result1 = await response1.json();
        const result2 = await response2.json();
        const result3 = await response3.json();
        const result4 = await response4.json();
        const result5 = await response5.json();
        const result6 = await response6.json();

        setData([
          ...result.touristAttractions,
          ...result1.clothes,
          ...result2.instruments,
          ...result3.historicalTools,
          ...result4.ethnicGroups,
          ...result5.provinces,
          ...result6.historicalFigures,
        ]);
        setLoading(false); // turn off loading after fetching data
      } catch (error) {
        console.log(error);
        setLoading(false); // also turn off loading in case of error
      }
    };
    fetchData();
  }, []);

  const filterlily8 = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="gap-4 m-4 bg-white min-h-screen w-full flex flex-col">
      {loading && <p>...Loading</p>}
      <div className="flex justify-between">
        <button
          className="w-24 h-12 border p-4 bg-blue-200 rounded-lg text-blue-500 text-xl font-bold flex justify-center items-center"
          onClick={() => router.back()}
        >
          Back
        </button>
        <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          className="w-10/12 drop-shadow-xl h-12 rounded w-1/2 p-2 text-grey-500"
          placeholder="Search here..."
        />
        <button
          className="border-2 border-blue-300 w-24 h-12 rounded-lg p-2 mb-4 text-xl text-blue-500 font-bold"
          onClick={() => setGrid(!grid)}
        >
          {grid ? "Grid" : "List"}
        </button>
      </div>
      <div
        className={`${
          grid ? "grid grid-cols-4 gap-4" : "flex flex-col gap-4"
        }`}
      >
        {filterlily8.map((item, index) => (
          <div key={index} className={`${grid === false ? "flex" : ""}`}>
            <img
              src={item.images}
              alt={item.name}
              className={`${grid === false ? "w-80" : "w-full"} h-48 rounded-lg mb-4 drop-shadow-xl`}
            />
            <h3 className="font-bold">{item.name}</h3>
            <p>{item.description}</p>
          </div>
          
        ))}
      </div>
    </div>
  );
}

