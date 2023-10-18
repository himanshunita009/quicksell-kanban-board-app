import { userIcon } from "../../FetchData";
import Card  from "./Card";

const CardList = ({group,data,subgroup}) => {
    return ( 
        <div>
            {data.map((ticket) => (
              <Card 
                    key={ticket.id}      
                    ticketId={ticket.id}
                    tags={ticket.tag}
                    title={ticket.title}
                    priorotyIcon={group!== 'Priority'?`./Images/${ticket.Priority}.svg`:null}
                    statusIcon={group!== 'Status'?`./Images/${ticket.status}.svg`:null}
                    userIcon={group !== 'User'?userIcon[ticket.userId]:null}
              />    
            ))}
        </div>
     );
}
 
export default CardList;