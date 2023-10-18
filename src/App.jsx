import { useEffect, useState } from 'react';
import './App.css';
import Group from './Components/Group/Group';
import sortResult, {result} from './FetchData';

function App() {
  const [group,setGroup] = useState(localStorage.getItem('group') || 'Status');
  const [dropDownState,setDropDownState] = useState(false);
  const [sortType,setSortType] = useState(localStorage.getItem('sortType') || 'Priority');
  const [todoData,setTododata] = useState(result);
  function handleSortTypeChange(event){
    setDropDownState(!dropDownState)
    setSortType(event.target.value);
    sortResult(event.target.value);
    setTododata(result);
  }
  useEffect(() => {
    localStorage.setItem('group',group);
    localStorage.setItem('sortType',sortType);
  },[group,sortType])
  return (
    <div className='app'>
      <div className="app-header-back">
        <div className="dropdown-back" onClick={() => setDropDownState(!dropDownState)}>
            <span className="material-icons">tune</span>
            Display
            <span className="material-icons">expand_more</span>
        </div>
        <div className="drop-down-menu" style={{display: dropDownState?'flex':'none'}}>
          <div className="menu-group-back">
            <span className="gary-color">Grouping</span>
            <select value={group} onChange={(e) => {setGroup(e.target.value);setDropDownState(!dropDownState)}}>
              <option value="Status" >Status</option>
              <option value="Priority">Priority</option>
              <option value="User" >User</option>
            </select>
          </div>

          <div className="menu-group-back">
            <span className="gary-color">Odering</span>
            <select value={sortType} onChange={(e) => {handleSortTypeChange(e)} }>
              <option value="Priority" >Priority</option>
              <option value="Title">Title</option>
            </select>
          </div>
          
        </div>
      </div>
      
      {todoData && group && <Group group={group} data={todoData[group]} />}
    </div>
  )
}

export default App
