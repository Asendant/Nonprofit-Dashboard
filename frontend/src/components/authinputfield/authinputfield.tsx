interface Props {
    setText: React.Dispatch<React.SetStateAction<string>>;
    value: string;
    type : string;
    placeholder : string;
}

const AuthInputField = (props : Props) => {
    const updateText = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setText(e.currentTarget.value)
    }

    return (
        <input type={props.type} placeholder={props.placeholder} onChange={updateText} />
    )
}

export default AuthInputField