import React from 'react';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ThemeToggle />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-950 pt-20 pb-32 px-6 overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Stop Letting Tasks<br />
              <span className="text-blue-600 dark:text-blue-400">Slip Through the Cracks</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              WorkRepo AI helps operations teams track tickets, automate follow-ups, and get visibility into what actually matters—so nothing falls behind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 dark:bg-blue-500 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl"
              >
                Book a Demo
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">12hrs</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Saved per week</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">94%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Faster follow-ups</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">0</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Missed tickets</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Team visibility</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="pt-40 pb-20 px-6 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-8">
            Trusted by operations teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400 dark:text-gray-500">Agency Co.</div>
            <div className="text-2xl font-bold text-gray-400 dark:text-gray-500">OpsTech</div>
            <div className="text-2xl font-bold text-gray-400 dark:text-gray-500">FlowOps</div>
            <div className="text-2xl font-bold text-gray-400 dark:text-gray-500">TeamSync</div>
            <div className="text-2xl font-bold text-gray-400 dark:text-gray-500">AutoFlow</div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Your team is drowning in tickets
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl">✗</span>
                  Follow-ups get lost in email threads and Slack messages
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl">✗</span>
                  No clear ownership—everyone assumes someone else is on it
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl">✗</span>
                  Managers have zero visibility into what&apos;s actually happening
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 text-2xl">✗</span>
                  Clients follow up before you do, making you look reactive
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                WorkRepo fixes that
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p className="flex items-start gap-3">
                  <span className="text-green-500 text-2xl">✓</span>
                  AI agent tracks every ticket and nudges the right person at the right time
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-green-500 text-2xl">✓</span>
                  Clear ownership and deadlines—no more &ldquo;I thought you had it&rdquo;
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-green-500 text-2xl">✓</span>
                  Real-time dashboards show what&apos;s blocked, what&apos;s overdue, and what&apos;s on track
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-green-500 text-2xl">✓</span>
                  Automated follow-ups keep you ahead of clients, not behind them
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Built for ops teams who move fast
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              No bloated CRM. No manual data entry. Just smart automation that gets out of your way.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl mb-6">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Smart Task Routing</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                AI assigns tasks to the right person based on workload, skill, and availability—no manual triage needed.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl mb-6">
                ⏰
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Automated Follow-Ups</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Set it once, forget it forever. WorkRepo pings the right people when tasks go stale or deadlines approach.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl mb-6">
                📊
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Real-Time Dashboards</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                See what&apos;s happening across your team in seconds. No more Slack check-ins or status meetings.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl mb-6">
                🔗
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Deep Integrations</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Connects to Slack, email, your CRM, and project tools. Works where your team already works.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl mb-6">
                🧠
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Context-Aware AI</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Learns your team&apos;s patterns and priorities, so it gets smarter over time—not dumber like a static workflow.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl mb-6">
                🔒
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Built for Security</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                SOC 2 compliant, encrypted at rest and in transit. Your data stays yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-900 text-white transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Up and running in 15 minutes
            </h2>
            <p className="text-xl text-blue-100 dark:text-blue-200">
              No complex setup. No training required. Just connect and go.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Connect Your Tools</h3>
              <p className="text-blue-100 dark:text-blue-200 leading-relaxed">
                Link Slack, email, and your CRM. WorkRepo pulls in existing tasks and starts watching.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Set Your Rules</h3>
              <p className="text-blue-100 dark:text-blue-200 leading-relaxed">
                Tell WorkRepo your priorities, deadlines, and escalation paths. It handles the rest automatically.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Let It Run</h3>
              <p className="text-blue-100 dark:text-blue-200 leading-relaxed">
                WorkRepo tracks, nudges, and updates in the background. You just see results on your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What ops teams are saying
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-1 mb-4 text-yellow-400 text-xl">
                ★★★★★
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                &ldquo;We went from missing 20% of follow-ups to zero. Clients actually comment on how responsive we are now.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  JM
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Jessica Martinez</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Operations Director, FlowOps</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-1 mb-4 text-yellow-400 text-xl">
                ★★★★★
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                &ldquo;The AI routing alone saves us 10 hours a week. No more Slack threads asking &lsquo;who&apos;s handling this?&rsquo;&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  RC
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Robert Chen</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Head of Ops, Agency Co.</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-1 mb-4 text-yellow-400 text-xl">
                ★★★★★
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                &ldquo;Finally, a tool that doesn&apos;t require a PhD to use. Our team was fully onboarded in one day.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  SP
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Sarah Patel</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">VP Operations, TeamSync</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            <details className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
              <summary className="text-xl font-semibold text-gray-900 dark:text-white cursor-pointer">
                How is this different from our existing project management tool?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                Most PM tools require constant manual updates and checking. WorkRepo is an AI agent that actively monitors, routes, and follows up on tasks automatically. It works alongside your existing tools, not as a replacement.
              </p>
            </details>
            <details className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
              <summary className="text-xl font-semibold text-gray-900 dark:text-white cursor-pointer">
                Does this integrate with our CRM and Slack?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                Yes. WorkRepo connects to Slack, email, HubSpot, Salesforce, Monday, Asana, and most major tools your team already uses. Setup takes about 15 minutes.
              </p>
            </details>
            <details className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
              <summary className="text-xl font-semibold text-gray-900 dark:text-white cursor-pointer">
                How long does onboarding take?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                Most teams are fully up and running within a day. We provide white-glove onboarding for enterprise customers.
              </p>
            </details>
            <details className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
              <summary className="text-xl font-semibold text-gray-900 dark:text-white cursor-pointer">
                Is our data secure?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                Absolutely. We&apos;re SOC 2 Type II certified, encrypt all data at rest and in transit, and never train AI models on your proprietary information.
              </p>
            </details>
            <details className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
              <summary className="text-xl font-semibold text-gray-900 dark:text-white cursor-pointer">
                What if we need custom workflows or integrations?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                We offer custom integrations and workflow design for enterprise customers. Our team will work with you to build exactly what you need.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section id="demo" className="py-32 px-6 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-black dark:to-gray-950 text-white transition-colors">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to stop missing follow-ups?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-12">
            Book a 15-minute demo and see how WorkRepo can save your team 10+ hours per week.
          </p>
          <form className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Work Email"
                required
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                placeholder="Company Name"
                required
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <input
              type="number"
              placeholder="Team Size (approx.)"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-blue-500 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all text-lg shadow-lg hover:shadow-xl"
            >
              Book a Demo
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              No credit card required. Get a personalized walkthrough in 15 minutes.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 dark:text-gray-500 py-12 px-6 transition-colors">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">WorkRepo AI</div>
          <p className="mb-6">AI-powered operations assistant for modern teams.</p>
          <div className="flex justify-center gap-8 text-sm">
            <a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Contact</a>
          </div>
          <p className="mt-8 text-sm">© 2026 WorkRepo AI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
