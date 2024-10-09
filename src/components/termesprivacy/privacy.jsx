import React from 'react';
import './privacy.css';
import Navbar from '../Navbar';

function Privacy() {
  return (
    <div className="privacy-container">
      <Navbar />
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-intro">
        At NEvolution32, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our application.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect personal information, including but not limited to your name, email address, and social media account details when you register or interact with our application.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        NEvolution32 uses your information to provide and improve our services, communicate with you, and personalize your experience. We may also use your data to send you updates, newsletters, and marketing communications.
      </p>

      <h2>3. Sharing Your Information</h2>
      <p>
        We do not sell or rent your personal information to third parties. However, we may share your information with trusted partners and service providers who assist us in operating the application and providing services to you, subject to strict confidentiality obligations.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or method of electronic storage is 100% secure.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal information at any time. If you wish to exercise these rights, please contact us at support@nevolution32.com.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Our application may use cookies to enhance user experience. Cookies are small text files stored on your device that help us analyze web traffic and improve our application. You can choose to accept or decline cookies through your browser settings.
      </p>

      <h2>7. Third-Party Links</h2>
      <p>
        Our application may contain links to third-party websites. We do not control these websites and are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites you visit.
      </p>

      <h2>8. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Your continued use of the application after changes signifies your acceptance of the new terms.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at support@nevolution32.games .
      </p>

      <p className="privacy-footer">
        Thank you for trusting NEvolution32 with your information. We are committed to safeguarding your privacy while you explore the gaming universe!
      </p>
    </div>
  );
}

export default Privacy;
