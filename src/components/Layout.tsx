
export const Layout = ({children}: any) => {
    return(
        <main className="max-w-xl m-auto bg-slate-200 py-2 px-3 rounded-xl h-max flex flex-col justify-center content-center">
            {children}
        </main>
    )
}