
/**
 * this is a reducer for sample plugin
 */

import {INCREMENT} from "@js/actions/sample";

const sample = (state = {
    counter: 0
}, action) => {
    switch (action.type) {
    case INCREMENT: {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    default: return state;
    }
};

export default sample;
