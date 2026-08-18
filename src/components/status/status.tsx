import status from "../../css/status.module.css";

interface StatusProps {
  vida: number;
  energia: number;
  comida: number;
  recurso: number;
}

function Status({ vida, energia, comida, recurso }: StatusProps) {
  return (
    <div className={`container py-4 ${status.status}`}>
      <div className="card bg-dark text-light border-secondary shadow-lg">
        <div className="card-body">
          <h2 className="text-center mb-4">Status do Sobrevivente</h2>

          <div className="row text-center g-3">
            <div className="col-6 col-md-3">
              <div className="p-3 border rounded border-danger">
                <h5>Vida</h5>

                <span key={vida} className={`fs-3 fw-bold ${status.valor}`}>
                  {vida}
                </span>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3 border rounded border-warning">
                <h5>Energia</h5>

                <span key={energia} className={`fs-3 fw-bold ${status.valor}`}>
                  {energia}
                </span>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3 border rounded border-success">
                <h5>Comida</h5>

                <span key={comida} className={`fs-3 fw-bold ${status.valor}`}>
                  {comida}
                </span>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="p-3 border rounded border-info">
                <h5>Recursos</h5>

                <span key={recurso} className={`fs-3 fw-bold ${status.valor}`}>
                  {recurso}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
