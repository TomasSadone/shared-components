import {
  AuthCodeInput,
  AuthCodeInputLabel,
  AuthCodeInputParragraph,
  ControlledCheckbox,
  ControlledDropdown,
  Input,
  RadioButton,
  Icon,
} from '../../';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const Forms = () => {
  const formMethods = useForm();
  const [result, setResult] = useState('');
  const handleOnChange = (res: string) => {
    setResult(res);
  };

  return (
    <div>
      <h1 style={{ margin: '50px 0' }}>Application Form Elements</h1>
      <FormProvider {...formMethods}>
        <div style={{ margin: '40px 0' }}>
          <ControlledDropdown
            containerStyle={{ marginBottom: 10 }}
            placeHolder="Select a value"
            name="dropdown"
            dropdownId="drop_down"
            options={[
              { label: 'label1', value: 'value1' },
              { label: 'label2', value: 'value2' },
              { label: 'label3', value: 'value3' },
            ]}
          />
          <Input
            name="default"
            placeholder="default input"
            label="some label"
            labelIcon={{ name: 'plus-circle' }}
            style={{ marginBottom: 10 }}
          />
          <Input
            name="red"
            color="red"
            placeholder="red input"
            label="some label"
            labelIcon={{ name: 'plus-circle' }}
            style={{ marginBottom: 10 }}
          />
          <Input
            name="blue"
            color="blue"
            placeholder="blue input"
            label="some label"
            labelIcon={{ name: 'plus-circle' }}
            style={{ marginBottom: 10 }}
          />
          <Input
            name="green"
            color="green"
            placeholder="green input"
            label="some label"
            labelIcon={{ name: 'plus-circle' }}
            style={{ marginBottom: 10 }}
          />
          <Input
            name="orange"
            color="orange"
            placeholder="orange input"
            label="some label"
            labelIcon={{ name: 'plus-circle' }}
            style={{ marginBottom: 10 }}
          />
          <Input name="input1" placeholder="some text" style={{ marginBottom: 10 }} />
          <Input
            name="input1"
            placeholder="some text"
            rightIcon={<Icon name="euro" size={18} />}
            wrapperStyle={{ marginBottom: 10 }}
          />
          <Input
            name="input1"
            placeholder="some text"
            leftIcon={<Icon name="search" size={18} />}
            wrapperStyle={{ marginBottom: 10 }}
          />
          <ControlledCheckbox name="checkbox" label="some text" />
          <ControlledCheckbox name="checkbox1" label="some text" checked />

          <RadioButton name="radio" label="some text" value="some text1" />
          <RadioButton name="radio" label="some text" value="some text2" />
          <RadioButton name="radio" label="some text" value="some text3" />

          <div style={{ marginTop: '1rem', display: 'grid', gap: '1rem' }}>
            <div>
              <AuthCodeInput placeholder="0" onChange={handleOnChange} />
            </div>
            <div>
              <AuthCodeInput size="md" placeholder="0" onChange={handleOnChange} />
            </div>
            <div>
              <AuthCodeInput size="lg" placeholder="0" onChange={handleOnChange} />
            </div>
            <div>
              <AuthCodeInput error placeholder="0" onChange={handleOnChange} />
            </div>
            <div>
              <AuthCodeInput success placeholder="0" onChange={handleOnChange} />
            </div>
            <div>
              <AuthCodeInput disabled placeholder="0" onChange={handleOnChange} />
            </div>

            <div>
              <AuthCodeInputLabel>Label</AuthCodeInputLabel>
              <AuthCodeInput error size="lg" placeholder="0" onChange={handleOnChange} />
              <AuthCodeInputParragraph>
                Non hai ricevuto un codice? Fare click per inviare nuovamente.
              </AuthCodeInputParragraph>
              <AuthCodeInputParragraph error>
                Il codice di accesso che hai inseritonon corrisponde a quello inviato al tuo
                telefono.
              </AuthCodeInputParragraph>
            </div>
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default Forms;
