export default function Home() {
  const faqs = [
    {
      q: 'How does prompt versioning work?',
      a: 'Every prompt edit is saved as a new version with a diff view — just like Git commits. Roll back to any previous version instantly.'
    },
    {
      q: 'Can I run A/B tests across prompt versions?',
      a: 'Yes. Split traffic between any two prompt versions, collect response quality scores and latency metrics, and see a winner with statistical confidence.'
    },
    {
      q: 'Which LLM providers are supported?',
      a: 'OpenAI, Anthropic, Mistral, and any OpenAI-compatible endpoint. Bring your own API keys — we never store them.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Git for AI Prompts
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Version control your prompts.<br />
          <span className="text-[#58a6ff]">Ship better AI, faster.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Track every prompt change, run A/B tests, and see exactly which edits improve output quality and cut response times. Built for AI teams who ship.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start for $39/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn more
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '⎇', title: 'Prompt Versioning', desc: 'Full diff history for every prompt. Branch, compare, and roll back in one click.' },
            { icon: '⚡', title: 'A/B Testing', desc: 'Split traffic between versions and measure quality scores and latency side-by-side.' },
            { icon: '📊', title: 'Performance Analytics', desc: 'Charts for response time, token usage, and output quality across all your prompts.' }
          ].map((f) => (
            <div key={f.title} className="p-5 rounded-xl bg-[#161b22] border border-[#30363d]">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="rounded-2xl bg-[#161b22] border border-[#58a6ff] p-8 text-center">
          <div className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited prompt versions',
              'A/B testing with confidence scores',
              'Response time & quality analytics',
              'All LLM providers supported',
              'Team collaboration (up to 5 seats)',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-5 rounded-xl bg-[#161b22] border border-[#30363d]">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        © {new Date().getFullYear()} PromptDiff. All rights reserved.
      </footer>
    </main>
  )
}
