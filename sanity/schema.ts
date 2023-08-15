import { type SchemaTypeDefinition } from 'sanity'
import { Moyu } from './Moyu'
import { Gan} from './Gan'
import { Qiyi } from './Qiyi'
import { Company } from './company'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Qiyi, Moyu, Gan, Company],
}
