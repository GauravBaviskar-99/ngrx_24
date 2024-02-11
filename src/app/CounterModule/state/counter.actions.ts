import { createAction, props } from "@ngrx/store";

export const Increment = createAction('Increment');
export const Decrement = createAction('Decrement');
export const Reset = createAction('Reset');

export const CustomIncrement = createAction('cIncrement',
    props<{ value: number }>())