import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowDown, 
  Rocket, 
  Users, 
  TrendingUp, 
  Shield, 
  Wallet, 
  Search, 
  Copy, 
  ChevronDown,
  ArrowUp,
  Twitter,
  MessageCircle,
  Send
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll for back-to-top button
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowBackToTop(window.scrollY > 500);
    });
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyContractAddress = () => {
    navigator.clipboard.writeText("GREED_CONTRACT_ADDRESS_HERE");
    toast.success("Contract address copied to clipboard!");
  };

  const faqs = [
    {
      question: "What is $GREED?",
      answer: "$GREED is a community-driven meme token on Solana inspired by Wall Street greed but built for degens. It's pure pump potential with viral vibes - no BS utilities, just gains."
    },
    {
      question: "Is this a rug pull?",
      answer: "Absolutely not! We have 100% fair launch on Pump.fun bonding curve, zero team tokens, and LP will be burned on Raydium migration. Everything is transparent and community-driven."
    },
    {
      question: "How do I buy $GREED?",
      answer: "Get a Solana wallet like Phantom, buy SOL on an exchange, visit Pump.fun, search for $GREED, and buy via the bonding curve. It's that simple!"
    },
    {
      question: "What makes $GREED different?",
      answer: "We're unapologetically greedy and proud of it! Strong community, fair launch, no team tokens, viral marketing, and a roadmap focused on global domination. Join the Greed Army!"
    },
    {
      question: "When will $GREED moon?",
      answer: "We're already on our way! With our community-driven approach, viral marketing campaigns, and upcoming CEX listings, the moon is just the first stop. 🚀"
    },
    {
      question: "Is the liquidity locked?",
      answer: "LP will be burned on Raydium migration, ensuring permanent liquidity and no rug pulls. Your investment is safe with the Greed Army!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#001a00]"></div>
        
        {/* Money rain animation effect */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-primary text-2xl animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              $
            </div>
          ))}
        </div>

        <div className="container relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Wolf Logo */}
            <div className="mb-8 animate-fade-in">
              <img 
                src="/wolf-hero.png" 
                alt="GREED Wolf" 
                className="w-64 h-64 mx-auto drop-shadow-[0_0_50px_rgba(0,255,0,0.5)]"
              />
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-black mb-4 text-primary animate-fade-in-up">
              Embrace the Greed: $GREED
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-3xl mb-8 text-foreground animate-fade-in-up animation-delay-200">
              The Meme Coin That Rewards Your Ambition!
            </p>

            {/* CTA Button */}
            <div className="mb-8 animate-fade-in-up animation-delay-400">
              <Button 
                size="lg" 
                className="text-xl px-12 py-6 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,0,0.5)]"
                onClick={() => window.open('https://pump.fun', '_blank')}
              >
                <Rocket className="mr-2 h-6 w-6" />
                Buy on Pump.fun
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mb-12 animate-fade-in-up animation-delay-600">
              <button 
                onClick={() => toast.info("Twitter link coming soon!")}
                className="text-primary hover:text-primary/80 transition-colors p-2"
                aria-label="Twitter"
              >
                <Twitter className="w-8 h-8" />
              </button>
              <button 
                onClick={() => toast.info("Telegram link coming soon!")}
                className="text-primary hover:text-primary/80 transition-colors p-2"
                aria-label="Telegram"
              >
                <Send className="w-8 h-8" />
              </button>
              <button 
                onClick={() => toast.info("Discord link coming soon!")}
                className="text-primary hover:text-primary/80 transition-colors p-2"
                aria-label="Discord"
              >
                <MessageCircle className="w-8 h-8" />
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <ArrowDown className="w-8 h-8 mx-auto text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-primary">
                What is GREED Inc.?
              </h2>
              <p className="text-lg mb-6 text-foreground">
                GREED Inc. turns your FOMO into fortune. We're a community-driven meme token inspired by Wall Street greed but built for degens. No BS utilities, just pure pump potential and viral vibes.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 text-primary flex-shrink-0 mt-1">
                    <TrendingUp className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Massive Gains Potential</h3>
                    <p className="text-muted-foreground">Built for the moon and beyond</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 text-primary flex-shrink-0 mt-1">
                    <Users className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Strong Community of Degens</h3>
                    <p className="text-muted-foreground">Join the Greed Army today</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 text-primary flex-shrink-0 mt-1">
                    <Rocket className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Fair Launch on Pump.fun</h3>
                    <p className="text-muted-foreground">100% transparent and community-driven</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 text-primary flex-shrink-0 mt-1">
                    <Shield className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">No Team Tokens, LP Burned</h3>
                    <p className="text-muted-foreground">Safe and secure for all holders</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <img 
                src="/greedy-meme.png" 
                alt="Greedy Wolf Character" 
                className="w-full rounded-lg shadow-[0_0_50px_rgba(0,255,0,0.3)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#001a00]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-primary">
            Tokenomics
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card border-2 border-primary hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-black text-primary mb-2">1B</div>
                <div className="text-xl font-bold mb-2">Total Supply</div>
                <div className="text-muted-foreground">1,000,000,000 $GREED</div>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-primary hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-black text-primary mb-2">100%</div>
                <div className="text-xl font-bold mb-2">Fair Launch</div>
                <div className="text-muted-foreground">Pump.fun bonding curve</div>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-primary hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-black text-primary mb-2">0%</div>
                <div className="text-xl font-bold mb-2">Taxes</div>
                <div className="text-muted-foreground">No buy/sell tax</div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-2 border-primary max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-1">Contract Address</div>
                  <div className="font-mono text-sm break-all">GREED_CONTRACT_ADDRESS_HERE</div>
                </div>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={copyContractAddress}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-black">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-primary">
            Roadmap to Global Domination
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Phase 1 */}
            <div className="flex gap-6 animate-fade-in-up">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  1
                </div>
                <div className="w-1 flex-1 bg-primary/30 mt-2"></div>
              </div>
              <Card className="flex-1 bg-card border-primary">
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-bold mb-2">Q4 2025</div>
                  <h3 className="text-2xl font-bold mb-3">Launch Phase</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✅ Launch on Pump.fun</li>
                    <li>✅ Build community hype via X and Telegram</li>
                    <li>✅ Initial marketing push</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Phase 2 */}
            <div className="flex gap-6 animate-fade-in-up animation-delay-200">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  2
                </div>
                <div className="w-1 flex-1 bg-primary/30 mt-2"></div>
              </div>
              <Card className="flex-1 bg-card border-primary">
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-bold mb-2">Q1 2026</div>
                  <h3 className="text-2xl font-bold mb-3">Expansion Phase</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>🚀 Hit Raydium DEX</li>
                    <li>📢 Viral marketing campaigns</li>
                    <li>🤝 Influencer partnerships</li>
                    <li>🎉 Community events</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Phase 3 */}
            <div className="flex gap-6 animate-fade-in-up animation-delay-400">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  3
                </div>
                <div className="w-1 flex-1 bg-primary/30 mt-2"></div>
              </div>
              <Card className="flex-1 bg-card border-primary">
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-bold mb-2">Q2 2026</div>
                  <h3 className="text-2xl font-bold mb-3">Growth Phase</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>💎 CEX listings (target exchanges)</li>
                    <li>🎨 NFT drops for holders</li>
                    <li>👕 Greed-themed merchandise</li>
                    <li>🤝 Partnerships and collaborations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Phase 4 */}
            <div className="flex gap-6 animate-fade-in-up animation-delay-600">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  4
                </div>
              </div>
              <Card className="flex-1 bg-card border-primary">
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-bold mb-2">Ongoing</div>
                  <h3 className="text-2xl font-bold mb-3">Domination Phase</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>🌍 Global domination</li>
                    <li>🗳️ Community governance implementation</li>
                    <li>💚 Charity for 'greedy causes' (financial literacy)</li>
                    <li>🔥 Continuous innovation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="py-20 bg-gradient-to-b from-[#001a00] to-black">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-primary">
            How to Buy $GREED
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <Card className="bg-card border-primary text-center hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 text-primary">
                    <Wallet className="w-full h-full" />
                  </div>
                </div>
                <div className="text-primary font-bold text-xl mb-2">1</div>
                <h3 className="font-bold mb-2">Get a Wallet</h3>
                <p className="text-sm text-muted-foreground">Download Phantom or Solflare wallet</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary text-center hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 text-primary">
                    <TrendingUp className="w-full h-full" />
                  </div>
                </div>
                <div className="text-primary font-bold text-xl mb-2">2</div>
                <h3 className="font-bold mb-2">Buy SOL</h3>
                <p className="text-sm text-muted-foreground">Purchase SOL on Coinbase or Binance</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary text-center hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 text-primary">
                    <Search className="w-full h-full" />
                  </div>
                </div>
                <div className="text-primary font-bold text-xl mb-2">3</div>
                <h3 className="font-bold mb-2">Visit Pump.fun</h3>
                <p className="text-sm text-muted-foreground">Go to Pump.fun and search $GREED</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary text-center hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 text-primary">
                    <Rocket className="w-full h-full" />
                  </div>
                </div>
                <div className="text-primary font-bold text-xl mb-2">4</div>
                <h3 className="font-bold mb-2">Buy $GREED</h3>
                <p className="text-sm text-muted-foreground">Purchase via bonding curve</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="text-xl px-12 py-6 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://pump.fun', '_blank')}
            >
              Buy Now on Pump.fun
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-black">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-primary">
            Join the Greed Army
          </h2>
          <p className="text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
            Be part of the most ambitious meme coin community on Solana. Share memes, make gains, and embrace the greed!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => toast.info("Twitter link coming soon!")}
            >
              <Twitter className="mr-2 h-5 w-5" />
              Follow on X
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => toast.info("Telegram link coming soon!")}
            >
              <Send className="mr-2 h-5 w-5" />
              Join Telegram
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => toast.info("Discord link coming soon!")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Join Discord
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#001a00]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-primary">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="bg-card border-primary cursor-pointer hover:shadow-[0_0_20px_rgba(0,255,0,0.2)] transition-all duration-300"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">{faq.question}</h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-primary transition-transform duration-300 ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {expandedFaq === index && (
                    <p className="mt-4 text-muted-foreground animate-fade-in">
                      {faq.answer}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-primary py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-primary">GREED Inc.</h3>
              <p className="text-sm text-muted-foreground">
                The ultimate meme coin for degens on Solana.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#tokenomics" className="hover:text-primary transition-colors">Tokenomics</a></li>
                <li><a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a></li>
                <li><a href="#how-to-buy" className="hover:text-primary transition-colors">How to Buy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Twitter / X</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary/30 pt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              © 2025 GREED Inc. – All Rights Reserved
            </p>
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
              <strong>Disclaimer:</strong> This is a meme coin for entertainment purposes only. Invest at your own risk. 
              DYOR (Do Your Own Research). Cryptocurrency investments are highly volatile and risky.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-50 animate-fade-in"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
