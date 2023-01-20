import Title from "../../components/Title";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Home = () => {
  const navigate = useNavigate();

  const vaParaLogin = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="box-login">
        <Title text="Home" />
        <Button title="Voltar" aoClicar={vaParaLogin} />
      </div>
    </div>
  );
};

export default Home;
