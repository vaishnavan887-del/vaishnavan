import { generateSiteMetadata } from '@/lib/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generateSiteMetadata({
  title: 'Terms of Service',
  description: 'Terms of Service for Vaishnavan.dev. Read our terms and conditions for using this website.',
})

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">Terms of Service</h1>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p className="text-sm text-gray-600 dark:text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Agreement to Terms</h2>
          <p className="text-gray-700 dark:text-gray-300">
            By accessing and using Vaishnavan.dev ("the Website"), you accept and agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Use License</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Permission is granted to temporarily access the materials on Vaishnavan.dev for personal,
            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
            and under this license you may not:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Intellectual Property</h2>
          <p className="text-gray-700 dark:text-gray-300">
            All content on this website, including but not limited to text, graphics, logos, images, and
            software, is the property of Vaishnavan.dev or its content suppliers and is protected by copyright,
            trademark, and other intellectual property laws.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">User Content</h2>
          <p className="text-gray-700 dark:text-gray-300">
            If you submit content to our website (such as comments or contact form submissions), you grant us a
            non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and display such
            content. You represent that you have the right to grant this license.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Prohibited Uses</h2>
          <p className="text-gray-700 dark:text-gray-300">You agree not to use the website:</p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>In any way that violates any applicable law or regulation</li>
            <li>To transmit any malicious code, viruses, or harmful materials</li>
            <li>To impersonate or attempt to impersonate another person or entity</li>
            <li>To engage in any automated use of the system</li>
            <li>To interfere with or disrupt the website or servers</li>
            <li>To collect or harvest any information from the website</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Disclaimer</h2>
          <p className="text-gray-700 dark:text-gray-300">
            The materials on Vaishnavan.dev are provided on an "as is" basis. We make no warranties, expressed
            or implied, and hereby disclaim and negate all other warranties including, without limitation,
            implied warranties or conditions of merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of rights.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Further, we do not warrant or make any representations concerning the accuracy, likely results, or
            reliability of the use of the materials on our website or otherwise relating to such materials or
            on any sites linked to this site.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Limitations of Liability</h2>
          <p className="text-gray-700 dark:text-gray-300">
            In no event shall Vaishnavan.dev or its suppliers be liable for any damages (including, without
            limitation, damages for loss of data or profit, or due to business interruption) arising out of the
            use or inability to use the materials on Vaishnavan.dev, even if we or an authorized representative
            has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Links to Third-Party Sites</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Our website may contain links to third-party websites. We are not responsible for the content,
            privacy policies, or practices of these external sites. The inclusion of any link does not imply
            endorsement by Vaishnavan.dev.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Modifications</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We reserve the right to revise these Terms of Service at any time without notice. By using this
            website, you are agreeing to be bound by the then-current version of these Terms of Service.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Governing Law</h2>
          <p className="text-gray-700 dark:text-gray-300">
            These Terms of Service shall be governed by and construed in accordance with the laws of Sri Lanka,
            without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Information</h2>
          <p className="text-gray-700 dark:text-gray-300">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <ul className="list-none pl-0 text-gray-700 dark:text-gray-300">
            <li>Email: vaishnavan268@gmail.com</li>
            <li>Location: Sri Lanka</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
