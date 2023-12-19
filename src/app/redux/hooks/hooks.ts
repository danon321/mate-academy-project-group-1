import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

export const usePostSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useLikesSelector: TypedUseSelectorHook<RootState> = useSelector;
