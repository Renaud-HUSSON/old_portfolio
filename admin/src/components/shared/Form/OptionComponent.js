const OptionComponent = ({item, label, name, selected}) => {
  return <option value={item[name]} selected={selected}>{item[label]}</option>
}

export default OptionComponent