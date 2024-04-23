const Button = ({ text, handleClick }) => {

    return (
        <button onClick={() => handleClick(text)}>{text}</button>
    )
}

export default Button;