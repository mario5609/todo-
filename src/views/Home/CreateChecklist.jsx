import React, { useContext, useState } from 'react'
import { Input } from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { Context } from '../../Context/Context'

export default function CreateChecklist() {

const {state, dispatch} = useContext(Context);
 console.log(state);

  let idnumber = Math.floor(Math.random() * 10000);

  const [data, setData] = useState()

  function handleOnChange(e) {
    setData(e.target.value)
  }

  function handleOnClick() {

    const search =state.map((obj)=> obj?.value?.toLowerCase())

    console.log(search.includes(data));
    
    if(search.includes(data?.toLowerCase())){
      alert("can't do");
    }else{
    
    dispatch({
      type:"ADD",
      payload:{
          id:idnumber,
          value:data,
          status:''
      }
    })}
    (info.value="")
  }

  return (
    <div className='set_tasks'>
      <Input type={'textbox'} onChange={handleOnChange} className='set_tasks_input' id="info"/>
      <Button label={'Submit'} type={'submit'} onClick={handleOnClick} className='set_tasks_button' />
    </div>
  )
}

