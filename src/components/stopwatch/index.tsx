import Button from "../button";
import Clock from "./clock";
import style from './stopwatch.module.scss';
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";



interface Props{
  selecionado : Itarefa | undefined,
  finalizarTarefa: () => void

}


export default function Cronometro({selecionado, finalizarTarefa} : Props) {
  const [tempo, setTempo] = useState<number>();
  const [counter, setCounter] = useState<any>();
  
  useEffect(() => {
   if(selecionado?.tempo){
    setTempo(tempoParaSegundos(selecionado.tempo));
   } 
  }, [ selecionado ])

  function regressiva(contador : number = 0){
   setCounter(setTimeout(() =>{
    if(contador > 0){
      setTempo(contador - 1);
      return regressiva(contador - 1);
    }
    finalizarTarefa();
   }, 1000));
  }

  function parar(){
    clearTimeout(counter);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock tempo={tempo}/>
      </div>
    <Button onClick={() => regressiva(tempo)}>
        Começar!
    </Button>
    <br />
    <br />

    <Button onClick={() => parar()}>
        Parar!
    </Button>


    </div>
  )
}