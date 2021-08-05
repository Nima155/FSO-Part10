import * as SecureStore from "expo-secure-store"; // expos SecureStore.. functions sort of like a localStorage

class AuthStorage {
	constructor(namespace = "auth") {
		// namespace is used to possibly avoid collisions in the key-value store
		this.namespace = namespace;
	}

	async getAccessToken() {
		const tk = await SecureStore.getItemAsync(`${this.namespace}:authToken`);
		return tk ? JSON.parse(tk) : null;
	}

	async setAccessToken(accessToken) {
		// Add the access token to the storage
		await SecureStore.setItemAsync(`${this.namespace}:authToken`, accessToken);
	}

	async removeAccessToken() {
		// Remove the access token from the storage
		await SecureStore.deleteItemAsync(`${this.namespace}:authToken`);
	}
}

export default AuthStorage;
