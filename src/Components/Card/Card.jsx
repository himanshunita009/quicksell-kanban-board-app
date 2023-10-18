import './Card.css';
function Card({ticketId,userIcon,statusIcon,title,priorotyIcon,tags}) {
  return (
    <div className="todo-card-back">
      <div className="first">
        <span className='ticketId  gary-color'>{ticketId}</span>
        {userIcon && <span className="user-icon">{userIcon}</span>}
      </div>
      <div className="second">
      {statusIcon && <img src={statusIcon} alt="" srcSet="" className='status-icon' />}
        <span className="title">
            {title}
        </span>
      </div>
      <div className="third">
      {priorotyIcon && <img src={priorotyIcon} alt="" srcSet="" className='priority-icon' />}
        {tags.map((tag) => (
            <span  key={tag} className='tags-back'>
              <span className="material-icons gary-color">
                radio_button_checked
              </span>
            <span className="tags gary-color" key={tag}>{tag}</span>
            </span>
            
        ))}
      </div>
    </div>
  )
}

export default Card
