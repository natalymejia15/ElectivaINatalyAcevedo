import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";

export const Gif = () => {
  const dataOptions = ["Gato", "Perro", "Vaca", "Caballo", "Burro", "Monkey"];

  const [category, setCategory] = useState(dataOptions[0]);

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
      <div>
        <h1>Multiples opciones de gifs</h1>

        <label htmlFor="data">Seleccione la categoria de animal:</label>
        <select
          name="category"
          id="category"
          onChange={onSelectChange}
          className="form-control"
        >
          {dataOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div>
          <h3>
            Animal: <span> {resultData.name} </span>
          </h3>
          {resultData.gifs.map((gif, index) => (
            <div key={index}>
              <img src={gif} alt={`Gif ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
