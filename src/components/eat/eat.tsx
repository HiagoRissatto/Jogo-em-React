interface EatProps{
    vida:number,
    comida:number,
    setComida:(value:number)=>void
    setVida:(value:number)=>void
}

function Eat({vida,comida,setComida,setVida}:EatProps){
    function comer(){
        if(comida>0){
            setComida(Math.max(comida-1,0));
            setVida(Math.min(vida+20,100));
        }else{
            alert("Você não tem comida suficiente para comer!");
        }
    }
    return(
        <>
            <button onClick={comer}>Comer</button>
        </>
    )
}
export default Eat;