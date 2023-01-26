import './style.css';
import { useNavigate } from "react-router-dom";
import Title from '../../components/Titles/Title'
import Input from '../../components/Inputs/Input'
import Button from '../../components/Buttons/Button'
import Link from '../../components/Links/Link'
/*import Div from '../../components/Divs/Div'*/
import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";

const Login = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState("Login");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [userNotFound, setUserNotFound] = useState(false);
    const [incorrectPassword, setIncorrectPassword] = useState(false);

    const [showError, setShowError] = useState(false);

    const [userDatabase, setUserDatabase] = useState([
        {
            id: 1,
            username: "andre",
            password: "123",
        },
        {
            id: 2,
            username: "raniel",
            password: "oidevs",
        },
        {
            id: 3,
            username: "admin",
            password: "admin",
        },
    ]);

    function handleLogin() {

        let user = userDatabase.find((user) => user.username === username);

        if (!user) {
            setUserNotFound(true);
            setIncorrectPassword(true);
            setShowError(true);
            return;
        }

        if (user.password !== password) {
            setUserNotFound(false);
            setIncorrectPassword(true);
            setShowError(true);
            return;
        }
        setUserNotFound(false);
        setIncorrectPassword(false);
        setShowError(false);
        navigate("/home", {
            state: {
                users: userDatabase,
            }
        });
    }

    return (
        <div id="login">

            <div className="card">

                <div className="card-header">

                    <Title titulo={title}></Title>

                    {showError && (
                        <ErrorMessage message="Usuário ou senha inválidos" />
                    )}

                </div>

                <div className="card-content">

                    <div className="card-content-area">

                        <Input
                            label="Usuário"
                            colorLabel={userNotFound ? "red" : "white"}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />                       

                    </div>

                    <div className="card-content-area">
                     
                        <Input
                            label="Senha"
                            value={password}
                            colorLabel={incorrectPassword ? "red" : "white"}
                            onChange={(e) => setPassword(e.target.value)}
                            hideContent
                        />

                    </div>

                </div>

                <div className="card-footer">

                <Button value="Entrar" onClick={handleLogin} />
                <Button
                    value="Alterar Título"
                    onClick={() => setTitle("Novo Titulo")}
                    bgColor="blue"
                    />
                   
                    <a href="#" className="recuperar_senha">Esqueceu a senha?</a>

                </div>

            </div>

        </div>
    );

}

export default Login