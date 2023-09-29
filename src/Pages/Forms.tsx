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
import Textarea from 'components/Form/Textarea';
import Dropzone from 'components/Form/Dropzone/index';
import { FileRejection, DropEvent } from 'react-dropzone';
import Toggle from 'components/Form/Toggle';
import { useState } from 'react';

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
          <Dropzone
            clickText="Click para buscar archivos"
            acceptedFilesText="JPG, PNG, PDF"
            dropText="o arrastralos aqui"
            textWhenDropReject="No no dijo pipo"
            textWhenDropping="drop it like is hot"
            handleFiles={handleFiles}
          />
          <Toggle
            onClick={() => {
              setSelected(!selected);
            }}
            selected={selected}
          />
        </div>
      </FormProvider>
    </div>
  );
};

export default Forms;
