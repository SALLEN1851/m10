import {
  ModuleFields,
  TextField,
  RichTextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import { RichText } from '@hubspot/cms-components';
import logo from '../../../assets/sprocket.svg';
import styles from '../../../styles/getting-started.module.css';
import "../../../styles/tailwind.css"; 

export function Component({ fieldValues, hublParameters }) {
  const { src, alt, width, height } = fieldValues.logo;
  const { brandColors } = hublParameters;

  return (
    <div
      className={`${styles.wrapper} py-12 px-4`}
      style={{
        backgroundColor: brandColors?.color,
        opacity: brandColors?.opacity,
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <img 
          src={src} 
          alt={alt} 
          width={width} 
          height={height}
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {fieldValues.headline}
        </h1>
        <div className="prose prose-lg mx-auto mb-8 text-gray-600">
          <RichText fieldPath="gettingStarted" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://github.com/HubSpot/cms-react/tree/main/examples"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Examples
          </a>
          <a 
            href="https://github.hubspot.com/cms-react/"
            className="px-6 py-3 bg-white text-gray-700 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors font-medium"
          >
            Read the Docs
          </a>
        </div>
      </div>
    </div>
  );
}

const richTextFieldDefaultValue = `
  <div>
    <div>
      <span>
        Deploy to your theme by running <pre>npm run deploy</pre> from the root directory
      </span>
    </div>
  </div>
`;

export const fields = (
  <ModuleFields>
    <ImageField
      name="logo"
      label="Logo"
      default={{ src: logo, height: 100, alt: 'HubSpot logo' }}
      resizable={true}
    />
    <TextField
      name="headline"
      label="Headline"
      default="Getting Started with CMS React"
    />
    <RichTextField
      name="gettingStarted"
      label="Getting Started"
      default={richTextFieldDefaultValue}
    />
  </ModuleFields>
);

// Remove the css_assets from meta - we'll handle it differently
export const meta = {
  label: "Getting Started Module"
};