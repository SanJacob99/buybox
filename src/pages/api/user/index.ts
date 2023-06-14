// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '@/utils/mongo'
import User from '../../../models/user'

type Data = any

dbConnect()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, body } = req
  switch (method) {
    case 'GET':
      try {
        const users = await User.find()
        return res.status(200).json(users)
      } catch (error) {
        return res.status(501).json(error)
      }

    case 'POST':
      try {
        const newUser = new User(body)
        await newUser.save()
        return res.status(200).json(newUser)
      } catch (error) {
        return res.status(501).json(error)
      }

    default:
      return res.status(400).json({ msg: 'Methon Unallowed' })
  }
}
