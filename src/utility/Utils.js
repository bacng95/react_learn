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

export const timeAgo = time => {

	switch (typeof time) {
		case 'number':
			break;
		case 'string':
			time = +new Date(time);
			break;
		case 'object':
			if (time.constructor === Date) time = time.getTime();
			break;
		default:
			time = +new Date();
	}
	var time_formats = [
		[60, 'giây', 1], // 60
		[120, '1 phút trước', '1 phút kể từ bây giờ'], // 60*2
		[3600, 'phút', 60], // 60*60, 60
		[7200, '1 giờ trước', '1 giờ kể từ bây giờ'], // 60*60*2
		[86400, 'giờ', 3600], // 60*60*24, 60*60
		[172800, 'Hôm qua', 'Tomorrow'], // 60*60*24*2
		[604800, 'ngày', 86400], // 60*60*24*7, 60*60*24
		[1209600, 'Tuần trước', 'Next week'], // 60*60*24*7*4*2
		[2419200, 'tuần', 604800], // 60*60*24*7*4, 60*60*24*7
		[4838400, 'Tháng trước', 'Next month'], // 60*60*24*7*4*2
		[29030400, 'tháng', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
		[58060800, 'Năm trước', 'Next year'], // 60*60*24*7*4*12*2
		[2903040000, 'năm', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
		[5806080000, 'Thế kỷ trước', 'Next century'], // 60*60*24*7*4*12*100*2
		[58060800000, 'thế kỉ', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
	];
	var seconds = (+new Date() - time) / 1000,
		token = 'trước',
		list_choice = 1;

	if (seconds == 0) {
		return 'vừa xong'
	}
	if (seconds < 0) {
		seconds = Math.abs(seconds);
		token = 'từ giờ';
		list_choice = 2;
	}
	var i = 0,
		format;
	while (format = time_formats[i++])
		if (seconds < format[0]) {
			if (typeof format[2] == 'string')
				return format[list_choice];
			else
				return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
		}
	return time;
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