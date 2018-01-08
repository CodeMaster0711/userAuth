// import config from '../config';
// import store from '../store';
/**
 * 
 * @param {String} username (same as email address) 
 * @param {String} password 
 */
// export function login({ username, password }) {
//     return function (dispatch) {
//         dispatch({ type: 'USER_LOGIN', payload: authenticateUser() });
//     }
// }

// export function logout() {
//     return function (dispatch) {
//         //// Promise middleware will fire {type}_PENDING and then {type}_REJECTED with error as the payload or {type}_FULFILLED and response as the payload for this dispatch automatically
//         dispatch({ type: "USER_LOGOUT", payload: logout() });
//         dispatch(loginPage());
//     };
// }

export function getCurrentUser() {
    return function (dispatch) {
        dispatch({ type: 'USER_CURRENT_PENDING' });
        dispatch({
            type: 'USER_CURRENT_FULFILLED', payload: [{
                Name: 'username',
                Value: 'test@user.com'
            }, {
                Name: 'name',
                Value: 'Test'
            }, {
                Name: 'family_name',
                Value: 'User'
            }, {
                Name: 'email',
                Value: 'test@user.com'
            }, {
                Name: 'phone_number',
                Value: '555-11111'
            }]
        });
    }
}