import { AppButton } from 'components/Button';
import IconButton from 'components/IconButton';

const Home = () => (
  <div>
    <h1 style={{ margin: '50px 0' }}>Application Buttons</h1>
    <div style={{ width: '80%', margin: 'auto' }} className="d-flex justify-content-between">
      <div>
        <h4>Primary</h4>
        <div className="pt-10 pb-10">
          <AppButton icon="plus-circle" title="Impostazioni generali" color="green" />
        </div>
        <div className="pt-10 pb-10">
          <AppButton title="Impostazioni generali" color="blue" />
        </div>
        <div className="pt-10 pb-10">
          <AppButton icon="plus-circle" title="Impostazioni generali" color="red" />
        </div>
        <div className="pt-10 pb-10">
          <AppButton title="Impostazioni generali" color="orange" />
        </div>
        <div className="pt-10 pb-10">
          <AppButton title="Impostazioni generali" color="green" isLoading />
        </div>
      </div>
      <div>
        <h4>Secondary</h4>
        <div className="pt-10 pb-10">
          <AppButton title="Impostazioni generali" color="green" secondary />
        </div>
        <div className="pt-10 pb-10">
          <AppButton icon="plus-circle" title="Impostazioni generali" color="blue" secondary />
        </div>
        <div className="pt-10 pb-10">
          <AppButton title="Impostazioni generali" color="red" secondary />
        </div>
        <div className="pt-10 pb-10">
          <AppButton
            icon="plus-circle"
            title="Impostazioni generali"
            color="orange"
            secondary
          />
        </div>
        <div className="pt-10 pb-10">
          <AppButton
            icon="plus-circle"
            title="Impostazioni generali"
            color="green"
            secondary
            isLoading
          />
        </div>
      </div>
      <div>
        <h4>Stroke</h4>
        <div className="pt-10 pb-10">
          <AppButton icon="plus-circle" title="Impostazioni generali" color="green" stroke />
        </div>
        <div className="pt-10 pb-10">
          <AppButton title="Impostazioni generali" color="blue" stroke />
        </div>
        <div className="pt-10 pb-10">
          <AppButton icon="plus-circle" title="Impostazioni generali" color="red" stroke />
        </div>
        <div className="pt-10 pb-10">
          <AppButton title="Impostazioni generali" color="orange" stroke />
        </div>
        <div className="pt-10 pb-10">
          <AppButton title="Impostazioni generali" color="orange" stroke isLoading />
        </div>
      </div>
      <div>
        <h4>Text</h4>
        <div className="pt-10 pb-10">
          <AppButton icon="plus-circle" title="Impostazioni generali" color="green" text />
        </div>
        <div className="pt-10 pb-10">
          <AppButton title="Impostazioni generali" color="blue" text />
        </div>
        <div className="pt-10 pb-10">
          <AppButton icon="plus-circle" title="Impostazioni generali" color="red" text />
        </div>
        <div className="pt-10 pb-10">
          <AppButton title="Impostazioni generali" color="orange" text />
        </div>
        <div className="pt-10 pb-10">
          <AppButton title="Impostazioni generali" color="orange" text isLoading />
        </div>
      </div>
      <div>
        <h4>Icon</h4>
        <div className="pt-10 pb-10">
          <IconButton icon="plus-circle" />
        </div>
        <div className="pt-10 pb-10">
          <IconButton icon="plus-circle" color="green" />
        </div>
        <div className="pt-10 pb-10">
          <IconButton icon="plus-circle" color="blue" />
        </div>
        <div className="pt-10 pb-10">
          <IconButton icon="plus-circle" color="red" />
        </div>
        <div className="pt-10 pb-10">
          <IconButton icon="plus-circle" color="orange" />
        </div>
        <div className="pt-10 pb-10">
          <IconButton icon="plus-circle" color="green" isLoading />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
