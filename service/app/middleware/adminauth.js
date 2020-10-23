'use strict';

module.exports = () => {
  return async function adminauth(ctx, next) {
    console.log(ctx);
    // ctx.session.openId获取不到
    if (ctx.session) {
      await next();
    } else {
      ctx.body = { code: 43005 };
    }
  };
};
