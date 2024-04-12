import {
  i18nRouterMiddleware,
  stackMiddlewares,
} from '@ui/server';

const middlewares = [i18nRouterMiddleware];
export default stackMiddlewares(middlewares);

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
