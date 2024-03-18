export function Input({type, value, name, id, onChange, className}){
    return(
        <input type={type} value={value} name={name} id={id} onChange={onChange} className={className}/>
    )
}
