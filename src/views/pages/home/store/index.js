// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// import axios from '@src/api/axiosIntance'

import axios from 'axios'

export const getNovelRecommend = createAsyncThunk('homeNovel/novelRecommend', async () => {
	const response = await axios.get('/novel', {
		params: {
			type: 'nomination'
		}
	})
	return {
		data: response.data
	}
})

export const appHomeSlice = createSlice({
	name: 'appHome',
	initialState: {
		novelRecommend: []
	},
	reducers: {},
	extraReducers: builder => {
	}
})

export const {  } = appHomeSlice.actions

export default appHomeSlice.reducer