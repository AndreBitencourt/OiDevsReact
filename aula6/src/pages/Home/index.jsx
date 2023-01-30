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
    
    const [listOfUsers, setListOfUsers] = useState([]);
    const [count, setCount] = useState(0);
    const [showMsg, setShowMsg] = useState(false)

    //console.log(users)

    const renderUser = () => {
        const arr = JSON.parse(localStorage.getItem("users"));
        if(!users[count]) {
          setShowMsg(true)
          return
        }
        setCount(prevState => prevState + 1)
        arr.push(users[count])
        setListOfUsers(arr)
      }

      useEffect(() => {
        localStorage.setItem("users", JSON.stringify(listOfUsers))
    
        return () => {
          localStorage.removeItem("users")
        }
      }, [listOfUsers])

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


                {/* <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.username}</li>
                    ))}
                </ul> */}

                <ul>
          {
            listOfUsers.length === 0 ? <p className="msg">Clique abaixo para exibir os usuários </p> : listOfUsers.map((user) => (
              <li key={user.id}>
                {user.username}
              </li>
            ))
          }
        </ul>
        <div>
        <Button value={`Contador: ${count}`} onClick={renderUser}/>
        {
          showMsg &&
        <p className="finish-msg">Esses são todos os usuários cadastrados!</p>
        }
        </div>

                {/* <div className="card-footer">
                    <Button value="Sair" onClick={() => navigate("/")} />
                    <h1>Contador: {contador}</h1>
                    <button onClick={() => setContador(contador + 1)}>+</button>
                    <button onClick={() => setContador(contador - 1)}>-</button>
                </div> */}

            </div>
        </div>
    );
};

export default Home;