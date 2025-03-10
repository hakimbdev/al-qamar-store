"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, CreditCard, Check, LockIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample cart items for order summary
const cartItems = [
  {
    id: 1,
    name: "Gold Arabesque Necklace",
    price: 299.99,
    quantity: 1,
  },
  {
    id: 5,
    name: "Women's Embroidered Kaftan",
    price: 179.99,
    quantity: 1,
  },
  {
    id: 7,
    name: "Silver Filigree Bracelet",
    price: 119.99,
    quantity: 1,
  },
]

export default function CheckoutPage() {
  const [step, setStep] = useState(1)

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = subtotal * 0.1 // Assuming 10% discount
  const shipping = 0 // Free shipping
  const tax = (subtotal - discount) * 0.05
  const total = subtotal - discount + shipping + tax

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/cart">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Cart
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Checkout</h1>
      </div>

      {/* Checkout Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= 1 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > 1 ? <Check className="h-5 w-5" /> : 1}
                </div>
                <span className="text-sm mt-1">Information</span>
              </div>
              <div className="h-1 flex-1 mx-2 bg-muted">
                <div
                  className={`h-full ${step >= 2 ? "bg-primary" : ""}`}
                  style={{ width: step >= 2 ? "100%" : "0%" }}
                ></div>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= 2 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > 2 ? <Check className="h-5 w-5" /> : 2}
                </div>
                <span className="text-sm mt-1">Shipping</span>
              </div>
              <div className="h-1 flex-1 mx-2 bg-muted">
                <div
                  className={`h-full ${step >= 3 ? "bg-primary" : ""}`}
                  style={{ width: step >= 3 ? "100%" : "0%" }}
                ></div>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= 3 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  3
                </div>
                <span className="text-sm mt-1">Payment</span>
              </div>
            </div>
          </div>

          {/* Step 1: Customer Information */}
          {step === 1 && (
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox id="marketing" />
                    <Label htmlFor="marketing" className="text-sm">
                      Keep me updated with new products, offers, and news
                    </Label>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Shipping Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="First Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Last Name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="Street Address" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="apartment">Apartment, Suite, etc. (optional)</Label>
                    <Input id="apartment" placeholder="Apartment, Suite, etc." />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="City" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select defaultValue="us">
                        <SelectTrigger>
                          <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ae">United Arab Emirates</SelectItem>
                          <SelectItem value="sa">Saudi Arabia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input id="postalCode" placeholder="Postal Code" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox id="saveAddress" />
                    <Label htmlFor="saveAddress" className="text-sm">
                      Save this address for future orders
                    </Label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => setStep(2)}>
                    Continue to Shipping
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}

          {/* Step 2: Shipping Method */}
          {step === 2 && (
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Method</CardTitle>
                  <CardDescription>Select your preferred shipping method</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup defaultValue="standard" className="space-y-4">
                    <div className="flex items-center justify-between space-x-2 border p-4 rounded-md">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard" className="font-medium">
                          Standard Shipping
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-muted-foreground mr-4">3-5 business days</span>
                        <span className="font-medium">Free</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between space-x-2 border p-4 rounded-md">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express" className="font-medium">
                          Express Shipping
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-muted-foreground mr-4">1-2 business days</span>
                        <span className="font-medium">$15.00</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between space-x-2 border p-4 rounded-md">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="overnight" id="overnight" />
                        <Label htmlFor="overnight" className="font-medium">
                          Overnight Shipping
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-muted-foreground mr-4">Next business day</span>
                        <span className="font-medium">$25.00</span>
                      </div>
                    </div>
                  </RadioGroup>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)}>Continue to Payment</Button>
                </CardFooter>
              </Card>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>All transactions are secure and encrypted</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="card" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="card">Credit Card</TabsTrigger>
                      <TabsTrigger value="paypal">PayPal</TabsTrigger>
                      <TabsTrigger value="apple">Apple Pay</TabsTrigger>
                    </TabsList>
                    <TabsContent value="card" className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" placeholder="Name on Card" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <div className="relative">
                          <Input id="cardNumber" placeholder="0000 0000 0000 0000" />
                          <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="CVC" />
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 pt-2">
                        <Checkbox id="saveCard" />
                        <Label htmlFor="saveCard" className="text-sm">
                          Save this card for future purchases
                        </Label>
                      </div>
                    </TabsContent>
                    <TabsContent value="paypal" className="pt-4">
                      <div className="text-center py-8">
                        <p className="mb-4">You will be redirected to PayPal to complete your purchase securely.</p>
                        <Button className="w-full">Continue with PayPal</Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="apple" className="pt-4">
                      <div className="text-center py-8">
                        <p className="mb-4">You will be redirected to Apple Pay to complete your purchase securely.</p>
                        <Button className="w-full">Continue with Apple Pay</Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button>Complete Order</Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Cart Items */}
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-muted-foreground ml-1">x{item.quantity}</span>
                    </div>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-primary">
                  <span>Discount (10%)</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax (5%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t pt-4 flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>

          {/* Secure Checkout */}
          <div className="mt-6 bg-muted p-4 rounded-lg">
            <h3 className="font-medium mb-2 flex items-center">
              <LockIcon className="h-4 w-4 mr-2" />
              Secure Checkout
            </h3>
            <p className="text-sm text-muted-foreground">
              Your payment information is processed securely. We do not store credit card details nor have access to
              your credit card information.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

