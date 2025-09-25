'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  Clock,
  CreditCard,
  BarChart3,
  Globe,
  Shield,
  Smartphone,
  Zap,
  Users,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: FileText,
      title: 'Professional Invoice Templates',
      description:
        'Create stunning, branded invoices in seconds with our customizable templates designed for modern businesses.',
      badge: 'Templates',
    },
    {
      icon: Clock,
      title: 'Automated Recurring Billing',
      description:
        'Set up subscription billing and recurring invoices that run on autopilot, saving you hours every month.',
      badge: 'Automation',
    },
    {
      icon: CreditCard,
      title: 'Instant Payment Processing',
      description:
        'Accept credit cards, bank transfers, and digital payments with integrated Stripe and PayPal support.',
      badge: 'Payments',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Financial Analytics',
      description:
        'Track cash flow, payment trends, and revenue insights with powerful dashboard analytics.',
      badge: 'Analytics',
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description:
        'Bill clients worldwide with automatic currency conversion and localized tax calculations.',
      badge: 'Global',
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description:
        'Your financial data is protected with 256-bit SSL encryption and SOC 2 compliance.',
      badge: 'Security',
    },
    {
      icon: Smartphone,
      title: 'Mobile Invoice Management',
      description:
        'Create, send, and track invoices on the go with our fully responsive mobile interface.',
      badge: 'Mobile',
    },
    {
      icon: Zap,
      title: 'Smart Payment Reminders',
      description:
        'Automated follow-ups and gentle reminders help you get paid faster without the awkward conversations.',
      badge: 'Smart',
    },
    {
      icon: Users,
      title: 'Client Portal Access',
      description:
        'Give clients a branded portal to view invoices, make payments, and download receipts instantly.',
      badge: 'Client Experience',
    },
  ];

  const handleStartTrial = () => {
    window.location.href = '/signup';
  };

  const handleViewPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Powerful Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Get Paid Faster
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Streamline your invoicing workflow with professional tools designed specifically for
            freelancers and small businesses who want to focus on growth, not paperwork.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to transform your invoicing process?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartTrial}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start 14-Day Free Trial
            </button>
            <button
              onClick={handleViewPricing}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              View Pricing Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
