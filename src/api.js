const baseURL = "https://cryptocount.co/api"
const headers = new Headers();

headers.set("Content-Type", "application/json");



console.log(process.env.NODE_ENV);
const reqConf = {
	headers: headers,
};

if (process.env.NODE_ENV === "development") {
	reqConf["credentials"] = "include";
}


function safeFetch(method, endpoint, body) {
	return fetch(baseURL + endpoint, {
		method: method,
		body: JSON.stringify(body),
		...reqConf,
	})
		.then(function (response) {
			return Promise.resolve(response);
		});
}


export function post(endpoint, body) {
	return safeFetch("POST", endpoint, body);
}

export function generatePost() {
	return post("/tezos/Retrieve", 
		{
			"objectId": "63bf4009fb16e7328e9c2413",
		},
	);
}

export function getSet(setId, user_id) {
	return post("/tezos/Retrieve", {
		setId: setId,
	});
}

export function getRealizingSet(setId, quantity) {
	return post("/tezos/Realize", {
		setId: setId,
		quantity: quantity,
	});
}

export function saveRealize(setId, confirm_quantity) {
	return post("/tezos/Save", {
		objectId: setId,
		quantity: confirm_quantity,
	});
}

