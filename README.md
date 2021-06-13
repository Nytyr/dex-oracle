# DEX Oracle

Generic price oracle for DEXes based on Uniswap based on the 1inch contracts.

## Methods

### getRate

#### Arguments

**srcToken**: Source token address

**dstToken**: Destination token address

**connector**: As some tokens do not have direct liquidity pairs oracle uses connector tokes to find prices for such tokens. Use 0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF as argumento to ignore the connector.

**factory**: Address of the DEX Factory

**initcodeHash**: Init code hash of the dex.


## Sample call

Get XRP/bUSD price on pancakeswap.

DexOracle.getRate('0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe', '0xe9e7cea3dedca5984780bafc599bd69add087d56', '0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF', '0xca143ce32fe78f1f7019d7d551a6402fc5350c73', '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5');

## Supported Deployments

### BSC Mainnet

#### [0xd63e1216be567d706737dd5c2638079ef20d0bf8](https://bscscan.com/address/0xd63e1216be567d706737dd5c2638079ef20d0bf8)
