interface StatusProps {
    vida: number;
    energia: number;
    comida: number;
    recurso: number;
}
function Status({ vida, energia, comida, recurso }: StatusProps){
    return(
        <div className="container py-4">
            <div className="card bg-dark text-light p-3">
                <h2>Status</h2>
                <p>Vida:{vida}</p>
                <p>Energia: {energia}</p>
                <p>Fome: {comida}</p>
                <p>Recursos: {recurso}</p>
            </div>
        </div>
    )
}
export default Status;