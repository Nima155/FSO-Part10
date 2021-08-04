import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";
const useRepositories = () => {
	const { loading, data, refetch } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: "cache-and-network",
	});

	// const [loading, setLoading] = useState(false);

	// const fetchRepositories = async () => {
	// 	setLoading(true);

	// 	// Replace the IP address part with your own IP address!
	// 	const response = await fetch("http://192.168.0.106:5000/api/repositories");
	// 	const json = await response.json();

	// 	setLoading(false);
	// 	setRepositories(json);
	// };

	// useEffect(() => {
	// 	fetchRepositories();
	// }, []);

	return { repositories: data, loading, refetch };
};

export default useRepositories;
