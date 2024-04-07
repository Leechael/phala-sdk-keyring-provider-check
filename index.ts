import { KeyringPairProvider, getClient } from '@phala/sdk'

async function main() {
  const client = await getClient({
    transport: 'wss://poc6.phala.network/ws',
  })
  const provider = await KeyringPairProvider.createFromSURI(client.api, '//Alice')
  const balance = await client.getClusterBalance(provider.address)
  console.log('balance', balance)
}

main().then(() => {
  process.exit(0)
}).catch((error) => {
  console.error(error)
  process.exit(-1)
})
