interface SleepProps{
    vida:number,
    energia:number,
    setVida:(value:number)=>void,
    setEnergia:(value:number)=>void
}

function Sleep({vida,energia,setVida,setEnergia}:SleepProps){
    function descansar(){
    setVida(Math.min(vida+5,100));
    setEnergia(Math.min(energia+30,100));
    }
    return(
        <>  
            <button onClick={descansar}>Descansar</button>
        </>
    )
}
export default Sleep;