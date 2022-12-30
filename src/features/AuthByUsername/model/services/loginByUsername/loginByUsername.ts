import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/locatstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameData {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameData, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { dispatch, extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.post<User>('/login', authData);
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            extra.navigate('/profile');

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
