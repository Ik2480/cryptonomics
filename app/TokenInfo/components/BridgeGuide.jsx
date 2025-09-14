"use client";

export default function BridgeGuide() {
  return (
    <div className="flex-1 bg-[#161B22] rounded-lg shadow-lg border border-[#00FFFF]/20 p-4">
      <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#66B2FF] mb-1">
        Bridge $BOOZ to Algorand
      </h3>
      <p className="text-[#E6E6E6]/80 text-sm mb-2">
        To earn Number Generator rewards, bridge $BOOZ to Algorand using a cross-chain bridge.
      </p>
      <ol className="list-decimal pl-6 space-y-1 text-[#E6E6E6]/80 text-sm">
        <li>Connect your Solana wallet (Phantom/Solflare) to the bridge.</li>
        <li>Select Algorand as the destination chain.</li>
        <li>Confirm the transaction and wait for bridging to complete.</li>
        <li>Check your Algorand wallet for $BOOZ tokens.</li>
      </ol>
    </div>
  );
}
