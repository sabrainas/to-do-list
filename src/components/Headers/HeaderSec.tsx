interface HeaderSec{
    text: string;
}

export const HeaderSec: React.FC<HeaderSec> = ({text}) => {
    return(
        <h1 className='text-2xl font-bold p-1'>{text}</h1>
    )
}