import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
    apiVersion: "2023-08-04",
    dataset: "production",
    projectId: "6vj92eqt",
    token:"skyGJB3S99hwOQ1lrdZrNh00wI3lW4r8yA3bxXY8BYeQgbMcDqxyAlziP8NzOtbXe5cgGdUUombRuuWSZ0E1RIkBL7hluv8dHvKbjni1Ee0H5VZtcs80pvFjTQi9yHByKuWzERziMEvs8ABV4PPEYMnzI85lKnPylu86MXAIobZwa10EcPC0",
    useCdn: true,
})