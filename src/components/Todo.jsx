import {EditText, EditTextArea} from 'react-edit-text'
import 'react-edit-text/dist/index.css';

function Todo(props){
    return(
        <div className="container flex-auto m-3 border border-red-500 w-1/5 pb-2 pt-2">
            <div>{props.key}</div>
            <div className="">{props.status}</div>
            <h3 className= "font-bold text-4xl m-2">{props.description}</h3>
            <button onClick={props.action} className="bg-red-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full">Delete</button>
            <button onClick={props.edit} className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full">Edit</button>
            <input onChange={(event) => props.setEdit(event.target.value)} className="appearance-none bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 m-3 leading-tight focus:outline-none focus:bg-white" placeholder="Edit" type="text" name="desc"/>
        </div>
    )
}
export default Todo;