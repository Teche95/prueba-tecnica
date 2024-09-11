import DeleteButton from "./DeleteButton";
import { EditButton } from "./EditButton";
import { useNavigate } from "react-router-dom";
// import { Card } from "flowbite-react";
interface Character {
  _id: string;
  name: string;
  status: string;
  image: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
}

interface CardCharacterProps {
  data: Character[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void
}
const CardCharacter = ({ data, onDelete, onEdit }: CardCharacterProps) => {
  
  const navigate = useNavigate()

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
        {data && data.map((character, index) => (
          <div
            key={index}
            className="character-card bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 max-w-xs"
            onClick={() => navigate(`/detail/${character._id}`)}
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-48 object-cover cursor-pointer"
            />
            <div className="p-2">
              <h2 className="text-lg font-bold text-gray-900 mb-1">{character.name}</h2>
              <p className="text-gray-700">Status: {character.status}</p>
              <div className="flex justify-between mt-2">
                <EditButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(character._id);
                  }}
                  className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition"
                />
                <DeleteButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(character._id);
                  }}
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardCharacter