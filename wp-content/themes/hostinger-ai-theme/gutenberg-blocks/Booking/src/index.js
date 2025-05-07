import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import './editor.scss';
import './style.scss';
import Edit from './edit';

// Define default form fields
const DEFAULT_FORM_FIELDS = [
    {
        label: 'Name',
        type: 'text',
        required: true,
        placeholder: __('Enter your name...', 'hostinger-ai-theme')
    },
    {
        label: 'Email',
        type: 'email',
        required: true,
        placeholder: __('Enter your email...', 'hostinger-ai-theme')
    },
    {
        label: 'Date',
        type: 'date',
        required: true,
        placeholder: __('Select date...', 'hostinger-ai-theme')
    },
    {
        label: 'Message',
        type: 'textarea',
        required: false,
        placeholder: __('Enter your message...', 'hostinger-ai-theme')
    },
    {
        label: 'Privacy Policy',
        type: 'privacy',
        required: true,
        consentText: __('I consent to use of provided personal data for the purpose of responding to the request as described in Privacy Policy which I have read. I may withdraw my consent at any time.', 'hostinger-ai-theme'),
        policyUrl: '/privacy-policy',
        policyLinkText: __('Privacy Policy', 'hostinger-ai-theme')
    }
];


registerBlockType('hostinger-ai-theme/booking-block', {
    title: __('Booking Form', 'hostinger-ai-theme'),
    description: __('A customizable booking form for your website', 'hostinger-ai-theme'),
    category: 'widgets',
    icon: 'calendar',

    attributes: {
        formFields: {
            type: 'array',
            default: DEFAULT_FORM_FIELDS
        },
        buttonText: {
            type: 'string',
            default: 'Submit'
        }
    },

    edit: Edit,

    save: function() {
        return null;
    }
});