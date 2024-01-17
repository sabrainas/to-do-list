import {Button} from './Buttons/Button';
import { HeaderSec } from './Headers/HeaderSec';
import { Paragraph } from './Paragraphs/Paragraph';

export const Filter = ({filter, setFilter, setSort}: any) => {
    return (
        <section className='border border-b-slate-600 mb-3 pb-2'>
            <HeaderSec text="Filtrar:"/>
            <div className='flex justify-between items-center'>
                <div >
                    <Paragraph text="Status: "/>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mb-4">
                        <option value="All">Todos</option>
                        <option value="Completed">Concluído</option>
                        <option value="Incomplete">Aguardando</option>
                    </select>
                </div>
                <div>
                <Paragraph text="Ordem: "/>
                    <Button onClick={() => setSort("Asc")} text="Asc"/>
                    <Button onClick={() => setSort("Desc")} text="Desc"/>
                </div>
            </div>
        </section>
    )
}