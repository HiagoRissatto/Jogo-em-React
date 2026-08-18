interface HistoricoProps {
    historico: { id: number; acao: string; resultado: string }[];
  }
function History({ historico }: HistoricoProps) {
    const atividades = historico.map((item) => ({
      id: item.id,
      acao: item.acao,
      resultado: item.resultado,
    }));
  
    return (
      <>
        <div className="card bg-secondary bg-opacity-25 border-secondary p-4 mt-4">
          <h3 className="text-center mb-3 text-light">Histórico de Ações</h3>
          <ul className="list-group">
            {atividades.map((item) => (
              <li key={item.id} className="list-group-item bg-dark text-light">
                <strong>Ação:</strong> {item.acao} - <strong>Resultado:</strong> {item.resultado}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }


export default History;
