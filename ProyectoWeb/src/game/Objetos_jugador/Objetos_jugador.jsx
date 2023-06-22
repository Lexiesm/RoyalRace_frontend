import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function UserObjects({ user }) {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const fetchUserObjects = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/objects/${user.id}`);
        const data = response.data;
        setObjects(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserObjects();
  }, [user.id]);

  return (
    <div>
      {objects.map((object) => (
        <img key={object.id} src={object.imageUrl} alt={object.name} />
      ))}
    </div>
  );
}