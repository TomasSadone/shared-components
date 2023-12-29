# Shared components library

In this repo will live the components that will be shared between all the project.

## Documentation

The library build was guided by [this article](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma). The content/comments of it might help on a roadblock

# How to contribute

## To `lib`

### How to export components:

In `lib/main.ts` export every component that you want to make available for the consumer to use. The format to do so is the following:

```ts
export { Component } from './Component';
```

### Structure to add a component:

Inside `/lib` create a folder with yours component name, inside it, an `index.tsx` which does a named export of the component.

#### Second layer and beyond components

If there were to be more internal components that belong inside the main one, and that should not be used outside of it, create them under the main component's folder using the same structure recursively.

If that internal component it's only going to be consumed by the main one, then it should not be exported in `main.ts`. Now, if it must be used inside the main component, but the consumer needs to put it there, then do export it.

#### Group component

If you have to create components which belong to a same group, but neither is the main one, create a folder with the name of the group and internal subfolders which export the components, without the need to create an `index.ts` for the main one.

e.g:

```
/Form
    /RadioButton
        index.tsx
    /Checkbox
        index.tsx
    /Input
        index.tsx
    /Dropdown
        index.tsx
```

### Hooks, global styles, types, utils, constants, etc.

All of the mentioned above in the heading, are welcome in `/lib` under their respective directories.

###

### Third party dependencies:

If a component uses a third party dependencie, this must be added to `peerDependencies` in `package.json` and to `build.rollupOptions.external` in the config. object in `defineConfig` inside `vite.config.ts`

### Other Rules

- Never import something external to `/lib` in any file that lives inside it (except for third party libraries). It causes `/dist` to compile in unwanted manners

- All of these rules are applied recursively into all folders

### Icon component

If you want to add a new icon to the list of available svg icons to use within this component, you want to go to `/lib/constants/svgIcons.ts` and there add the key (name) paired with the value of the `"path"` field in your svg, If you happen to have many paths, add them in an array of objects like: `{path: string, fill: string}`. There are examples in the file.

## `src`

This is the presentation of the library. This is only used to create pages which display the compiled components.

### How to import the components:

First make sure you have runned `npm run build`, and that it was succesful.

Then, to import, you have to navigate to the root folder. That is it, if you have exported the component correctly, that should do it. This is because the `"main"` field in the `package.json` points to `"dist/main.js"`

## Usage/Examples

Here you are going to find some explanation/examples of how to use the library when installed using `npm i @aigotsrl/rc_shared_compoents_frontend`

### Form components

Many of the form components need to be wrapped in a `FormProvider` from `react-hook-form` somewhere up in the component three.

```javascript
const Component = () => {
  const formMethods = useForm();

  return <FormProvider {...formMethods}>// Forms...</FormProvider>;
};
```

The components that need to live inside a `FormProvider` are:

- `Input`
- `ControlledCheckbox`
- `ControlledDropdown`
- `RadioButton`

#### AuthCodeInput

```javascript
const ParentComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const handleOnChange = (res: string) => {
    setInputValue(res);
    //do something with your value
  };

  const [error, setError] = useState(false);
  const handleError = () => {
    //set your error
  };

  const [success, setSuccess] = useState(false);
  const handleSuccess = () => {
    //set your success
  };

  return (
    <>
      <AuthCodeInputLabel>Label</AuthCodeInputLabel>
      <AuthCodeInput
        success={success}
        error={error}
        size="lg"
        placeholder="0"
        onChange={handleOnChange}
      />
      <AuthCodeInputParragraph>
        Non hai ricevuto un codice? Fare click per inviare nuovamente.
      </AuthCodeInputParragraph>
      {error && (
        <AuthCodeInputParragraph error>
          Il codice di accesso che hai inseritonon corrisponde a quello inviato al tuo
          telefono.
        </AuthCodeInputParragraph>
      )}
    </>
  );
};
```

### Table component

```javascript
export const YourTable = () => (
  <Table>
    {/* any content you want in your header, if you want. e.g: */}
    <h2>This is my table</h2>
    <p>And I love it</p>
    {/* or anything more complex */}
    <TableContent>
      <thead>
        <TRow>
          {/* You should have as many TData here as inside your rows in tbody */}
          <TData location="head">Column title 1</TData>
          <TData location="head">Column title 2</TData>
          <TData location="head">Column title 3</TData>
          <TData location="head">Column title 4</TData>
        </TRow>
      </thead>
      <tbody>
        <TRow>
          <TData>{/* Any component you want */}</TData>
          <TData>{/* Any component you want */}</TData>
          <TData>{/* Any component you want */}</TData>
          <TData>{/* Any component you want */}</TData>
        </TRow>
      </tbody>
    </TableContent>
    {/* any content you want in your footer, same as in header, your pagination for example. */}
  </Table>
);
```
