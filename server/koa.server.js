const Koa = require('koa');
const mount = require('koa-mount')
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = 'Hello World1';
  next()
});
app.use(async ctx => {
  ctx.body += 'Hello World2';
});

app.listen(3343, () => {
  console.log('listen on port 3343')
});