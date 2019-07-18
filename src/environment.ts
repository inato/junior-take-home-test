import {
  Environment,
  Network,
  RecordSource,
  Store,
  Variables,
  RequestParameters
} from "relay-runtime";

function fetchQuery(request: RequestParameters, variables: Variables) {
  return fetch("http://localhost:3001/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: request.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default environment;
