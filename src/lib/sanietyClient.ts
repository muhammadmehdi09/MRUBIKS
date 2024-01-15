import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
    apiVersion: "2023-08-04",
    dataset: "production",
    projectId: "6vj92eqt",
    token: "skPq98fptRxYCg03pBma7l9tHApNblg5VfoyZssNRfxXFDcspV6MakOLu070dioZ2SJyWvvRmplfM0FrqndrHSBnfoqOuaiUqG6RBRNYetgiLJYZaDVY4FxNLYZ6my7BCKMOyi5V7Euu9jkGwQJXOzq2NPmxy6fY86Ift4yGxlUMbnoiuL86",
    useCdn: true,
})
