import CardList from '../Card/CardList';
import  './Group.css';
import { usersMap,userIcon } from '../../FetchData';
const Group = ({group,data}) => {
    const keys = Object.keys(data);
    const icons ={};
    keys.map((key) => {
        icons[key] = `./Images/${key}.svg`;
    })
    const priorities = {
        '0': 'No Priority',
        '1': 'Low',
        '2': 'Medium',
        '3': 'High',
        '4': 'Urgent'
    }
    return ( 
        <div className="group-back">
            {keys && keys.map((key) => (
                <div key={key} className='header-back'>
                    <div className="header">
                        <div className="card-list-header">
                            {group === 'User' && <span className="user-icon">{userIcon[key]} </span> }
                            {group !== 'User' && <img src={icons[key]} alt="" srcSet="" />}
    
                            {group === 'Status' && <span className="head-title">{key}</span>}
                            {group === 'Priority' && <span className="head-title">{priorities[key]}</span>}
                            {group === 'User' && <span className="head-title">{usersMap.get(key)}</span>}

                            <span className="count">{data[key].length}</span>
                        </div>

                        <div>
                            <img src={"./Images/add_task.svg"} alt="" />
                            <img src={"./Images/options.svg"} alt="" />
                        </div>
                    </div>
                    <div className="card-list">
                        <CardList 
                            key={key}
                            group={group}
                            subgroup={key}
                            data={data[key]}
                        />

                    </div>
                </div>
            ) )}
            
        </div>
     );
}
  
export default Group;