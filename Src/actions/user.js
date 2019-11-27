import Firebase from '../config/Firebase'
import { db } from '../config/Firebase.js'
	
// define types

//Personal Details types
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_ICNO = 'UPDATE_ICNO'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'
export const UPDATE_GENDER = 'UPDATE_GENDER'
//SignUp types
export const UPDATE_USERNAME = 'UPDATE_USERNAME'
export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
//Button types 
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'

// SignUp actions
export const updateUserName = username => {
	return {
		type: UPDATE_USERNAME,
		payload: username
	}
}

export const updateEmail = email => {
	return {
		type: UPDATE_EMAIL,
		payload: email
	}
}

export const updatePassword = password => {
	return {
		type: UPDATE_PASSWORD,
		payload: password
	}
}
//Personal Details actions
export const updateName = name => {
	return {
		type: UPDATE_NAME,
		payload: name
	}
}

export const updateICNO = icno => {
	return {
		type: UPDATE_ICNO,
		payload: icno
	}
}
export const updateContact = contact => {
	return {
		type: UPDATE_CONTACT,
		payload: contact
	}
}

export const updateGender = gender => {
	return {
		type: UPDATE_GENDER,
		payload: gender
	}
}
// Login actions
export const login = () => {
	return async (dispatch, getState) => {
		const { email, password } = getState().user

		try {
			const response = await Firebase.auth().signInWithEmailAndPassword(email, password)

			dispatch(getUser(response.user.uid))
		} catch (error) {
			if (email == null && password ==null)
			{alert('Please fill in your email and password')}
			else if (email == null)
			{alert('Please fill in your email')}
			else if (password == null)
			{alert('Please fill in your password')}
		}
	}
}

export const getUser = uid => {
	return async (dispatch, getState) => {
		try {
			const user = await db
				.collection('users')
				.doc(uid)
				.get()

			dispatch({ type: LOGIN, payload: user.data() })
		} catch (e) {
			alert(e)
		}
	}
}

//SignUp button actions
export const signup = () => {
	return async (dispatch, getState) => {
		const { username, email, password,name,icno ,contact, gender  } = getState().user

		try {
			const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
			if (response.user.uid) {
				const user = {
					uid: response.user.uid,
					username: username,
					email: email,
					password: password,
					name: name,
					icno: icno,
					contact: contact,
					gender: gender,
				
				}

				db.collection('users')
					.doc(response.user.uid)
					.set(user)

				dispatch({ type: SIGNUP, payload: user })
			}
		} catch (error) {
			if (email == null && password ==null)
			{alert('Please fill in your email and password')}
			else if (email == null)
			{alert('Please fill in your email')}
			else if (password == null)
			{alert('Please fill in your password')}
		}
	}
}
