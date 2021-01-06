const OptionComponent = ({item, label, name}) => {
  return <option value={item[name]}>{item[label]}</option>
}

export default OptionComponent