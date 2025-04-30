
// eslint-disable-next-line react/prop-types
function FormRowsSelect({name, labelText,list,defaultValue='' ,onChange}) {
  return (
    <div className="form-row">
             <label htmlFor={name} className="form-label">{labelText}</label>
             <select name={name} id={name} className='form-select' defaultValue={defaultValue} onChange={onChange}       >
               {Object.values(list).map((itemValue)=>{
                 return <option value={itemValue} key={itemValue}>{itemValue}</option>
               })}
             </select>
           </div>
  )
}

export default FormRowsSelect
