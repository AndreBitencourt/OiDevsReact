import './App.css';
import Title from './components/Titles/Title'
import Input from './components/Inputs/Input'
import Button from './components/Buttons/Button'
import Link from './components/Links/Link'

function App() {
  return (
    <div className="login">

      <form class="card">

        <div class="card-header">

          <Title titulo="Login" />

        </div>

        <div class="card-content">

          <Input label="usuario" conteudo="Usuário" type="text" />

          <Input label="senha" conteudo="Senha" type="password" />

        </div>

        <div class="card-footer">

          <Button value="Login" />

          <Link href="https://google.com" content="Esqueceu a senha?" />          

        </div>

      </form>

    </div>

  );
}

export default App;