import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Eye, Lock, Smartphone, Zap, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative px-4 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex justify-center">
            <div className="relative h-24 w-24 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-2xl">
              <Lock className="h-12 w-12 text-white" />
            </div>
          </div>

          <h1 className="mb-4 text-5xl font-bold tracking-tight lg:text-6xl">
            COVR
          </h1>
          <p className="mb-6 text-xl text-gray-400 font-medium">
            Private Photo Organizer
          </p>
          <p className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Securely organize and hide your personal photos with smart on-device analysis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-2xl font-semibold">
              Download on App Store
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-6 text-lg rounded-2xl font-semibold">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Keep Your Personal Moments Personal
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-xl bg-blue-500 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Smart Detection</CardTitle>
                <CardDescription className="text-gray-400">
                  Scan your library for images that may need privacy
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-xl bg-red-500 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">One-Tap Privacy</CardTitle>
                <CardDescription className="text-gray-400">
                  Move items to your Hidden album with one tap
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-xl bg-purple-500 flex items-center justify-center">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Private Albums</CardTitle>
                <CardDescription className="text-gray-400">
                  Create and manage custom private albums
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-xl bg-green-500 flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">100% On-Device</CardTitle>
                <CardDescription className="text-gray-400">
                  Your photos never leave your phone
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-xl bg-orange-500 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Simple Design</CardTitle>
                <CardDescription className="text-gray-400">
                  Modern design for quick and easy use
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-xl bg-teal-500 flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Organized Gallery</CardTitle>
                <CardDescription className="text-gray-400">
                  Keep your photo library tidy and clean
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-4 py-16 bg-gray-950">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold">
            How COVR Works
          </h2>
          <p className="mb-8 text-lg text-gray-300 leading-relaxed">
            COVR helps you keep your photo library tidy and private. Using smart on-device analysis,
            it detects images you may want to keep separate and moves them into your Hidden album or
            a private folder of your choice.
          </p>
          <p className="mb-8 text-lg text-gray-300 leading-relaxed">
            Whether you're organizing screenshots, receipts, personal documents, or private moments,
            COVR makes it easy to maintain a clean and organized gallery — while keeping sensitive
            photos safe from prying eyes.
          </p>
        </div>
      </section>

      {/* Keywords Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-2xl font-bold">
            Privacy & Security Features
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Privacy",
              "Photo Vault",
              "Hidden Photos",
              "Album Organizer",
              "Secure Gallery",
              "Private Storage"
            ].map((keyword) => (
              <Badge key={keyword} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700 px-4 py-2 text-sm">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="px-4 py-16 bg-gray-950">
        <div className="mx-auto max-w-4xl">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Need Support?</CardTitle>
              <CardDescription className="text-gray-400">
                We're here to help you get the most out of COVR
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">
                  Contact Support
                </Button>
                <p className="text-sm text-gray-500">
                  For technical support and feature requests
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-gray-800">
        <div className="mx-auto max-w-4xl text-center">
          <Separator className="mb-6 bg-gray-800" />
          <div className="flex justify-center items-center gap-4 mb-4">
            <Link href="/privacy" className="text-blue-400 hover:text-blue-300 text-sm underline">
              Privacy Policy
            </Link>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 COVR. Privacy-first photo organization.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Your photos never leave your device. 100% on-device processing.
          </p>
        </div>
      </footer>
    </div>
  );
}
