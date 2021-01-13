import axios from "axios";

const fetchUsers = () => {
	return axios.get("https://randomuser.me/api/?results=20&format=json&inc=picture,name,email,phone&noinfo", { crossdomain: true });
}

export default fetchUsers;