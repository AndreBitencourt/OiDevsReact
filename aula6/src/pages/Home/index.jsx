import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [loading, setLoading] = useState(true);//Load
    const [photos, setPhotos] = useState([])//Estado inicial

    const [contador, setContador] = useState(0)

    const { users } = location.state;

    console.log(users)

    useEffect(() => {
        //Executa um bloco JS após a rederização do componente
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            //.then((data) => console.log(data))
            //.then((data) => setLoading(false))
            .then((data) => {
                setPhotos(data);
                setTimeout(() => setLoading(false), 2000)
                //setLoading(false)
            })
    }, [contador]);
    //Observação para a variável contador, quando ela alterar atualiza o componente

    return (
        <div id="login">

            <div className="card">

                <div className="card-header">
                    <h1>Home</h1>
                </div>

                {/*loading ? (<h1>Carregando....</h1>) : (
                    <>
                        <h2>Lista de Imagens</h2>
                        <ul>
                            {photos.map((photo) => (
                                <li key={photo.id}>{photo.url}</li>
                            ))}
                        </ul>
                    </>
                            )*/}


                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.username}</li>
                    ))}
                </ul>

                <div className="card-footer">
                    <Button value="Sair" onClick={() => navigate("/")} />
                    <h1>Contador: {contador}</h1>
                    <button onClick={() => setContador(contador + 1)}>+</button>
                    <button onClick={() => setContador(contador - 1)}>-</button>
                </div>

            </div>
        </div>
    );
};

export default Home;