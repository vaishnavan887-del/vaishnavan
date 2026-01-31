import { generateSiteMetadata } from '@/lib/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generateSiteMetadata({
  title: 'Cookie Policy',
  description: 'Cookie Policy for Vaishnavan.dev. Learn about how we use cookies and how to manage your cookie preferences.',
})

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">Cookie Policy</h1>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p className="text-sm text-gray-600 dark:text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">What Are Cookies</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Cookies are small text files that are placed on your computer or mobile device when you visit a
            website. Cookies are widely used to make websites work more efficiently and provide information to
            the website owners.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Cookies allow a website to recognize your device and store some information about your preferences
            or past actions. This helps improve your browsing experience and allows websites to provide
            personalized content.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">How We Use Cookies</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We use cookies for various purposes to improve your experience on our website:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>To enable certain functions of the website</li>
            <li>To provide analytics and understand how visitors use our website</li>
            <li>To store your preferences and settings</li>
            <li>To deliver personalized content and advertisements</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Types of Cookies We Use</h2>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Essential Cookies</h3>
          <p className="text-gray-700 dark:text-gray-300">
            These cookies are necessary for the website to function properly. They enable basic functions like
            page navigation and access to secure areas of the website. The website cannot function properly
            without these cookies.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Examples:</strong> Session cookies, authentication cookies, security cookies
          </p>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Analytics Cookies</h3>
          <p className="text-gray-700 dark:text-gray-300">
            These cookies help us understand how visitors interact with our website by collecting and reporting
            information anonymously. This helps us improve the website's performance and user experience.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Examples:</strong> Google Analytics cookies
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            You can opt out of Google Analytics by installing the{' '}
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

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Advertising Cookies</h3>
          <p className="text-gray-700 dark:text-gray-300">
            These cookies are used to deliver advertisements that are relevant to you and your interests. They
            also help measure the effectiveness of advertising campaigns.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Examples:</strong> Google AdSense cookies
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            You can opt out of personalized advertising by visiting{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Google's Ads Settings
            </a>
            .
          </p>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Functional Cookies</h3>
          <p className="text-gray-700 dark:text-gray-300">
            These cookies enable the website to provide enhanced functionality and personalization. They may be
            set by us or by third-party providers whose services we have added to our pages.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Examples:</strong> Language preference cookies, region selection cookies
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Third-Party Cookies</h2>
          <p className="text-gray-700 dark:text-gray-300">
            In addition to our own cookies, we may also use various third-party cookies to report usage
            statistics of the website and deliver advertisements. These third parties may set cookies when you
            visit our website:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Google Analytics:</strong> For website analytics and performance measurement
            </li>
            <li>
              <strong>Google AdSense:</strong> For displaying advertisements
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            These third parties have their own privacy policies and cookie policies. We encourage you to
            review them.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Cookie Duration</h2>
          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Session Cookies</h3>
          <p className="text-gray-700 dark:text-gray-300">
            These cookies are temporary and are deleted when you close your browser. They are used to maintain
            your session while you navigate the website.
          </p>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Persistent Cookies</h3>
          <p className="text-gray-700 dark:text-gray-300">
            These cookies remain on your device for a set period or until you delete them. They are used to
            remember your preferences and settings across multiple visits.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Managing Cookies</h2>
          <p className="text-gray-700 dark:text-gray-300">
            You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but
            you can usually modify your browser settings to decline cookies if you prefer.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            However, please note that disabling cookies may affect the functionality of our website and may
            prevent you from accessing certain features.
          </p>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Browser Settings</h3>
          <p className="text-gray-700 dark:text-gray-300">
            You can control cookies through your browser settings. Here are links to instructions for popular
            browsers:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Cookie Consent</h3>
          <p className="text-gray-700 dark:text-gray-300">
            When you first visit our website, you will see a cookie consent banner. You can choose to accept
            or decline non-essential cookies. Your preference will be saved and remembered for future visits.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            You can change your cookie preferences at any time by clearing your browser cookies or contacting
            us.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Updates to This Policy</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for
            other operational, legal, or regulatory reasons. We will notify you of any changes by posting the
            new Cookie Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300">
            If you have any questions about our use of cookies, please contact us:
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
