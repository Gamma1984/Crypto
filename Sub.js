
//graph init \
//--from - contract < CONTRACT_ADDRESS > \
//[--network < ETHEREUM_NETWORK >]\
//[--abi < FILE >]\
//<GITHUB_USER>/<SUBGRAPH_NAME> [<DIRECTORY>]

//Example:
specVersion: 0.0.1
description: Gravatar for Ethereum
repository: https://github.com/graphprotocol/example-subgraph
  schema:
  file: ./ schema.graphql
dataSources:
- kind: ethereum / contract
name: Gravity
network: mainnet
source:
address: '0x2E645469f354BB4F5c8a05B3b30A929361cf77eC'
abi: Gravity
startBlock: 6175244
mapping:
kind: ethereum / events
apiVersion: 0.0.1
language: wasm / assemblyscript
entities:
- Gravatar
abis:
- name: Gravity
file: ./ abis / Gravity.json
eventHandlers:
- event: NewGravatar(uint256, address, string, string)
handler: handleNewGravatar
  - event: UpdatedGravatar(uint256, address, string, string)
handler: handleUpdatedGravatar
callHandlers:
- function: createGravatar(string, string)
handler: handleCreateGravatar
blockHandlers:
- function: handleBlock
        - function: handleBlockWithCall
          filter:
kind: call
file: ./ src / mapping.ts
