const Feedback = ({ text, count }) => {
    return (
        <tbody>
            <tr>
                <td>{text}</td>
                <td>{count}</td>
            </tr>
        </tbody>
    )

}

export default Feedback;