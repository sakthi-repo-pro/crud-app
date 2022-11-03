import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css";

const Task = ({ task, onDelete, onEdit }) => {
    return (
      <div>
        {/* <div className="task">
          <div>
            <p className="taskName">
              <span className="textBold">Task Name:</span> {task.text}
            </p>
        <p className="taskDate"><span className="textBold">Date of Completion:</span>              {task.day}
            </p>
            </div>
            <div>
            <p><FaTimes onClick={() => onDelete(task.id)} className="delIcon" /></p>
          <p><FaPencilAlt onClick={() => onEdit(task.id)} className="editIcon" /></p>
          </div>
        </div> */}
        <div align="center">
          <table style={{width:"70%"}}>
            <thead>
              <tr>
                <th>Task Name</th>
              <th>Date</th>
              <th>Action</th>
              </tr>
              
            </thead>
            <tbody>
              {
              task.map((player)=>{
                return(
                  <tr key={player.id}>
              <td>{player.text}</td>
              <td>{player.day}</td>
              <td><FaPencilAlt onClick={() => onEdit(player.id)} className="editIcon" />{" "}<FaTimes onClick={() => onDelete(player.id)} className="delIcon" /></td>
            </tr>
                )
                
              })
            }
            </tbody>
            
            
          </table>
        </div>
      </div>

    )
}
export default Task;