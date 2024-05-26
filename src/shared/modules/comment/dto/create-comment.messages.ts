export const CreateCommentMessages = {
  description: {
    invalidFormat: 'description is required',
    lengthField: 'min length is 5, max is 2024'
  },
  authorId: {
    invalidFormat: 'authorId field must be a valid id'
  },
  offerId: {
    invalidFormat: 'offerId field must be a valid id'
  },
} as const;
