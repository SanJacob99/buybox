import { ISerchContext } from '@/interface/searchContext'
import { createContext } from 'react'

export const userContext = createContext<ISerchContext | {}>({ slider: false })
