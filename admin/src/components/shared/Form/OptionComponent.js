/**
 * 
 * @param {label} String - Property from the data we want to display
 * @param {name} String - Property from the data we want as value
 * 
 */
const OptionComponent = ({item, label, name}) => {
  return <option value={item[name]}>{item[label]}</option>
}

export default OptionComponent