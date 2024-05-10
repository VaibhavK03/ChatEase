import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetLoggedInUser = () => {

	const [loggedInUser, setLoggedInUser] = useState([]);

	useEffect(() => {
		const getLoggedInUser = async () => {
			try {
				const res = await fetch("/api/users/getLoggedInUser");
				const data = await res.json();
				if (data.error) {
					throw new Error(data.error);
				}
				setLoggedInUser(data);
			} catch (error) {
				toast.error(error.message);
			}
		};

		getLoggedInUser();
	}, []);

	return { loggedInUser };
}

export default useGetLoggedInUser;