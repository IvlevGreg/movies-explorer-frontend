class MoviesApiClass {
  constructor({ baseUrl, headers, otherCommonProps }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._otherCommonProps = otherCommonProps;
  }

  static _parseJson(res) {
    return res.ok && res?.json ? res.json() : Promise.reject(res);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: this._headers,
      ...this._otherCommonProps,

    }).then(MoviesApiClass._parseJson);
  }
}

export const MoviesApi = new MoviesApiClass({
  baseUrl: 'https://api.nomoreparties.co',

});
