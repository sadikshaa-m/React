import PropTypes from 'prop-types'

export default function Props({name='Guest', age=0, isStudent=false}) {
  return (
    <div className="mb-4">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>isStudent: {isStudent ? "Yes": "No"}</p>
    </div>
  )
}
Props.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
// Props.defaultProps = {
//     name: 'Guest',
//     age: 0,
//     isStudent: false,     //you can do it by adding value in top
// }
