import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center px-2 inset-x-0 bottom-12">
            <div className="flex flex-wrap justify-center bg-white gap-3 shadow-lg px-2 py-3 rounded-full">
              {["red", "green", "blue", "olive", "purple", "gray", "yellow", "black","orange", "cyan","aqua"].map((clr) => (
                <button key={clr}
                        onClick={() => setColor(clr)}
                        className="outline-none px-4 py-2 rounded-3xl text-white"
                        style={{ backgroundColor: clr }}
                >
                {clr}
                </button>
              ))}
            </div>
        </div>
    </div>

  );
}

export default App;
