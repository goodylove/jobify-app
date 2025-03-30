
// eslint-disable-next-line react/prop-types
function FormRow({type,name,labelText}) {
  return (
     <div className="form-row">
          <label htmlFor={name} className="form-label">{ labelText||name }</label>
          <input type={type} id={name} placeholder="Name" required  className="form-input"/>
        </div>
  )
}

export default FormRow
