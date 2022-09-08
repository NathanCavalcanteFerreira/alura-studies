import Button from "../button";
import Clock from "./clock";
import style from './stopwatch.module.scss';
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";


interface Props{
  selecionado : Itarefa | undefined
}


export default function Cronometro({selecionado } : Props) {
  const [tempo, setTempo] = useState<number>();
  

  useEffect(() => {
   if(selecionado?.tempo){
    setTempo(tempoParaSegundos(String(selecionado.tempo)))
   } 
  }, [ selecionado ])

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock tempo={tempo}/>
      </div>
      <Button>
        Começar!
      </Button>
    </div>
  )
}