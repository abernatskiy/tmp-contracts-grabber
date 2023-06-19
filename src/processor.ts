import {lookupArchive} from '@subsquid/archive-registry'
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'
import {Store} from '@subsquid/typeorm-store'

export const processor = new EvmBatchProcessor()
    .setDataSource({
        archive: lookupArchive('eth-mainnet'),
    })
    .setFields({
        trace: {
            createResultAddress: true,
//            createResultCode: true,
        },
    })
    .addTrace({
        type: ['create'],
        transaction: true,
    })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Context = DataHandlerContext<Store, Fields>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
