const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    error: null
};

export default (state = INITIAL_STATE, action) => {
        const {widget, element, tab, type} = action;
        console.log('reducer action', action)
        
        // ADD A WIDGET CODE
        const widgetName = widget + '_' + tab + '_' + element; 
        switch(type) {
            case 'GET_DATA_SUCCESS':
                return {...state,
                    [widgetName]: action.payload,
                    isLoading: false
                }
            case 'GET_DATA_ERROR':
                return {...state,
                    error: action.payload,
                    isLoading: false
                }
            default: 
                return state;
        }
}