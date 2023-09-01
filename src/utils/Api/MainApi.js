import { IS_DEVELOPMENT } from '../IS_DEVELOPMENT';

class MainApiClass {
  constructor({ baseUrl, headers, otherCommonProps }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._otherCommonProps = otherCommonProps;
  }

  static async _parseJson(res) {
    if (res.ok && res?.json) return res.json();

    const { message } = await res.json();
    throw new Error(message);
  }

  postSignUp({ password, email }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      ...this._otherCommonProps,

      body: JSON.stringify({
        password,
        email,
      }),
    }).then(MainApiClass._parseJson);
  }

  postSignOut() {
    return fetch(`${this._baseUrl}/sign-out`, {
      method: 'POST',
      headers: this._headers,
      ...this._otherCommonProps,

    }).then(MainApiClass._parseJson);
  }

  postSignIn({ password, email, name }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      ...this._otherCommonProps,

      body: JSON.stringify({
        password,
        email,
        name,
      }),
    }).then((data) => MainApiClass._parseJson(data));
  }

  getUsersMe() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      ...this._otherCommonProps,

    }).then(MainApiClass._parseJson);
  }

  updateUserData({ email, name }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      ...this._otherCommonProps,
      body: JSON.stringify({
        email,
        name,
      }),
    }).then(MainApiClass._parseJson);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      ...this._otherCommonProps,

    }).then(MainApiClass._parseJson);
  }

  _postMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      ...this._otherCommonProps,

      body: JSON.stringify({
        ...movie,
      }),
    }).then(MainApiClass._parseJson);
  }

  _deleteMovieById(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      ...this._otherCommonProps,
    }).then(MainApiClass._parseJson);
  }

  changeLikeCardStatus(movie, isLiked) {
    return isLiked ? this._deleteMovieById(movie.movieId) : this._postMovie(movie);
  }
}

export const MainApi = new MainApiClass({
  baseUrl: IS_DEVELOPMENT ? 'http://localhost:4000' : 'https://api.greg.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  },
  otherCommonProps: {
    credentials: 'include',
    mode: 'cors',
  },
});
