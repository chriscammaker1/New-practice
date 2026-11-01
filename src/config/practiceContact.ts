/**
 * Practice Contact Configuration
 * Updated with test contact details:
 * Phone: (203) 249-4478
 * Email: info@camchildpyschology.com
 */

export const PRACTICE_CONTACT_CONFIG = {
  // Practice Phone & SMS
  phone: {
    display: '(203) 249-4478',
    raw: '+12032494478',
    smsPrefill: 'Hello, I would like to inquire about child psychology services.',
  },

  // Email Routing
  email: {
    inquiryRecipient: 'info@camchildpyschology.com',
    display: 'info@camchildpyschology.com',
    defaultSubject: 'New Practice Inquiry',
  },

  // Launch Date
  launchDate: 'January 1, 2027',
  launchDateFull: 'January 1st, 2027',

  // Optional form endpoint
  formEndpointUrl: '',
};
