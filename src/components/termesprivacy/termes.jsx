import React from 'react';
import './termes.css';
import Navbar from '../Navbar';

function Termes() {
  return (
    <div className="termes-container">
      <Navbar />
      <h1 className="termes-title">Terms of Use</h1>
      <p className="terms-intro">
        Welcome to NEvolution32, your ultimate platform for UGC Gaming Content! By using our application, you agree to the following terms and conditions.
      </p>
      
      <div className="termes-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using NEvolution32, you confirm that you accept these Terms of Use and agree to comply with them.
        </p>
      </div>

      <div className="termes-section">
        <h2>2. User Responsibilities</h2>
        <p>
          As a user, you are responsible for ensuring that your content complies with all applicable laws and regulations. You agree not to upload, share, or publish content that is offensive, defamatory, or infringing on others' rights.
        </p>
      </div>

      <div className="termes-section">
        <h2>3. Content Ownership</h2>
        <p>
          You retain ownership of any content you create and share through our platform. However, by sharing your content, you grant NEvolution32 a non-exclusive, worldwide, royalty-free license to use, modify, and distribute your content on various platforms, including TikTok.
        </p>
      </div>

      <div className="termes-section">
        <h2>4. Connection with TikTok</h2>
        <p>
          NEvolution32 allows you to connect with TikTok to publish your gaming content directly from our app. By linking your TikTok account, you authorize NEvolution32 to access and manage your TikTok content as described in these Terms.
        </p>
      </div>

      <div className="termes-section">
        <h2>5. Privacy Policy</h2>
        <p>
          Your privacy is important to us. We collect and use your personal information in accordance with our Privacy Policy. Please review our Privacy Policy to understand our practices.
        </p>
      </div>

      <div className="termes-section">
        <h2>6. Termination</h2>
        <p>
          NEvolution32 reserves the right to suspend or terminate your access to the app if you violate these Terms of Use or engage in any behavior that may harm our community.
        </p>
      </div>

      <div className="termes-section">
        <h2>7. Limitation of Liability</h2>
        <p>
          NEvolution32 is not liable for any direct, indirect, incidental, or consequential damages resulting from your use of the app or any content shared through it.
        </p>
      </div>

      <div className="termes-section">
        <h2>8. Changes to Terms</h2>
        <p>
          We may update these Terms of Use from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of the app after changes signifies your acceptance of the new terms.
        </p>
      </div>

      <div className="termes-section">
        <h2>9. Contact Information</h2>
        <p>
          For any questions or concerns regarding these Terms of Use, please contact us at <a href="mailto:support@nevolution32.games">support@nevolution32.com</a>.
        </p>
      </div>

      <p className="termes-footer">
        Thank you for being a part of NEvolution32! Let's create amazing gaming content together!
      </p>
    </div>
  );
}

export default Termes;
