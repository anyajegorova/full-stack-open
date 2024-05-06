import Part from './Part';

const Content = ({course}) => {
    return (
        course.map(part => <Part key={part.name} part={part.name} exercises={part.exercises} />)
    )
}

export default Content;