import "./GDPR.css";

function GDPR() {
    return (
        <div className="wrapper">
            <h2 className="question">GDPR</h2>
            <div className="gdpr-content">
                <p className="gdpr-text">
                    Permission granted on this date to use and disclose my information remains in effect indefinitely. By signing this form, I give permission for the use and disclosure of my information for purposes of this study at any time in the future.
                </p>
                <p className="gdpr-text">
                    <strong>Consent:</strong> I have read and understand the above consent form. I certify that I am 18 years old or older. By clicking the "Next" button to enter the survey, I indicate my willingness to voluntarily take part in this study.
                </p>
            </div>
        </div>
    );
}

export default GDPR;
