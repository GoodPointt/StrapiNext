export const getFileUrl = (path) =>
  `${process.env.NEXT_PUBLIC_STRAPI_API_URL ?? ''}${path}`;
