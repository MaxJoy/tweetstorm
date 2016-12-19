import { createSuperstream, createStateStream } from 'omnistream'

export const input$ = (superstream) => { 
  return superstream.filterForActionTypes(['UPDATE_INPUT', 'KEYWORD_SUBMITTED'])
}