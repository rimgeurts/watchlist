import streams from '../apis/streams';
import bo from '../apis/bo';
import axios from 'axios'
import history from '../history';
import {
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from './types';


export const fetchData = (reportElement, widgetCode, reportTabId) => async (dispatch, getState) => {
    const {isSignedIn} = getState().auth;
    if(!isSignedIn) {
        
        login().then(fetchData())
    }
    if (reportElement) {
        try {
        const response = await bo.get('/raylight/v1/documents/5712/reports/' + reportTabId + '/elements/'+ reportElement + '/dataset',
                                    { headers: { 'X-SAP-LOGONTOKEN': localStorage.getItem('logonToken')} });

        const payload = response.data.dataset.row;
        dispatch({type: 'GET_DATA_SUCCESS', widget: widgetCode, tab: reportTabId, element: reportElement, payload: payload})
        }catch(error) {
            console.log('error is:', error)
            dispatch({type: 'GET_DATA_ERROR', widget: widgetCode, tab: reportTabId, element: reportElement, payload: error.response.data})
        }
    }
}


export const login = () => async dispatch => {
    
    const data = {
        password: 'Burung79!',
        clientType: '',
        auth: 'secEnterprise',
        userName: 'administrator'
    }
        try {
        //console.log('attempting to fetch report element: ' + reportElement + " widget: " + widgetCode)
        const response = await bo.post('/logon/long', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
        if (response.status === 200) {
            console.log(`"${response.data.logonToken}"`)
            localStorage.setItem('logonToken', response.data.logonToken)
            dispatch({type: SIGN_IN})
        }

        }catch(error) {
            console.log('error is:', error)
           // dispatch({type: 'GET_DATA_ERROR', widget: widgetCode, tab: reportTabId, element: reportElement, payload: error.response.data})
        }
}










export const signIn = (userId) => {
    return{
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return{
        type: SIGN_OUT
    }
}

export const createStream = (formValues) => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await streams.post('/streams',{ ...formValues, userId });
    dispatch({type: CREATE_STREAM, payload: response.data});
    history.push('/');
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({type: FETCH_STREAMS, payload: response.data})
}

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({type: FETCH_STREAM, payload: response.data})
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/stream/${id}`, formValues);
    dispatch({type:EDIT_STREAM, payload: response.data})
}

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`)
    dispatch({type: DELETE_STREAM, payload: id})
}