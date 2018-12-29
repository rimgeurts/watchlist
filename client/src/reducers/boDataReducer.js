const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
        const {widget, element, type} = action;
        console.log('reducer action', action)
        
        // ADD A WIDGET CODE
        const widgetName = widget + '_' + element; 
        switch(type) {
            case 'GET_DATA':

                return {...state,
                    [widgetName]: action.payload,
                    isLoading: false
                }
            default: 
                return state;
        }
}