export const handleLocalStorage = (key: string, payload: any) => {
	if (!localStorage.getItem(key)) {
		localStorage.setItem(key, JSON.stringify([payload]));
	} else {
		let collection = JSON.parse(localStorage.getItem(key) || "{}");
		if (!collection.some((movie: any) => movie.id === payload.id)) {
			collection.push(payload);
			localStorage.setItem(key, JSON.stringify(collection));
		}
	}
};
