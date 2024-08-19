import { useContext } from 'react'
import InputList from './inputList'
import Button from './Button'
import { StoreContext } from '../context/AppContext'

function AddTodo() {
  const { handleChange, addText, editButton, newTask, textEdit } = useContext(StoreContext)
  return (
    <>
      <InputList value={newTask} type="text" onChange={handleChange} />
      {
        textEdit === false
          ?
          <Button onClick={addText} className=" text-white bg-[#8C02FF] w-[15%] rounded-e-md mb-2">Add</Button>
          :
          <Button onClick={editButton} className="text-white bg-[#8C02FF] w-[15%] rounded-e-md mb-2">edit</Button>
      }
    </>
  )
}

export default AddTodo