# Trust Wallet Token Images
This repository (repo) provides token images for Trust Wallet mobile clients iOS and Android
<center><img src='https://raw.githubusercontent.com/TrustWallet/tokens/master/tutorial/trust-wallet.png'></center>

Directory of token images for ERC20 contracts

# Add custom image:
## Requirements
- format: `png`
- name of the file in lowercase fromat: `contract_address.png`. Ex: `0xd26114cd6ee289accf82350c8d8487fedb8a0c07.png`
- size: minimum `256px by 256px`
- background: preferably transparant

## How To Add
1) Press on `Fork` in the top right corner, wait for process to complite
2) Navigate to `tokens` folder on your own fork.
3) Press on `Upload File` in the top right corner.
4) Choose file, make sure it follows requirments above
5) Press on `Commitchanges`
6) Press on `New pull request` on your own fork page and submit it by pressing on `Create pull request`!
7) Add short description including name and token symbol in a header field
8) Press on `Create pull request`
9) Once tests complited and verifies your image follows requirments maintainer will merge it and in 5-10 minutes token became searchable in Trust Wallet

### Youtube: Upload ERC20 Token Image to Trust Wallet:

<center>
<video alignwidth="720" height="480" controls>
  <source src="./tutorial/upload-token-image.mov" type="video/mp4">
</video>
</center>

[![Upload ERC20 Token Image to Trust Wallet]
(https://img.youtube.com/vi/EFrJT_b11m4/0.jpg)](https://www.youtube.com/watch?v=EFrJT_b11m4)


## How to Use It? (For Developers)
Base URL:
```js
https://raw.githubusercontent.com/TrustWallet/tokens/master/images/<contract_address>.png
```
Example:
```js
https://trustwalletapp.com/images/tokens/0x006bea43baa3f7a6f765f14f10a1a1b08334ef45.png
https://raw.githubusercontent.com/TrustWallet/tokens/master/tokens/0x006bea43baa3f7a6f765f14f10a1a1b08334ef45.png
```

## Used in Applications
- [Trust Wallet](https://trustwalletapp.com) - iOS and Android 
- [0x Tracker](https://0xtracker.com) - The 0x Protocol Trade Explorer and news aggregator.

