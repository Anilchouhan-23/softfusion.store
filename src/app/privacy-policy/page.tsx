import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Privacy Policy" breadcrumb="Privacy Policy" />

      <section className="py-20">
        <div className="w-[90%] max-w-[800px] mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6">Privacy Policy</h2>

          <p className="text-gray-600 mb-4">
            Our privacy policy set out below tells you how SoftFusion uses and
            protects any information that you give SoftFusion when you use this
            website.
          </p>
          <p className="text-gray-600 mb-4">
            SoftFusion is committed to ensuring that your privacy is protected.
            Should we ask you to provide certain information by which you can be
            identified when using this website, then you can be assured that it will
            be used only in accordance with this privacy statement.
          </p>
          <p className="text-gray-600 mb-4">
            SoftFusion may change this policy from time to time by updating this
            page. You should check from time to time to ensure that you are happy with
            any changes. This policy is effective from 01/02/2021.
          </p>

          {/* What we collect */}
          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">What we collect</h3>
          <p className="text-gray-600 mb-3">We may collect the following information:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
            <li>Name and job title</li>
            <li>Contact information including email address</li>
            <li>Demographic information such as postcode, preferences and interests</li>
            <li>Other information relevant to customer surveys and/or offers</li>
          </ul>

          {/* What we do with the information */}
          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">
            What we do with the information we gather
          </h3>
          <p className="text-gray-600 mb-3">
            We require this information to understand your needs and provide you with a
            better service, and in particular for the following reasons:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
            <li>For our internal record keeping.</li>
            <li>To improve our products and services.</li>
            <li>
              We may periodically send promotional email about new products, special
              offers or other information which we think you may find interesting using
              the email address which you have provided.
            </li>
            <li>
              From time to time, we may also use your information to contact you for
              market research purposes. We may contact you by email, phone, fax or mail.
            </li>
            <li>
              We may use the information to customize the website according to your
              interests (see below under cookies).
            </li>
          </ul>

          {/* Security */}
          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">Security</h3>
          <p className="text-gray-600 mb-4">
            We are committed to ensuring that your information is secure. In order to
            prevent unauthorized access or disclosure, we have put in place suitable
            physical, electronic and managerial procedures to safeguard and secure the
            information we collect online.
          </p>

          {/* How we use cookies */}
          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">
            How we use cookies
          </h3>

          <h4 className="text-base font-semibold text-navy mt-6 mb-2">Cookie Policy</h4>
          <p className="text-gray-600 mb-4">
            We operate an implied consent policy. This means that we assume that if you
            visit the website with your browser set to accept cookies that you are happy
            with their usage. If you are not happy you should not use the site or delete
            these cookies at the end of your visit.
          </p>

          <h4 className="text-base font-semibold text-navy mt-6 mb-2">What are cookies?</h4>
          <p className="text-gray-600 mb-4">
            Cookies are small text files that are transferred by a website to your browser
            directory. They help the website identify your browser/device. They perform
            different tasks on a website, and certain aspects of the website will not
            function correctly without them.
          </p>

          <p className="text-gray-600 mb-3 font-medium">
            The cookies used on this website are:
          </p>

          <h4 className="text-base font-semibold text-navy mt-6 mb-2">Google Analytics</h4>
          <p className="text-gray-600 mb-4">
            This gathers information about users, how they found and navigated the site as
            well as facts about which browsers they have used. The data gathered by this
            cookie is anonymous and is used to enhance the usability of the website.
          </p>

          <h4 className="text-base font-semibold text-navy mt-6 mb-2">Session cookies</h4>
          <p className="text-gray-600 mb-4">
            Session cookies are used to remember you when you log in. Disabling these
            cookies will stop this functionality working.
          </p>

          {/* Links to other websites */}
          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">
            Links to other websites
          </h3>
          <p className="text-gray-600 mb-4">
            Our website may contain links to enable you to visit other websites of interest
            easily. However, once you have used these links to leave our site, you should
            note that we do not have any control over that other website. Therefore, we
            cannot be responsible for the protection and privacy of any information which
            you provide whilst visiting such sites and such sites are not governed by this
            privacy statement. You should exercise caution and look at the privacy statement
            applicable to the website in question.
          </p>

          {/* Controlling your personal information */}
          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">
            Controlling your personal information
          </h3>
          <p className="text-gray-600 mb-3">
            You may choose to restrict the collection or use of your personal information
            in the following ways:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              Whenever you are asked to fill in a form on the website, look for the box
              that you can click to indicate that you do not want the information to be
              used by anybody for direct marketing purposes.
            </li>
            <li>
              If you have previously agreed to us using your personal information for
              direct marketing purposes, you may change your mind at any time by writing
              to or emailing us at{" "}
              <strong>support@softfusion.store</strong>.
            </li>
          </ul>
          <p className="text-gray-600 mb-4">
            We will not sell, distribute or lease your personal information to third
            parties unless we have your permission or are required by law to do so. We may
            use your personal information to send you promotional information about third
            parties which we think you may find interesting if you tell us that you wish
            this to happen.
          </p>
          <p className="text-gray-600 mb-4">
            You may request details of personal information which we hold about you under
            the Data Protection Act 1998. A small fee will be payable. If you would like a
            copy of the information held on you please contact us.
          </p>
          <p className="text-gray-600 mb-4">
            If you believe that any information we are holding on you is incorrect or
            incomplete, please write to or email us as soon as possible, at the above
            address. We will promptly correct any information found to be incorrect.
          </p>

          {/* Data Protection & Privacy */}
          <h2 className="text-2xl font-bold text-navy mt-14 mb-6">
            Data Protection &amp; Privacy
          </h2>
          <p className="text-gray-600 mb-4 font-medium">
            Data Protection and Privacy for SoftFusion
          </p>

          {/* 1. Overview */}
          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">1. Overview</h3>
          <p className="text-gray-600 mb-3">
            1.1 This policy sets out the basis on which any personal data we (SoftFusion
            Store) collect from you, or that you provide to us, will be processed by us.
            Please read the following carefully to understand our views and practices
            regarding your personal data and how we will treat it.
          </p>
          <p className="text-gray-600 mb-4">
            1.2 For the purpose of the Data Protection Act 1998 (the &ldquo;Act&rdquo;),
            the data controller is SoftFusion.
          </p>

          {/* 2. Personal information we may collect */}
          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">
            2. Personal information we may collect
          </h3>
          <p className="text-gray-600 mb-3">
            2.1 We only collect identifiable personal data or information that is
            voluntarily provided by a visitor to our site. For example, a visitor to our
            site may choose to provide personal information in order to contact us for
            further information, join our mailing list, sign up for our membership or
            register for a course or event.
          </p>
          <p className="text-gray-600 mb-2">2.2 We may collect the data about you via:</p>
          <ul className="list-disc pl-10 text-gray-600 space-y-1 mb-3">
            <li>2.2.1 Information that you provide by filling in forms on our site.</li>
            <li>2.2.2 Completing our events/training course booking forms or email enquiries.</li>
            <li>2.2.3 Telephone enquiries.</li>
            <li>2.2.4 Subscribe to our services and offers.</li>
            <li>2.2.5 Register to use our site.</li>
            <li>2.2.6 We may also ask you for information if you report a problem with our site.</li>
          </ul>
          <p className="text-gray-600 mb-2">2.3 We may collect the following data about you:</p>
          <ul className="list-disc pl-10 text-gray-600 space-y-1 mb-4">
            <li>2.3.1 If you contact us, we may keep a record of that correspondence.</li>
            <li>
              2.3.2 We may also ask you to complete surveys that we use for research
              purposes, although you do not have to respond to them.
            </li>
            <li>
              2.3.3 Details of transactions you enter into with us either through or in
              connection with our site.
            </li>
            <li>
              2.3.4 Details of your visits to our site and the resources that you access.
            </li>
            <li>
              2.3.5 Information you provide to us for the purpose of subscribing to our
              site services, email notifications and/or newsletters.
            </li>
          </ul>

          {/* 3. IP Address */}
          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">3. IP Address</h3>
          <p className="text-gray-600 mb-4">
            3.1 We may collect information about your computer, including where available
            your IP address, operating system and browser type, for system administration
            and to report aggregate information to our advertisers. This is statistical data
            about our user&apos;s browsing actions and patterns and does not identify any
            individual.
          </p>

          {/* 4. Cookies */}
          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">4. Cookies</h3>
          <p className="text-gray-600 mb-3">
            4.1 Cookies are small data files which most website operators place on the
            browser or hard drive of their user&apos;s computer. Cookies may gather information
            about the user&apos;s use of the website or enable the website to recognize the
            user as an existing customer when he returns to the website at a later date.
            Cookies may also be used to collect information about the user which allows the
            website operator or a third party to create a profile of the user, their
            preferences and their interests for the purpose of serving the user with
            targeted, interest-based advertising.
          </p>
          <p className="text-gray-600 mb-4">
            4.2 Our website uses cookies, please refer to our cookie policy.
          </p>

          {/* 5. Information security */}
          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">
            5. Information security &ndash; Storing Your Personal Data
          </h3>
          <p className="text-gray-600 mb-3">
            5.1 All information you provide to us is stored on secure servers. Although we
            will do our best to protect your personal data, we cannot guarantee the security
            of your data transmitted to our site; any transmission is at your own risk. Once
            we have received your information, we will use strict procedures and security
            features to try to prevent unauthorized access.
          </p>
          <p className="text-gray-600 mb-3">
            5.2 All reasonable and appropriate technical and organizational measures will be
            taken against unauthorized or unlawful processing of personal data and against
            accidental loss or destruction of, or damage to, personal data.
          </p>
          <p className="text-gray-600 mb-2">5.3 We will ensure that:</p>
          <ul className="list-disc pl-10 text-gray-600 space-y-1 mb-3">
            <li>
              5.3.1 Only authorized people will be able to access, alter, disclose or
              destroy personal data.
            </li>
            <li>
              5.3.2 Those people only act within the scope of their authority.
            </li>
            <li>
              5.3.3 If personal data is accidentally lost, altered or destroyed, it can be
              recovered to prevent any damage or distress to the individuals concerned.
            </li>
          </ul>
          <p className="text-gray-600 mb-4">
            5.4 As and when appropriate, we will conduct information risk assessments to
            ensure data protected to a reasonable and appropriate standard for the nature of
            data held.
          </p>

          {/* 6. How we may use your data */}
          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">
            6. How we may use your data
          </h3>
          <p className="text-gray-600 mb-2">
            6.1 We use this information held about you in the following ways:
          </p>
          <ul className="list-disc pl-10 text-gray-600 space-y-1 mb-4">
            <li>
              6.1.1 To ensure that content from our site is presented in the most effective
              manner for you and for your computer.
            </li>
            <li>
              6.1.2 To provide you with information, products or services that you request
              from us or which we feel maybe of legitimate interest to you, or where you
              have consented to be contacted for such purposes.
            </li>
            <li>
              6.1.3 To carry out our obligations arising from any contracts entered into
              between you and us.
            </li>
            <li>
              6.1.4 To allow you to participate in interactive features of our service when
              you choose to do so.
            </li>
            <li>6.1.5 To notify you about changes to our service.</li>
            <li>
              6.1.6 We may also use your data on behalf of selected third parties, to
              provide you with information about goods and services which may be of
              legitimate interest to you and we may contact you about these.
            </li>
            <li>
              6.1.7 If you are a client, we may legitimately contact you (by e-mail, SMS,
              telephone, post) with information about goods and services similar to those
              which were the subject is relevant to the services previously provided to you.
            </li>
            <li>
              6.1.8 If you are a new customer, and where we permit selected third parties to
              use your data, we (or they) will contact you by electronic means only if you
              have consented to this.
            </li>
          </ul>

          {/* 7. Legitimate interest */}
          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">
            7. Legitimate interest
          </h3>
          <p className="text-gray-600 mb-3">
            7.1 We may process your personal data on the grounds of legitimate interest. We
            will only process your data in this way if we think there is real and genuine
            interest to both you and ourselves.
          </p>
          <p className="text-gray-600 mb-2">
            7.2 We process personal information for certain legitimate business purposes,
            which include some or all of the following:
          </p>
          <ul className="list-disc pl-10 text-gray-600 space-y-1 mb-3">
            <li>
              7.2.1 Where the processing enables us to enhance, modify, personalize or
              otherwise improve our services/communications for the benefit of our
              customers.
            </li>
            <li>7.2.2 To identify and prevent fraud.</li>
            <li>7.2.3 To enhance the security of our network and information systems.</li>
            <li>7.2.4 To better understand how customers interact with our website.</li>
            <li>
              7.2.5 To provide communications (postal, SMS text, telephone, email)
              containing information, products and/or services which we think will be of
              interest to you.
            </li>
            <li>
              7.2.6 To determine the effectiveness of promotional campaigns and advertising.
            </li>
          </ul>
          <p className="text-gray-600 mb-4">
            7.3 Whenever we process your data for these purposes, we will ensure that we
            always keep your personal data rights in high regards and take account of these
            rights. If you do not want us to process your data in this way or have a
            specific objection, please notify us by email,{" "}
            <strong>support@softfusion.store</strong> with the subject line &ldquo;Data
            Protection&rdquo;. Please bear in mind that if you object this may affect our
            ability to carry out services and the tasks in clause 7.2 for your benefit.
          </p>

          {/* 8. Data Retention */}
          <h3 className="text-lg font-semibold text-navy mt-10 mb-3">
            8. Data Retention
          </h3>
          <p className="text-gray-600 mb-3">
            8.1 Personal data processed for any purpose or purposes will not be kept for
            longer than is necessary for that purpose or those purposes needed. We will
            regularly review the personal data we retain, securely deleting where
            appropriate, anything we no longer need.
          </p>
          <p className="text-gray-600 mb-3">
            8.2 Information that does not need to be accessed regularly, but which still
            needs to be retained, will be safely stored or archived.
          </p>
          <p className="text-gray-600 mb-3">
            8.3 If it is necessary to hold data for one of the reasons set out in Schedules
            2 and 3 of the Data Protection Act (such as the performance of a public function
            or compliance with employment law), then we will retain data for as long as that
            reason applies.
          </p>
          <p className="text-gray-600 mb-3">
            8.4 At the end of the retention period, or the life of a particular record, it
            will be reviewed and deleted, unless there is some special reason for keeping it.
          </p>
          <p className="text-gray-600 mb-3">
            8.5 Further information about how to access data can be found in our Subject
            Access Request policy.
          </p>
          <p className="text-gray-600 mb-4">
            8.6 Further information related to the retention and deletion of data can be
            found in our Data Deletion &amp; Shredding Policy.
          </p>

          <p className="text-gray-500 text-sm mt-10 italic">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
