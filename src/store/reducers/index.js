import { combineReducers } from "redux";
import category from "./category";
import city from "./city";
import job from "./job"
import company from "./company";
import country from "./country";
import plan from "./plan"
import report from "./report";
import seeker from "./seeker";
import tag from "./tag";
import transaction from "./transaction";
import user from "./user";

export default combineReducers({
     category,
     city,
     job,
     company,
     country,
     plan,
     report,
     seeker,
     tag,
     transaction,
     user
     })