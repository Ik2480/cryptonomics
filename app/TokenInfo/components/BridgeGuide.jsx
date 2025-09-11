"use client";

export default function BridgeGuide() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#66B2FF] to-[#00FFAA]">
        Bridge $BOOZ to Algorand
      </h2>
      <p className="text-gray-300 mb-4">
        To earn Number Generator rewards, bridge $BOOZ to Algorand using a
        cross-chain bridge.
      </p>
      <ol className="list-decimal pl-6 text-gray-300 space-y-3">
        <li>Connect your Solana wallet (Phantom/Solflare) to the bridge.</li>
        <li>Select Algorand as the destination chain.</li>
        <li>Confirm the transaction and wait for bridging to complete.</li>
        <li>Check your Algorand wallet for $BOOZ tokens.</li>
      </ol>
    </section>
  );
}
