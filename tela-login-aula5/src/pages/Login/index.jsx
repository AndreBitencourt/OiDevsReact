import '../../App.css';
import { useNavigate } from "react-router-dom";
import Title from '../../components/Titles/Title'
import Input from '../../components/Inputs/Input'
import Button from '../../components/Buttons/Button'
import Link from '../../components/Links/Link'


const Login = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="login">

                <div class="card-header">

                    <Title titulo="Login"></Title>

                </div>

                <div class="card-content">

                    <Input label="usuario" conteudo="Usuário" type="text" />

                    <Input label="senha" conteudo="Senha" type="password" />

                </div>

                <div class="card-footer">

                    <Button value="Login" onClick={() => navigate("/home")} />
                    
                    <Link href="https://google.com" content="Recuperar a senha?" />

                </div>

            </div>
        </>
    )
}

export default Login