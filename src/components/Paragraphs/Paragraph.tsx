interface ParagraphProps{
    text: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({text}) => {
    return (
        <p className="font-semibold p-1 inline-block">{text}</p>
    )
}