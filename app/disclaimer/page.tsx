import { generateSiteMetadata } from '@/lib/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generateSiteMetadata({
  title: 'Disclaimer',
  description: 'Disclaimer for Vaishnavan.dev. Important information about the content and use of this website.',
})

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">Disclaimer</h1>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p className="text-sm text-gray-600 dark:text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Content Disclaimer</h2>
          <p className="text-gray-700 dark:text-gray-300">
            The information on this website is provided on an "as is" basis. To the fullest extent permitted
            by law, Vaishnavan.dev excludes all representations, warranties, and conditions relating to this
            website and the use of this website.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            While we strive to provide accurate and up-to-date information, we make no representations or
            warranties of any kind, express or implied, about the completeness, accuracy, reliability,
            suitability, or availability of the information, products, services, or related graphics contained
            on the website for any purpose.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Technical Information</h2>
          <p className="text-gray-700 dark:text-gray-300">
            The technical information, code examples, tutorials, and guides provided on this website are for
            educational and informational purposes only. While we make every effort to ensure the accuracy of
            the information provided, technology changes rapidly, and information may become outdated.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            You should verify any information before relying on it. We are not responsible for any errors or
            omissions, or for the results obtained from the use of this information.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Code Examples</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Code examples provided on this website are for illustrative purposes. While we strive to provide
            accurate and working examples, we do not guarantee that:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Code examples will work in all environments or configurations</li>
            <li>Code examples are production-ready or secure</li>
            <li>Code examples follow all best practices or security guidelines</li>
            <li>Code examples are compatible with all versions of software or libraries</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            You should review, test, and modify any code examples before using them in your projects. We are
            not responsible for any issues, errors, or damages resulting from the use of code examples from this
            website.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">External Links</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Our website may contain links to external websites that are not provided or maintained by or in any
            way affiliated with Vaishnavan.dev. We do not guarantee the accuracy, relevance, timeliness, or
            completeness of any information on these external websites.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            The inclusion of any links does not necessarily imply a recommendation or endorse the views
            expressed within them. We have no control over the nature, content, and availability of those
            sites.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Affiliate Disclosure</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Some links on this website may be affiliate links. This means that if you click on an affiliate
            link and make a purchase, we may receive a commission at no additional cost to you. We only
            recommend products or services that we believe will add value to our readers.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Our affiliate relationships do not influence the content, topics, or posts made on this website. All
            opinions expressed are our own.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">No Professional Advice</h2>
          <p className="text-gray-700 dark:text-gray-300">
            The information on this website is not intended as professional advice. It is provided for general
            informational purposes only. You should not act or refrain from acting on the basis of any content
            included in this website without seeking appropriate professional advice.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            For specific technical, legal, financial, or other professional advice, please consult with a
            qualified professional in the relevant field.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Limitation of Liability</h2>
          <p className="text-gray-700 dark:text-gray-300">
            In no event will Vaishnavan.dev, its authors, contributors, or affiliates be liable for any loss
            or damage, including without limitation, indirect or consequential loss or damage, or any loss or
            damage whatsoever arising from loss of data or profits, arising out of, or in connection with, the
            use of this website.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Changes to Disclaimer</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We reserve the right to update this disclaimer at any time. We will notify you of any changes by
            posting the new disclaimer on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300">
            If you have any questions about this disclaimer, please contact us:
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
