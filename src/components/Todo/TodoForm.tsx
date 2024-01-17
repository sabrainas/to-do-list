import { Button } from "../Buttons/Button"
import { useState } from "react"
import { Header } from "../Headers/Header"

export const TodoForm = ({addTodo}: any) => {

    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(!value || !category) return;
        //adicionar todo
        //limpar os campos
        addTodo(value, category)
        setValue("")
        setCategory("")
    }

    return (
        <form className="bg-slate-200 p-5 pb-6" onSubmit={handleSubmit}>
            <Header text="Nova tarefa"/>
            <input value={value} type="text" placeholder="Digite aqui a tarefa" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 my-1" onChange={(e) => setValue(e.target.value)}/>

            <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <Button  text="Criar tarefa"/>
        </form>
    )
}