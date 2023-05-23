
import {connection_db} from '../../config/connect_db.js'


const admin_valid = async(User)=>{
    
    const promisePool = connection_db.promise();
    const [rows,fields] = await promisePool.query("SELECT * FROM `account` WHERE `name` =  ? ",[User])
    
    return rows[0];
    
}



export default admin_valid