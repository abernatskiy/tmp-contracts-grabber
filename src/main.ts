import {TypeormDatabase} from '@subsquid/typeorm-store'
import {CreatedContract} from './model'
import {processor} from './processor'

processor.run(new TypeormDatabase({supportHotBlocks: false}), async (ctx) => {
    const contracts: Map<string, CreatedContract> = new Map()
    const addresses: Set<string> = new Set()
    for (let c of ctx.blocks) {
        for (let trc of c.traces) {
            if (trc.type === 'create' && trc.result?.address != null && trc.transaction?.hash !== undefined) {
                contracts.set(trc.result.address, new CreatedContract({id: trc.result.address})
/*
                    new CreatedContract({
                        id: `${trc.transaction.hash}-${trc.result.address}-${trc.transactionIndex}-${c.header.height}`,
                        block: c.header.height,
                        timestamp: new Date(c.header.timestamp),
                        address: trc.result.address,
//                        code: trc.result.code,
                        txHash: trc.transaction.hash,
                    })
*/
                )
            }
        }
    }
//    await ctx.store.insert(contracts)
    await ctx.store.upsert([...contracts.values()])
})
