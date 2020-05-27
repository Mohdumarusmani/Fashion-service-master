import {Router} from 'express';

export type Route = (router?: Router) => void;
export type Connect = (callback: any) => void