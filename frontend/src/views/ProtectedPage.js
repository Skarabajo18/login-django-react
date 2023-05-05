import { useEffect, useState } from "react";
import useAxios from "../utils/UseAxios";

function ProtectedPage() {
  const axiosInstance = useAxios();
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [selectedFile, setSelectedFile] = useState(null);
  const [postResponse, setPostResponse] = useState(null);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/posts/")
      .then((response) => {
        setAllPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosInstance]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formDataWithFile = new FormData();
    formDataWithFile.append("title", formData.title);
    formDataWithFile.append("body", formData.body);
    formDataWithFile.append("image", selectedFile);

    axiosInstance
      .post("/posts/", formDataWithFile)
      .then((response) => {
        setPostResponse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Protected Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Contenido:
          <textarea
            name="body"
            value={formData.body}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Imagen:
          <input type="file" onChange={handleFileChange} />
        </label>
        <button type="submit">Crear Post</button>
      </form>
      {postResponse && (
        <div>
          <p>Título: {postResponse.title}</p>
          <p>Contenido: {postResponse.body}</p>
          <p>Imagen: {postResponse.image}</p>
        </div>
      )}
      <h2>Todos los Posts:</h2>
      {allPosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <img src={post.image} alt={post.title} />
        </div>
      ))}
    </div>
  );
}

export default ProtectedPage;
