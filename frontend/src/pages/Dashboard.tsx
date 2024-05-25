import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const navigate  = useNavigate();
  const { name, description } = location.state || {};

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {name && description ? (
          <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
            
            <p className="text-xl font-semibold mb-3 text-gray-950"> {name}</p>
            <p className="text-gray-400 font-semibold mb-3"> {description}</p>
            <div className="flex justify-end">
                <button
                
                className="border border-gray-950 rounded-lg px-3 py-2 font-bold text-gray-900"
                onClick={() =>{
                  navigate("/Model")
              }} 
                >Edit Stack</button>
            </div>
          </div>
          
        ) : (
          <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
            <p>No stack information available.</p>
          </div>
        )}
      </div>
    </div>
  );
}
