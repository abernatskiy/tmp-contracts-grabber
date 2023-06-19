import {TypeormDatabase} from '@subsquid/typeorm-store'
import {CreatedContract} from './model'
import {processor} from './processor'

processor.run(new TypeormDatabase({supportHotBlocks: false}), async (ctx) => {})
