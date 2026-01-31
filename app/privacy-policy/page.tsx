import { generateSiteMetadata } from '@/lib/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generateSiteMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy for Vaishnavan.dev. Learn how we collect, use, and protect your personal information.',
})

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p className="text-sm text-gray-600 dark:text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Introduction</h2>
          <p className="text-gray-700 dark:text-gray-300">
            This Privacy Policy describes how Vaishnavan.dev ("we", "our", or "us") collects, uses, and protects
            your personal information when you visit our website. We are committed to protecting your privacy
            and ensuring transparency about our data practices.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Information We Collect</h2>
          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Personal Information</h3>
          <p className="text-gray-700 dark:text-gray-300">
            We may collect personal information that you voluntarily provide to us, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Name and email address (when you contact us through our contact form)</li>
            <li>Any other information you choose to provide in your communications with us</li>
          </ul>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Automatically Collected Information</h3>
          <p className="text-gray-700 dark:text-gray-300">
            When you visit our website, we automatically collect certain information about your device and how
            you interact with our site:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
            <li>Date and time of visits</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">How We Use Your Information</h2>
          <p className="text-gray-700 dark:text-gray-300">We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>To provide and maintain our website</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To analyze website usage and improve our content and services</li>
            <li>To detect and prevent fraud or abuse</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We use cookies and similar tracking technologies to track activity on our website and store certain
            information. Cookies are files with a small amount of data that may include an anonymous unique
            identifier.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            We use the following types of cookies:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Essential Cookies:</strong> Required for the website to function properly. These cannot be
              disabled.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by
              collecting and reporting information anonymously.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> Used to deliver advertisements relevant to you and your
              interests.
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            You can control cookies through your browser settings. However, disabling cookies may affect the
            functionality of our website. For more information, please see our{' '}
            <a href="/cookie-policy" className="text-blue-600 hover:underline dark:text-blue-400">
              Cookie Policy
            </a>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Third-Party Services</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We use third-party services that may collect information about you:
          </p>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Google Analytics</h3>
          <p className="text-gray-700 dark:text-gray-300">
            We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies
            to collect information such as how often users visit our site and what pages they visit. Google's
            use of this data is governed by their{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Privacy Policy
            </a>
            . You can opt out of Google Analytics by installing the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Google AdSense</h3>
          <p className="text-gray-700 dark:text-gray-300">
            We use Google AdSense to display advertisements on our website. Google and its partners use cookies
            to serve ads based on your prior visits to our website or other websites. You can opt out of
            personalized advertising by visiting{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Google's Ads Settings
            </a>
            . For more information about how Google uses data, visit{' '}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              How Google uses data when you use our partners' sites or apps
            </a>
            .
          </p>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Formspree</h3>
          <p className="text-gray-700 dark:text-gray-300">
            We use Formspree to handle contact form submissions. When you submit our contact form, your
            information is processed by Formspree according to their{' '}
            <a
              href="https://formspree.io/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Data Security</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We implement appropriate technical and organizational security measures to protect your personal
            information. However, no method of transmission over the Internet or electronic storage is 100%
            secure. While we strive to use commercially acceptable means to protect your information, we cannot
            guarantee absolute security.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Data Retention</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We retain your personal information only for as long as necessary to fulfill the purposes outlined
            in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Your Rights</h2>
          <p className="text-gray-700 dark:text-gray-300">Depending on your location, you may have the following rights:</p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Access:</strong> Request access to the personal information we hold about you
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate or incomplete information
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your personal information
            </li>
            <li>
              <strong>Objection:</strong> Object to processing of your personal information
            </li>
            <li>
              <strong>Portability:</strong> Request transfer of your personal information to another service
            </li>
            <li>
              <strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            To exercise these rights, please contact us using the information provided in the "Contact Us"
            section below.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Children's Privacy</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Our website is not intended for children under the age of 13. We do not knowingly collect personal
            information from children under 13. If you are a parent or guardian and believe your child has
            provided us with personal information, please contact us immediately.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">International Data Transfers</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Your information may be transferred to and processed in countries other than your country of
            residence. These countries may have data protection laws that differ from those in your country.
            By using our website, you consent to the transfer of your information to these countries.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting
            the new Privacy Policy on this page and updating the "Last updated" date. You are advised to
            review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300">
            If you have any questions about this Privacy Policy, please contact us:
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
