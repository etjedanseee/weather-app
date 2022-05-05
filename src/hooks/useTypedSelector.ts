import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootStateType } from '../redux/reducers/rootReducer';

export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector