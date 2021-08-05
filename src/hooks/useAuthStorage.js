import { useContext } from "react";

import AuthStorageContext from "../contexts/AuthStorageContext";

// less verbose in use and hides th implementation useContext(AuthStorageContext)
const useAuthStorage = () => {
	return useContext(AuthStorageContext);
};

export default useAuthStorage;
