export enum entityType {
  USER = 'User',
  BROTH = 'Broth'
}

export enum methodType {
  CREATED = 'created',
  UPDATED = 'updated',
  DELETED = 'deleted'
}

// USERS
export const USER_CREATED_SUCESSFULLY = 'User created successfuly'
export const USER_UPDATED_SUCESSFULLY = 'User updated successfuly'
export const USER_DELETED_SUCESSFULLY = 'User deleted successfuly'

// BROTH
export const genericSuccessfulyMessage = (
  entity: entityType,
  method: methodType
): string => {
  return `${entity} ${method} successfuly`
}
