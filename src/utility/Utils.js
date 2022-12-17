import { DefaultRoute } from '@src/router/routes'

// ** Checks if an object is empty (return boolean)
export const isObjEmpty = obj => Object.keys(obj).length === 0


/**
 * Return if user is logged in
 */
export const isUserLoggedIn = () => localStorage.getItem('userData')
export const getUserData = () => JSON.parse(localStorage.getItem('userData'))


export const getHomeRouteForLoggedInUser = userRole => {
	if (userRole === 'admin') return DefaultRoute
	if (userRole === 'client') return '/profile'
	return '/login'
}


export const arrayPagination = (arr, limit = 1) => {
		
	let arrClone = arr 

	if (arrClone.length === 0) { return [] }
	if (limit == 0) return []

	let pagination = []
	
	while (true) {
		if (arrClone.length === 0) {
			break;
		}

		if (arrClone.length < limit) {
			pagination.unshift(arrClone)
			break;
		}
		pagination.unshift(arrClone.splice(0, limit))

	}

	return pagination
}