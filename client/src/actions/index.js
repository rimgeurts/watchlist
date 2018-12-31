import streams from '../apis/streams';
import bo from '../apis/bo';
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



export const fetchData = (reportElement, widgetCode, reportTabId) => async dispatch => {
    if (reportElement) {
        try {
        //console.log('attempting to fetch report element: ' + reportElement + " widget: " + widgetCode)
        const response = await bo.get('/documents/5712/reports/' + reportTabId + '/elements/'+ reportElement + '/dataset');
        console.log("response: ", response)
        const payload = response.data.dataset.row;
        dispatch({type: 'GET_DATA_SUCCESS', widget: widgetCode, tab: reportTabId, element: reportElement, payload: payload})
        }catch(error) {
            console.log('error is:', error)
            dispatch({type: 'GET_DATA_ERROR', widget: widgetCode, tab: reportTabId, element: reportElement, payload: error.response})
        }
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