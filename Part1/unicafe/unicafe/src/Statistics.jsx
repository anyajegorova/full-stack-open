import Feedback from './Feedback.jsx';

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad;
    const average = (good + (-bad)) / all + '%';
    const positive = good / all * 100 + '%';
    return (
        <>
            <Feedback text="good" count={good} />
            <Feedback text="neutral" count={neutral} />
            <Feedback text="bad" count={bad} />
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive}</p>
        </>
    )
}

export default Statistics;