import {
  ModuleFields,
  TextField,
  ImageField,
  RepeatedFieldGroup,
  UrlField,
  BooleanField,
} from '@hubspot/cms-components/fields';
import logo from '../../../assets/sprocket.svg';
import "../../../styles/tailwind.css";

export function Component({ fieldValues, hublParameters }) {
  const { src, alt, width, height } = fieldValues.logo;
  const { brandColors } = hublParameters;
  const navItems = fieldValues.navigationItems || [];
  const { mobileMenuOpen } = fieldValues;

  return (
    <header 
      className="w-full"
      style={{
        backgroundColor: brandColors?.color,
        opacity: brandColors?.opacity,
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href={fieldValues.logoLink || '/'} className="flex items-center">
              <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="h-8 md:h-10 w-auto"
              />
              {fieldValues.siteName && (
                <span className="ml-3 text-xl font-semibold text-gray-900">
                  {fieldValues.siteName}
                </span>
              )}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  target={item.openInNewTab ? '_blank' : '_self'}
                  rel={item.openInNewTab ? 'noopener noreferrer' : ''}
                >
                  {item.label}
                </a>
              ))}
              {fieldValues.showCta && (
                <a
                  href={fieldValues.ctaUrl}
                  className="ml-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  target={fieldValues.ctaNewTab ? '_blank' : '_self'}
                  rel={fieldValues.ctaNewTab ? 'noopener noreferrer' : ''}
                >
                  {fieldValues.ctaText}
                </a>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Hidden by default */}
        <div className="md:hidden hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                target={item.openInNewTab ? '_blank' : '_self'}
                rel={item.openInNewTab ? 'noopener noreferrer' : ''}
              >
                {item.label}
              </a>
            ))}
            {fieldValues.showCta && (
              <a
                href={fieldValues.ctaUrl}
                className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
                target={fieldValues.ctaNewTab ? '_blank' : '_self'}
                rel={fieldValues.ctaNewTab ? 'noopener noreferrer' : ''}
              >
                {fieldValues.ctaText}
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export const fields = (
  <ModuleFields>
    <ImageField
      name="logo"
      label="Logo"
      default={{ src: logo, height: 40, alt: 'Company logo' }}
      resizable={true}
    />
    <UrlField
      name="logoLink"
      label="Logo link"
      default={{ href: "/", type: "EXTERNAL" }}
      supportedTypes={['EXTERNAL', 'CONTENT', 'FILE', 'EMAIL_ADDRESS']}
    />
    <TextField
      name="siteName"
      label="Site Name"
      default=""
      help="Optional text to display next to logo"
    />
      <RepeatedFieldGroup
    name="navigationItems"
    label="Navigation Items"
    occurrence={{ min: 0, max: 20, default: 4 }}
    default={[
      { text: "Home",     url: { href: "/",        type: "EXTERNAL" }, openInNewTab: false },
      { text: "About",    url: { href: "/about",   type: "EXTERNAL" }, openInNewTab: false },
      { text: "Services", url: { href: "/services",type: "EXTERNAL" }, openInNewTab: false },
      { text: "Contact",  url: { href: "/contact", type: "EXTERNAL" }, openInNewTab: false }
    ]}
  >
      <TextField
        name="text"
        label="Link"
        required={true}
      />
      <UrlField
        name="url"
        label="Link URL"
        required={true}
        supportedTypes={['EXTERNAL', 'CONTENT', 'FILE', 'EMAIL_ADDRESS']}
      />
      <BooleanField
        name="openInNewTab"
        label="Open in new tab"
        default={false}
      />
    </RepeatedFieldGroup>
    <BooleanField
      name="showCta"
      label="Show CTA Button"
      default={true}
    />
    <TextField
      name="ctaText"
      label="CTA Button Text"
      default="Get Started"
      visibility={{
        controlledBy: 'showCta',
        controllingValueIsEqual: true,
      }}
    />
    <UrlField
      name="ctaUrl"
      label="CTA Button URL"
      default={{ href: "", type: "EXTERNAL" }}
      supportedTypes={['EXTERNAL', 'CONTENT', 'FILE', 'EMAIL_ADDRESS']}
      visibility={{
        controlledBy: 'showCta',
        controllingValueIsEqual: true,
      }}
    />
    <BooleanField
      name="ctaNewTab"
      label="Open CTA in new tab"
      default={false}
      visibility={{
        controlledBy: 'showCta',
        controllingValueIsEqual: true,
      }}
    />
  </ModuleFields>
);

export const meta = {
  label: "header"
};