import { useEffect, useState } from 'react';

export default function ListaIngressos() {
  const [ingressos, setIngressos] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem('ingressos') || '[]');
    setIngressos(dados);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Ingressos Vendidos</h2>
      {ingressos.length === 0 && <p>Nenhum ingresso vendido ainda.</p>}
      {ingressos.map((ingresso, index) => (
        <div key={index} className="border rounded p-3 mb-3">
          <p><strong>Cliente:</strong> {ingresso.nome}</p>
          <p><strong>CPF:</strong> {ingresso.cpf}</p>
          <p><strong>Assento:</strong> {ingresso.assento}</p>
          <p><strong>Pagamento:</strong> {ingresso.pagamento}</p>
          <p><strong>Filme:</strong> {ingresso.sessao?.filme}</p>
          <p><strong>Sala:</strong> {ingresso.sessao?.sala}</p>
          <p><strong>Data e Hora:</strong> {ingresso.sessao?.dataHora}</p>
        </div>
      ))}
    </div>
  );
}
