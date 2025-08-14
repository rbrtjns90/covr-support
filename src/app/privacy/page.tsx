import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Smartphone, Lock, Eye, Database, Server } from "lucide-react";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="px-4 py-8 border-b border-gray-800">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-400">Your privacy is our top priority</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          
          {/* Key Privacy Points */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-white">
                <Shield className="h-6 w-6 text-green-400" />
                Your Data Stays Private
              </CardTitle>
              <CardDescription className="text-gray-400">
                COVR is designed with privacy at its core
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Smartphone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">100% On-Device Processing</h3>
                    <p className="text-gray-400 text-sm">All photo analysis and organization happens directly on your device. Nothing is sent to external servers.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">No Data Collection</h3>
                    <p className="text-gray-400 text-sm">We don't collect, store, or transmit any of your personal photos or data.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Eye className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">No Tracking</h3>
                    <p className="text-gray-400 text-sm">We don't use analytics, tracking pixels, or any form of user behavior monitoring.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Database className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">No Cloud Storage</h3>
                    <p className="text-gray-400 text-sm">Your photos remain exclusively on your device. We don't have access to any cloud storage.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Privacy Information */}
          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-white">What Data We Don't Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Your photos or any visual content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Photo metadata (location, timestamps, camera info)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Personal information or contacts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Device identifiers or usage analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>App usage patterns or behavior data</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-white">How COVR Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4 text-gray-300">
                  <p>
                    COVR uses advanced on-device machine learning to analyze and organize your photos. Here's how we ensure your privacy:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Local Processing:</strong> All AI analysis happens directly on your iPhone using Apple's Core ML framework</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Secure Storage:</strong> Photos are stored in your device's secure photo library with encryption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>No Internet Required:</strong> The app works completely offline for photo organization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>App Sandbox:</strong> All data remains within the app's secure sandbox environment</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-white">Permissions We Request</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4 text-gray-300">
                  <p>COVR only requests the minimum permissions necessary to function:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">📷</span>
                      <span><strong>Photo Library Access:</strong> To organize and manage your photos locally on your device</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-400 mt-4">
                    We don't request access to your camera, microphone, location, contacts, or any other device features.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-white">Contact & Updates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4 text-gray-300">
                  <p>
                    If you have any questions about our privacy practices or this policy, please contact us through the app's support feature.
                  </p>
                  <p className="text-sm text-gray-400">
                    This privacy policy was last updated on January 14, 2025. We will notify users of any material changes through app updates.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Back to Home */}
          <div className="text-center pt-8">
            <Link href="/">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-gray-800 mt-12">
        <div className="mx-auto max-w-4xl text-center">
          <Separator className="mb-6 bg-gray-800" />
          <p className="text-gray-500 text-sm">
            © 2025 COVR. Privacy-first photo organization.
          </p>
        </div>
      </footer>
    </div>
  );
}
