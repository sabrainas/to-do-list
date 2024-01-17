import { HeaderSec } from "./Headers/HeaderSec"

export const Search = ({search, setSearch}: any) => {
    return (
        <section className="border border-b-slate-600 mb-3 pb-2">
            <HeaderSec text="Pesquisar:"/>
            <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 my-1"
                placeholder="Digite para pesquisar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </section>
    )
}