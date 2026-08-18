interface EatProps{
    acoes:number,
    vida:number,
    comida:number,
    setComida:(value:number)=>void
    setVida:(value:number)=>void
    setAcoes:(value:number)=>void
}

function Eat({acoes,vida,comida,setComida,setVida,setAcoes}:EatProps){
    function comer(){
        if(comida>0){
            setComida(Math.max(comida-1,0));
            setVida(Math.min(vida+20,100));
            setAcoes(acoes + 1);
        }else{
            alert("Você não tem comida suficiente para comer!");
        }
    }
    return(
        <>
            <button onClick={comer} disabled={acoes >= 2}>Comer</button>
        </>
    )
}
export default Eat;