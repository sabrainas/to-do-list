interface HeaderProps {
    text: string;
}

export const Header: React.FC<HeaderProps> = ({text}) =>{
    
    return(
        
        <header className="bg-slate-200 p-5">
            <h1 className="text-3xl font-bold text-center" >{text}</h1>
        </header>
    )
}