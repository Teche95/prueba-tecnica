import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


interface AddProps {
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
  image: string;
}
export const AddCharacter = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState<AddProps>({
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:3000/api/character", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        // credentials: 'include',
      });
      if (response.ok) {
        navigate('/')
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="max-w-xl mx-auto mt-32 ">
      <form className="flex max-w-lg flex-col gap-4 p-4 border rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold mb-4">Add Character</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="status" value="Status" />
          </div>
          <TextInput
            id="status"
            name="status"
            type="text"
            value={formData.status}
            onChange={handleChange}
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="species" value="Species" />
          </div>
          <TextInput
            id="species"
            name="species"
            type="text"
            value={formData.species}
            onChange={handleChange}
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="gender" value="Gender" />
          </div>
          <TextInput
            id="gender"
            name="gender"
            type="text"
            value={formData.gender}
            onChange={handleChange}
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="origin" value="Origin" />
          </div>
          <TextInput
            id="origin"
            name="origin"
            type="text"
            value={formData.origin}
            onChange={handleChange}
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="image" value="Image URL" />
          </div>
          <TextInput
            id="image"
            name="image"
            type="text"
            value={formData.image}
            onChange={handleChange}
            required
            shadow
          />
        </div>
        <Button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submit
        </Button>
      </form>
    </div>
  )
}
