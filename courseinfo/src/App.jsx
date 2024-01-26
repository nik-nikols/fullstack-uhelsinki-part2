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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map(course => <Course key={course.id} course={course} />)}
    </>
  )
}

export default App