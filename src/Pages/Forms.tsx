import {
  AuthCodeInput,
  AuthCodeInputLabel,
  AuthCodeInputParragraph,
  ControlledCheckbox,
  ControlledDropdown,
  Input,
  RadioButton,
  Icon,
  RadioGroupItem,
  TitleSubtitleLabel,
} from '../../';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Textarea } from '../../';
import { AppDropzone } from '../../';
import { Toggle } from '../../';
import { FileRejection, DropEvent } from 'react-dropzone';

const Forms = () => {
  const formMethods = useForm();
  const watchAll = formMethods.watch();

  const handleFiles = (
    acceptedFiles: File[],
    fileRejections: FileRejection[],
    event: DropEvent,
  ) => {
    console.log(acceptedFiles);
  };

  console.log(watchAll);

  const [selected, setSelected] = useState(false);
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

          <RadioGroupItem
            description="Invia una mail ai tuoi clienti per mostrare le offerte che hai pensato per loro"
            label="Comunicare offerte e sconti"
            name="scegliObiettivo"
            value="oferteESconti"
            //si le vas a pasar extra options le tenes que pasar el selectedvalue
            // selectedValue={watchAll.scegliObiettivo}

            extraOptions={[
              { label: 'extra1', name: 'extraOptions', value: 'extra1' },
              { label: 'extra2', name: 'extraOptions', value: 'extra2' },
              { label: 'extra3', name: 'extraOptions', value: 'extra3' },
            ]}
            moreInformation="Mas info"
          />
          <RadioGroupItem
            description="Invia una mail ai tuoi clienti per mostrare le offerte che hai pensato per loro"
            label="Comunicare offerte e sconti"
            name="scegliObiettivo"
            value="otro2"
            moreInformation="Mas info"
            moreInformationOnClick={(str) => console.log(str)}
          />
          <Textarea name="mytextarea" />
          <AppDropzone
            clickText="Click to look for files"
            acceptedFilesText="JPG, PNG, PDF"
            dropText="or drop them here"
            textWhenDropReject="File type not compatible"
            textWhenDropping="drop it like is hot"
            handleFiles={handleFiles}
          />
          <Toggle
            onClick={() => {
              setSelected(!selected);
            }}
            selected={selected}
          />
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
        <TitleSubtitleLabel
          title="Scegli le liste"
          subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Textarea name="mytextarea" />
        <ControlledDropdown
          dropdownId="mydropdown"
          name="abcdefg"
          options={[
            { label: 'opcion', value: 'opcion' },
            { label: 'opcion1', value: 'opcion1' },
            { label: 'opcion2', value: 'opcion2' },
          ]}
        />
        <AppDropzone
          clickText="Click para buscar archivos"
          acceptedFilesText="JPG, PNG, PDF"
          dropText="o arrastralos aqui"
          textWhenDropReject="No no dijo pipo"
          textWhenDropping="drop it like is hot"
          handleFiles={handleFiles}
        />
      </FormProvider>
      <Toggle
        onClick={() => {
          setSelected(!selected);
        }}
        selected={selected}
      />
    </div>
  );
};

export default Forms;
