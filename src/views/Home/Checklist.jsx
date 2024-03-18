import React, { useContext } from 'react'
import { Input } from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { Context } from '../../Context/Context'

export default function Checklist() {

  const { state, dispatch } = useContext(Context)

  function handleOnChange(item) {
    dispatch({
      type: "EDIT",
      payload: item
    })
  }

  function handleOnClick(id) {
    dispatch({
      type: "DELETE",
      payload: id
    })
  }

  return (
    <div className='tasks'>
      {state?.map((item) => <div key={item?.id} className='task'>
        <div className='task_editor'>
          <Input type={'checkbox'} onChange={() => handleOnChange(item)} className={"tasks_box"} />
          <span>{item?.value}</span>
        </div>
        <Button label={'delete'} onClick={() => handleOnClick(item?.id)} className={"tasks_delete"} />
      </div>)}
    </div>
  )
}

