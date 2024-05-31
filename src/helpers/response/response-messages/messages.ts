export enum entityType {
  USER = 'User',
  BROTH = 'Broth',
  PROTEIN = 'Protein'
}

export enum methodType {
  CREATED = 'created',
  UPDATED = 'updated',
  DELETED = 'deleted'
}

export const genericSuccessfulyMessage = (
  entity: entityType,
  method: methodType
): string => {
  return `${entity} ${method} successfuly`
}
