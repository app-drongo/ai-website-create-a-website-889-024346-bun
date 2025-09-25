'use client';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Play,
  CheckCircle,
  Zap,
  Clock,
  Shield,
  BarChart3,
  Users,
  Star,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // Navigate to signup/onboarding
  };

  const handleSecondaryAction = () => {
    setIsModalOpen(true); // Open demo video modal
  };

  const handleBadgeAction = () => {
    router.push('/'); // Navigate to features section
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 size-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 size-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleBadgeAction}
              className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-pointer"
              data-action-type="badge-link"
            >
              <Zap className="size-4 mr-2" />
              New: Automated Payment Reminders & AI Insights
              <ArrowRight className="ml-2 size-4" />
            </button>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Invoice Smarter,
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Get Paid Faster
              </span>
              Every Time
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              The modern invoicing platform built for freelancers and small businesses. Create
              professional invoices, track payments, and manage your cash flow effortlessly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="group text-base px-8"
                onClick={handlePrimaryAction}
                data-action-type="primary-cta"
              >
                Start Invoicing Free
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-base px-8"
                onClick={handleSecondaryAction}
                data-action-type="secondary-cta"
              >
                <Play className="mr-2 size-5 transition-transform group-hover:scale-110" />
                See How It Works
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-secondary to-secondary/60 border-2 border-background" />
                </div>
                <span className="ml-2">
                  <Users className="inline size-4 mr-1" />
                  25,000+ businesses trust us
                </span>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
                <span className="ml-2">4.8/5 from 2,400+ reviews</span>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-muted">
              <Clock className="size-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">2x Faster Payments</h3>
                <p className="text-sm text-muted-foreground">
                  Get paid 65% faster with automated reminders
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-muted">
              <Shield className="size-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Bank-Level Security</h3>
                <p className="text-sm text-muted-foreground">
                  256-bit SSL encryption & PCI compliance
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-muted">
              <BarChart3 className="size-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">Smart Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Track cash flow and payment patterns
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-2xl border bg-card p-2 shadow-2xl">
                <div className="rounded-xl bg-gradient-to-br from-muted/50 to-muted aspect-video flex items-center justify-center relative overflow-hidden">
                  {/* Mock Invoice Interface */}
                  <div className="absolute inset-4 bg-background rounded-lg p-6 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="h-3 bg-primary w-24 rounded mb-2"></div>
                        <div className="h-2 bg-muted w-16 rounded"></div>
                      </div>
                      <div className="text-right">
                        <div className="h-2 bg-muted w-20 rounded mb-1"></div>
                        <div className="h-4 bg-accent w-24 rounded"></div>
                      </div>
                    </div>

                    <div className="space-y-3 flex-1">
                      <div className="flex justify-between">
                        <div className="h-2 bg-muted w-32 rounded"></div>
                        <div className="h-2 bg-muted w-16 rounded"></div>
                      </div>
                      <div className="flex justify-between">
                        <div className="h-2 bg-muted w-28 rounded"></div>
                        <div className="h-2 bg-muted w-20 rounded"></div>
                      </div>
                      <div className="flex justify-between">
                        <div className="h-2 bg-muted w-36 rounded"></div>
                        <div className="h-2 bg-muted w-14 rounded"></div>
                      </div>
                    </div>

                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between items-center">
                        <div className="h-3 bg-foreground w-16 rounded"></div>
                        <div className="h-4 bg-primary w-20 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Status Indicators */}
                  <div className="absolute top-6 right-6 flex gap-2">
                    <div className="size-3 bg-green-500 rounded-full animate-pulse"></div>
                    <CheckCircle className="size-5 text-green-500" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 size-8 bg-primary rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -right-4 size-6 bg-accent rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/2 -right-8 size-4 bg-secondary rounded-full animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
