import deepFreeze from 'deep-freeze';
import userReducer from './userReducer';

const testUsername = 'testUsername';
const testFirstName = 'testFirstName';
const testLastName = 'testLastName';
const testUserEmail = 'email@test.com';
const testUserPhone = '+11111111';
const testError = new Error('TEST');

// *------------------- states--------------------------- */
const user_login_initial_state = {
    loggedIn: false,
    loggingIn: false,
    signingUp: false
};
const user_login_pending_final_state = {
    ...user_login_initial_state,
    loggingIn: true,
};
const user_login_rejected_initial_state = { ...user_login_pending_final_state };
const user_login_rejected_final_state = {
    ...user_login_initial_state,
    loginError: testError.message
};
const user_login_fulfilled_final_state = {
    loggingIn: false,
    loggedIn: true,
    signingUp: false,
    username: testUsername,
    firstName: testFirstName,
    lastName: testLastName,
    emailAddress: testUserEmail,
    emailAddressVerified: false,
    phoneNumber: testUserPhone,
    groups: []
};

const user_logout_initial_state = { ...user_login_fulfilled_final_state };
const user_logout_final_state = { ...user_login_initial_state };

const user_current_pending_initial_state = { ...user_login_initial_state };
const user_current_pending_final_state = { ...user_login_initial_state, loading: true };
const user_current_fulfilled_final_loaded_state = {
    ...user_current_pending_final_state,
    loading: false,
    loggedIn: true,
    username: testUsername,
    firstName: testFirstName,
    lastName: testLastName,
    emailAddress: testUserEmail,
    emailAddressVerified: false,
    phoneNumber: testUserPhone,
    groups: []
};
const user_current_fulfilled_final_notFound_state = {
    ...user_current_pending_final_state,
    loading: false
};
const user_current_rejected_final_state = {
    ...user_current_pending_final_state,
    loading: false,
    loadingError: testError.message
};
// *------------------- actions--------------------------- */
const user_login_fulfilled_action = {
    type: 'USER_LOGIN_FULFILLED',
    payload: [{
        Name: 'username',
        Value: testUsername
    }, {
        Name: 'name',
        Value: testFirstName
    }, {
        Name: 'family_name',
        Value: testLastName
    }, {
        Name: 'email',
        Value: testUserEmail
    }, {
        Name: 'phone_number',
        Value: testUserPhone
    }]
};
const user_login_pending_action = { type: 'USER_LOGIN_PENDING' };
const user_login_rejected_action = { type: 'USER_LOGIN_REJECTED', payload: testError };

const user_logout_action = { type: 'USER_LOGOUT_FULFILLED' };

const user_current_pending_action = { type: 'USER_CURRENT_PENDING' };
const user_current_fulfilled_loaded_action = {
    type: 'USER_CURRENT_FULFILLED',
    payload: [{
        Name: 'username',
        Value: testUsername
    }, {
        Name: 'name',
        Value: testFirstName
    }, {
        Name: 'family_name',
        Value: testLastName
    }, {
        Name: 'email',
        Value: testUserEmail
    }, {
        Name: 'phone_number',
        Value: testUserPhone
    }]
};
const user_current_fulfilled_notFound_action = { type: 'USER_CURRENT_FULFILLED' };
const user_current_rejected_action = { type: 'USER_CURRENT_REJECTED', payload: testError };

// *------------- Making sure that our reducer won't mutate our states------------ */
deepFreeze(user_login_initial_state);
deepFreeze(user_login_rejected_initial_state);
deepFreeze(user_logout_initial_state);
deepFreeze(user_logout_final_state);
deepFreeze(user_current_pending_initial_state);
deepFreeze(user_current_pending_final_state);
deepFreeze(user_current_fulfilled_final_notFound_state);
deepFreeze(user_current_fulfilled_final_loaded_state);
// *------------- Making sure that our reducer won't mutate our actions------------ */
deepFreeze(user_login_pending_action);
deepFreeze(user_login_fulfilled_action);
deepFreeze(user_login_rejected_action);
deepFreeze(user_logout_action);
deepFreeze(user_current_pending_action);
deepFreeze(user_current_fulfilled_loaded_action);
deepFreeze(user_current_fulfilled_notFound_action);


it('should not touch state on irrelevant actions', () => {
    expect(userReducer(user_login_initial_state,
        {
            type: 'IRRELEVANT_ACTION',
            payload: undefined
        })).toEqual(user_login_initial_state);
});
describe('user_login_pending', () => {
    it('should have an intial state in case of the state was undefined', () => {
        expect(userReducer(undefined, user_login_pending_action))
            .toEqual(user_login_pending_final_state);
    });

    it('should set loging in flag for current user in the state', () => {
        expect(userReducer(user_login_initial_state, user_login_pending_action))
            .toEqual(user_login_pending_final_state);
    });
});

describe('user_login_rejected', () => {
    it('should set error for user in the state & set loggingIn flag to false', () => {
        expect(userReducer(user_login_rejected_initial_state, user_login_rejected_action))
            .toEqual(user_login_rejected_final_state);
    });
});

describe('user_login_fulfilled', () => {
    it('should set signed in user as our current user in the state', () => {
        expect(userReducer(user_login_initial_state, user_login_fulfilled_action))
            .toEqual(user_login_fulfilled_final_state);
    });
});
describe('user_logout', () => {
    it('should sign the user out completely', () => {
        expect(userReducer(user_logout_initial_state, user_logout_action))
            .toEqual(user_logout_final_state);
    });
});

describe('user_current_pending', () => {
    it('should set loading flag to true for current user in the state', () => {
        expect(userReducer(user_current_pending_initial_state, user_current_pending_action))
            .toEqual(user_current_pending_final_state);
    });
});

describe('user_current_fulfilled', () => {
    it('should set loading flag to false & load user attributes in the state if LOADED', () => {
        expect(userReducer(user_current_pending_final_state, user_current_fulfilled_loaded_action))
            .toEqual(user_current_fulfilled_final_loaded_state);
    });

    it('should set loading flag to false & remove user attributes in the state if EMPTY', () => {
        expect(userReducer(user_current_pending_final_state, user_current_fulfilled_notFound_action))
            .toEqual(user_current_fulfilled_final_notFound_state);
    });
});

describe('user_current_rejected', () => {
    it('should set loading flag to false & set error', () => {
        expect(userReducer(user_current_pending_final_state, user_current_rejected_action))
            .toEqual(user_current_rejected_final_state);
    });
});