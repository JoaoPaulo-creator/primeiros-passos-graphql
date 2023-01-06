import path from 'path'

import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';


const typeArray = loadFilesSync(path.join(__dirname, 'modules', '**', '*.gql'))
const typeDefs = mergeTypeDefs(typeArray)


export default typeDefs