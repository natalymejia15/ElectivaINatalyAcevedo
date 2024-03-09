import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";

export const Gif = () => {
  const dataOptions = ["Gato", "Perro", "Vaca", "Caballo", "Burro", "Mono"];

  const [category, setCategory] = useState(
    dataOptions[{ name: "Seleccione un animal"}]
  );

  const [resultData, setResultData] = useState({
    name: "",
    gifs: [],
  });

  useEffect(() => {
    getGif(category).then((gifData) => {
      const { gifs } = gifData;
      setResultData({
        name: category,
        gifs: gifs,
      });
    });
  }, [category]);

  const onSelectChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{ background: "purple", margin: "5px 0px 5px 0px" }}
      >
        <div className="container text-center">
          <h1 className="mb-4" style={{ color: "white" }}>
            Multiples opciones de gifs
          </h1>
          <div className="row mb-3">
            <select
              name="category"
              id="category"
              onChange={onSelectChange}
              className="form-control"
              value={resultData.name}
            >
              <option selected>Seleccione un animal</option>
              {dataOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="row">
            {resultData.name !== "Seleccione un animal" && (
              <>
                <h3
                  className="mb-4"
                  style={{ color: "white", borderBottom: "5px solid white" }}
                >
                  <span> {resultData.name} </span>
                </h3>
                {resultData.gifs.map((gif, index) => (
                  <div className="col mb-4">
                    <div key={index}>
                      <img
                        src={gif}
                        alt={`Gif ${index + 1}`}
                        style={{ width: "280px", height: "350px" }}
                      />
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
