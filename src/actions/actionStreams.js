import { createSuperstream, createStateStream } from 'omnistream'

export const input$ = (superstream) => {
  return superstream.filterForActionTypes(['UPDATE_INPUT'])
}

export const tweet$ = (superstream) => {
  return superstream.filterForActionTypes(['NEW_TWEET'])
}
