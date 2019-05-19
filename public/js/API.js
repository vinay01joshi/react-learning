import {get} from "jquery";
import ServerActions from "./actions/ServerActions";


let API = {
    fetchLinks() {
        console.log('1 - Fetch link Api');
        get("/data/links").done(resp => {
           ServerActions.recieveLinks(resp)
        })
    }
}

export default API;