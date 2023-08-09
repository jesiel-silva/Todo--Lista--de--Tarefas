import { useState, useEffect, useCallback } from 'react'

import { FaListAlt, FaGithub, FaLinkedin, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

// Imports styled-components
import {
  StyleContainer,
  StyleMidiaSocias,
  StyleTitle,
  StyleSearch,
  StyleWrapperTodo,
  StyleTodo,
  StyleContent,
  StyleParagraph,
  StyleButton,
  StyleButtonDelete,
  StyleFormWrapper,
  StyleForm
} from './styles'

function App() {

  // States
  const [inputValues, setInputValues] = useState('');
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [alertError, setAlertError] = useState(null);
  const [tarefas, setTarefas] = useState([]);


  //cria um novo objeto no state tarefa
  const addTarefa = (text, category) => {
    const newTarefa = [
      ...tarefas, {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTarefas(newTarefa);
  }


  //Tarefa completa
  const tarefaCompleta = (id) => {
    const newTarefa = [...tarefas]
    newTarefa.map((item) => item.id === id ? item.isCompleted = !item.isCompleted : item);
    setTarefas(newTarefa)
  }


  //Enviando nova tarefa para a lista
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAlertError(null);

    try {

      //Verifica se está vazio retorna um erro
      if (!inputValues || !category) {
        throw new Error('Você precisa preencher o titulo da tarefa e uma categoria');
      };

      //Verifica se a tarefa é repetida e retorna um erro
      const tarefaRepitida = tarefas.find(repetida => repetida.text === inputValues);
      if (tarefaRepitida) {
        throw new Error('Tarefa repetida');
      }

      addTarefa(inputValues, category);

      setInputValues("")
      setCategory("")

    } catch (Error) {
      setAlertError(true)
      alert(Error)
    }

  };


  // Função que deleta tarefa.
  const handleDelete = useCallback((tarefa) => {

    const find = tarefas.filter((item) => item.id !== tarefa);
    setTarefas(find)

  }, [tarefas]);


  //Salvar os dados no localStorage.
  useEffect(() => {
    const tarefaStorage = localStorage.getItem("@keyTarefa");

    if (tarefaStorage) {
      setTarefas(JSON.parse(tarefaStorage))
    }
  }, []);


  //Buscar os dados salvos no localStorage.
  useEffect(() => {
    localStorage.setItem("@keyTarefa", JSON.stringify(tarefas))
  }, [tarefas]);


  return (
    <>
      <StyleContainer>

        <StyleMidiaSocias>
          <a href='https://www.linkedin.com/in/jesiel-silva/' target='_blank'><FaLinkedin /></a>
          <a href='https://github.com/jesiel-silva/Sobre-Mim' target='_blank'><FaGithub /></a>
          <a href='https://www.instagram.com/jesielsilva64/' target='_blank'><FaInstagramSquare /></a>
          <a href='https://twitter.com/JesielS94174824' target='_blank'><FaTwitterSquare /></a>
        </StyleMidiaSocias>

        <StyleTitle>
          <h1>Lista de Tarefas</h1>
        </StyleTitle>

        <StyleSearch>
          <h2>Pesquisar tarefa</h2>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Digite para pesquisar...'
          />
        </StyleSearch>

        <StyleFormWrapper>
          <h2>Criar tarefa</h2>
          <StyleForm 
            addtarefa={addTarefa} 
            onSubmit={handleFormSubmit} 
            erro={alertError}
          >
            <input
              type='text'
              placeholder='Digite o titulo da tarefa...'
              onChange={(e) => 
                {setInputValues(e.target.value)
                setAlertError(null)}
              }
              value={inputValues}
              
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)} >
              <option value="">Selecione uma categoria</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Pessoal">Pessoal</option>
              <option value="Estudos">Estudos</option>
              <option value="Listagem">Listagem</option>
            </select>
            <StyleButton cor="#4169e1">Adicionar a tarefa</StyleButton>
          </StyleForm>
        </StyleFormWrapper>

        <StyleWrapperTodo>
          <h2>Minhas tarefas <FaListAlt /></h2>

          {
            tarefas.filter((item) =>
              item.text.toLowerCase().includes(search.toLowerCase())).map((item) => (
                <StyleTodo key={item.id}>
                  <StyleContent style={{ textDecoration: item.isCompleted ? "line-through" : null }}>
                    <div>
                      <StyleParagraph cor="#464646">{item.text}</StyleParagraph>
                      <StyleParagraph>{item.category}</StyleParagraph>
                    </div>
                    <div>
                      <StyleButton
                        cor="#4169e1"
                        onClick={() => tarefaCompleta(item.id)}
                        style={{ color: item.isCompleted ? "#d0ceb9" : null }}
                      >Concluida</StyleButton>
                      <StyleButtonDelete onClick={() => handleDelete(item.id)}>Delete</StyleButtonDelete>
                    </div>
                  </StyleContent>
                </StyleTodo>
              ))}
        </StyleWrapperTodo>

      </StyleContainer>
    </>
  )
}

export default App
