import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import store, { RootState } from '../../store';

export const usePostSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useLikesSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useUserSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useCategorySelector: TypedUseSelectorHook<RootState> = useSelector;
export const usePostsByCategory: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
