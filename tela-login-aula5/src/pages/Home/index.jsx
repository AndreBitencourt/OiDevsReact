import { useNavigate } from "react-router-dom";
import Button from "../../../../tela-login-aula5/src/components/Buttons/Button";
import '../../App.css';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="container">
            <h1>Home</h1>
            <Button value="Sair" onClick={() => navigate("/")} />
        </div>
    );
}

export default Home;
