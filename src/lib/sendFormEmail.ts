export const MINISTRY_EMAIL = 'info@davidowusuministries.co.uk';

type FormField = {
  label: string;
  value: string;
};

type SendFormEmailOptions = {
  formName: string;
  subject: string;
  fields: FormField[];
};

/**
 * Opens the visitor's default email client with a pre-filled message addressed
 * to the ministry, so submissions are sent directly without a third-party service.
 */
export const sendFormEmail = ({ formName, subject, fields }: SendFormEmailOptions): void => {
  const lines = fields
    .filter((field) => field.value && field.value.trim().length > 0)
    .map((field) => `${field.label}: ${field.value.trim()}`);

  const body = [
    `This message was sent from the ${formName} on the David Owusu Ministries website.`,
    '',
    ...lines,
  ].join('\n');

  const mailtoUrl = `mailto:${MINISTRY_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;
};
