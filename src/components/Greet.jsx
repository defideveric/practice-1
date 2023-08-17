/* eslint-disable react/prop-types */

const Greet = (props) => {
  const {name, heroName} = props
  return (
    <div>
        <h1>
            Hello {name} a.k.a {heroName}
        </h1>
        {props.children}
    </div>
  )
}

export default Greet;