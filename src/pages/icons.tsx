import { FeaturedIcon, Icon } from '../../dist/main';

const Icons = () => (
  <div>
    <h1 style={{ margin: '50px 0' }}>Application Icons</h1>
    <h4>Normal Icons</h4>
    <div style={{ margin: '40px 0' }} className="d-flex justify-content-between">
      <Icon name="add" size={30} />
      <Icon name="chevron" size={30} />
      <Icon name="google" size={30} viewBox="0 0 24 24" />
      <Icon name="horn" size={30} viewBox="0 0 24 24" />
      <Icon name="linkedin" size={30} viewBox="0 0 48 48" />
      <Icon name="plus-circle" size={30} />
    </div>
    <h4>Featured Icons</h4>
    <div style={{ margin: '40px 0' }} className="d-flex justify-content-between">
      <FeaturedIcon name="add" color="blue" />
      <FeaturedIcon name="chevron" color="green" />
      <FeaturedIcon name="plus-circle" color="red" />
      <FeaturedIcon name="horn" color="orange" viewBox="0 0 24 24" />
    </div>
  </div>
);

export default Icons;
