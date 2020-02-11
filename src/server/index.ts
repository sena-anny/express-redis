import Express from 'express'
import config from './config'
import session from './session'
import webpack from './webpack'
import routes from './routes'
import error from './error'
import listen from './listen'

const app = Express()

config(app) //Expressサーバーの基本設定
session(app) //Session middlewareの設定
webpack(app) //webpack middlewareの設定
routes(app) //ルートハンドラー記述
error(app) //エラーログなど設定
listen(app) //サーバーを起動する

