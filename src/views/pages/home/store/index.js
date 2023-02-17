// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '@src/libs/axios'

// import axios from 'axios';

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

export const getNovelUpdate = createAsyncThunk('homeNovel/novelUpdate', async () => {
	const response = await axios.get('/novel', {
		params: {
			type: 'update'
		}
	})
	return {
		data: response.data
	}
})

export const appHomeSlice = createSlice({
	name: 'appHome',
	initialState: {
		novelRecommend: [],
		novelUpdate: []
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getNovelRecommend.fulfilled, (state, action) => {
				state.novelRecommend = action.payload.data.data
			})
			.addCase(getNovelUpdate.fulfilled, (state, action) => {
				state.novelUpdate = action.payload.data
			})
	}
})

export const {  } = appHomeSlice.actions

export default appHomeSlice.reducer