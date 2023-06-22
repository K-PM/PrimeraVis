import React, { useState } from 'react';
import agua from "../assets/image/AGUA.png";
import aguaTRI from "../assets/image/aguaTri.png";

const porcentaje = [
  { key: "1", value: "30/07/2023", pollution: 100 },
  { key: "2", value: "31/07/2023", pollution: 95 },
  { key: "3", value: "05/07/2023", pollution: 50 },
  { key: "4", value: "09/07/2023", pollution: 40 },
  { key: "5", value: "13/07/2023", pollution: 80 },
  { key: "6", value: "16/07/2023", pollution: 75 },
  { key: "7", value: "19/07/2023", pollution: 70 },
  { key: "8", value: "21/07/2023", pollution: 20 },
  { key: "9", value: "24/07/2023", pollution: 60 },
  { key: "10", value: "28/07/2023", pollution: 30 }
];

function Dropdown() {
  const [selectedValue, setSelectedValue] = useState('');
  const [imageAgua, setImageAgua] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected value:", selectedValue);
    setSelectedValue(selectedValue);
    if (selectedValue > 50) {
      setImageAgua(aguaTRI);
    } else {
      setImageAgua(agua);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div >
        <h1 className="mb-4 text-black">¡Conoce toda la información<br /> acerca del estado del agua!</h1>
        <div className="text-black mt-10">
          <select
            className="py-1 px-72 rounded bg-gray-100 border border-gray-500 focus:outline-none focus:border-blue-500"
            onChange={handleSelectChange}
          >
            {porcentaje.map((opcion) => (
              <option key={opcion.key} value={opcion.pollution}>
                {opcion.value}
              </option>
            ))}
          </select>
          <p className="mt-4 text-black">Calidad del agua</p>
          {selectedValue && <h1 className="text-xl">Porcentaje de contaminación: {selectedValue} %</h1>}
        </div>
        <div>
          <img className="ml-20 " src={imageAgua} alt="" />
        </div>
      </div>
    </div>
  );
}

function Home() {
  return <Dropdown />;
}

export default Home;
