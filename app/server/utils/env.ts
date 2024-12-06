import { env } from 'node:process'

export const getNodeEnv = () => env.NODE_ENV || 'development'

export const isDev = getNodeEnv() === 'development'
export const isProd = !isDev
