import "./style.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";

function Home() {
    const navigate = useNavigate()
    return (
        <div className="container">
            <h1>Home</h1>
            <Button value="Sair" onClick={() => navigate("/")} />
        </div>
    );
}
export default Home;
