interface SleepProps{
    acoes: number,
    vida:number,
    energia:number,
    setVida:(value:number)=>void,
    setEnergia:(value:number)=>void
    setAcoes:(value:number)=>void
}

function Sleep({acoes,vida,energia,setVida,setEnergia,setAcoes}:SleepProps){
    function descansar(){
    setVida(Math.min(vida+5,100));
    setEnergia(Math.min(energia+30,100));
    setAcoes(acoes + 1);
    }
    return(
        <>  
            <button onClick={descansar} disabled={acoes >= 2}>Descansar</button>
        </>
    )
}
export default Sleep;