import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



interface Character {
    _id: string;
    name: string;
    status: string;
    image: string;
    species: string;
    gender: string;
    origin: string
}
const DetailCharacter = () => {

    const { id } = useParams();
    const [data, setData] = useState<Character | null>(null)
    console.log(data)

    useEffect(() => {
        const fectchDataApi = async (id: string) => {

            const peticioDb = await fetch(`http://localhost:3000/api/character/detail/${id}`)

            if (peticioDb.ok) {
                const res: Character = await peticioDb.json();
                if (res) {
                    setData(res);
                }
            }
        }
        fectchDataApi(id as string)
    }, [])

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="grid grid-cols-1 gap-4 p-2">

                {data ? (
                    <Card
                        key={data?._id}
                        className="max-w-sm"
                        imgSrc={data.image}
                        horizontal
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {data.name}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Status: {data.status}
                            <br />
                            Species: {data.species}
                            <br />
                            Gender: {data.gender}
                            <br />
                            Origin: {data.origin}
                        </p>
                    </Card>
                ) : <div>No data available.</div>
                }

            </div>
        </div>

    )
}

export default DetailCharacter