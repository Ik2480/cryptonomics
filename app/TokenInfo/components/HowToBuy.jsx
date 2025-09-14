"use client";

// HowToBuy with Dashboard A theme applied
export default function HowToBuy() {
  return (
    <section className="px-6 py-12 bg-[#0D1117] text-[#E6E6E6] rounded-lg shadow-lg border border-[#00FFFF]/20">
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#66B2FF]">
        How to Buy $BOOZ
      </h2>
      <ol className="list-decimal pl-6 text-[#E6E6E6]/80 space-y-3">
        <li>Install Phantom or Solflare wallet (browser/mobile).</li>
        <li>Fund your wallet with SOL (buy on CEX or bridge).</li>
        <li>
          Swap on{' '}
          <a
            href="https://raydium.io/swap/"
            target="_blank"
            className="text-[#00FFFF] hover:underline"
          >
            Raydium
          </a>{' '}
          or{' '}
          <a
            href="https://jup.ag/swap/SOL-BOOZ"
            target="_blank"
            className="text-[#00FFFF] hover:underline"
          >
            Jupiter
          </a>
          .
        </li>
        <li>Add BOOZ token to your wallet using the contract address.</li>
      </ol>
    </section>
  );
}