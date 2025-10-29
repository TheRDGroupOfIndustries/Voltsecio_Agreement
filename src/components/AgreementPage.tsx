// pages/agreement.tsx
import { FC } from "react";
import { RiFileList3Line, RiGroupLine, RiServiceLine, RiProductHuntLine, RiPaletteLine,  RiPieChartLine, RiBarChartLine, RiLineChartLine, RiCalendarCheckLine, RiTimeLine, RiBankCardLine, RiFileListLine, RiBuildingLine, RiUserStarLine, RiEditLine, RiFileTransferLine, RiAttachmentLine } from "react-icons/ri";
import AgreementSignatures from "./AgreementSignatures";

const AgreementPage: FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Executive Summary */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-2xl border border-gray-700 p-8 mb-8">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mr-4">
            <RiFileList3Line className="text-black text-lg" />
          </div>
          Executive Summary
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          The RD Group of Industries and Colortouch India form a collaboration where Colortouch will resell The RD Group's web, app, and cybersecurity services and jointly market products. Colortouch may sell services as a Development Partner or under white-label terms. Product sales (as agreed product offerings) are split 50/50. For standard projects Colortouch receives 10–20% of the project fee (exact percent negotiated per-project). RD Group remains responsible for product maintenance, updates, and future development. Payment terms are flexible — instalments allowed, EMI options through the company producer, and a 26-day credit period for delayed payments.
        </p>
      </section>

      {/* Partnership & Reseller Agreement Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Partnership & Reseller Agreement</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto rounded-full"></div>
      </div>

      {/* Parties Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-2xl border border-gray-700 p-8 mb-8">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mr-3">
            <RiGroupLine className="text-black text-sm" />
          </div>
          Parties
        </h3>
        <p className="text-gray-300 mb-4">This Agreement is between:</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6">
            <h4 className="font-semibold text-white mb-2">The RD Group of Industries</h4>
            <p className="text-sm text-gray-400">RD Group</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6">
            <h4 className="font-semibold text-white mb-2">Colortouch India</h4>
            <p className="text-sm text-gray-400">Colortouch</p>
          </div>
        </div>
        <p className="text-gray-300 mt-4">— effective as of the date both parties sign.</p>
      </section>

      {/* Definitions Section */}
      <section className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-8 mb-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mr-3">
            <span className="text-black font-bold text-sm">1</span>
          </div>
          Definitions
        </h2>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <RiServiceLine className="text-gray-400 mt-1 mr-3" />
            <span><strong className="text-white">"Services"</strong> = web development, app development, cybersecurity, maintenance, and related products.</span>
          </li>
          <li className="flex items-start">
            <RiProductHuntLine className="text-gray-400 mt-1 mr-3" />
            <span><strong className="text-white">"Products"</strong> = any packaged software or SaaS product offered by RD Group and agreed for resale.</span>
          </li>
        </ul>
      </section>
      <section className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mr-3">
          <span className="text-black font-bold text-sm">2</span>
        </div>
        Appointment &amp; Scope
      </h2>
      <p className="text-gray-300">
        RD Group appoints Colortouch as a reseller, development partner, and
        white-label partner for the Services and designated Products. Colortouch
        can market, propose, close, and resell Services and Products per this
        Agreement.
      </p>
    </section>
    <section className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mr-3">
          <span className="text-black font-bold text-sm">3</span>
        </div>
        White-Label &amp; Branding
      </h2>
      <ul className="space-y-3 text-gray-300">
        <li className="flex items-start">
          <RiPaletteLine className="text-gray-400 mt-1 mr-3" />
          Colortouch may brand Services/Products as its own (white-label) only for offerings explicitly agreed in writing.
        </li>
        <li className="flex items-start">
          {/* <RiLicenseLine className="text-gray-400 mt-1 mr-3" /> */}
          RD Group grants Colortouch a limited, non-transferable license to use product assets, documentation, and marketing materials for resale and support.
        </li>
      </ul>
    </section>
    <section className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mr-3">
          <span className="text-black font-bold text-sm">4</span>
        </div>
        Revenue Sharing &amp; Pricing
      </h2>

      <div className="space-y-4">
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-2 flex items-center">
            <RiPieChartLine className="text-gray-400 mr-2" />
            Product Sales
          </h4>
          <p className="text-gray-300">
            50% of net revenue to RD Group and 50% to Colortouch for any jointly sold product specified in Appendix A.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-2 flex items-center">
            <RiBarChartLine className="text-gray-400 mr-2" />
            Standard Projects
          </h4>
          <p className="text-gray-300">
            Colortouch revenue share = 10%–20% of the project value (exact percent agreed per-project and written in the project quote).
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-2 flex items-center">
            <RiLineChartLine className="text-gray-400 mr-2" />
            High-value Projects
          </h4>
          <p className="text-gray-300">
            Colortouch can secure high-value projects using RD Group's pre-defined quotes. This allows Colortouch to earn additional revenue above the standard commission, which is calculated based on the project's final invoice amount.
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-400 mt-4 italic">
        ("Net revenue" = collected amount after taxes, refunds, and third-party gateway fees.)
      </p>
    </section>
     <section className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mr-3">
          <span className="text-black font-bold text-sm">5</span>
        </div>
        Payment Terms
      </h2>

      <ul className="space-y-3 text-gray-300">
        <li className="flex items-start">
          <RiCalendarCheckLine className="text-gray-400 mt-1 mr-3" />
          Payments may be taken in instalments as per the signed project schedule.
        </li>
        <li className="flex items-start">
          <RiTimeLine className="text-gray-400 mt-1 mr-3" />
          A 26-day credit period applies to delayed payments (i.e., late payments are allowed up to 26 days).
        </li>
        <li className="flex items-start">
          <RiBankCardLine className="text-gray-400 mt-1 mr-3" />
          Colortouch may offer EMI options to clients through the company producer / financing partner. RD Group will cooperate to enable EMI (e.g., invoice structuring), but financing terms are between the client, Colortouch, and the financing partner.
        </li>
        <li className="flex items-start">
          <RiFileListLine className="text-gray-400 mt-1 mr-3" />
          RD Group issues invoices to Colortouch or the end client (as applicable). Payment due dates, milestones, and invoicing details will be written in project SOWs.
        </li>
      </ul>
    </section>
    <section className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mr-3">
          <span className="text-black font-bold text-sm">6</span>
        </div>
        Responsibilities
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* RD Group */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="font-semibold text-white mb-4 flex items-center">
            <RiBuildingLine className="text-gray-400 mr-2" />
            RD Group
          </h4>
          <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
            <li>Product development</li>
            <li>Maintenance &amp; updates</li>
            <li>Bug fixes &amp; security patches</li>
            <li>Major releases</li>
            <li>Technical support per agreed SLA</li>
          </ul>
        </div>

        {/* Colortouch */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h4 className="font-semibold text-white mb-4 flex items-center">
            <RiUserStarLine className="text-gray-400 mr-2" />
            Colortouch
          </h4>
          <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
            <li>Sales &amp; client acquisition</li>
            <li>First-level client communication</li>
            <li>Initial demos &amp; marketing</li>
            <li>Payment collection per agreed method</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mr-3">
          <span className="text-black font-bold text-sm">7</span>
        </div>
        Support &amp; SLA
      </h2>
      <p className="text-gray-300">
        RD Group provides support levels and SLAs in Appendix B. For client support handed over by Colortouch, Colortouch will triage and escalate to RD Group as per process.
      </p>
    </section>
    <section className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mr-3">
          <span className="text-black font-bold text-sm">8</span>
        </div>
        Intellectual Property
      </h2>
      <p className="text-gray-300">
        RD Group retains IP ownership for Products and underlying code, except where a written transfer is agreed. Colortouch receives a license to resell/white-label as specified.
      </p>
    </section>
    <section className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mr-3">
          <span className="text-black font-bold text-sm">9</span>
        </div>
        Confidentiality
      </h2>
      <p className="text-gray-300">
        Both parties agree to keep confidential business, product, and customer information private during and for 3 years post-termination (or longer if required by law).
      </p>
    </section>
     <section className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mr-3">
          <span className="text-black font-bold text-sm">10</span>
        </div>
        Warranties &amp; Liability
      </h2>
      <p className="text-gray-300">
        Each party warrants it has authority to enter this Agreement. RD Group warrants Products substantially conform to documentation.
      </p>
    </section>
    <section className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mr-3">
          <span className="text-black font-bold text-sm">11</span>
        </div>
        Indemnity
      </h2>
      <p className="text-gray-300">
        Each party indemnifies the other for breaches of confidentiality, IP infringement caused by its materials, and third-party claims arising from its negligence.
      </p>
    </section>
     <section className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mr-3">
          <span className="text-black font-bold text-sm">12</span>
        </div>
        Term &amp; Termination
      </h2>
      <p className="text-gray-300">
        Term: 12 months, renewable automatically unless either party gives 30 days written notice. Termination for material breach if not cured within 30 days after notice. Post-termination, outstanding invoices remain payable; white-label licenses end.
      </p>
    </section>
     <section className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mr-3">
          <span className="text-black font-bold text-sm">13</span>
        </div>
        Dispute Resolution &amp; Governing Law
      </h2>
      <p className="text-gray-300">
        Attempt amicable resolution; failing that, mediation/arbitration in India (location: New Delhi) under Indian law.
      </p>
    </section>
    <section className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mr-3">
          <span className="text-black font-bold text-sm">14</span>
        </div>
        Miscellaneous
      </h2>
      <ul className="space-y-3 text-gray-300">
        <li className="flex items-start">
          <i className="ri-edit-line text-gray-400 mt-1 mr-3"></i>
          Amendments must be in writing and signed by both parties.
        </li>
        <li className="flex items-start">
          <i className="ri-file-transfer-line text-gray-400 mt-1 mr-3"></i>
          Neither party may assign this Agreement without written consent from the other party.
        </li>
      </ul>
    </section>

    {/* form */}
    <AgreementSignatures/>
    
    <section className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-8 mt-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mr-3">
          <RiAttachmentLine className="text-black text-sm" />
        </div>
        Appendices
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Appendix A */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="font-semibold text-white mb-2 flex items-center">
            <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs mr-2">
              A
            </span>
            Product List
          </h3>
          <p className="text-sm text-gray-400">
            Detailed list of products available for resale and white-label
            distribution.
          </p>
        </div>

        {/* Appendix B */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="font-semibold text-white mb-2 flex items-center">
            <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs mr-2">
              B
            </span>
            SLA &amp; Support Levels
          </h3>
          <p className="text-sm text-gray-400">
            Service level agreements and technical support specifications.
          </p>
        </div>

        {/* Appendix C */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="font-semibold text-white mb-2 flex items-center">
            <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs mr-2">
              C
            </span>
            Pricing &amp; Commission Matrix
          </h3>
          <p className="text-sm text-gray-400">
            Detailed pricing structure and commission calculation methods.
          </p>
        </div>
      </div>
    </section>
    </main>
  );
};

export default AgreementPage;
