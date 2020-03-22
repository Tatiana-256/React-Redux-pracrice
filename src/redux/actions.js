import {CREATE_POST, FETCH_POST, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "./types";

export const setNewPost = post => ({
    type: CREATE_POST,
    payload: post
});

export const showLoader = () => ({
    type: SHOW_LOADER
});

export const hideLoader = post => ({
    type: HIDE_LOADER,
});


export const showAlert = (alert) => {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: alert
        })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}

export const hideAlert = () => ({
    type: HIDE_ALERT,
});


export const fetchedPost = () => {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            const json = await response.json()
            dispatch({type: FETCH_POST, payload: json})
            dispatch(hideLoader())
        } catch (e) {
            dispatch(showAlert("There is some problem with server"))
            dispatch(hideLoader())
        }
    }
};
