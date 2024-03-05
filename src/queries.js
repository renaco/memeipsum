import { HttpError } from 'wasp/server'

export const getCharacters = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }
  return context.entities.Character.findMany({
    where: { userId: context.user.id }
  })
}

export const getMessages = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  return context.entities.Message.findMany({
    where: {
      userId: context.user.id
    }
  })
}

export const getTexts = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }
  return context.entities.Text.findMany({
    where: { userId: context.user.id }
  })
}

export const getQuotas = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  return context.entities.Quota.findMany({
    where: {
      userId: context.user.id
    }
  })
}