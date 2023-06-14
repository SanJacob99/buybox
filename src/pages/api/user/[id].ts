/* eslint-disable import/no-anonymous-default-export */
import { dbConnect } from '@/utils/mongo'
import User from '../../../models/user'
import { NextApiRequest, NextApiResponse } from 'next'

type Data = any

dbConnect()

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const {
    method,
    body,
    query: { id },
  } = req

  switch (method) {
    case 'GET':
      try {
        const user = await User.findById(id)
        if (!user) return res.status(404).json({ msg: 'User Not Found' })
        return res.status(200).json(user)
      } catch (error: any) {
        return res.status(500).json({ msg: error.message })
      }
    case 'PUT':
      try {
        const user = await User.findByIdAndUpdate(id, body, { new: true })
        if (!user) return res.status(404).json({ msg: 'User Not Found' })
        return res.status(200).json(user)
      } catch (error: any) {
        return res.status(500).json({ msg: error.message })
      }
    case 'DELETE':
      try {
        const user = await User.findByIdAndDelete(id)
        if (!user) return res.status(404).json({ msg: 'User Not Found' })
        return res.status(200).json(user)
      } catch (error: any) {
        return res.status(500).json({ msg: error.message })
      }

    default:
      return res.status(400).json('Methon Unallowed')
  }
}
