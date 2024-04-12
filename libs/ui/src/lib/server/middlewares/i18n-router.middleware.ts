import { i18nRouter } from 'next-i18n-router';
import { NextRequest } from 'next/server';
import { i18nConfig } from '../configs';
import { MiddlewareFactory } from './stack-handler';

export const i18nRouterMiddleware: MiddlewareFactory = () => {
  return async (request: NextRequest) => {
    return i18nRouter(request, i18nConfig);
  };
};
