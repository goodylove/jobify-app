
// eslint-disable-next-line react/prop-types
function FormRow({type,name,labelText,defaultValue=""}) {
  return (
     <div className="form-row">
          <label htmlFor={name} className="form-label" name={name}  >{ labelText||name }</label>
          <input type={type} id={name} placeholder={name}  name={name}  defaultValue={defaultValue} required  className="form-input"/>
        </div>
  )
}

export default FormRow
