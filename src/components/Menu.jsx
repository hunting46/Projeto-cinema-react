import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Cine Ritz</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/cadastro-filmes">Cadastro de Filmes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cadastro-salas">Cadastro de Salas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cadastro-sessoes">Cadastro de Sessões</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/venda-ingressos">Venda de Ingressos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sessoes">Listar Sessões</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ingressos-vendidos">Ingressos Vendidos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
