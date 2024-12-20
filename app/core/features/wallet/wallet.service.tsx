import { BrowserProvider, JsonRpcSigner } from "ethers";
import { v4 } from "uuid";

declare global {
  interface Window {
    ethereum: any;
  }
}

const connect = async (signer: JsonRpcSigner) => {
  const address = await signer.getAddress();

  const nonce = v4();
  const signature = await signer.signMessage(nonce);
  return { address, signature, nonce };
};

export const connectMetamask = async () => {
  if (!window.ethereum) {
    console.error("Please install MetaMask");
    return { error: "MetaMask not found" };
  }

  const provider = new BrowserProvider(window.ethereum);

  try {
    await provider.send("eth_requestAccounts", []);

    const signer = await provider.getSigner();
    const { address } = await connect(signer);

    return { address };
  } catch (error: any) {
    console.error("Error connecting to MetaMask:", error);
    return { error: error.message };
  }
};

export const signMessage = async (
  address: string,
  message: string
): Promise<string> => {
  if (!window.ethereum) {
    throw new Error("MetaMask not found");
  }

  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner(address);
  const signature = await signer.signMessage(message);
  return signature;
};

export const requestNetworkSwitch = async ({
  chainId,
  rpcUrl,
  chainName,
  explorerUrl,
  currency,
}: {
  chainId: string | number;
  rpcUrl: string;
  chainName: string;
  currency: string;
  explorerUrl?: string;
}) => {
  if (!window.ethereum) return;

  const hexChainId = "0x" + Number(chainId).toString(16);

  try {
    // First try to switch to the network
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: hexChainId }],
    });
  } catch (error: any) {
    // If the error code indicates the chain hasn't been added yet
    if (error.code === 4902) {
      try {
        // Add the network
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: hexChainId,
              rpcUrls: [rpcUrl],
              chainName: chainName,
              nativeCurrency: {
                name: currency,
                symbol: currency,
                decimals: 18,
              },
              blockExplorerUrls: explorerUrl ? [explorerUrl] : [],
            },
          ],
        });
      } catch (addError) {
        console.error("Error adding the network:", addError);
        throw addError;
      }
    } else {
      console.error("Error switching network:", error);
      throw error;
    }
  }
};