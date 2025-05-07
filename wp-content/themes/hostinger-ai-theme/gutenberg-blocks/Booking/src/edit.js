import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, TextareaControl } from '@wordpress/components';

function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { formFields, buttonText } = attributes;

    const updateField = (index, field, value) => {
        const newFields = [...formFields];
        newFields[index] = { ...newFields[index], [field]: value };
        setAttributes({ formFields: newFields });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Field Settings', 'hostinger-ai-theme')}>
                    {formFields.map((field, index) => (
                        <div key={index} className="field-settings">
                            <TextControl
                                label={__('Label', 'hostinger-ai-theme')}
                                value={field.label}
                                onChange={(value) => updateField(index, 'label', value)}
                            />
                            {field.type !== 'privacy' && (
                                <TextControl
                                    label={__('Placeholder', 'hostinger-ai-theme')}
                                    value={field.placeholder}
                                    onChange={(value) => updateField(index, 'placeholder', value)}
                                />
                            )}
                            {field.type === 'privacy' && (
                                <>
                                    <TextareaControl
                                        label={__('Consent Text', 'hostinger-ai-theme')}
                                        help={__('The text shown with the privacy policy checkbox', 'hostinger-ai-theme')}
                                        value={field.consentText}
                                        onChange={(value) => updateField(index, 'consentText', value)}
                                    />
                                    <TextControl
                                        label={__('Privacy Policy URL', 'hostinger-ai-theme')}
                                        help={__('Link to your privacy policy page', 'hostinger-ai-theme')}
                                        value={field.policyUrl}
                                        onChange={(value) => updateField(index, 'policyUrl', value)}
                                    />
                                    <TextControl
                                        label={__('Privacy Policy Link Text', 'hostinger-ai-theme')}
                                        help={__('Text to display for the privacy policy link', 'hostinger-ai-theme')}
                                        value={field.policyLinkText}
                                        onChange={(value) => updateField(index, 'policyLinkText', value)}
                                    />
                                </>
                            )}
                            <ToggleControl
                                label={__('Required', 'hostinger-ai-theme')}
                                checked={field.required}
                                onChange={(value) => updateField(index, 'required', value)}
                            />
                            <hr />
                        </div>
                    ))}
                </PanelBody>
                <PanelBody title={__('Button Settings', 'hostinger-ai-theme')}>
                    <TextControl
                        label={__('Button Text', 'hostinger-ai-theme')}
                        value={buttonText}
                        onChange={(value) => setAttributes({ buttonText: value })}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <div className="wp-block-group">
                    <div className="booking-form-preview">
                        {formFields.map((field, index) => (
                            <div key={index} className={`form-field ${field.type === 'privacy' ? 'privacy-consent-field' : ''}`}>
                                {field.type === 'privacy' ? (
                                    <label className="privacy-consent-label">
                                        <input
                                            type="checkbox"
                                            disabled
                                        />
                                        <span>
                                            {field.consentText.split('Privacy Policy').map((part, i, array) => {
                                                // If this is the last part, just return it
                                                if (i === array.length - 1) return part;
                                                // Otherwise return part + link + (potentially empty) next part
                                                return (
                                                    <React.Fragment key={i}>
                                                        {part}
                                                        <a href={field.policyUrl || '#'} target="_blank" rel="noopener noreferrer">
                                                            {field.policyLinkText || 'Privacy Policy'}
                                                        </a>
                                                    </React.Fragment>
                                                );
                                            })}
                                        </span>
                                    </label>
                                ) : (
                                    <>
                                        <label>
                                            {field.label}
                                            {field.required && <span className="required">*</span>}
                                        </label>
                                        {field.type === 'textarea' ? (
                                            <textarea
                                                disabled
                                                placeholder={field.placeholder}
                                            />
                                        ) : (
                                            <input
                                                type={field.type}
                                                disabled
                                                placeholder={field.placeholder}
                                            />
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                        <RichText
                            tagName="button"
                            className="wp-block-button__link wp-element-button"
                            value={buttonText}
                            onChange={(value) => setAttributes({ buttonText: value })}
                            placeholder={__('Add text...', 'hostinger-ai-theme')}
                            withoutInteractiveFormatting={true}
                            allowedFormats={[]}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Edit;
