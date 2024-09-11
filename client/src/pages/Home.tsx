import { useEffect, useState } from "react"
import CardCharacter from "../components/CardCharacter"
import { useNavigate } from "react-router-dom"
import { Button } from "flowbite-react";

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
export const Home = () => {

    const navigate = useNavigate()

    const [data, setData] = useState<Character[]>([])

    useEffect(() => {
        const fetchDataApi = async () => {
            try {
             
              const peticioDb = await fetch("http://localhost:3000/api/character");
        
              if (peticioDb.ok) {
                const res: Character[] = await peticioDb.json();
        
                if (res.length > 0) {
                  setData(res);
                } else {

                  const secondRequest = await fetch("http://localhost:3000/api");

                  if (secondRequest.ok) {
                    // console.log("Estoy aca haciendo la segunda petición");
                    const newData = await secondRequest.json();
                    // console.log(newData,"newData")
                    setData(newData); 
                  } else {
                    console.log("Error en la segunda petición");
                  }
                }
              } else {
                console.log("Error en la primera petición");
              }
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
        
          fetchDataApi();
    }, [])

    const handleDelete = async (id: string) => {
        console.log(id, "id")
        try {
            const res = await fetch(`http://localhost:3000/api/character/${id}`, {
                method: 'DELETE',
            })
            if (res.ok) {
                setData(prevData => prevData.filter(character => character._id !== id))
            }
        } catch (error) {
            console.log(error)
        }

    }

    const handleEdit = (id: string) => {
        navigate(`/edit/${id}`);
    };

    const handleAdd = () => {
        navigate('/add');
    };


    const handleCharacters = async () => {
        await fetch("http://localhost:3000/api/character/showAllChar")
        window.location.reload()
    }

    return (
        <div className="relative">
            <div className="absolute top-0 right-0 m-4 flex space-x-2">
                <Button color="success" onClick={handleAdd}>Add character </Button>
                <Button color="success" onClick={handleCharacters}>Show all characters</Button>
            </div>
            <CardCharacter
                onEdit={handleEdit}
                onDelete={handleDelete}
                data={data}
            />
        </div>
    )
}
