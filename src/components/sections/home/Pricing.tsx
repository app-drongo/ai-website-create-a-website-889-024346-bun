'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, CreditCard, Clock, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Pricing() {
  const router = useRouter();
  const [billingCycle, setBillingCycle] = useState('monthly');

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/');
  };

  const handleProfessionalPlan = () => {
    router.push('/');
  };

  const handleEnterprisePlan = () => {
    router.push('/');
  };

  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Freelancer',
      description: 'Perfect for solo freelancers and consultants',
      price: billingCycle === 'monthly' ? 'Free' : 'Free',
      period: '',
      badge: null,
      features: [
        'Up to 5 invoices per month',
        'Basic invoice templates',
        'Payment tracking',
        'Client management',
        'Email support',
      ],
      cta: 'Start Invoicing Free',
      popular: false,
      handler: handleStarterPlan,
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and agencies',
      price: billingCycle === 'monthly' ? '$19' : '$15',
      period: billingCycle === 'monthly' ? '/month' : '/month',
      badge: 'Most Popular',
      features: [
        'Unlimited invoices & estimates',
        'Premium invoice templates',
        'Automated payment reminders',
        'Multi-currency support',
        'Expense tracking',
        'Custom branding',
        'Priority support',
        'Payment gateway integration',
      ],
      cta: 'Start 14-Day Trial',
      popular: true,
      handler: handleProfessionalPlan,
    },
    {
      name: 'Enterprise',
      description: 'For large teams with advanced requirements',
      price: billingCycle === 'monthly' ? '$49' : '$39',
      period: billingCycle === 'monthly' ? '/month' : '/month',
      badge: 'Advanced Features',
      features: [
        'Everything in Professional',
        'Team collaboration tools',
        'Advanced reporting & analytics',
        'API access & integrations',
        'White-label solution',
        'Dedicated account manager',
        'Custom workflows',
        '99.9% SLA guarantee',
      ],
      cta: 'Contact Sales Team',
      popular: false,
      handler: handleEnterprisePlan,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <CreditCard className="size-3 mr-2" />
            Pricing Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Invoice Smarter,
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Get Paid Faster
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the perfect plan to streamline your invoicing process. No setup fees, no
            long-term contracts. Scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                billingCycle === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                billingCycle === 'annual'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    <Shield className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
                {billingCycle === 'annual' && plan.period && (
                  <p className="text-sm text-muted-foreground mt-1">Billed annually</p>
                )}
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.handler}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.name === 'Freelancer' && <Clock className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Professional' && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No credit card required
                  </p>
                )}

                {plan.name === 'Freelancer' && (
                  <p className="text-center text-sm text-muted-foreground">
                    No credit card required • Upgrade anytime
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Need a custom solution?</h3>
          <p className="text-muted-foreground mb-6">
            We offer tailored invoicing solutions for enterprises with specific workflows. Let's
            discuss how Invoice Startup can streamline your billing process.
          </p>
          <Button onClick={handleScheduleDemo} variant="outline" size="lg">
            <Calendar className="size-4 mr-2" />
            Schedule a Demo
          </Button>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="size-4" />
              <span>Bank-level security</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4" />
              <span>99.9% uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4" />
              <span>GDPR compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
