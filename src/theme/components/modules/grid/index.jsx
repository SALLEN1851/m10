import { ModuleFields, TextField } from '@hubspot/cms-components/fields';


export function Component({ fieldValues }) {
  return (

<div class="bg-white py-24 sm:py-32 dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div class="text-center">
        <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">{fieldValues.headline1}</h2>
        <p class="mt-4 text-lg/8 text-gray-600 dark:text-gray-300">{fieldValues.headline2}</p>
      </div>
      <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col bg-gray-400/5 p-8 dark:bg-white/5">
          <dt class="text-sm/6 font-semibold text-gray-600 dark:text-gray-300">{fieldValues.headline3}</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">8,000+</dd>
        </div>
        <div class="flex flex-col bg-gray-400/5 p-8 dark:bg-white/5">
          <dt class="text-sm/6 font-semibold text-gray-600 dark:text-gray-300">{fieldValues.headline4}</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">3%</dd>
        </div>
        <div class="flex flex-col bg-gray-400/5 p-8 dark:bg-white/5">
          <dt class="text-sm/6 font-semibold text-gray-600 dark:text-gray-300">{fieldValues.headline5}</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">99.9%</dd>
        </div>
        <div class="flex flex-col bg-gray-400/5 p-8 dark:bg-white/5">
          <dt class="text-sm/6 font-semibold text-gray-600 dark:text-gray-300">{fieldValues.headline6}</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">$70M</dd>
        </div>
      </dl>
    </div>
  </div>
</div>

  );
}

export const fields = (
  <ModuleFields>
    <TextField
      name="headline1"
      label="Headline"
      default="Placeholder React module"
    />
    <TextField
    name="headline2"
    label="headline2"
    default="your supporting text here"
    />
     <TextField
    name="headline3"
    label="headline3"
    default="your supporting text here"
    />
     <TextField
    name="headline4"
    label="headline4"
    default="your supporting text here"
    />
     <TextField
    name="headline5"
    label="headline5"
    default="your supporting text here"
    />
     <TextField
    name="headline6"
    label="headline6"
    default="your supporting text here"
    />
  </ModuleFields>
);


export const meta = {
  label: 'grid',
};