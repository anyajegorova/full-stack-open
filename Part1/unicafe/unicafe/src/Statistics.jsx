import Feedback from './Feedback.jsx';

const Statistics = ({ good, neutral, bad }) => {
    return (
        <>
            <Feedback text="good" count={good} />
            <Feedback text="neutral" count={neutral} />
            <Feedback text="bad" count={bad} />
        </>
    )
}

export default Statistics;