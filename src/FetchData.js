const data = JSON.parse('{"tickets":[{"id":"CAM-1","title":"Update User Profile Page UI","tag":["Feature request"],"userId":"usr-1","status":"Todo","priority":4},{"id":"CAM-2","title":"Add Multi-Language Support - Enable multi-language support within the application.","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":3},{"id":"CAM-3","title":"Optimize Database Queries for Performance","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":1},{"id":"CAM-4","title":"Implement Email Notification System","tag":["Feature Request"],"userId":"usr-1","status":"In progress","priority":3},{"id":"CAM-5","title":"Enhance Search Functionality","tag":["Feature Request"],"userId":"usr-5","status":"In progress","priority":0},{"id":"CAM-6","title":"Third-Party Payment Gateway","tag":["Feature Request"],"userId":"usr-2","status":"Todo","priority":1},{"id":"CAM-7","title":"Create Onboarding Tutorial for New Users","tag":["Feature Request"],"userId":"usr-1","status":"Backlog","priority":2},{"id":"CAM-8","title":"Implement Role-Based Access Control (RBAC)","tag":["Feature Request"],"userId":"usr-3","status":"In progress","priority":3},{"id":"CAM-9","title":"Upgrade Server Infrastructure","tag":["Feature Request"],"userId":"usr-5","status":"Todo","priority":2},{"id":"CAM-10","title":"Conduct Security Vulnerability Assessment","tag":["Feature Request"],"userId":"usr-4","status":"Backlog","priority":1}],"users":[{"id":"usr-1","name":"Anoop sharma","available":false},{"id":"usr-2","name":"Yogesh","available":true},{"id":"usr-3","name":"Shankar Kumar","available":true},{"id":"usr-4","name":"Ramesh","available":true},{"id":"usr-5","name":"Suresh","available":true}]}');
const usersMap = new Map();
const userIcon = {};
function user() {
    data.users.map((user) => {
        usersMap.set(user.id, user.name);
        for(let i = 1;i<user.name.length;++i){
            userIcon[user.id] = user.name[0].toUpperCase();
            if(user.name[i] === ' '){
                userIcon[user.id] = `${userIcon[user.id]}${user.name[i+1].toUpperCase()}`;
                break;
            }
        }
        if(userIcon[user.id].length === 1){
            userIcon[user.id] = userIcon[user.id];
        }
    });

}
user();

const result = data.tickets.reduce((obj,val) => {
    const data = {
        id: val.id,
        Priority: val.priority,
        tag: val.tag,
        title: val.title,
        userName: usersMap.get(val.userId),
        userId: val.userId,
        status: val.status
    }
    obj.Status[val.status] = obj.Status[val.status]? [...obj.Status[val.status],data] : [data];
    obj.User[val.userId] = obj.User[val.userId]? [...obj.User[val.userId],data] : [data];
    obj.Priority[val.priority.toString()] = obj.Priority[val.priority.toString()]? [...obj.Priority[val.priority.toString()],data] : [data];
    return obj;
},{Status: {},User: {},Priority: {}});

function compare(str1,str2){
    for(let i = 0;i<str1.length && i < str2.length;++i){
        if(str2[i] > str1[i])
            return false;
    }
    return str1.length <= str2.length;
}

export default function sortResult(category){
    for (const mainkey in result) {
        for (const subkey in result[mainkey]) {
            if(category === 'Priority')
                result[mainkey][subkey].sort((ticket1,ticket2) => ticket1.Priority-ticket2.Priority);    
            else 
                result[mainkey][subkey].sort((ticket1,ticket2) => ticket1.title.localeCompare(ticket2.title));    
        }
    }
}

sortResult('Priority');




export {result,usersMap,userIcon};