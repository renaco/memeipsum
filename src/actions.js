import { HttpError } from 'wasp/server'

export const createCharacter = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };
  return context.entities.Character.create({
    data: {
      name: args.name,
      imagePath: args.imagePath,
      user: { connect: { id: context.user.id } }
    }
  });
}

export const createMessage = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Message.create({
    data: {
      content: args.content,
      character: { connect: { id: args.characterId } },
      user: { connect: { id: context.user.id } }
    }
  });
}

export const createText = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };
  return context.entities.Text.create({
    data: {
      content: args.content,
      user: { connect: { id: context.user.id } }
    }
  });
}

export const createQuota = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };
  return context.entities.Quota.create({
    data: {
      content: args.content,
      user: { connect: { id: context.user.id } }
    }
  });
}