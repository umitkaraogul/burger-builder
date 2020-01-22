import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

configure({ adapter: new Adapter() });

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });

    it('should store the token upon login', () => {
        expect(reducer(undefined, {
            type: actionTypes.AUTH_SUCCESS,
            idToken: "some-token",
            userId: "some-userId"
        }
        )).toEqual({
            token: "some-token",
            userId: "some-userId",
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });

})