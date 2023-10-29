import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, SneakerDispatch } from "../redux/shoppingCart/store"

export const useSneakerDispatch: () => SneakerDispatch = useDispatch
export const useSneakerSelector: TypedUseSelectorHook<RootState> = useSelector