
function AddTodoForm(props){
  return (
    <div>
      <input className="appearance-none block bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 m-3 leading-tight focus:outline-none focus:bg-white" placeholder="Jane" type="text" name="desc" onChange={(event) => props.setValue(event.target.value)}/>
        <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 mx-2 px-4 rounded-full" type="submit" onClick={props.action}>Add Task</button>
    </div>
  );
}

export default AddTodoForm;