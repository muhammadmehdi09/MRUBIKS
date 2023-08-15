import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
    apiVersion: "2023-08-04",
    dataset: "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token:"skX8GHZ3wmgBZyzMWz2PlSyzjLd39TVqgq2KWSyQxFZjFLLtklnVqs73mvou3Vfi0bZsC5v8i7tO0pGJiZj75Xbub6QPSIOcXMLkNcbfsHABxrQXKTiqZlpSbtDWJNogxFN3ryO3f9umNas1sS1MozS896uuVu5HDgV9YXnlGFA8n8slconF",
    useCdn: true,
})