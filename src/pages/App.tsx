import { Itarefa } from '../types/tarefa';
import { useState } from 'react';
import Form  from '../components/form';
import List from '../components/list';
import Stopwatch from '../components/stopwatch';
import style from './app.module.scss';


function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>();

  function selecionaTarefa(tarefaSelecionada: Itarefa){
      setSelecionado(tarefaSelecionada);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      })));
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List
      tarefas={tarefas}
      selecionaTarefa = {selecionaTarefa}
      />
      <Stopwatch />
    </div>
  );
}

export default App;
