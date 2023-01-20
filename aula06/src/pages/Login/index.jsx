import "./styles.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Link from "../../components/Link";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([
    {
      username: "raniel",
      password: "oidevs",
    },
  ]);

  const vaParaHome = () => {

    navigate("/home");
  };

  const mudarTitulo = () => {
    setTitle("Sucesso do Goiás");
  };

  return (
    <div className="container">
      <div className="box-login">
        <Title text={title} />
        {/* <Subtitle text={subtitle} /> */}
        <Input label="Usuário" />
        <Input label="Senha" hideContent />
        <Button title="Entrar" aoClicar={vaParaHome} bgColor="blue" />
        <Button title="Trocar título" aoClicar={mudarTitulo} />
        <Link text="Esqueceu a senha?" url="https://google.com" />
      </div>
    </div>
  );
};

export default Login;
