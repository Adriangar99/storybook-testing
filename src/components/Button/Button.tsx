export enum ButtonType {
    Primary,
    Secondary
}

type Props = {
    type: ButtonType,
    label: string,
    onClick: () => void
}

export const Button = ({ type, label, onClick }: Props) => {
    return <button onClick={onClick}>{label}</button>
}