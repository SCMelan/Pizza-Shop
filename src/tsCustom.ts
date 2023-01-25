import { createContext } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// interface searchContextType {
//     searchValue:number,
//     setSearchValue: ()=>void,
// }

// export const ISearchContextType = createContext<searchContextType>