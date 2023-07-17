

export function responseHandler(resp: any) {
  if (resp.status === 500) return resp;
  if (!resp.ok) {
    return resp.text().then((msg: any) => {
      return {
        isAnError: true,
        reason: typeof msg === 'string' ? msg : JSON.parse(msg),
        code: resp.status,
      };
    });
  }
  if (resp.status !== 204) return resp.json();
  return resp;
}

export function getSeasons() {
  return fetch('https://17e246be-bef6-4291-9d4a-b9ed1626d36c.mock.pstmn.io/seasons').then(responseHandler);
}

export function getUser() {
  return fetch('https://17e246be-bef6-4291-9d4a-b9ed1626d36c.mock.pstmn.io/auth/me').then(responseHandler);
}

export function getUserSeasonXp() {
  return fetch('https://17e246be-bef6-4291-9d4a-b9ed1626d36c.mock.pstmn.io/users/1/experiences').then(responseHandler);
}