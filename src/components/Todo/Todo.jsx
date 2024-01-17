import {Button} from '../Buttons/Button'
import { Paragraph } from '../Paragraphs/Paragraph'

export const Todo = ({todo, deleteTodo, completeTodo}) => {
    return(
        <div className='bg-white shadow-md mb-3 p-3 rounded-md flex justify-between items-center' style={{textDecoration: todo.isComplete ? "line-through" : ""}}>
            <div>
                <p> <Paragraph text="Atividade: "/>{todo.text}</p>
                <p> <Paragraph text="Categoria: "/>{todo.category}</p>
            </div>
            <div>
            <Button text="Completar" customClass="bg-green-800" onClick={() => completeTodo(todo.id)}/>
            <Button text="X" customClass="bg-red-600" onClick={() => deleteTodo(todo.id)} />

            </div>
        </div>
    )
}