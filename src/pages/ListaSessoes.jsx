import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Botao from '../components/Botao';

export default function ListaSessoes() {
  const [sessoes, setSessoes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setSessoes(JSON.parse(localStorage.getItem('sessoes') || '[]'));
  }, []);

  function comprar(sessao) {
    localStorage.setItem('sessaoSelecionada', JSON.stringify(sessao));
    navigate('/venda-ingressos');
  }

  return (
    <div className="container mt-4">
      <h2>Sessões Disponíveis</h2>
      {sessoes.map((s, i) => (
        <div key={i} className="border rounded p-3 mb-3">
          <p><strong>Filme:</strong> {s.filme}</p>
          <p><strong>Sala:</strong> {s.sala}</p>
          <p><strong>Data e Hora:</strong> {s.dataHora}</p>
          <p><strong>Preço:</strong> R$ {s.preco}</p>
          <Botao texto="Comprar Ingresso" onClick={() => comprar(s)} />
        </div>
      ))}
    </div>
  );
}
