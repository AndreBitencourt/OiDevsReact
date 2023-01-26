import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { users } = location.state;
    return (
        <div id="login">

            <div className="card">

                <div className="card-header">
                    <h1>Home</h1>
                </div>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.username}</li>
                    ))}
                </ul>
                <div className="card-footer">
                    <Button value="Sair" onClick={() => navigate("/")} />
                </div>
            </div>
        </div>
    );
};

export default Home;