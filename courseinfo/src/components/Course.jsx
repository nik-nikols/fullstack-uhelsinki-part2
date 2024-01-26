const Header = ({text}) => {
    console.log(text);
    return <h2>{text}</h2>
  }
  
  const Part = ({ part, exercises }) => {
    console.log(part, exercises);
    return <p>{part} {exercises}</p>
  }
  
  const Total = ({ parts }) => {
    const total = parts.reduce((s, p) => s += p.exercises, 0)
    console.log(total);
    return <p><b>total of {total} exercises</b></p>
  }
  
  const Content = ({ parts }) => {
    console.log(parts);
    return (
      <>
        {parts.map((part) => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
      </>
    )
  }
  
  const Course = ({ course }) => {
    console.log(course);
    return (
      <>
        <Header text={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    )
  }
  
export default Course