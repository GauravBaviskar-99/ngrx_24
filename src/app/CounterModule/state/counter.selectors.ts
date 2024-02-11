import { createFeatureSelector } from "@ngrx/store";
import { counterState } from "./counter.state";


export const getCounter = createFeatureSelector<counterState>('counter')