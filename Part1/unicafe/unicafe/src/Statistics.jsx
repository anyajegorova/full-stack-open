import Feedback from './Feedback.jsx';
import StatisticLine from './StatisticLine.jsx';

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad;
    const average = (good + (-bad)) / all + '%';
    const positive = good / all * 100 + '%';
    return (
        <>
            <Feedback text="good" count={good} />
            <Feedback text="neutral" count={neutral} />
            <Feedback text="bad" count={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
        </>
    )
}

export default Statistics;